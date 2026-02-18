const ITEM_SIZE = 200;
const GAP = 12;

const imageRectangle = [
    {
        name: '',
        image: '/images/rectangle4.png',
    },
    {
        name: '2',
        image: '/images/rectangle5.png',
    },
    {
        name: '3',
        image: '/images/rectangle6.png',
    },
    {
        name: '3',
        image: '/images/rectangle7.png',
    },
    {
        name: '4',
        image: '/images/rectangle8.png',
    },
];

const SET_WIDTH = imageRectangle.length * ITEM_SIZE + imageRectangle.length * GAP;

function InfiniteScrollGallery() {
    const scrollItems = [...imageRectangle, ...imageRectangle, ...imageRectangle];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Scrolling track — starts at -SET_WIDTH and moves right to 0 */}
            <div
                className="scroll-track flex gap-3 py-3"
                style={{ width: 'max-content' }}
            >
                {scrollItems.map((member, index) => (
                    <div
                        key={`${member.name}-${index}`}
                        className="relative shrink-0 overflow-hidden rounded-xl"
                        style={{ width: `${ITEM_SIZE}px`, height: `${ITEM_SIZE}px` }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-full object-cover"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes scrollRight {
                    0%   { transform: translateX(-${SET_WIDTH}px); }
                    100% { transform: translateX(0px); }
                }

                .scroll-track {
                    animation: scrollRight 20s linear infinite;
                }

                .scroll-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative bg-black">
            {/* bg */}
            <div className="absolute inset-0 z-0 bg-[url('/images/mobile_hero.jpeg')] bg-contain bg-top-left bg-no-repeat md:bg-[url('/images/hero.jpeg')]" />

            {/* content hero */}
            <div className="relative mx-auto flex max-w-7xl flex-col">
                <div className="flex w-full flex-col md:flex-row">
                    <div className="aspect-2/3 md:aspect-auto w-full h-auto flex-1"></div>
                    <div className="flex h-fit flex-1 items-center justify-center px-4 py-8 sm:px-8 md:px-12">
                        <div className="hero-card h-fit w-full rounded-4xl p-4 backdrop-blur-[100px] sm:w-4/5 sm:p-5 md:w-3/4 md:p-6">
                            <img
                                src="/images/mksr.png"
                                alt=""
                                className="w-full"
                            />
                            <div className="mt-4 flex flex-col gap-3 md:mt-6 md:gap-4">
                                <h2 className="text-3xl font-bold sm:text-4xl md:text-4xl">
                                    BALAI MANUNGGAL
                                </h2>
                                <p className="text-sm text-gray-300 sm:text-base">
                                    Jl. Jend. Sudirman, Sawerigading, Kec.
                                    Ujung Pandang, Kota Makassar, Sulawesi
                                    Selatan 90115
                                </p>

                                <ul className="**:flex **:items-center **:gap-2">
                                    <li className="text-sm sm:text-base md:text-lg">
                                        <div className="size-3 bg-white sm:size-4" />{' '}
                                        3 May 2026
                                    </li>
                                    <li className="text-sm sm:text-base md:text-lg">
                                        <div className="size-3 bg-white sm:size-4" />{' '}
                                        13.00 - 17.00 WITA
                                    </li>
                                    <li className="text-sm sm:text-base md:text-lg">
                                        <div className="size-3 bg-white sm:size-4" />{' '}
                                        1000+ capacity
                                    </li>
                                </ul>

                                <a
                                    href="#"
                                    className="z-10 w-fit rounded-lg bg-[#DA393C] px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#b52b2d] hover:shadow-2xl active:scale-95 sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3"
                                >
                                    Check Detail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* infinite scroll gallery */}
                <div className="w-full py-4">
                    <InfiniteScrollGallery />
                </div>
            </div>
        </section>
    );
}