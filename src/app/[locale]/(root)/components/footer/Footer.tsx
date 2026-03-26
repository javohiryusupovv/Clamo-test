  "use client";

  import "./Footer.css";
  import Link from "next/link";
  import Contact from "../contact/Contact";
  import { useTranslations, useLocale } from "next-intl";
  import { useEffect } from "react";
  import { usePathname } from "next/navigation";
  import SharhLogo from "../../../../../../public/icons/sharhlogo.svg";

  export default function FooterLayout() {
    const t = useTranslations("FooterPage");
    const locale = useLocale();
    const menuItems = [
      { key: "about", href: `/${locale}/about` },
      { key: "regulatorydocuments", href: `/${locale}/regulatorydocuments` },
      { key: "center", href: `/${locale}/about` },
      { key: "license", href: `/${locale}/licensing` },
      { key: "accreditation", href: `/${locale}/accreditation` },
      {
        key: "fight_against_corruption",
        href: `/${locale}/fight-against-corruption`,
      },
    ];

    useEffect(() => {
      const loadAOS = async () => {
        const AOS = await import("aos");
        AOS.init({ duration: 1000 });
        AOS.refresh();
      };

      if (typeof window !== "undefined") {
        loadAOS();
      }
    }, [usePathname()]);

    return (
      <div className="md:pt-20 pt-8  bg-[#F6F9FC] p-4">
        <Contact />

        <div className="relative w-full sm:h-[500px] h-[900px] bg-[#F6F9FC] overflow-hidden">
          <div className="container relative z-[50]">
            <div className="block sm:flex gap-20 absolute top-0 left-0 py-28 sm:py-20 px-[10px] sm:px-0">
              <div>
                <div className="sm:w-[400px] mb-[76px]">
                  <article className="flex items-center gap-7 mb-5">
                    <img
                      src="/LogoClamo.svg"
                      alt="Clamo Logo"
                      width={100}
                      height={50}
                      className="w-44"
                    />
                    <img
                      src="/logo/TibbiyotVazirlik.svg"
                      alt="Tibbiyot Vazirligi logo"
                      width={100}
                      height={50}
                      className="w-14"
                    />
                  </article>
                  <p className="text-[12px] sm:text-[16px] font-vk text-[#3D445E] sm:w-auto w-full">
                    {t("footer_des")}
                  </p>
                </div>

                {/* Ijtimoiy tarmoqlar */}
                <div>
                  <p className="text-[#3D445E] font-vk text-[14px] mb-4 uppercase">
                    {t("ijtimoiy")}
                  </p>
                  <div className="flex items-center gap-4">
                    {/* 4 ta ijtimoiy ikonka */}

                    <Link
                      href={"https://instagram.com/clamo.uz"}
                      target="_blank"
                      className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>{" "}
                    </Link>
                    <Link
                      href={"https://t.me/CLAMO_uz"}
                      target="_blank"
                      className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                        viewBox="0 0 496 512"
                      >
                        <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                      </svg>
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/clamo-social-3a1454364/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      }
                      target="_blank"
                      className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>{" "}
                    </Link>
                    <Link
                      href={
                        "https://www.facebook.com/people/CLAMO-Rasmiy/61574003283120/?mibextid=wwXIfr&rdid=jD2A4C8aUmaFwdKS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15rQ6GTeNE%2F%3Fmibextid%3DwwXIfr"
                      }
                      target="_blank"
                      className="group hover:bg-[#0650C3] transition-all duration-200 p-[10px] cursor-pointer bg-[#0650C3]/[18%] rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 stroke-2 fill-[#0650C3] group-hover:fill-white transition-all duration-200"
                        viewBox="0 0 320 512"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>{" "}
                    </Link>
                  </div>
                </div>
              </div>

              {/* O‘ng qism */}
              <div className="sm:pt-0 pt-[20px]">
                <p className="text-[#3D445E] font-vk text-[18px] font-bold leading-[140%] mb-[12px]">
                  {t("bo'limlar")}
                </p>
                <ul className="flex flex-col gap-3">
                  {menuItems.map(({ key, href }, idx) => (
                    <li key={idx}>
                      <Link
                        href={href}
                        className="group flex items-center gap-1 hover:text-[#23B3FC] text-[#3D445E] text-[14px] font-medium transition-all duration-200 cursor-pointer"
                      >
                        <span className="w-[9px] h-[9px] rounded-full bg-[#23B3FC] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></span>
                        <span className="-translate-x-3 group-hover:translate-x-1 transition-all font-vk">
                          {t(`menu.${key}`)}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/${locale}/contacts`}
                      className="group flex items-center gap-1 hover:text-[#23B3FC] text-[#3D445E] text-[14px] font-medium transition-all duration-200 cursor-pointer"
                    >
                      <span className="w-[9px] h-[9px] rounded-full bg-[#23B3FC] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></span>
                      <span className="-translate-x-3 group-hover:translate-x-1 transition-all">
                        {t("bog'lanish")}
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-[24px] px-5 py-4 shadow-sm w-fit max-smm:mx-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      width="125"
                      height="32"
                      viewBox="0 0 125 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.000244141 7.99999C0.000244141 3.58172 3.58197 0 8.00024 0H24.0002C28.4185 0 32.0002 3.58172 32.0002 8V24C32.0002 28.4183 28.4185 32 24.0002 32H8.00024C3.58197 32 0.000244141 28.4183 0.000244141 24V7.99999Z"
                        fill="#4489F7"
                      />
                      <path
                        d="M12.0204 13.4864C11.9254 13.5511 11.8328 13.6181 11.7427 13.6873C11.6745 13.7233 11.6084 13.7649 11.5446 13.8123C10.2197 14.7969 9.08269 16.0443 8.18215 17.2368L6.84884 15.8925C5.389 14.4206 5.85895 12.9285 7.89872 12.5858L11.0884 12.0514C11.6183 11.9607 12.2582 11.4869 12.4982 10.9929L14.258 7.44418C15.2179 5.51861 16.7777 5.51861 17.7276 7.44418L19.4874 10.9929C19.7274 11.4869 20.3673 11.9607 20.9073 12.0514L24.0969 12.5858C26.1367 12.9285 26.6166 14.4206 25.1468 15.8925L22.6671 18.3927C22.2471 18.8161 22.0172 19.6327 22.1471 20.2175L22.8571 23.3125C23.417 25.7623 22.1271 26.71 19.9774 25.4296L17.3762 23.8771C17.561 23.7648 17.7156 23.6603 17.8401 23.5667C18.0697 23.4503 18.2945 23.3177 18.5133 23.1686C21.2166 21.3257 21.9546 17.6642 20.1616 14.9906C18.3686 12.3169 14.7237 11.6434 12.0204 13.4864Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3383 15.3939C12.401 15.3457 12.4654 15.2991 12.5315 15.254C14.4128 13.9715 16.9553 14.4491 18.2104 16.3206C19.4654 18.1922 18.9578 20.7491 17.0766 22.0316C16.9244 22.1353 16.7678 22.2276 16.608 22.3085C15.9597 22.7959 14.1372 23.7102 11.125 24.0846L13.6651 21.6843L6.65658 24.3035L11.923 18.3636L8.41193 20.2414C8.85097 19.2671 10.2233 16.951 12.2005 15.4808C12.2448 15.4478 12.2908 15.4189 12.3383 15.3939Z"
                        fill="white"
                      />
                      <path
                        d="M44.4026 28.0619C43.3031 28.0619 42.2373 27.9493 41.2051 27.7241C40.1954 27.4989 39.3315 27.1949 38.6135 26.8121L39.0511 22.7588C39.814 23.2317 40.6554 23.6145 41.5754 23.9072C42.4953 24.2 43.3592 24.3463 44.167 24.3463C44.9298 24.3463 45.5693 24.2112 46.0854 23.941C46.6015 23.6483 46.8595 23.2317 46.8595 22.6912C46.8595 22.2634 46.68 21.9369 46.321 21.7117C45.962 21.464 45.2776 21.16 44.2679 20.7997L43.3592 20.4619C42.3943 20.1016 41.609 19.7638 41.0032 19.4486C40.3974 19.1108 39.8476 18.6041 39.354 17.9286C38.8603 17.253 38.6135 16.3635 38.6135 15.2601C38.6135 13.5037 39.2642 12.1413 40.5656 11.173C41.8895 10.1822 43.606 9.68679 45.7152 9.68679C47.3756 9.68679 49.1258 10.0133 50.9657 10.6663L50.3262 14.6859C49.6755 14.3031 48.9351 13.9991 48.1048 13.7739C47.2971 13.5262 46.5342 13.4023 45.8162 13.4023C45.0757 13.4023 44.4811 13.5262 44.0323 13.7739C43.606 14.0216 43.3928 14.3819 43.3928 14.8548C43.3928 15.3052 43.5723 15.6429 43.9314 15.8681C44.2904 16.0933 44.8962 16.3523 45.7488 16.645C46.422 16.8927 46.8146 17.0391 46.9268 17.0841C47.8692 17.4669 48.6546 17.8385 49.2828 18.1988C49.9111 18.5591 50.4608 19.0995 50.932 19.8201C51.4032 20.5182 51.6388 21.4189 51.6388 22.5223C51.6388 24.3689 50.9769 25.7537 49.6531 26.677C48.3292 27.6003 46.5791 28.0619 44.4026 28.0619Z"
                        fill="#022F5E"
                      />
                      <path
                        d="M55.1644 2.89746H59.9101V12.693C60.6057 11.6572 61.4022 10.9028 62.2997 10.4299C63.1973 9.93449 64.2294 9.68679 65.3962 9.68679C67.2586 9.68679 68.717 10.2498 69.7716 11.3757C70.8262 12.4791 71.3535 14.0216 71.3535 16.0032V27.5552H66.6079V16.7463C66.6079 15.8456 66.3835 15.1475 65.9347 14.6521C65.4859 14.1342 64.8801 13.8752 64.1172 13.8752C63.287 13.8752 62.4905 14.168 61.7276 14.7535C60.9871 15.3164 60.3813 16.0708 59.9101 17.0166V27.5552H55.1644V2.89746Z"
                        fill="#022F5E"
                      />
                      <path
                        d="M80.7549 28.0619C78.9599 28.0619 77.535 27.2963 76.4804 25.765C75.4258 24.2337 74.8986 22.1508 74.8986 19.5161C74.8986 16.3185 75.7063 13.8865 77.3219 12.2201C78.9374 10.5312 81.2598 9.68679 84.2889 9.68679C85.9942 9.68679 87.9912 9.95701 90.2799 10.4975V27.5552H85.7698L85.8708 24.7854H85.7362C85.1528 25.8438 84.4347 26.6545 83.5821 27.2174C82.7519 27.7804 81.8095 28.0619 80.7549 28.0619ZM81.7646 23.9072C82.4602 23.9072 83.1446 23.5357 83.8177 22.7926C84.4908 22.0494 85.1191 21.0586 85.7025 19.8201V14.1455C84.9845 13.9428 84.2665 13.8415 83.5484 13.8415C82.2022 13.8415 81.1812 14.3031 80.4856 15.2263C79.8125 16.1496 79.4759 17.512 79.4759 19.3134C79.4759 20.7321 79.6779 21.858 80.0818 22.6912C80.4856 23.5019 81.0466 23.9072 81.7646 23.9072Z"
                        fill="#022F5E"
                      />
                      <path
                        d="M94.9046 10.1597H99.6502V12.997H99.9195C100.57 11.8486 101.21 11.0041 101.838 10.4637C102.489 9.92323 103.296 9.65301 104.261 9.65301C104.665 9.65301 105.002 9.69805 105.271 9.78812L104.766 14.9223C104.183 14.7647 103.712 14.6859 103.353 14.6859C102.836 14.6859 102.376 14.7872 101.973 14.9899C101.591 15.1926 101.243 15.4628 100.929 15.8006C100.638 16.1383 100.211 16.6563 99.6502 17.3543V27.5552H94.9046V10.1597Z"
                        fill="#022F5E"
                      />
                      <path
                        d="M108.247 2.89746H112.992V12.693C113.688 11.6572 114.485 10.9028 115.382 10.4299C116.28 9.93449 117.312 9.68679 118.479 9.68679C120.341 9.68679 121.799 10.2498 122.854 11.3757C123.909 12.4791 124.436 14.0216 124.436 16.0032V27.5552H119.69V16.7463C119.69 15.8456 119.466 15.1475 119.017 14.6521C118.568 14.1342 117.962 13.8752 117.2 13.8752C116.369 13.8752 115.573 14.168 114.81 14.7535C114.069 15.3164 113.464 16.0708 112.992 17.0166V27.5552H108.247V2.89746Z"
                        fill="#022F5E"
                      />
                    </svg>
                  </div>

                  {/* Yulduzchalar (5 ta yashil kvadrat) */}
                  <div className="flex gap-1.5 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        width="27"
                        height="26"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 0H2.5C1.39543 0 0.5 0.895431 0.5 2V14C0.5 15.1046 1.39543 16 2.5 16H14.5C15.6046 16 16.5 15.1046 16.5 14V2C16.5 0.895431 15.6046 0 14.5 0Z"
                          fill="#00B67A"
                        />
                        <path
                          d="M9.30727 4.03841L10.1284 5.68058C10.2403 5.90917 10.5389 6.12844 10.7908 6.17042L12.279 6.41768C13.2307 6.5763 13.4547 7.26676 12.7689 7.94788L11.6119 9.10486C11.416 9.3008 11.3087 9.67868 11.3693 9.94927L11.7005 11.3815C11.9618 12.5151 11.36 12.9537 10.3569 12.3612L8.96204 11.5354C8.71012 11.3862 8.29492 11.3862 8.03833 11.5354L6.64342 12.3612C5.64506 12.9537 5.03858 12.5105 5.29983 11.3815L5.63107 9.94927C5.69171 9.67868 5.58441 9.3008 5.38847 9.10486L4.2315 7.94788C3.55037 7.26676 3.76964 6.5763 4.72135 6.41768L6.20956 6.17042C6.45681 6.12844 6.75539 5.90917 6.86735 5.68058L7.68843 4.03841C8.1363 3.14735 8.86407 3.14735 9.30727 4.03841Z"
                          fill="white"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Reyting matni */}
                  <div className="text-[#6c757d] text-lg font-medium font-vk flex items-center gap-2">
                    <span>Рейтинг</span>
                    <span className="text-[#3D445E] font-bold">4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer background */}
          <div className="footer-shadow hidden lg:block">
            <img
              className="absolute bottom-2 w-[700px] right-0"
              src="/assets/images/twoCircle.png"
              alt="bg-Circle"
            />
            <div className="container relative">
              <img
                className="absolute top-8 right-6 w-[400px]"
                src="/flag/groupFlag.png"
                alt="Flag Clamo"
                width={400}
                height={300}
                data-aos="fade-up"
              />
            </div>
          </div>

          {/* Footer bottom */}
          <div className="absolute z-[12] bottom-0 w-full pt-5">
            <div className="container flex justify-start md:justify-between items-center max-sm:block max-sm:mt-4">
              <p className="text-[#3D445E]/[60%] lg:w-[full] sm:w-[250px] text-[11px] sm:text-[14px] font-vk">
                &copy; {new Date().getFullYear()} – “Tibbiyot tashkilotlarini
                litsenziyalash va akkreditatsiyalash markazi” DM
              </p>
              <div className="group flex items-center gap-2">
                <span className="text-[#3D445E] text-[12px] font-semibold sm:text-[15px]">
                  {t("developed")}
                </span>
                <Link
                  href={"https://iq-tech.uz/"}
                  target="_blank"
                  className="group flex items-center transition-all duration-300"
                >
                  <img
                    src="/logo/devLogo.svg"
                    alt="IQ Logo"
                    className="max-ms:w-[16px] w-[18px] h-[26px]"
                    width={35}
                    height={35}
                  />
                  <span className="max-ms:translate-x-1 ms:translate-x-[20px] max-ms:text-[16px] ms:opacity-0 ms:group-hover:translate-x-[8px] ms:group-hover:opacity-[1] transition-all duration-300 text-[18px] font-bold">
                    IQ Tech
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
