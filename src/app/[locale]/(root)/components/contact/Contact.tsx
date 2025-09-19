'use client';

import { useTranslations } from 'next-intl';
import { LoaderCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFormSchema } from '@/schemas/formSchema';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import ReCaptchaComponent from '@/components/ReCaptcha';

export default function Contact() {
  const t = useTranslations('ContactPage');
  const zod = useTranslations('ZodForm');
  const formSchema = getFormSchema(zod);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setValue('recaptcha', token || '');
  };

  const handleSubmitted = async (data: FormData) => {
    if (!recaptchaToken) {
      toast.error(zod('recaptcha_required') || 'reCAPTCHA tekshiruvini bajaring');
      return;
    }

    setIsLoading(true);

    const templateParams = {
      full_name: data.names,
      industry: data.tashkilot,
      phone_number: `+998${data.phoneNumber.replace(/\s/g, '')}`,
      to_email: 'yusupovjavoxir11@gmail.com',
    };

    const telegramMessage = `
📩 Yangi xabar

👤 Full Name: ${data.names}
🏢 Tashkilot: ${data.tashkilot}
📞 Phone: +998${data.phoneNumber.replace(/\s/g, '')}
`;

    const submitPromise = Promise.all([
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      ),
      fetch(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }),
    ]);

    toast
      .promise(submitPromise, {
        pending: zod('notifsending') || "Jo'natilmoqda...",
        success: zod('succesNotif') || "Muvaffaqiyatli jo'natildi!",
        error:
          zod('errorNotif') ||
          "Xatolik yuz berdi, iltimos qayta urinib ko'ring",
      })
      .then(() => {
        reset();
        setRecaptchaToken(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Submission error:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! });

    const timeout = setTimeout(() => {
      if (Object.keys(errors).length > 0) {
        clearErrors();
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [errors, clearErrors]);

  return (
    <div className="md:pb-8">
      <div className="container relative left-0 z-[40] max-lg:p-4 flex flex-col md:flex-row items-center justify-between w-full bg-[#0653C9] lg:rounded-[36px] rounded-2xl">
        {/* Contact Info */}
        <div className="w-full lg:w-[450px] md:pl-6 md:pr-6 py-10 lg:pl-14 lg:py-14">
          <h6 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white mb-2 font-vk">
            {t('contactTitle')}
          </h6>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-white text-opacity-[60%] mb-6 lg:mb-9 font-vk">
            {t('contactDescription')}
          </p>

          <div className="flex flex-col gap-3">
            {/* Location */}
            <Link
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.303946%2C41.318330&mode=whatshere&whatshere%5Bpoint%5D=69.303883%2C41.318303&whatshere%5Bzoom%5D=17&z=16"
              aria-label="Location"
              target="_blank"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer"
            >
              <article className="bg-white p-3 inline-flex justify-center items-center rounded-lg">
                <img
                  className="w-5 h-4"
                  src="/icons/location.svg"
                  alt="Location"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  {t('addressLabel')}
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  {t('address')}
                </p>
              </article>
            </Link>

            {/* Phone */}
            <a
              href="tel:+998712007007"
              aria-label="Phone number"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer"
            >
              <article className="bg-white p-3 inline-flex items-center justify-center rounded-lg">
                <img
                  className="w-5 h-5"
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal font-vk text-opacity-[60%] text-white">
                  {t('phonee')}
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium font-vk text-white line-clamp-1">
                  +998 (71) 200 70 07
                </p>
              </article>
            </a>

            {/* Email */}
            <a
              href="mailto:info@clamo.uz"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer"
            >
              <article className="bg-white p-3 inline-flex rounded-lg">
                <img
                  className="w-5 h-4"
                  src="/icons/email.svg"
                  alt="Email"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal font-vk text-opacity-[60%] text-white">
                  {t('emailLabel')}
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium font-vk text-white line-clamp-1">
                  info@clamo.uz
                </p>
              </article>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-6 px-4 sm:px-8 lg:mt-0 border border-gray-200 w-full sm:w-[500px] lg:absolute lg:right-16 h-auto lg:h-[600px] bg-white lg:rounded-[36px] rounded-2xl">
          <article className="mb-[26px]">
            <h5 className="text-[24px] sm:text-[28px] font-vk lg:text-[32px] font-bold leading-[120%] text-[#3D445E] mb-3">
              {t('formTitle')}
            </h5>
            <p className="text-[#838CAF] text-[14px] font-vk sm:text-[15px] lg:text-[16px] font-normal leading-[130%]">
              {t('formSubtitle')}
            </p>
          </article>

          <form onSubmit={handleSubmit(handleSubmitted)} noValidate>
            {/* Full Name */}
            <article className="w-full mb-6">
              <label
                htmlFor="names"
                className="inline-flex mb-2 font-vk text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                {t('fullName')}
              </label>
              <input
                id="names"
                {...register('names')}
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[16px] outline-none border border-transparent focus:border-[#1a60cd]"
                placeholder={t('enterFullName')}
              />
              {errors.names && (
                <p className="text-red-500 text-sm">{errors.names.message}</p>
              )}
            </article>

            {/* Organization */}
            <article className="w-full mb-6">
              <label
                htmlFor="tashkilot"
                className="inline-flex mb-2 font-vk text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                {t('organization')}
              </label>
              <input
                id="tashkilot"
                {...register('tashkilot')}
                type="text"
                className="w-full bg-[#F7F7F8] px-3 h-10 rounded-lg text-[16px] outline-none border border-transparent focus:border-[#1a60cd]"
                placeholder={t('enterOrganization')}
              />
              {errors.tashkilot && (
                <p className="text-red-500 text-sm">{errors.tashkilot.message}</p>
              )}
            </article>

            {/* Phone Number */}
            <article className="w-full mb-6">
              <label
                htmlFor="phoneNumber"
                className="inline-flex mb-2 font-vk text-[14px] sm:text-[16px] font-medium text-[#3D445E]"
              >
                {t('phonee')}
              </label>
              <div className="w-full bg-[#F7F7F8] flex gap-2 px-3 h-10 rounded-lg border border-transparent focus-within:border-[#1a60cd]">
                <article className="flex items-center gap-1">
                  <img
                    src="/icons/Flags.svg"
                    className="w-6 sm:w-9"
                    alt="Flag Icons"
                    width={50}
                    height={50}
                  />
                  <span className="text-[16px]">+998</span>
                </article>
                <input
                  id="phoneNumber"
                  {...register('phoneNumber')}
                  type="text"
                  maxLength={12}
                  onInput={(e) => {
                    const value = e.currentTarget.value
                      .replace(/\D/g, '')
                      .slice(0, 9);
                    let formatted = '';
                    if (value.length > 0) formatted += value.slice(0, 2);
                    if (value.length > 2) formatted += ' ' + value.slice(2, 5);
                    if (value.length > 5) formatted += ' ' + value.slice(5, 7);
                    if (value.length > 7) formatted += ' ' + value.slice(7, 9);
                    e.currentTarget.value = formatted;
                  }}
                  className="w-full outline-none bg-[#F7F7F8] text-[16px]"
                  placeholder="99 123 45 67"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
              )}
            </article>

            {/* reCAPTCHA */}
            <article className="w-full mb-6">
              <ReCaptchaComponent
                onChange={handleRecaptchaChange}
                error={errors.recaptcha?.message}
              />
            </article>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`group flex items-center gap-1 text-[14px] font-medium text-white px-6 py-[10px] rounded-lg bg-[#0653C9] hover:bg-[#0761e9] transition-all duration-300 ${
                  isLoading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="w-4 h-4 animate-spin" />
                    Jo&apos;natilmoqda...
                  </>
                ) : (
                  <>
                    {t('send')}
                    <img
                      className="transition-all duration-300 group-hover:rotate-[43deg]"
                      src="/icons/submiticons.svg"
                      alt="Send Icon"
                      width={20}
                      height={20}
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
