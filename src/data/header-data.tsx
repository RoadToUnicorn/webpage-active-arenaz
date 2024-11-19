import { FaHome, FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";

type HeaderData = {
    navItems: {
        name: string;
        icon: JSX.Element;
    }[];
};

export const headerData: HeaderData = {
    navItems: [
        {
            name: "Home",
            icon: <FaHome size={20} className="text-primary" />,
        },
        {
            name: "Bookings",
            icon: <IoIosSearch size={20} />,
        },
        {
            name: "Notifications",
            icon: <FaRegBell size={20} />,
        },
        {
            name: "Settings",
            icon: <LuLayoutDashboard size={20} />,
        },
    ],
};
