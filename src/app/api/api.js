import axios from 'axios'

export const getSectionOne = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionOne`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionTwo = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionTwo`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionThree = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionThree`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionFour = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionFour`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionFive = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/SectionFive`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionSix = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/testimonial`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionFAQ = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/faq`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getSectionBlog = async (values) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/blog`,
      values
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getPostData = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
