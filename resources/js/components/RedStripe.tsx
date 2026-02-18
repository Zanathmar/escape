export default function RedStripe() {
    return (
        <div className="relative overflow-hidden bg-linear-to-r from-[#741E20] to-[#DA393C] py-2 md:py-2">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Left Icons */}
                    <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
                        <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/Group.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="hidden h-16 w-16 items-center justify-center md:flex md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/20 26.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="hidden h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:flex lg:h-20 lg:w-20">
                            <img
                                src="/icons/Vector.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="text-center">
                        <h2 className="text-base font-normal text-white md:text-lg lg:text-xl">
                            <span className="font-bold">ESCAPE 2026:</span>
                            <br />
                            LATERAL THINKING
                        </h2>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
                        <div className="hidden h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:flex lg:h-20 lg:w-20">
                            <img
                                src="/icons/Vector.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="hidden h-16 w-16 items-center justify-center md:flex md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/ESC.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <img
                                src="/icons/Group.png"
                                alt=""
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
}