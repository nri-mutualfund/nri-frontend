import axios from "axios";

export const getSectionOne = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionOne`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionTwo = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionTwo`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionThree = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionThree`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionFour = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionFour`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionFive = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionFive`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionSix = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/testimonial`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionFAQ = async (query) => {
  try {
    // console.log('query', query)
    if (!query) query = "1";
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/faq?pageNumber=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSectionBlog = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/blog?pageNumber=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/blog/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPostData = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/blogCategory`,
      {}
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const addNewsLetter = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/googleSheet/addNewsletterData`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
