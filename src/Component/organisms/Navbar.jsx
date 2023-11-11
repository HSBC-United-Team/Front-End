
import { Ulnavbar } from "../molecules/UlNavbar"
import { IconLogo, IconMap } from "../../../public/icon"
import { Logo } from "../atoms/Logo"

export function Navbar({ children }) {

    return (
        <nav
            className="flex justify-between mx-auto md:mx-6 md:my-12 border-b-2 md:border-b-0"
        >
            <Logo place={`Dhaka,Banassre`}/>

            {/* Judul halaman  */}
            <div className="container items-center m-auto">
                <h1 className="text-center text-2xl font-bold p-5">{children}</h1>
            </div>
            <div
                className="fixed bottom-0 right-0 left-0 bg-white md:static w-[100%] m-auto"
            >
                <Ulnavbar />
            </div>
        </nav>
    )
}