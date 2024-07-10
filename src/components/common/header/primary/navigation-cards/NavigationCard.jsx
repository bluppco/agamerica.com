import React from 'react';
const NavigationCard = ({ description, source, title }) => {
    return (
        <div className="p-6 flex flex-col gap-2 bg-gray-100 h-full rounded-lg hover:bg-neutral-200 duration-300">
            <img
                alt={ title }
                className="size-6"
                src={ source }
            />
            <span className="text-lg font-medium">{ title }</span>
            <span className="text-sm">{ description }</span>
        </div>
    );
};
export default NavigationCard;
