import axios from "axios";

// settings/profile
export const getProfilegDataInSettings = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/settings/profile`,
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