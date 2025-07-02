import { useLocale } from "next-intl";
import Link from "next/link";

export default function page() {
    const locale = useLocale()
  return (
    <div>
      <h4>⏳ Bu funksionallik tez orada ishga tushiriladi.</h4>
      <Link href={`https://cabinet.clamo.uz/`} target="_blank">Kirish</Link>
    </div>
  )
}
