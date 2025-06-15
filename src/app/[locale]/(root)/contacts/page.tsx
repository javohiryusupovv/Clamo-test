import Map from "./_components/Map";
import SochealMedia from "./_components/Sochealmedia";

export default function Contacts() {
  return (
    <div className="container">
      <h1 className="font-bold lg:text-[48px] md:text-[44px] text-[20px] text-[#3D445E]">
        Bog&apos;lanish
      </h1>
      <p className="font-medium sm:text-[20px] text-[14px] text-[#012548CC] md:mb-[40px] mb-[20px]">Bizning ofis manzilimizdagi aloqa ma&apos;lumotlarimiz</p>
      <Map />
      <SochealMedia/>
    </div>
  );
}