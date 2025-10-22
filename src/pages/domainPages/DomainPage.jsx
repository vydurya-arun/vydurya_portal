import React, { useState } from "react";
import PixelBlast from "../../components/ui/PixelBlast";
import ButtonV1 from "../../components/ButtonV1";
import { ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { domainprice } from "../../constants/domainConst";

const faqs = [
  {
    question: "What is a domain name?",
    answer: [
      "A domain name, or simply domain, is similar to a home address in real life. It’s how people find your site online – they enter the domain in a web browser or search engine.",
      "Hostinger.com is a domain, just like Google.com and Facebook.com. Ideally, a domain should be registered under the same name as the brand it’s representing.",
    ],
  },
  {
    question: "Why do I need a domain?",
    answer: [
      "A domain helps people find your website online and represents your brand identity.",
      "It makes your website look professional and trustworthy.",
    ],
  },
  {
    question: "How do I register a domain?",
    answer: [
      "You can register a domain through domain registrars or hosting providers.",
      "Choose a name that reflects your brand and is easy to remember.",
    ],
  },
];

const DomainPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h1 className="text-5xl mt-13 mb-3 w-[40%] text-center text-background font-bold">
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
                    <li className="text-xs text-white/70 line-through">
                      US$ {discount}
                    </li>
                    <li className="font-semibold text-lg">US$ {price}</li>
                  </ul>
                );
              })}
            </div>
            ;
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-4xl font-semibold text-[#00465F]">
          Choose from the most popular domains
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 py-3 space-y-2 w-[90%]">
            <img src="/images/com.png" alt="com" className="w-34" />
            <p>Build trust with the best-known domain names.</p>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              <p className="text-sm text-gray-800 line-through">
                US$ 6.99/1st yr
              </p>
              <div className="bg-pink-600 text-white rounded-full px-2 py-1">
                Save 80%
              </div>
            </div>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              US$<p className="text-2xl font-semibold">2.39</p>/year
            </div>

            <button className="bg-violet-600 text-background w-full rounded-lg h-12 text-xl">
              Register
            </button>
          </ul>
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 py-3 space-y-2 w-[90%]">
            <img src="/images/com.png" alt="com" className="w-34" />
            <p>Build trust with the best-known domain names.</p>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              <p className="text-sm text-gray-800 line-through">
                US$ 6.99/1st yr
              </p>
              <div className="bg-pink-600 text-white rounded-full px-2 py-1">
                Save 80%
              </div>
            </div>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              US$<p className="text-2xl font-semibold">2.39</p>/year
            </div>

            <button className="bg-violet-600 text-background w-full rounded-lg h-12 text-xl">
              Register
            </button>
          </ul>
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 py-3 space-y-2 w-[90%]">
            <img src="/images/com.png" alt="com" className="w-34" />
            <p>Build trust with the best-known domain names.</p>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              <p className="text-sm text-gray-800 line-through">
                US$ 6.99/1st yr
              </p>
              <div className="bg-pink-600 text-white rounded-full px-2 py-1">
                Save 80%
              </div>
            </div>
            <div className="flex justify-start w-full gap-3 items-center px-1">
              US$<p className="text-2xl font-semibold">2.39</p>/year
            </div>

            <button className="bg-violet-600 text-background w-full rounded-lg h-12 text-xl">
              Register
            </button>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center my-4 space-y-2">
        <h1 className="text-4xl font-semibold text-[#00465F]">
          Domain name search FAQs
        </h1>
        <p className="text-[#334F59] text-center">
          Find answers to frequently asked questions about our domain checker
          tool.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-[80%] flex items-center justify-start min-h-17 px-3 border-[1px] border-primary mb-4"
          >
            <div className="flex flex-col px-3 py-3 w-full">
              <div
                className="w-full flex justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <b>{faq.question}</b>
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </div>

              <div
                className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${openIndex === index
                    ? "max-h-[500px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-3"
                  }
              `}
              >
                {faq.answer.map((line, i) => (
                  <p key={i} className="mt-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainPage;
