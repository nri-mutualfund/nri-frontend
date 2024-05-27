import axios from 'axios'

export const verifyEmail = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/sendmailForVerification`,
      values
    )
    return response.data;
  } catch (error) {
    console.log(error)
  }
}