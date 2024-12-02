'use client';

interface MenuItemProps {
    onClick: () => void;
    title : string;
}

const MenuItem = ({onClick, title}: MenuItemProps) => {
    return ( 
        <div onClick={onClick} className="px-3 py-4 hover:bg-neutral-100 transition font-semibold">
            {title}
        </div>
     );
}

export default MenuItem;