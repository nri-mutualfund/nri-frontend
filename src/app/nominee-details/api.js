import axios from "axios";

export const addNomineeDetails = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/nomineeDetails`,
      values,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getNomineeDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/nomineeDetails`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
