import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";

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
            name: "Terms and Conditions",
            icon: <IoDocumentOutline size={20} />,
        },
    ],
};
