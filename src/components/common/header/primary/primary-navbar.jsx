import React, { useState } from 'react'

// IMPORT REACT COMPONENTS
import NavigationCard from "@/components/common/header/primary/navigation-cards/navigation-card"
import NavigationImgCard from '@/components/common/header/primary/navigation-card-with-image/navigation-image-card'

// IMPORT REACT ATOMS
import PictureContain from '@/atoms/picture/internal/contain/picture-internal-contain'

const PrimaryNavbar = () => {
    // KEEP TRACK OF NAVLINKS HOVERED STATE
    const [hoveredLink, setHoveredLink] = useState(null)

    // KEEP TRACK OF SUBLINK CONTENT HOVERED SATE
    const [isContentHovered, setIsContentHovered] = useState(false)

    // MOUSE LOCATION IN NAVBAR
    const handleMouseEnterNav = (link) => {
        setHoveredLink(link)
    }

    // MOUSE LOCATION OUTSIDE NAVBAR BUT IN SUBLINK CONTENT
    const handleMouseLeaveNav = () => {
        if (!isContentHovered) {
        setHoveredLink(null)
        }
    }

    // MOUSE LOCATION IN SUBLINK CONTENT
    const handleMouseEnterContent = () => {
        setIsContentHovered(true)
    }

    // MOUSE LOCATION OUTSIDE SUBLINK CONTENT
    const handleMouseLeaveContent = () => {
        setIsContentHovered(false)
        setHoveredLink(null)
    }

    // HARDCODED DATA
    const services_data = [
        {
            link: "",
            title: "Financing Overview"
        },
        {
            link: "",
            title: "Interest-Only Loans"
        },
        {
            link: "",
            title: "Land Loans"
        },
        {
            link: "",
            title: "Lines of Credit"
        }
    ]
    const who_we_are_data = [
        {
            description: "Read the unique stories of farmers who have partnered with us.",
            link:"",
            source: "/icons/speech.svg",
            title: "Success Stories",
        },
        {
            description: "Learn about tapping into AgAmerica's nationwide ag finance platform.",
            link:"",
            source: "/icons/arrows.svg",
            title: "Partnerships",
        },
        {
            description: "Stay informed on industry news with insights from our team of experts.",
            link:"",
            source: "/icons/news.svg",
            title: "Newsroom",
        },
        {
            description: "Join us in our mission to support the American farmer and the agriculture industry.",
            link:"",
            source: "/icons/building.svg",
            title: "Careers",
        },
    ]
    const insights_data = [
        {
            description: "The latest news and trends impacting the agriculture industry.",
            link: "",
            source: "/icons/file.svg",
            title: "Blog Articles",
        },
        {
            description: "Our experts dive deeper into economic, legislation, policies, and trends.",
            link: "",
            source: "/icons/stats-doc.svg",
            title: "Whitepapers",
        },
        {
            description: "Insights from AgAmerica’s Chief Economist.",
            link: "",
            source: "/icons/chart.svg",
            title: "Agricultural Economics",
        },
        {
            description: "Stay informed on the latest policy news.",
            link: "",
            source: "/icons/bank.svg",
            title: "Legislation & Trade Updates",
        },
    ]

    // LOGO SOURCE FOR DIFFERENT COLOR
    const logoSrc = hoveredLink ? '/logo/agamerica-logo-color.svg' : '/logo/agamerica-logo.svg'

    return (
        <>
            <section className={`absolute w-full hidden lg:block z-10 ${hoveredLink ? 'bg-white' : ''}`} onMouseLeave={ handleMouseLeaveNav }>
                <div className="max-w-7xl mx-auto px-4 xl:px-0">
                    <nav className={`flex justify-between items-center bg-transparent relative z-10 py-12 ${hoveredLink ? 'shadow-bottom-only' : ''}`}>
                        <div className="logo h-7">
                            <PictureContain
                                alternative_text="logo"
                                source={ logoSrc }
                            />
                        </div>
                        <div className="nav-links flex items-center gap-8">
                            <div
                                className={`nav-link cursor-pointer py-1 ${hoveredLink === 'link1' ? 'border-b-2 border-brown' : ''}`}
                                onMouseEnter={() => handleMouseEnterNav('link1')}
                            >
                                <span className={`text-white text-sm font-semibold ${hoveredLink ? '!text-black' : ''}`}>SERVICES</span>
                            </div>
                            <div
                                className={`nav-link cursor-pointer py-1 ${hoveredLink === 'link2' ? 'border-b-2 border-brown' : ''}`}
                                onMouseEnter={() => handleMouseEnterNav('link2')}
                            >
                                <span className={`text-white text-sm font-semibold ${hoveredLink ? '!text-black' : ''}`}>WHO WE ARE</span>
                            </div>
                            <div
                                className={`nav-link cursor-pointer py-1 ${hoveredLink === 'link3' ? 'border-b-2 border-brown' : ''}`}
                                onMouseEnter={() => handleMouseEnterNav('link3')}
                            >
                                <span className={`text-white text-sm font-semibold ${hoveredLink ? '!text-black' : ''}`}>INSIGHTS</span>
                            </div>
                            <button className="text-white px-8 py-2 bg-brown">
                                Contact Us
                            </button>
                        </div>
                    </nav>
                    {hoveredLink && (
                        <div
                            className="absolute top-32 left-0 w-full bg-white px-4 py-10 z-10"
                            onMouseEnter={ handleMouseEnterContent }
                            onMouseLeave={ handleMouseLeaveContent }
                        >
                            <div className="max-w-7xl mx-auto">
                                {/* SERVICES NAVLINK DROPDOWN */}
                                {
                                    hoveredLink === 'link1' && 
                                    <div className="h-44 grid grid-cols-3 gap-2">
                                        <div className="flex flex-col gap-2 pr-32 border-r border-brown">   
                                            <div className="py-2 border-b border-brown flex justify-between items-center">
                                                <a href=""><span className="text-2xl font-bold">Farm Land Fianancing</span></a>
                                                <div className="h-3">
                                                    <PictureContain
                                                        alternative_text="right-arrow"
                                                        source="/icons/right-arrow-no-line.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="py-2 border-b border-brown">
                                                <a href=""><span className="text-2xl font-bold text-gray-400 hover:text-black duration-200">Growth Equity</span></a>
                                            </div>
                                            <div className="py-2 flex justify-between items-center">
                                                <a href=""><span className="text-2xl font-bold text-gray-400 hover:text-black duration-200">Farm Advisory Services</span></a>
                                                <div className="h-3">
                                                    <PictureContain
                                                        alternative_text="right-arrow"
                                                        source="/icons/right-arrow-no-line.svg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 grid grid-cols-2 pl-16">
                                            {/* SERVICES LINKS MAPPED */}
                                            <div className="grid grid-cols-2 items-center gap-4 h-24">
                                                {
                                                    services_data.map((service) => (

                                                        <a href={ service.link }>
                                                            <span className="text-lg font-bold hover:border-b-2 border-brown py-1">{ service.title }</span>
                                                        </a>

                                                    ))
                                                }
                                            </div>
                                            <NavigationImgCard
                                                bgImage="bg-bg-horse"
                                                buttonText="APPLY" 
                                                link=""
                                                title="FAST TRACK APPLICATION" 
                                            />
                                        </div>
                                    </div>
                                }
                                {/* WHO WE ARE NAVLINK DROPDOWN */}
                                {
                                    hoveredLink === 'link2' && 
                                    <div className="h-44">
                                        <div className="flex gap-2 h-full">
                                            <NavigationImgCard
                                                bgImage="bg-bg-team"
                                                buttonText="LEARN MORE" 
                                                link=""
                                                title="MEET OUR TEAM" 
                                            />
                                            <div className="grid grid-cols-4 gap-2">
                                                {
                                                    who_we_are_data.map((data) => (

                                                        <NavigationCard
                                                            description={ data.description }
                                                            link={ data.link }
                                                            source={ data.source }
                                                            title={ data.title }
                                                        />

                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                {/* INSIGHTS NAVLINK DROPDOWN */}
                                {
                                    hoveredLink === 'link3' && 
                                    <div className="h-44">
                                        <div className="flex gap-2 h-full">
                                            <div className="grid grid-cols-4 gap-2">
                                                {

                                                    insights_data.map((data) => (

                                                        <NavigationCard
                                                            description={ data.description }
                                                            link={ data.link }
                                                            source={ data.source }
                                                            title={ data.title }
                                                        />

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
                                    </div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
export default PrimaryNavbar
