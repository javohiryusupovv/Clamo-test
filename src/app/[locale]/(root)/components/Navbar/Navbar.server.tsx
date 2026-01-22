// components/navbar/Navbar.server.tsx
import { getAccreditation } from "@/lib/getAccredation";
import NavbarClient from "./Navbar";
import { AccreditationType } from "@/types/type";

export default async function Navbar() {
  const accreditationPages: AccreditationType[] = await getAccreditation();

  return <NavbarClient accreditationPages={accreditationPages} />;
}
