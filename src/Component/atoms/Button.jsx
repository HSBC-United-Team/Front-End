export function Button({ children, className }) {
    return (
        <button className={` ${className} absolute bottom-20 font-bold text-center rounded-xl text-white bg-green-600  md:bottom-8  px-10 py-3 w-[90%]`}>{children}</button>

    )
}