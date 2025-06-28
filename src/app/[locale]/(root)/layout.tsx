import { Suspense } from "react"
import Navbar from "./components/Navbar"
import Loading from "@/component/Loading"
import FooterLayout from "./components/footer/Footer"



export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading/>}>
                <main>{children}</main>
                <FooterLayout />
            </Suspense>

        </>
    )
}
