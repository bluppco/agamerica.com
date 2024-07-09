import React, { useState, useEffect } from "react";

const SecondaryNavbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setDropdownVisible(false);
            }
        };

        const handleClickOutside = (event) => {
            if (
                !event.target.closest("#search-input-container") &&
                !event.target.closest("#search-icon")
            ) 
            {
                setSearchVisible(false);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        if (window.innerWidth < 1024) {
            setDropdownVisible(!isDropdownVisible);
        }
    };

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
        if (!isSearchVisible) {
            // Focus on the input when search bar becomes visible
            setTimeout(() => {
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }, 100);
        }
    };

    const searchInputContainerStyle = {
        position: "absolute",
        right: "0",
        top: "-5px",
        transform: `translateX(${isSearchVisible ? "0%" : "100%"})`,
        transition: "transform 0.3s ease, width 0.3s ease",
        width: isSearchVisible ? "400px" : "0",
        zIndex: 10,
    };

    return (
        <header>
            <section className="bg-neutral-900">
                <div className="flex items-center justify-between h-full max-w-[1280px] mx-auto px-4 xl:px-0">
                    <div className="flex gap-8 pt-2 border-r border-gray-400 lg:border-none">
                        <div
                            className="py-4 px-4 lg:px-0 lg:py-2 lg:border-b-2 lg:border-brown cursor-pointer relative"
                            id="financial-link"
                            onClick={toggleDropdown}
                        >
                            <div className="flex items-center gap-2">
                                <a href="javascript:void(0);">
                                    <span className="text-white text-xs font-semibold">FINANCIAL</span>
                                </a>
                                <img className="w-6 lg:hidden" src="/icons/arrow-down.svg" />
                            </div>
                            {isDropdownVisible && (
                                <div
                                    id="dropdown-menu"
                                    className="absolute left-0 bg-neutral-900 text-white mt-2"
                                >
                                    <div className="px-4 py-2">
                                        <a href="">
                                            <span className="text-xs text-white font-semibold">INVESTMENT</span>
                                        </a>
                                    </div>
                                    <div className="px-4 py-2">
                                        <a href="" >
                                            <span className="text-xs text-white font-semibold">LIFE</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="hidden lg:block py-2 hover:border-b-2 border-brown cursor-pointer">
                            <a href="">
                                <span className="text-neutral-400 hover:text-white text-xs font-semibold">INVESTMENT</span>
                            </a>
                        </div>
                        <div className="hidden lg:block py-2 hover:border-b-2 border-brown cursor-pointer">
                            <a href="">
                                <span className="text-neutral-400 hover:text-white text-xs font-semibold">LIFE</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center relative">
                        <div>
                            <a href="">
                                <span className="text-neutral-400 hover:text-white text-sm font-semibold">Client</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span className="text-white text-sm font-semibold">844.516.8176</span>
                            </a>
                        </div>
                        <div id="search-icon" className="hidden lg:block cursor-pointer" onClick={toggleSearch}>
                            <img 
                                className="w-5" 
                                src="/icons/search.svg"
                            />
                        </div>
                        <div id="search-input-container" style={searchInputContainerStyle} className="hidden lg:block overflow-hidden">
                            <input
                                className="bg-white p-1 focus:outline-none"
                                placeholder="Search"
                                style={{ width: isSearchVisible ? "100%" : 0 }}
                            />
                            <div className="w-5 absolute z-10 right-2 top-2 cursor-pointer">
                                <img
                                    className="object-cover w-5"
                                    onClick={toggleSearch}
                                    src="/icons/search-black.svg"
                                />
                            </div>
                        </div>
                        <div className="cursor-pointer lg:hidden">
                            <img
                                className="object-cover w-5"
                                src="/icons/burger-menu.svg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default SecondaryNavbar;
