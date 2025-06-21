import { Suspense } from "react"
import Navbar from "./components/Navbar"
import FooterLayout from "./components/footer/Footer"
import Loading from "@/component/Loading"



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
