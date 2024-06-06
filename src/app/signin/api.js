import axios from 'axios'

export const signIn = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/signIn`,
      values
    )
    return response.data;
  } catch (error) {
    throw error;
  }
}