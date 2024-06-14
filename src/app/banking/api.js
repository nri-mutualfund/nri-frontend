import axios from "axios";

export const createBankAccount = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/googleSheet/addCreateBankData`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
