import axios from 'axios'

export const addDetails2 = async (values) => {
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
export const getDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/kycDetails`,
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