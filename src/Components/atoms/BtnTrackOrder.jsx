const BtnTrackOrder = ({src, children,onClick}) => {
    return (
        <button className="flex justify-center items-center flex-col hover:scale-105 " onClick={onClick}>
            <div className="w-12 h-12 rounded-full flex justify-center items-center border border-black bg-white">
                <img src={src} className="w-8 h-8" alt="" />
            </div>
            <p>{children}</p>
        </button>
    )
}
export default BtnTrackOrder