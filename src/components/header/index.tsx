import { useRef, memo, useState } from "react";
import { addScrollingClass } from "../../utils/add-scrolling-class";
import Logo from "../ui/logo";
import { headerData } from "../../data/header-data";
import TermsModal from "../modals/terms-modal";

const Header = memo(() => {
    const headerRef = useRef(null);
    addScrollingClass(headerRef);

    const [open, setOpen] = useState(false);

    const handleNavClick = (name: string) => {
        if (name === "Terms and Conditions") {
            setOpen(true);
        }
    };

    return (
        <>
            <header
                ref={headerRef}
                className="public-header custom-header-blur sticky top-0 z-50 flex h-16 w-full bg-[#FFFFFF99] md:flex md:items-center lg:h-[72px] 4xl:h-24"
            >
                <div className="container-fluid md:!mx-6 flex items-center justify-between w-full">
                    <div className="flex items-center gap-12">
                        <Logo />

                        <nav className="hidden lg:flex gap-8">
                            {headerData.navItems.map((item, index) => (
                                <button
                                    key={index}
                                    className="flex items-center gap-2 text-xs font-medium text-black"
                                    onClick={() => handleNavClick(item.name)}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src="http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png"
                            alt="User"
                            className="w-12 h-12 rounded-full"
                        />

                        <div className="hidden sm:flex flex-col items-start">
                            <h4 className="text-xs font-normal text-black">
                                Good Afternoon,
                            </h4>

                            <h4 className="text-md font-medium text-black">
                                Mudassar Raza 👋
                            </h4>
                        </div>
                    </div>
                </div>
            </header>

            <TermsModal open={open} setOpen={setOpen} />
        </>
    );
});

export default Header;
