import React from 'react'
import FAQ from './FAQ'
import {DataItem} from "../utility/type"
interface SectionEightProps {
  data: DataItem[];
}
const SectionEight = ({data}: SectionEightProps) => {
  return (
    <section className=" px-4 md:px-20 lg:px-40 py-14 md:py-24">
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-gray-800 mx-auto  font-medium  leading-[40px] text-center">
        Frequently <span className="text-primary">Asked</span> Questions
      </h2>
      <p className="font-extralight mt-1 text-sm text-center">
        Learn about us and check out these frequently asked questions.
      </p>
    </div>
{data?.length&&  <div className="flex flex-wrap justify-between gap-6 mt-10">
      <div className="w-full md:w-[45%] text-right">
        <div className="flex flex-col gap-6">
          <FAQ question={data[0]?.question} answer={data[0]?.answer} />
          <FAQ question={data[2]?.question} answer={data[2]?.answer} />
           <FAQ question={data[4]?.question} answer={data[4]?.answer} />
        </div>
      </div>
      <div className="w-full md:w-[45%] text-right">
        <div className="flex flex-col gap-6">
        <FAQ question={data[1]?.question} answer={data[1]?.answer} />
          <FAQ question={data[3]?.question} answer={data[3]?.answer} />
           <FAQ question={data[5]?.question} answer={data[5]?.answer} />
        </div>
      </div>
    </div>}
    <div className=" flex justify-center items-center w-full py-10">
      <button className="px-12  py-2  text-white  bg-primary rounded-md shadow active:bg-primary focus:outline-none ease transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        View All
      </button>
    </div>
  </section>
  )
}

export default SectionEight