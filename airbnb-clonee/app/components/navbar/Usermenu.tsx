'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from './MenuItem';
import { useCallback, useState, useEffect} from 'react';

import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";



import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
     currentUser?: SafeUser| null;  
    }
const UserMenu: React.FC<UserMenuProps> = ({ currentUser}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const router = useRouter();

    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = useCallback(() => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
      }, []);
      
      const closeMenu = useCallback(() => {
        if (showMenu) setShowMenu(false);
      }, [showMenu]);
      

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
    
    const onRent = useCallback(() => {
        if(!currentUser){
            return loginModal.onOpen();
        }
        rentModal.onOpen();
    },[currentUser, loginModal, rentModal]);


    return ( 
        <div className="user-menu relative">
            <div className="flex flex-row items-center gap-3">

                <div 
                onClick={onRent} 
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb your Home
                </div>

                <div 
                onClick={toggleMenu}
                className="flex flex-row p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="absolute rounded-xl w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 bg-white shadow-md py-2 z-20">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                        <>
                            <MenuItem onClick={() => router.push("/trips")} title="My Trips"/>
                            <MenuItem onClick={()=>router.push("/favorites")} title="My Favorites"/>
                            <MenuItem onClick={() => router.push("/reservations")} title="My Reservations"/>
                            <MenuItem onClick={()=>router.push("/properties")} title="My Properties"/>
                            <MenuItem onClick={rentModal.onOpen} title="Airbnb my home"/>
                            <hr/>
                            <MenuItem onClick={()=>signOut( )} title="Logout"/>
                        </>    
                        ):(
                        <>
                            <MenuItem onClick={loginModal.onOpen} title="Log in"/>
                            <MenuItem onClick={registerModal.onOpen} title="Sign up"/>
                        </>
                        )}
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default UserMenu;