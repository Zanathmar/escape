import { useState } from 'react';

export default function CollabSection() {
    const collaborators = [
        { image: '/images/people/1.png' },
        { image: '/images/people/2.png' },
        { image: '/images/people/3.png' },
        { image: '/images/people/4.png' },
        { image: '/images/people/5.png' },
        { image: '/images/people/6.png' },
        { image: '/images/people/7.png' },
        { image: '/images/people/8.png' },
        { image: '/images/people/9.png' },
        { image: '/images/people/10.png' },
        { image: '/images/people/11.png' },
        { image: '/images/people/12.png' },
        { image: '/images/people/13.png' },
        { image: '/images/people/14.png' },
    ];

    return (
        <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Infinite Scroll Brands */}
                <div className="mb-10 overflow-hidden sm:mb-12 md:mb-14 lg:mb-16">
                    <div className="animate-scroll-seamless flex">
                        {/* First set of brands */}
                        {[...Array(5)].map((_, setIndex) => (
                            <div
                                key={`brands-set1-${setIndex}`}
                                className="flex shrink-0 items-center"
                            >
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand1.png"
                                        alt=""
                                        className="h-8 w-auto sm:h-10 md:h-12"
                                    />
                                </div>
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand2.png"
                                        alt=""
                                        className="h-7 w-auto sm:h-8 md:h-10"
                                    />
                                </div>
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand3.png"
                                        alt=""
                                        className="h-6 w-auto sm:h-7 md:h-8"
                                    />
                                </div>
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand4.png"
                                        alt=""
                                        className="h-10 w-auto sm:h-12 md:h-14"
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {[...Array(5)].map((_, setIndex) => (
                            <div
                                key={`brands-set2-${setIndex}`}
                                className="flex shrink-0 items-center"
                            >
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand1.png"
                                        alt=""
                                        className="h-8 w-auto sm:h-10 md:h-12"
                                    />
                                </div>
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand2.png"
                                        alt=""
                                        className="h-7 w-auto sm:h-8 md:h-10"
                                    />
                                </div>
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand3.png"
                                        alt=""
                                        className="h-6 w-auto sm:h-7 md:h-8"
                                    />
                                </div>
                                <div className="mx-4 flex items-center sm:mx-6 md:mx-8">
                                    <img
                                        src="/images/brand4.png"
                                        alt=""
                                        className="h-10 w-auto sm:h-12 md:h-14"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Collaborators Grid
                    - Mobile (< 640px):   4 columns — shows 12 of 14 cleanly, last 2 centered or full row
                    - sm   (≥ 640px):     5 columns
                    - md   (≥ 768px):     7 columns — original desktop layout
                    - lg   (≥ 1024px):    7 columns with larger gaps
                */}
                <div className="grid px-8 grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3 md:grid-cols-7 md:gap-4 lg:gap-5 xl:gap-6">
                    {collaborators.map((collab, index) => (
                        <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-xl bg-gray-800 sm:rounded-2xl"
                        >
                            <img
                                src={collab.image}
                                alt=""
                                className="h-full w-full object-cover grayscale"
                            />
                        </div>
                    ))}
                </div>

                {/* Section Title */}
                <div className="mt-10 text-center sm:mt-12 md:mt-14 lg:mt-16">
                    <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        BRAND AND PEOPLE COLLABORATE WITH US
                    </h2>
                </div>

            </div>
        </section>
    );
}