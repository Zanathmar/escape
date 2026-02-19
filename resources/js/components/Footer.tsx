export default function Footer() {
    return (
        <footer className="bg-black mx-24 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/*
                    Mobile/Tablet: stacked vertically
                      1. Logo + desc + socials (full width)
                      2. Information + Network side by side (2 col grid)
                      3. Email full width below

                    Desktop (lg+): two-part horizontal layout
                      LEFT:  logo + desc + socials (~35% width)
                      RIGHT: Information | Network | Email  (3 cols, ~65% width)
                */}

                {/* ── MOBILE + TABLET layout (hidden on lg+) ── */}
                <div className="lg:hidden">
                    {/* Logo + desc + socials */}
                    <div className="mb-10 space-y-5">
                        <div className="h-8 w-36">
                            <img src="/images/escape.png" alt="Escape Logo"
                                className="h-full w-full object-contain object-left" />
                        </div>
                        <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="flex items-center gap-5 pt-1">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter/X">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links grid: Info + Network side by side, Email full width below */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="mb-4 text-sm font-bold text-white">Information</h3>
                            <ul className="space-y-3">
                                {[['Home','#home'],['About Us','#about'],['Our Works','#event'],['Pricing','#pricing'],['Contact','#contact']].map(([label, href]) => (
                                    <li key={href}><a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-bold text-white">Network</h3>
                            <ul className="space-y-3">
                                {[['Instagram','https://instagram.com'],['TikTok','https://tiktok.com'],['Shopee','https://shopee.com']].map(([label, href]) => (
                                    <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 pt-2">
                            <h3 className="mb-2 text-sm font-bold text-white">Email Escape</h3>
                            <a href="mailto:escape@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">escape@gmail.com</a>
                            <p className="mt-4 text-xs leading-relaxed text-gray-400 max-w-xs">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── DESKTOP layout (hidden below lg) ── */}
                <div className="hidden lg:flex lg:flex-row lg:gap-16 xl:gap-24">

                    {/* LEFT: Logo + desc + socials */}
                    <div className="w-72 xl:w-80 shrink-0 space-y-5">
                        <div className="h-8 w-36">
                            <img src="/images/escape.png" alt="Escape Logo"
                                className="h-full w-full object-contain object-left" />
                        </div>
                        <p className="text-xs leading-relaxed text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="flex items-center gap-5 pt-1">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter/X">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Information | Network | Email in 3 cols */}
                    <div className="flex-1 grid grid-cols-3 gap-8 xl:gap-12">
                        {/* Information */}
                        <div>
                            <h3 className="mb-5 text-sm font-bold text-white">Information</h3>
                            <ul className="space-y-3">
                                {[['Home','#home'],['About Us','#about'],['Our Works','#event'],['Pricing','#pricing'],['Contact','#contact']].map(([label, href]) => (
                                    <li key={href}><a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* Network */}
                        <div>
                            <h3 className="mb-5 text-sm font-bold text-white">Network</h3>
                            <ul className="space-y-3">
                                {[['instagram','https://instagram.com'],['tiktok','https://tiktok.com'],['Shopee','https://shopee.com']].map(([label, href]) => (
                                    <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* Email */}
                        <div>
                            <h3 className="mb-2 text-sm font-bold text-white">Email escape:</h3>
                            <a href="mailto:escape@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">escape@gmail.com</a>
                            <p className="mt-4 text-xs leading-relaxed text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Divider + Copyright — shared */}
                <div className="mt-12 border-t border-white/20 pt-6 text-center">
                    <p className="text-xs text-gray-500">
                        Copyright © 2026 Escape. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}