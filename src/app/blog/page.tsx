"use client";
import Link from "next/link";
import React from "react";
import { RxArrowRight } from "react-icons/rx";
import NProgress from "nprogress";

const page = () => {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      image:
        "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      image:
        "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      image:
        "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 4,
      title: "Boost your conversion rate Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      image:
        "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <div className="bg-white sm:pt-4 pb-12">
      <div className="max-w-screen-2xl mx-auto py-6 xl:px-40 md:px-16 px-10">
        <h2 className="text-gray-800 mx-auto font-medium text-center  leading-[40px]">
          <span className="text-primary">Resource Center</span>
        </h2>
        <p className="font-extralight mt-1 text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing fermentum ante eu
          dignissim pulvinar.
        </p>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-28">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="flex w-full items-center justify-between mt-4">
                <Link
                  href="/blog-details"
                  className="flex text-primary items-center gap-2 "
                  onClick={() => {
                    NProgress.start();
                  }}
                >
                  Learn More
                  <RxArrowRight />
                </Link>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
              <div className="relative mt-4 flex items-center gap-x-4 border- w-full py-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <nav aria-label="blog navigation" className="flex items-center justify-between mt-8">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white  border-e- rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
            </li>
          </ul>

          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 bg-blue-50 hover:bg-gray-100 hover:text-gray-700 ">1</a>
            </li>
            {/* <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10  text-gray-500  bg-white   hover:bg-blue-100 hover:text-blue-700">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">5</a>
            </li> */}
          </ul>
          <ul className="inline-flex -space-x-px text-base h-10">

            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default page;
