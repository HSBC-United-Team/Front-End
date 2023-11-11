function Logo({className}) {
    return (
        <div
            id="logo"
            className={`${className} mt-12 md:flex md:justify-center md:items-center md:gap-3 md:mx-auto md:my-auto md:w-[20%]`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={27}
                height={32}
                viewBox="0 0 27 32"
                fill="none"
                className="m-auto md:m-1"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5275 2.68899C18.6597 1.5079 17.8223 0.441392 16.6413 0.30918C15.4602 0.168154 14.3937 1.01431 14.2614 2.1954C14.1028 3.54397 14.3231 5.15695 14.6052 6.81401C15.3896 7.05199 16.1477 7.39574 16.8528 7.80119C17.6108 6.01192 18.3512 4.24028 18.5275 2.68899ZM26.8216 7.8717C26.3544 6.77875 25.0852 6.28516 23.9922 6.75231C22.5555 7.37811 21.0659 8.60328 19.5675 9.8637C20.1317 10.419 20.6605 11.0448 21.11 11.7235C22.8111 11.5119 24.4418 11.2563 25.7022 10.7099C26.7951 10.2251 27.2975 8.95584 26.8216 7.8717ZM23.199 2.10726C22.247 1.40213 20.8985 1.59604 20.1933 2.54797C19.118 3.99349 18.3953 6.15295 17.6108 8.25952C17.8752 8.43581 18.122 8.61209 18.36 8.79719C18.5363 8.93821 18.7214 9.08805 18.9065 9.23789C20.7046 7.88052 22.5732 6.5584 23.6485 5.11288C24.3536 4.16095 24.1509 2.81239 23.199 2.10726Z"
                    fill="#53B175"
                />
                <path
                    d="M19.109 19.3653C18.4479 20.0793 17.7428 20.7403 16.9936 21.3838C15.9447 22.2916 14.8782 23.173 13.7941 24.0192C12.6306 23.3052 11.7933 22.9439 11.6522 23.129C11.5288 23.2964 12.0136 23.9134 12.8862 24.7155C9.95992 26.8926 6.86616 28.8141 3.54323 30.3918C3.0232 30.6386 2.47672 30.8149 1.93906 31.0088C1.79804 31.0617 1.6482 31.0617 1.5865 31.0705C0.74034 31.1674 0.484731 30.9383 0.519987 30.1626C0.625757 27.7476 1.37496 25.4823 2.1506 23.2259C2.36214 22.6089 2.58249 21.9919 2.81166 21.3749C3.98394 22.0889 4.82128 22.4591 4.96231 22.274C5.11215 22.0713 4.40702 21.2604 3.22593 20.2467C4.07208 18.0608 5.01519 15.9102 6.12577 13.8477C8.34694 15.4959 10.3213 16.5801 10.5417 16.2804C10.762 15.9807 9.13139 14.3853 6.88379 12.7195L6.78683 12.6489C7.17466 11.9879 7.58011 11.3268 8.012 10.6834C8.54966 9.8725 9.21072 9.13211 9.86297 8.40935C10.7356 7.44861 11.8638 7.12249 13.1242 7.40454C17.1611 8.30358 19.964 10.6217 21.2861 14.5969C21.5505 15.4078 21.3125 16.201 20.8983 16.9326C20.6162 17.4262 20.3077 17.8934 19.964 18.3341C17.8309 16.774 15.98 15.7692 15.7684 16.0512C15.5657 16.3333 17.0377 17.7876 19.109 19.3653Z"
                    fill="#F3603F"
                />
            </svg>
            <div className="flex gap-3 justify-center items-center md:gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={19}
                    viewBox="0 0 16 19"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0204 1.30752C10.1053 0.912343 9.12029 0.704376 8.12349 0.69588C7.11999 0.680341 6.12382 0.869165 5.19562 1.25086C4.26741 1.63255 3.42658 2.19913 2.7243 2.91611C1.29841 4.36011 0.491346 6.30291 0.474387 8.3322C0.45743 10.3615 1.23192 12.3175 2.63347 13.7851L7.2354 18.5485C7.32802 18.6457 7.4391 18.7235 7.56214 18.7772C7.68517 18.8309 7.81769 18.8595 7.95193 18.8614C8.08598 18.8644 8.21914 18.839 8.34265 18.7868C8.46616 18.7346 8.5772 18.6569 8.66846 18.5586L13.3511 13.8659C14.7784 12.4232 15.5873 10.4811 15.6061 8.45183C15.625 6.42254 14.8523 4.46578 13.452 2.99685C12.7624 2.2771 11.9356 1.7027 11.0204 1.30752ZM7.96174 11.0055C9.31078 11.0055 10.4044 9.91191 10.4044 8.56287C10.4044 7.21383 9.31078 6.12022 7.96174 6.12022C6.6127 6.12022 5.51909 7.21383 5.51909 8.56287C5.51909 9.91191 6.6127 11.0055 7.96174 11.0055Z"
                        fill="#4C4F4D"
                    />
                </svg>
                <p className="text-[#4C4F4D] font-semibold">Dhaka, Banassre</p>
            </div>
        </div>
    );
}

export default Logo;
