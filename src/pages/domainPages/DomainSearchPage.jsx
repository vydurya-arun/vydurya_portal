
import ButtonV1 from "../../components/ButtonV1";
import { CircleAlert, Search, Star } from "lucide-react";

const DomainSearchPage = () => {
    return (
        <div className="flex flex-col items-center mx-15">
            <h1 className="text-5xl text-secondary font-bold mt-13 mb-3 w-[40%] text-center">
                Domain name search buy a domain in minutes
            </h1>

            <div className="flex flex-col w-full items-center gap-4 my-6">
                <ButtonV1 content="Domain search" classname="w-40 h-10" />
                <div className="w-[50%] relative flex flex-row justify-center items-center border-2 border-secondary">
                    <input
                        type="text"
                        placeholder="Type the domain you want"
                        className="h-15 w-[100%] border-none outline-none text-xl px-4"
                    />
                    <button className="cursor-pointer bg-secondary hover:bg-secondary_lite absolute right-0 h-full w-17 flex justify-center items-center">
                        <Search className="text-primary" />
                    </button>
                </div>
            </div>
            <div className="w-[80%] flex items-center justify-start h-17 px-3 border-[1px] border-primary  mb-4 hover:shadow-md hover:shadow-black/20 transition-shadow duration-300">
                <div className="flex gap-2">
                    <CircleAlert />
                    <b>codevero.com is already taken.</b> We found a great alternative
                    just for you!
                </div>
            </div>

            <div className="w-[80%] my-6">
                <h2 className="text-start font-semibold">More option</h2>
                <div className="flex gap-2 my-3">
                    <button className="flex justify-center items-center gap-1 border-[1px] border-primary rounded-full px-2 py-1 text-primary"><Star className="w-4 " />popular</button>
                    <button className="flex justify-center items-center gap-1 border-[1px] border-primary rounded-full px-2 py-1 text-primary"><Star className="w-4 " />popular</button>
                </div>
            </div>

            <div className="w-[80%] flex items-center justify-between h-17 px-3 border-b-[1px] hover:border-[1px] border-primary bg-background hover:bg-[#BFF2FF] transition duration-300 ease-in mb-4">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg">codevero.tech</p>
                    <div className="bg-pink-600 text-white rounded-full px-2 py-1">Save 80%</div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-800 line-through">US$ 6.99/1st yr</p>
                    <p className="font-semibold text-lg">US$ 6.99/1st yr</p>
                    <button className="border-[1px] border-secondary rounded-md w-30 h-10 hover:bg-secondary hover:text-white transition duration-500 ease-in-out ">Buy now</button>
                </div>
            </div>
            <div className="w-[80%] flex items-center justify-between h-17 px-3 border-b-[1px] hover:border-[1px] border-primary bg-background hover:bg-[#BFF2FF] transition duration-300 ease-in mb-4">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg">codevero.tech</p>
                    <div className="bg-red-500 text-white rounded-full px-2 py-1">Save 80%</div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-800 line-through">US$ 6.99/1st yr</p>
                    <p className="font-semibold text-lg">US$ 6.99/1st yr</p>
                    <button className="border-[1px] border-secondary rounded-md w-30 h-10 hover:bg-secondary hover:text-white transition ease-in-out delay-150 ">Buy now</button>
                </div>
            </div>
            <div className="w-[80%] flex items-center justify-between h-17 px-3 border-b-[1px] hover:border-[1px] border-primary bg-background hover:bg-[#BFF2FF] transition duration-300 ease-in mb-4">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg">codevero.tech</p>
                    <div className="bg-red-500 text-white rounded-full px-2 py-1">Save 80%</div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-800 line-through">US$ 6.99/1st yr</p>
                    <p className="font-semibold text-lg">US$ 6.99/1st yr</p>
                    <button className="border-[1px] border-secondary rounded-md w-30 h-10 hover:bg-secondary hover:text-white transition ease-in-out delay-150 ">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default DomainSearchPage