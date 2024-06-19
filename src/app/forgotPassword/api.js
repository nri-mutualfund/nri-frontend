import axios from "axios";

export const forgotPassword = async(email)=>{
    try {
        console.log(email, 'bnbnm')
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/forgotPassword`,
            {email}
            );
          return response.data;
    } catch (error) {
    console.log(error);
    throw error; 
    }
}
export const changePassword = async(data)=>{
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/verifyForgotPasswordOtp`,
            data
            );
          return response.data;
    } catch (error) {
        console.log(error);
        throw error; 
    }
}