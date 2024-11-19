import { IMAGES_PATH } from "../../../constants/images-path";

const {
    downloadApp: { mobilePreview, downloadButtons, logo },
} = IMAGES_PATH;

const DownloadApp = () => {
    return (
        <div className="bg-white">
            <div className="container-fluid grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center">
                    <div className="mt-12 md:mt-28">
                        <div className="md:pl-20">
                            <h2 className="text-5xl md:text-7xl font-semibold text-[#313131]">
                                Download <br /> App
                            </h2>
                            <p className="text-lg text-[#575757] md:w-10/12 my-6 ">
                                Download the Active Arenaz App from PlayStore or
                                App Store and let the game begin!
                            </p>
                        </div>
                        <div>
                            <img
                                src={downloadButtons.image}
                                alt={downloadButtons.alt}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <img src={mobilePreview.image} alt={mobilePreview.alt} />
                </div>
            </div>

            <div className="md:-mt-36" />

            <div className="relative max-w-[1440px] hidden md:block">
                <img
                    src={logo.image}
                    alt={logo.alt}
                    className="!-z-10 translate-y-36"
                    draggable={false}
                />
            </div>
        </div>
    );
};
export default DownloadApp;
