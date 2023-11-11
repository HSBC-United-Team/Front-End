function BtnGreen({onClick, children}){
    return (

        <div
            className="fixed bottom-20 flex rounded-md bg-green-600 px-10 py-3 w-[90%] text-white left-1/2 -translate-x-1/2 md:bottom-8"
            id="checkout-section"
            onclick={onClick}
        >
            <button class="flex-grow text-center">{children}</button>
        </div>
    )
}
export default BtnGreen
