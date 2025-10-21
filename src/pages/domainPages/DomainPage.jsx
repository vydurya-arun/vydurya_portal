import React from "react";
import PixelBlast from "../../components/ui/PixelBlast";
import ButtonV1 from "../../components/ButtonV1";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { domainprice } from "../../constants/domainConst";
import ScrollFloat from "../../components/ui/ScrollFloat";


const DomainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className=" relative">
        <div className="w-full h-[65vh] bg-secondary mb-8">
          <PixelBlast
            variant="square"
            pixelSize={5}
            color="#66CEF5"
            patternScale={2}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent={true}
          />
        </div>

        <div className="flex flex-col items-center mx-15 absolute top-0 inset-1">
          <h1 className="text-5xl mt-13 mb-3 w-[40%] text-center text-background font-bold text-background">
            Domain name search buy a domain in minutes
          </h1>

          <div className="flex flex-col w-full items-center gap-4 my-6">
            <ButtonV1
              content="Domain search"
              classname="w-40 h-10 border-2 border-primary "
            />
            <div className="w-[50%] relative flex flex-row justify-center items-center border-2 border-primary bg-background">
              <input
                type="text"
                placeholder="Type the domain you want"
                className="h-15 w-[100%] border-none outline-none text-xl px-4"
              />
              <button
                onClick={() => navigate("/domain-search")}
                className="cursor-pointer bg-primary hover:bg-[#66CEF5] absolute right-0 h-full w-17 flex justify-center items-center"
              >
                <Search className="text-secondary" />
              </button>
            </div>
            <div className="flex gap-4">
              {domainprice.map((item) => {
                const { domain, discount, price } = item.price[0];
                return (
                  <ul
                    key={item.id}
                    className="text-white bg-[#334F59] hover:bg-[#3D5862] transition duration-300 ease-in rounded-lg px-4 py-2 text-center w-30"
                  >
                    <li className="font-semibold text-lg">{domain}</li>
                    <li className="text-xs text-white/70 line-through">US$ {discount}</li>
                    <li className="font-semibold text-lg">US$ {price}</li>
                  </ul>
                );
              })}
            </div>;
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03} 
          textClassName="" 
        >
          Choose from the most popular domains
        </ScrollFloat>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 py-3 space-y-2 w-[90%]">
            <img src="/images/com.png" alt="com" className="w-34"/>
            <p >Build trust with the best-known domain names.</p>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              <p className="text-sm text-gray-800 line-through">US$ 6.99/1st yr</p>
              <div className="bg-pink-600 text-white rounded-full px-2 py-1">Save 80%</div>
            </div>
            <div className="flex justify-start w-full gap-3 items-center px-1">US$<p className="text-2xl font-semibold">2.39</p>/year</div>
            
            <button className="bg-violet-600 text-background w-full rounded-lg h-12 text-xl">Register</button>
          </ul>
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 py-3 space-y-2 w-[90%]">
            <img src="/images/com.png" alt="com" className="w-34"/>
            <p >Build trust with the best-known domain names.</p>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              <p className="text-sm text-gray-800 line-through">US$ 6.99/1st yr</p>
              <div className="bg-pink-600 text-white rounded-full px-2 py-1">Save 80%</div>
            </div>
            <div className="flex justify-start w-full gap-3 items-center px-1">US$<p className="text-2xl font-semibold">2.39</p>/year</div>
            
            <button className="bg-violet-600 text-background w-full rounded-lg h-12 text-xl">Register</button>
          </ul>
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 py-3 space-y-2 w-[90%]">
            <img src="/images/com.png" alt="com" className="w-34"/>
            <p >Build trust with the best-known domain names.</p>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              <p className="text-sm text-gray-800 line-through">US$ 6.99/1st yr</p>
              <div className="bg-pink-600 text-white rounded-full px-2 py-1">Save 80%</div>
            </div>
            <div className="flex justify-start w-full gap-3 items-center px-1">US$<p className="text-2xl font-semibold">2.39</p>/year</div>
            
            <button className="bg-violet-600 text-background w-full rounded-lg h-12 text-xl">Register</button>
          </ul>
        </div>
      </div>

    </div>

  );
};

export default DomainPage;
