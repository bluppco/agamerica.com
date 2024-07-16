import React from 'react'

// IMPORT REACT ATOMS
import PictureContain from '@/atoms/picture/internal/contain/picture-internal-contain'

// HARDCODED DATA
const data = {

    arrow_icon_source: "/icons/right-arrow.svg"

}

const NavigationImgCard = ({ link, title, buttonText, bgImage }) => {
    return (
        <a href={ link }>
            <div className={`bg-no-repeat bg-cover rounded-xl p-6 flex flex-col justify-between bg-slate-800 hover:bg-none min-h-44 h-full min-w-72 w-full group ${bgImage}`}>
                <span className="text-white font-semibold">{ title }</span>
                <div className="relative">
                    <div className="flex items-center gap-1">
                        <span className="text-white text-xs font-medium">{ buttonText }</span>
                        <div className="size-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <PictureContain
                                alternative_text="Right arrow"
                                source={ data.arrow_icon_source }
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-24"></div>
                </div>
            </div>
        </a>
    )
}
export default NavigationImgCard
