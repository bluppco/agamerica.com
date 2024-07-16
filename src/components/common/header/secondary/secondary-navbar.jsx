import React, { useState, useEffect } from "react"

// IMPORT REACT COMPONENTS
import NavigationImgCard from "@/components/common/header/primary/navigation-card-with-image/navigation-image-card"

// IMPORT REACT ATOMS
import PictureContain from '@/atoms/picture/internal/contain/picture-internal-contain'

const SecondaryNavbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false)
    const [isSearchVisible, setSearchVisible] = useState(false)
    const [mobileNavbarActive, setMobileNavbarActive] = useState(false)
    const [activeLink, setActiveLink] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setDropdownVisible(false)
            }
        }

        const handleClickOutside = (event) => {
            if (
                !event.target.closest("#search-input-container") &&
                !event.target.closest("#search-icon")
            ) 
            {
                setSearchVisible(false)
            }
        }

        window.addEventListener("resize", handleResize)
        document.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("resize", handleResize)
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        // DISABLE BODY SCROLLING WHEN MOBILE NAVBAR IS ACTIVE
        const body = document.body
        if (mobileNavbarActive) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = ''
        }

        return () => {
            body.style.overflow = ''
        }
    }, [mobileNavbarActive])

    const toggleMobileNavbar = () => {
        setMobileNavbarActive(prevState => !prevState)
    }

    const toggleDropdown = () => {
        if (window.innerWidth < 1024) {
            setDropdownVisible(!isDropdownVisible)
        }
    }

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible)
        if (!isSearchVisible) {
            // Focus on the input when search bar becomes visible
            setTimeout(() => {
                if (searchInputRef.current) {
                    searchInputRef.current.focus()
                }
            }, 100)
        }
    }

    const openLink = (link) => {
        setActiveLink(link)
    }

    const closeLink = () => {
        setActiveLink(null)
    }

    const searchInputContainerStyle = {
        position: "absolute",
        right: "0",
        top: "-5px",
        transform: `translateX(${isSearchVisible ? "0%" : "100%"})`,
        transition: "transform 0.3s ease, width 0.3s ease",
        width: isSearchVisible ? "400px" : "0",
        zIndex: 10,
    }

    // HARDCODED DATA FOR MOBILE NAV
    const who_we_are_data_mobile = [
        {
            link:"",
            title: "Overview",
        },
        {
            link:"",
            title: "Success Stories",
        },
        {
            link:"",
            title: "Partnerships",
        },
        {
            link:"",
            title: "Newsroom",
        },
        {
            link:"",
            title: "Careers",
        },
        
    ]
    const insights_data_mobile = [
        {
            link:"",
            title: "Overview",
        },
        {
            link:"",
            title: "Blog Articles",
        },
        {
            link:"",
            title: "Whitepapers",
        },
        {
            link:"",
            title: "Agricultural Economics",
        },
        {
            link:"",
            title: "Legislation & Trade Updates",
        },
        
    ]

    // LOGO SOURCE FOR DIFFERENT COLOR
    const logoSource = mobileNavbarActive ? '/logo/agamerica-logo-color.svg' : '/logo/agamerica-logo.svg'

    return (
        <header className="relative">
            <section className="bg-neutral-900">
                <div className="flex items-center justify-between h-full max-w-[1280px] mx-auto px-4 xl:px-0">
                    <div className="flex gap-8 pt-2 border-r border-gray-400 lg:border-none">
                        <div
                            className="py-4 px-4 lg:px-0 lg:py-2 lg:border-b-2 lg:border-brown cursor-pointer relative"
                            id="financial-link"
                            onClick={toggleDropdown}
                        >
                            <div className="flex items-center gap-2">
                                <a href="javascript:void(0)">
                                    <span className="text-white text-xs font-semibold">FINANCIAL</span>
                                </a>
                                <div className="w-6 lg:hidden">
                                    <PictureContain
                                        alternative_text=""
                                        source="/icons/arrow-down.svg"
                                    />
                                </div>
                            </div>
                            {
                            
                                isDropdownVisible && (
                                    <div
                                        id="dropdown-menu"
                                        className="absolute z-30 left-0 bg-neutral-900 text-white mt-2"
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
                                )
                            
                            }
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
                        <div id="search-icon" className="hidden lg:block cursor-pointer w-5" onClick={toggleSearch}>
                            <PictureContain 
                                alternative_text="search icon" 
                                source="/icons/search.svg"
                            />
                        </div>
                        <div id="search-input-container" style={searchInputContainerStyle} className="hidden lg:block overflow-hidden">
                            <input
                                className="bg-white p-1 focus:outline-none"
                                placeholder="Search"
                                style={{ width: isSearchVisible ? "100%" : 0 }}
                            />
                            <div className="w-5 absolute z-10 right-2 top-2 cursor-pointer" onClick={ toggleSearch }>
                                <PictureContain
                                    alternative_text="search icon black"
                                    source="/icons/search-black.svg"
                                />
                            </div>
                        </div>
                        <div className="w-5 cursor-pointer lg:hidden" onClick={ toggleMobileNavbar }>
                            <PictureContain
                                alternative_text="burger menu"
                                source="/icons/burger-menu.svg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className={`absolute w-full z-10 px-4 py-2 lg:hidden ${ mobileNavbarActive ? 'bg-white shadow-bottom-only' : 'border-b border-gray-500'}`}>
                <mobilenav className="flex items-center justify-between">
                    <div className="logo flex h-6">
                        <PictureContain
                            alternative_text="logo"
                            source={ logoSource }
                        />
                    </div>
                    <div>
                        <a href="/">
                            <button className="text-white px-8 py-2 bg-brown">
                                Contact Us
                            </button>
                        </a>
                    </div>
                </mobilenav>
            </section>
            <div className={`z-10 fixed bg-white pt-6 pb-28 top-28 w-full h-full flex flex-col justify-between transform ${mobileNavbarActive ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
                <div className="px-6">
                    <a href="javascript:void(0)" onClick={() => openLink('services')}>
                        <div className="py-3 border-b border-brown flex justify-between items-center">
                            <span className="text-sm font-bold">SERVICES</span>
                            <div className="h-3">
                                <PictureContain
                                    alternative_text="right-arrow"
                                    source="/icons/right-arrow-no-line.svg"
                                />
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0)" onClick={() => openLink('who-we-are')}>
                        <div className="py-3 border-b border-brown flex justify-between items-center">
                            <span className="text-sm font-bold ">WHO WE ARE</span>
                            <div className="h-3">
                                <PictureContain
                                    alternative_text="right-arrow"
                                    source="/icons/right-arrow-no-line.svg"
                                />
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0)" onClick={() => openLink('insights')}>
                        <div className="py-3 flex justify-between items-center">
                            <span className="text-sm font-bold ">INSIGHTS</span>
                            <div className="h-3">
                                <PictureContain
                                    alternative_text="right-arrow"
                                    source="/icons/right-arrow-no-line.svg"
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="bg-gray-200 p-6 flex flex-col gap-4 z-10">
                    <input
                        placeholder="Search"
                        className="focus:outline-none p-2 w-full"
                    />
                    <div className="flex gap-2">
                        <button className="text-white w-full px-8 py-2 bg-brown hover:text-black hover:bg-white duration-300">
                            Contact Us
                        </button>
                        <button className="text-brown border border-brown w-full px-8 py-2 bg-white hover:text-white hover:bg-brown">
                            FAQS
                        </button>
                    </div>
                </div>
            </div>
            <div className={`z-10 fixed bg-white pb-28 top-28 w-full h-full overflow-y-auto transform ${activeLink ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="px-8 py-6">
                    { 
                        activeLink === 'services' && (
                            <div>
                                <div className="py-4 border-b border-brown flex gap-2 items-center cursor-pointer" onClick={ closeLink }>
                                    <div className="h-3">
                                        <PictureContain
                                            alternative_text="right-arrow"
                                            source="/icons/right-arrow-no-line.svg"
                                        />
                                    </div>
                                    <span className="text-sm font-bold">SERVICES</span>
                                </div>
                                <a href="">
                                    <div className="py-3 border-b border-brown flex justify-between items-center">
                                        <span className="text-sm font-bold">RURAL LAND FINANCING</span>
                                        <div className="h-3">
                                            <PictureContain
                                                alternative_text="right-arrow"
                                                source="/icons/right-arrow-no-line.svg"
                                            />
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="py-3 border-b border-brown flex justify-between items-center">
                                        <span className="text-sm font-bold ">GROWTH EQUITY</span>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="py-3 flex justify-between items-center">
                                        <span className="text-sm font-bold ">FARM ADVISORY SERVICES</span>
                                        <div className="h-3">
                                            <PictureContain
                                                alternative_text="right-arrow"
                                                source="/icons/right-arrow-no-line.svg"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                    {
                        activeLink === 'who-we-are' && (
                            <div className="flex flex-col gap-6">
                                <div className="py-4 border-b border-brown flex gap-2 items-center cursor-pointer" onClick={ closeLink }>
                                    <div className="h-3">
                                        <PictureContain
                                            alternative_text="right-arrow"
                                            source="/icons/right-arrow-no-line.svg"
                                        />
                                    </div>
                                    <span className="text-sm font-bold">WHO WE ARE</span>
                                </div>
                                <div className="flex flex-col gap-2 px-4">
                                    {
                                    
                                        who_we_are_data_mobile.map((data) => (

                                            <a href={ data.link }>
                                                <div className="hover:border-b-2 border-brown py-1">
                                                    <span className="text-lg font-semibold">{ data.title }</span>
                                                </div>
                                            </a>

                                        ))
                                    
                                    }
                                </div>
                                <NavigationImgCard
                                    bgImage="bg-bg-team"
                                    buttonText="LEARN MORE" 
                                    link=""
                                    title="MEET OUR TEAM" 
                                />
                            </div>
                        )
                    }
                    {
                        activeLink === 'insights' && (
                            <div className="flex flex-col gap-6">
                                <div className="py-4 border-b border-brown flex gap-2 items-center cursor-pointer" onClick={ closeLink }>
                                    <div className="h-3">
                                        <PictureContain
                                            alternative_text="right-arrow"
                                            source="/icons/right-arrow-no-line.svg"
                                        />
                                    </div>
                                    <span className="text-sm font-bold">INSIGHTS</span>
                                </div>
                                <div className="flex flex-col gap-2 px-4">
                                    {
                                    
                                        insights_data_mobile.map((data) => (

                                            <a href={ data.link }>
                                                <div className="hover:border-b-2 border-brown py-1">
                                                    <span className="text-lg font-semibold">{ data.title }</span>
                                                </div>
                                            </a>

                                        ))
                                        
                                    }
                                </div>
                                <NavigationImgCard
                                    bgImage="bg-bg-vineyard"
                                    buttonText="LEARN MORE" 
                                    link=""
                                    title="FINANCIAL TOOLS" 
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
export default SecondaryNavbar
