import Navbar from "./components/Navbar"
import FooterLayout from "./components/footer/Footer"



export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <FooterLayout />
        </>
    )
}
