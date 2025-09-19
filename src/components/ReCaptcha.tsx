'use client';

import { useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  error?: string;
}

export default function ReCaptchaComponent({ onChange, error }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    // Reset reCAPTCHA when component mounts
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, []);

  const handleChange = (token: string | null) => {
    onChange(token);
  };

  const handleExpired = () => {
    onChange(null);
  };

  const handleError = () => {
    onChange(null);
  };

  return (
    <div className="w-full">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={handleChange}
        onExpired={handleExpired}
        onErrored={handleError}
        theme="light"
        size="normal"
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
