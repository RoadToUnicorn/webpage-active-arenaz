import clsx from "clsx";
import { IMAGES_PATH } from "../../constants/images-path";

const {
    header: { logo },
} = IMAGES_PATH;

const Logo: React.FC<React.AnchorHTMLAttributes<object>> = ({
    className,
    ...props
}) => {
    return (
        <p
            className={clsx(
                "inline-flex w-full max-w-[220px] text-black focus:outline-none sm:text-white xl:max-w-[225px] 2xl:max-w-[235px] 3xl:max-w-[250px]",
                className
            )}
            {...props}
        >
            <img
                src={logo.image}
                alt={logo.alt}
                draggable={false}
                className="w-full h-full object-contain"
            />
        </p>
    );
};

export default Logo;
