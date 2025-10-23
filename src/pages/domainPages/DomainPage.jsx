import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import DomainHero from "../../components/mainwebsiteComponent/DomainHero";
import PopularDomain from "../../components/mainwebsiteComponent/PopularDomain";

const faqs = [
  {
    question: "What is a domain name?",
    answer: [
      "A domain name, or simply domain, is similar to a home address in real life. It's how people find your site online – they enter the domain in a web browser or search engine.",
      "Hostinger.com is a domain, just like Google.com and Facebook.com. Ideally, a domain should be registered under the same name as the brand it's representing.",
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      <DomainHero />

      <PopularDomain />

      <div className="flex flex-col items-center my-4 sm:my-6 md:my-8 space-y-2 sm:space-y-3 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00465F] text-center">
          Domain name search FAQs
        </h1>
        <p className="text-[#334F59] text-center text-sm sm:text-base max-w-2xl">
          Find answers to frequently asked questions about our domain checker
          tool.
        </p>

        <div className="w-full max-w-4xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-start min-h-15 sm:min-h-17 px-3 sm:px-4 border-[1px] border-primary mb-3 sm:mb-4"
            >
              <div className="flex flex-col px-2 sm:px-3 py-2 sm:py-3 w-full">
                <div
                  className="w-full flex justify-between items-center cursor-pointer gap-4"
                  onClick={() => toggleFaq(index)}
                >
                  <b className="text-sm sm:text-base md:text-lg flex-1">{faq.question}</b>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${
                      openIndex === index ? "rotate-180" : ""
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
                    <p key={i} className="mt-2 text-sm sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainPage;