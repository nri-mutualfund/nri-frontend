"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import NProgress from "nprogress";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addNewsLetter, getAllCategories, getSectionBlog } from "../api/api";
import moment from "moment";
import { BlogPost, Category } from "@/utility/type";
import Loader from "@/components/Loader";
import CustomPagination from "@/components/CustomPagination";
import { toast } from "react-toastify";
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [category, setCategory] = useState<Category[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { mutate } = useMutation({
    mutationKey: ["addNewsLetter"],
    mutationFn: addNewsLetter,
    onSuccess: (data) => {
      toast("Submitted");
      formRef?.current?.reset();
    },
    onError: (error) => {
      console.log("error");
    },
  });
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log("data", data);
    mutate(data);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["blog", currentPage],
    queryFn: () => getSectionBlog(currentPage),
  });
  const { data: category, isLoading: isLoading2 } = useQuery({
    queryKey: ["blogCategory"],
    queryFn: () => getAllCategories(),
  });
  // useEffect(() => {
  //   getAllCategories().then((response: any) => {
  //     setCategory(response.data);
  //   });
  // }, []);

  return (
    <div className="max-w-screen-2xl mx-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white sm:pt-4 lg:py-10 pb-12">
          <div className="mx-auto xl:px-40 md:px-16 px-10 ">
            <div className="max-w-2xl mx-auto">
              <h1 className="my-4 text-justify">
                {/* {data?.pre_heading}{" "}
              <span className="text-text_dark">{data?.highlightned}</span>{" "}
              {data?.post_heading} */}
                Feed your brain in 5 minutes every week, for free.
              </h1>
              <div className="flex flex-col gap-x-8 gap-y-4 md:flex-row">
                <div className="w-[15%] border-t mt-6 border-gray-400"></div>
                <div className="pt-4 w-[85%]">
                  <h5 className="mb-4 text-justify">
                    Join over 650,000 subscribers of Brain Food and add timeless
                    insights and actionable ideas to your inbox.
                  </h5>
                  <h5 className="mt-4 mb-4 text-justify">
                    <strong>Bonus:</strong> Download the first chapter of my
                    instant New York Times bestseller, Clear Thinking, and start
                    turning ordinary moments into extraordinary results.
                  </h5>
                  <form onSubmit={submit} ref={formRef}>
                    <div className="flex gap-4 rounded-lg mt-3 w-full">
                      <label className="sr-only">Email</label>
                      <input
                        className="bg-transparent text_dark placeholder_dark outline-none w-full border border-text_light rounded-sm focus:ring-2 focus:ring-primary focus:border-none"
                        type="email"
                        placeholder="Enter your email"
                        id="Email"
                        name="email"
                        required
                      />
                      <button className="bg-primary text-white px-4 py-2  rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                        {" "}
                        Subscribe
                      </button>
                    </div>
                  </form>
                  {/* <div className="flex gap-4 rounded-lg mt-3 w-full">
                    <input
                      className="bg-transparent text_dark placeholder_dark outline-none w-full border border-text_light rounded-sm focus:ring-2 focus:ring-primary focus:border-none"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button className="bg-primary text-white px-4 py-2  rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                      {" "}
                      Subscribe
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="hidden md:block">
                <div className="w-[250px] xl:w-[280px] border shadow-md rounded-lg mt-28 ">
                  <div className="p-4 border-b">
                    <h3 className="">Categories</h3>
                  </div>
                  <div className="p-4">
                    {category?.map((item: Category, index: number) => (
                      <h5 key={index} className="mb-4">
                        {item?.category_name}
                      </h5>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mx-auto my-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6 lg:mt-28">
                <select className="block md:hidden w-2/3 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6 ">
                  <option value={""}>Categories</option>
                  {category?.map((item: Category, index: number) => (
                    <option key={index}>{item.category_name}</option>
                  ))}
                </select>

                {data?.data?.map((post: BlogPost, index: number) => (
                  <article
                    key={index}
                    className="flex max-w-xl flex-col items-center"
                  >
                    <div className="group relative h-64">
                      <Link
                        href={{
                          pathname: "/blog-details",
                          query: { id: post?.id },
                        }}
                        className="flex text-primary items-center gap-2"
                        onClick={() => {
                          NProgress.start();
                        }}
                      >
                        <h3 className="mt-3 group-hover:text-gray-600 mb-2">
                          <span className="absolute inset-0" />
                          {post.blog_heading}
                        </h3>
                      </Link>
                      <div className=" h-full overflow-hidden relative">
                        <div
                          className="line-clamp-5"
                          dangerouslySetInnerHTML={{ __html: post?.richText }}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between mt-4">
                      <Link
                        href={{
                          pathname: "/blog-details",
                          query: { id: post?.id },
                        }}
                        className="flex text-primary items-center gap-2"
                        onClick={() => {
                          NProgress.start();
                        }}
                      >
                        Learn More
                        <RxArrowRight />
                      </Link>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {post?.blogCategory?.category_name}
                      </span>
                    </div>
                    <div className="relative mt-4 flex justify-between items-center gap-x-4 border-t border-gray-300 w-full py-4">
                      <div className="flex gap-x-4">
                        <div className=" text-sm leading-6">
                          <h5 className="font-medium">
                            <span className="absolute inset-0" />
                            {post?.user_name}
                          </h5>
                        </div>
                      </div>
                      <p className="text-text_light text-sm">
                        {moment(post?.created_at).format("MMM DD, YYYY")}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mb-10 mx-auto py-6 xl:px-40 md:px-16 px-10">
        <CustomPagination
          currentPage={currentPage}
          total={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Page;
