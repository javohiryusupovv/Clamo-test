import AccordionItem from './AccordionItem';
import { useTranslations } from 'next-intl';

export default function ExamplePage() {
    const t = useTranslations("RegulatorydocumentsPage")

    return (
        <div className='bg-white z-50 w-full'>
            <div className="space-y-4 pt-[96px] pb-[96px] bg-white container">
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
                        {t("pageTitle")}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 md:max-w-full max-w-2xl text-start">{t("pageDescription")}</p>
                </div>
                <AccordionItem
                    title={t("law1Title")}
                    content={t("law1Content")}
                    link="https://lex.uz/docs/-5511879"
                />
                <AccordionItem
                    title={t("law2Title")}
                    content={t("law2Content")}
                />
                <AccordionItem
                    title={t("law3Title")}
                    content={t("law3Content")}
                />
            </div>
        </div>
    );
}
