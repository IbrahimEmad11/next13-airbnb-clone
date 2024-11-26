import { IconType } from "react-icons";

interface ButtonProps {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: IconType;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;

}

const Button: React.FC<ButtonProps> = ({
    title,
    onClick,
    icon:Icon,
    disabled,
    outline,
    small
}) => {
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        className={`
            relative
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            rounded-lg  
            transition 
            w-full 
            ${outline ? "hover:opacity-70" : "hover:opacity-80"} 
            ${outline ? "bg-white" : "bg-rose-500"} 
            ${outline ? "border-black" : "border-rose-500"} 
            ${outline ? "text-black" : "text-white"} 
            ${small ? "py-1" : "py-3"} 
            ${small ? "text-sm" : "text-md"} 
            ${small ? "font-light" : "font-semibold"} 
            ${small ? "border-[1px]" : "border-2"}
        `}
        >
            {Icon && <Icon size={24} className="absolute left-4 top-3"/>}
            {title}
        </button>
    );
};

export default Button;
