export default function InfiniteScroll({
    imageSrc,
    imageAlt = 'escape',
    gradientFrom = '#741E20',
    gradientTo = '#DA393C',
}: {
    imageSrc: string;
    imageAlt?: string;
    gradientFrom?: string;
    gradientTo?: string;
}) {
    return (
        <div
            className="relative overflow-hidden py-5"
            style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            }}
        >
            <div className="animate-scroll-seamless flex">
                {/* First set */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`set1-${i}`}
                        className="mx-10 inline-flex shrink-0 items-center"
                    >
                        <span className="block w-36 sm:w-48 lg:w-50">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-auto w-full"
                            />
                        </span>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`set2-${i}`}
                        className="mx-10 inline-flex shrink-0 items-center"
                    >
                        <span className="block w-36 sm:w-48 lg:w-50">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-auto w-full"
                            />
                        </span>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes scroll-seamless {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll-seamless {
                    animation: scroll-seamless 30s linear infinite;
                }

                .animate-scroll-seamless:hover {
                    animation-play-state: paused;
                }
                
                .overflow-wrap-anywhere {
                    overflow-wrap: anywhere;
                }
            `}</style>
        </div>
        
    );
}