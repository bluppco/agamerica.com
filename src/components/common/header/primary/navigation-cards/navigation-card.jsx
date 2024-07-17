import React from 'react'

// IMPORT REACT ATOMS
import PictureContain from '@/atoms/picture/internal/contain/picture-internal-contain'

const NavigationCard = ({ description, link, source, title }) => {
    return (
        <a href={ link }>
            <div className="p-6 flex flex-col gap-2 bg-gray-100 h-full rounded-lg hover:bg-neutral-200 duration-300">
                <div className="size-6">
                    <PictureContain
                        alternative_text={ title }
                        source={ source }
                    />
                </div>
                <span className="text-lg font-medium">{ title }</span>
                <span className="text-sm">{ description }</span>
            </div>
        </a>
    )
}
export default NavigationCard
