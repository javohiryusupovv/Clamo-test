import KlinikalarReyesteri from "../license/_components/klinikalar"
import Firstpage from "./_components/firstpage"
import FAQSection from "./_components/questions"
import Secondpage from "./_components/secondpage"

export default function page() {
  return (
    <div>
      <Firstpage/>
      <Secondpage/>
      <KlinikalarReyesteri/>
      <FAQSection/>
      </div>
  )
}
