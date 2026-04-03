import { Suspense } from "react"
import Loading from "@/component/Loading"
import FooterLayout from "./components/footer/Footer"
// import Navbar from "./components/Navbar/Navbar.server"
import NavbarClient from "./components/Navbar/Navbar"
import { getSharhCount } from "@/lib/getSharhCount"
import { getCompany } from "@/lib/getCompany"


export default async function  RootLayout({ children }: { children: React.ReactNode }) {
    const sharhCount = await getSharhCount()
    const companyData = await getCompany()
    const company = companyData?.[0] || null

    return (
        <>
            <NavbarClient/>
            <Suspense fallback={<Loading/>}>
                <main className="pt-[100px]">{children}</main>
                <FooterLayout sharh={sharhCount} company={company} />
            </Suspense>

        </>
    )
}
