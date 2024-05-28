import axios from 'axios'

export const addDetails = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/kycDetails`,
      values,
      {
       headers:  { Authorization: `Bearer ${localStorage.getItem("token")}`}
      }
    )
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}