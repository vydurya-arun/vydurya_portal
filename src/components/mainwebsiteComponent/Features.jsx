import React from "react";
import ButtonV1 from "../ButtonV1";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Features = () => {
    return (
        <div className="my-10 mx-4 md:mx-8 lg:mx-15 space-y-8 lg:space-y-4">
            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
                <img 
                    src="/images/websitePrew.png" 
                    alt="Website preview" 
                    className="w-full lg:w-auto max-w-md mx-auto lg:max-w-none"
                />
                <div className="w-full lg:w-[65%] px-4 lg:px-10 space-y-8 lg:space-y-13">
                    <div className="space-y-3 text-center lg:text-left">
                        <ButtonV1 content="website builder" classname="text-sm h-8 mx-auto lg:mx-0" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                            Make your website in minutes
                        </h2>
                        <p className="text-base md:text-lg">
                            Just describe your idea – AI Website Builder will create your
                            layout, images, and text. Then use the drag-and-drop editor to
                            customize. Whether it's an online store or a blog, you'll be live
                            in moments.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-3 border-secondary py-2 hover:text-primary transition duration-150 ease-in-out">
                        <Link to="#" className="text-xl md:text-2xl lg:text-3xl font-medium">
                            Create with Website Builder
                        </Link>
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
                <img 
                    src="/images/websitePrew.png" 
                    alt="Website preview" 
                    className="w-full lg:w-auto max-w-md mx-auto lg:max-w-none"
                />
                <div className="w-full lg:w-[65%] px-4 lg:px-10 space-y-8 lg:space-y-13">
                    <div className="space-y-3 text-center lg:text-left">
                        <ButtonV1 content="website builder" classname="text-sm h-8 mx-auto lg:mx-0" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                            Make your website in minutes
                        </h2>
                        <p className="text-base md:text-lg">
                            Just describe your idea – AI Website Builder will create your
                            layout, images, and text. Then use the drag-and-drop editor to
                            customize. Whether it's an online store or a blog, you'll be live
                            in moments.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-3 border-secondary py-2 hover:text-primary transition duration-150 ease-in-out">
                        <Link to="#" className="text-xl md:text-2xl lg:text-3xl font-medium">
                            Create with Website Builder
                        </Link>
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
                <img 
                    src="/images/websitePrew.png" 
                    alt="Website preview" 
                    className="w-full lg:w-auto max-w-md mx-auto lg:max-w-none"
                />
                <div className="w-full lg:w-[65%] px-4 lg:px-10 space-y-8 lg:space-y-13">
                    <div className="space-y-3 text-center lg:text-left">
                        <ButtonV1 content="website builder" classname="text-sm h-8 mx-auto lg:mx-0" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                            Make your website in minutes
                        </h2>
                        <p className="text-base md:text-lg">
                            Just describe your idea – AI Website Builder will create your
                            layout, images, and text. Then use the drag-and-drop editor to
                            customize. Whether it's an online store or a blog, you'll be live
                            in moments.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-3 border-secondary py-2 hover:text-primary transition duration-150 ease-in-out">
                        <Link to="#" className="text-xl md:text-2xl lg:text-3xl font-medium">
                            Create with Website Builder
                        </Link>
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;