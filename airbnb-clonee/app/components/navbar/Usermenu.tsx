'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from './MenuItem';
import { useCallback, useState, useEffect} from 'react';
import useRegisterModal from '../../hooks/useRegisterModal';

const UserMenu = () => {

    const registerModal = useRegisterModal();

    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = useCallback(() => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    }, []);

    const closeMenu = useCallback(() => {
        setShowMenu(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(".user-menu")) {
            closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeMenu]);
    

    return ( 
        <div className="user-menu relative">
            <div className="flex flex-row items-center gap-3">

                <div 
                onClick={() => {}} 
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb: Your Home
                </div>

                <div 
                onClick={toggleMenu}
                className="flex flex-row p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="absolute rounded-xl w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 bg-white shadow-md py-2">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={() => {}} title="Log in"/>
                            <MenuItem onClick={registerModal.onOpen} title="Sign up"/>
                        </>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default UserMenu;