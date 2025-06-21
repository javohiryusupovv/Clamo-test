import Image from 'next/image';
import Folder from "@/assets/images/Folder.png"
import WhiteDown from "@/assets/icons/whiteDown.png";
import "../../../../styles/documents.css"
import NormativeAccordion from './_components/NormativeAccordion';
import GovernmentDecisionsPage from './_components/government-decisions';
import CenterRegulations from './_components/CenterRegulations';
import { useTranslations } from 'next-intl';

export default function NormativeDocuments() {
    const t = useTranslations("RegulatorydocumentsPage")
    return (
        <div className="bg-white w-full">
            <div className='min-h-[40vh] lg:min-h-[70vh] md:min-h-[70vh] container'>
                <section className="internationalparent flex items-center justify-between relative max-h-[50vh] lg:max-h-[50vh]">
                    {/* Text qismi */}
                    <div className="z-9999999 max-w-full md:max-w-xl space-y-4 mt-10 md:mt-[150px] px-4 md:px-0">
                        <span className="text-xs bg-blue-100 text-blue-700 py-1 px-3 rounded-[6px]">
                           {t("normativeSectionTag")}
                        </span>
                        <h2 className="w-full md:w-[500px] h-auto md:h-[78px] font-[600] text-[24px] md:text-[32px] leading-[120%] md:leading-[100%] text-[#1B1B1B]">
                            {t("normativeSectionTitle")}
                        </h2>
                        <p className="text-gray-600 text-[16px] md:text-[20px] leading-[140%]">
                            {t("normativeSectionDesc")}
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <button className="group hover:bg-[#23B3FC]/[80%] transition-all duration-200 w-full md:w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%]">
                                {t("servicesBtn")} <Image src={WhiteDown} alt="down strelka" className="md:group-hover:translate-x-2 transition-all duration-200" />
                            </button>
                            <button className="group hover:bg-[#23B3FC]/[80%] transition-all duration-200 w-full md:w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%]">
                                {t("contactBtn")} <Image src={WhiteDown} alt="down strelka" className="md:group-hover:translate-x-2 transition-all duration-200"/>
                            </button>
                        </div>
                    </div>
                    {/* Rasm qismi */}
                    <div className="absolute right-0 -top-24 -z-10 hidden xl:block">
                        <div className="relative">
                            <Image
                                src={Folder} // Rasmni public papkaga joylashtiring
                                alt="Normativ hujjatlar"
                                width={2000}
                                height={1381}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <NormativeAccordion />
            <GovernmentDecisionsPage />
            <CenterRegulations />
        </div>
    );
}
