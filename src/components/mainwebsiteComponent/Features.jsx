import React from "react";
import ButtonV1 from "../ButtonV1";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Features = () => {
    return (
        <div className="my-10 mx-15 space-y-4">
            <div className="flex flex-row justify-between items-center w-full">
                <img src="/images/websitePrew.png" alt="" />
                <div className="w-[65%] px-10 space-y-13">
                    <div className="space-y-3">
                        <ButtonV1 content="website builder" classname="text-sm h-8" />
                        <h2 className="text-5xl font-medium">
                            Make your website in minutes
                        </h2>
                        <p>
                            Just describe your idea – AI Website Builder will create your
                            layout, images, and text. Then use the drag-and-drop editor to
                            customize. Whether it's an online store or a blog, you’ll be live
                            in moments.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-3 border-secondary py-2 hover:text-primary transition duration-150 ease-in-out">
                        <Link to="#" className="text-3xl font-medium">
                            Create with Website Builder
                        </Link>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <img src="/images/websitePrew.png" alt="" />
                <div className="w-[65%] px-10 space-y-13">
                    <div className="space-y-3">
                        <ButtonV1 content="website builder" classname="text-sm h-8" />
                        <h2 className="text-5xl font-medium">
                            Make your website in minutes
                        </h2>
                        <p>
                            Just describe your idea – AI Website Builder will create your
                            layout, images, and text. Then use the drag-and-drop editor to
                            customize. Whether it's an online store or a blog, you’ll be live
                            in moments.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-3 border-secondary py-2 hover:text-primary transition duration-150 ease-in-out">
                        <Link to="#" className="text-3xl font-medium">
                            Create with Website Builder
                        </Link>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <img src="/images/websitePrew.png" alt="" />
                <div className="w-[65%] px-10 space-y-13">
                    <div className="space-y-3">
                        <ButtonV1 content="website builder" classname="text-sm h-8" />
                        <h2 className="text-5xl font-medium">
                            Make your website in minutes
                        </h2>
                        <p>
                            Just describe your idea – AI Website Builder will create your
                            layout, images, and text. Then use the drag-and-drop editor to
                            customize. Whether it's an online store or a blog, you’ll be live
                            in moments.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-3 border-secondary py-2 hover:text-primary transition duration-150 ease-in-out">
                        <Link to="#" className="text-3xl font-medium">
                            Create with Website Builder
                        </Link>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
