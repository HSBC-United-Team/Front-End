import { IconLogo, IconMap } from "../../../public/icon";

export function Logo({place}){
    return(
        <div className="hidden md:flex items-center gap-x-3">
                <IconLogo />
                <IconMap />

                <p className="text-[#4C4F4D] font-semibold">{place}</p>
            </div>
    )
}