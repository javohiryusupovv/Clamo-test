import { Suspense } from "react"
import Loading from "@/component/Loading"
import FooterLayout from "./components/footer/Footer"
// import Navbar from "./components/Navbar/Navbar.server"
import NavbarClient from "./components/Navbar/Navbar"



export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <NavbarClient/>
            <Suspense fallback={<Loading/>}>
                <main className="pt-[100px]">{children}</main>
                <FooterLayout />
            </Suspense>

        </>
    )
}
