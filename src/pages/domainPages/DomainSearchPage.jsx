import ButtonV1 from "../../components/ButtonV1";
import { CircleAlert, Search, Star } from "lucide-react";

const DomainSearchPage = () => {
    return (
        <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-15">
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary font-bold mt-8 sm:mt-10 md:mt-13 mb-3 w-full md:w-[80%] lg:w-[60%] xl:w-[40%] text-center">
                Domain name search buy a domain in minutes
            </h1>

            {/* Search Section */}
            <div className="flex flex-col w-full items-center gap-4 my-4 sm:my-5 md:my-6">
                <ButtonV1 content="Domain search" classname="w-32 sm:w-36 md:w-40 h-8 sm:h-9 md:h-10" />
                <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] relative flex flex-row justify-center items-center border-2 border-secondary">
                    <input
                        type="text"
                        placeholder="Type the domain you want"
                        className="h-12 sm:h-13 md:h-15 w-full border-none outline-none text-base sm:text-lg md:text-xl px-3 sm:px-4"
                    />
                    <button className="cursor-pointer bg-secondary hover:bg-secondary_lite absolute right-0 h-full w-12 sm:w-14 md:w-17 flex justify-center items-center">
                        <Search className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>
            </div>

            {/* Alert Banner */}
            <div className="w-full sm:w-[90%] md:w-[80%] flex items-center justify-start h-12 sm:h-14 md:h-17 px-3 border-[1px] border-primary mb-3 sm:mb-4 hover:shadow-md hover:shadow-black/20 transition-shadow duration-300">
                <div className="flex gap-2 items-center text-sm sm:text-base">
                    <CircleAlert className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span><b>codevero.com is already taken.</b> We found a great alternative just for you!</span>
                </div>
            </div>

            {/* More Options */}
            <div className="w-full sm:w-[90%] md:w-[80%] my-4 sm:my-5 md:my-6">
                <h2 className="text-start font-semibold text-lg sm:text-xl">More options</h2>
                <div className="flex flex-wrap gap-2 my-3">
                    <button className="flex justify-center items-center gap-1 border-[1px] border-primary rounded-full px-2 py-1 text-primary text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                        popular
                    </button>
                    <button className="flex justify-center items-center gap-1 border-[1px] border-primary rounded-full px-2 py-1 text-primary text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                        popular
                    </button>
                </div>
            </div>

            {/* Domain Results */}
            <div className="w-full sm:w-[90%] md:w-[80%] space-y-3 sm:space-y-4 mb-7">
                {/* Domain Item 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-17 p-3 border-b-[1px] hover:border-[1px] border-primary bg-background hover:bg-[#BFF2FF] transition duration-300 ease-in gap-3 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-base sm:text-lg">codevero.tech</p>
                        <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs">Save 80%</div>
                    </div>
                    <div className="flex items-center gap-2 justify-between sm:justify-end">
                        <div className="flex items-center gap-2">
                            <p className="text-xs text-gray-800 line-through hidden sm:block">US$ 6.99/1st yr</p>
                            <p className="font-semibold text-base sm:text-lg">US$ 6.99/1st yr</p>
                        </div>
                        <button className="border-[1px] border-secondary rounded-md w-20 sm:w-24 md:w-30 h-8 sm:h-9 md:h-10 hover:bg-secondary hover:text-white transition duration-500 ease-in-out text-sm sm:text-base">
                            Buy now
                        </button>
                    </div>
                </div>

                {/* Domain Item 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-17 p-3 border-b-[1px] hover:border-[1px] border-primary bg-background hover:bg-[#BFF2FF] transition duration-300 ease-in gap-3 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-base sm:text-lg">codevero.tech</p>
                        <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">Save 80%</div>
                    </div>
                    <div className="flex items-center gap-2 justify-between sm:justify-end">
                        <div className="flex items-center gap-2">
                            <p className="text-xs text-gray-800 line-through hidden sm:block">US$ 6.99/1st yr</p>
                            <p className="font-semibold text-base sm:text-lg">US$ 6.99/1st yr</p>
                        </div>
                        <button className="border-[1px] border-secondary rounded-md w-20 sm:w-24 md:w-30 h-8 sm:h-9 md:h-10 hover:bg-secondary hover:text-white transition ease-in-out delay-150 text-sm sm:text-base">
                            Buy now
                        </button>
                    </div>
                </div>

                {/* Domain Item 3 */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-17 p-3 border-b-[1px] hover:border-[1px] border-primary bg-background hover:bg-[#BFF2FF] transition duration-300 ease-in gap-3 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-base sm:text-lg">codevero.tech</p>
                        <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">Save 80%</div>
                    </div>
                    <div className="flex items-center gap-2 justify-between sm:justify-end">
                        <div className="flex items-center gap-2">
                            <p className="text-xs text-gray-800 line-through hidden sm:block">US$ 6.99/1st yr</p>
                            <p className="font-semibold text-base sm:text-lg">US$ 6.99/1st yr</p>
                        </div>
                        <button className="border-[1px] border-secondary rounded-md w-20 sm:w-24 md:w-30 h-8 sm:h-9 md:h-10 hover:bg-secondary hover:text-white transition ease-in-out delay-150 text-sm sm:text-base">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainSearchPage