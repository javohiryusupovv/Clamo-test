'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  error?: string;
}

export default function ReCaptchaComponent({ onChange, error }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.error('reCAPTCHA site key is not configured');
    return (
      <div className="w-full p-4 border border-red-300 rounded-lg bg-red-50">
        <p className="text-red-600 text-sm">
          reCAPTCHA is not configured. Please check your environment variables.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={onChange}
        onErrored={() => {
          // reCAPTCHA error occurred
        }}
        onExpired={() => {
          onChange(null);
        }}
        theme="light"
        size="normal"
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
