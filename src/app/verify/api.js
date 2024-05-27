import axios from 'axios'

export const createUser = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/signUp`,
      values
    )
    return response.data;
  } catch (error) {
    console.log(error)
  }
}