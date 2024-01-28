function Heading({children,className}) {
    
    return (
        <div className="flex">
            <h1 className={`font-semibold text-[24px] ${className}`}>{children}</h1>
        </div>
    );
}

export default Heading;
