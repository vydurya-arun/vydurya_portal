import React from 'react'

const PopularDomain = () => {
  return (
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
  )
}

export default PopularDomain