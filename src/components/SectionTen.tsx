import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const SectionTen = () => {
  return (
    <>
          <section className="px-4 md:px-20 lg:px-40 py-14 md:py-24 md:hidden block">
        <div
          className="bg-cover bg-center bg-no-repeat rounded-[30px] drop-shadow-md"
          style={{ backgroundImage: "url('/assets/community2.png')" }}
        >
          <div className="flex justify-center items-center p-3">
            <div>
              <p className="text-lg  text-center max-w-[250px] text-[#111827]">
                Join our Whatsapp community of NRI/OCIs like you
              </p>
              <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <FaWhatsapp size={20} color="#fff" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-20 lg:px-40 py-14 md:py-24  hidden md:block ">
        <div
          className="bg-cover bg-center bg-no-repeat rounded-[30px] py-8 drop-shadow-md lg:py-16"
          style={{ backgroundImage: "url('/assets/community2.png')" }}
        >
          <div className="flex justify-center items-center h-full">
            <div>
              <p className="font-semibold text-xl text-center max-w-[320px] text-[#111827]">
                Join our Whatsapp community of NRI/OCIs like you
              </p>
              <button className="flex gap-2 mx-auto px-6 items-center mt-6 py-2 rounded-md bg-primary  text-white focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <FaWhatsapp size={20} color="#fff" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionTen