import axios from "axios";

export const addToCommunity = async (values) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/googleSheet/addJoinCommunityData`,
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
