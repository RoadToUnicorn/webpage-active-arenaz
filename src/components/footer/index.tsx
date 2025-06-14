import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { MdOutlineMessage, MdMailOutline } from "react-icons/md";

const menuItems = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
    {
        label: "Privacy Policy",
        path: "/privacy-policy",
    },
];

const styles = {
    iconContainer:
        "flex items-center justify-center p-2.5 text-[#92989F] bg-[#92989F]/10 rounded-full hover:bg-[#92989F]/20 cursor-pointer",
    icon: "text-2xl",
};
const { iconContainer, icon } = styles;

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="bg-white relative z-10">
            <div className="container-fluid flex justify-center items-center flex-col py-16">
                <nav>
                    <ul className="flex items-center justify-center mt-6">
                        {menuItems.map((item) => (
                            <li
                                key={item.label}
                                className="px-2 md:px-4 first:pl-0 last:pr-0 lg:px-6"
                                onClick={() => {
                                    if (item.path) {
                                        navigate(item.path);
                                    }
                                }}
                            >
                                <p
                                    className={clsx(
                                        "block text-sm md:text-base font-semibold capitalize leading-4 hover:underline cursor-pointer text-black/80"
                                    )}
                                >
                                    {item.label}
                                </p>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center justify-center my-8 gap-4">
                    <p className={iconContainer}>
                        <MdMailOutline className={icon} />
                    </p>

                    <p className={iconContainer}>
                        <MdOutlineMessage className={icon} />
                    </p>
                </div>

                <p className="text-center text-xs font-normal capitalize leading-6 text-[#92989F] md:text-left">
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    <span className="font-semibold hover:underline">
                        Active Arenaz
                    </span>{" "}
                    All rights reserved
                </p>
            </div>
        </footer>
    );
}
