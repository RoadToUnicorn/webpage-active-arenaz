import { FaHome } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";

type HeaderData = {
    navItems: {
        name: string;
        icon: JSX.Element;
        path?: string;
    }[];
};

export const headerData: HeaderData = {
    navItems: [
        {
            name: "Home",
            icon: <FaHome size={20} />,
        },
        {
            name: "Contact Us",
            icon: <MdOutlineMessage size={20} />,
            path: "/contact",
        },
        {
            name: "Terms and Conditions",
            icon: <IoDocumentOutline size={20} />,
        },
    ],
};
