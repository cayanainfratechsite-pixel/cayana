import { limit } from "@/lib/data";
import axios from "axios";

const API_BASE_URL = "https://backend.cayana.co.in/";


export const fetchJobPosts = async (page: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/job`, {
      params: {
        page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching job posts"
      );
    } else {
      throw new Error("An unknown error occurred while fetching job posts");
    }
  }
};




export const submitJobApplication = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/job/apply-job`, formData);
    return response;
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    alert("There was an error submitting your enquiry. Please try again later.");
  }
}


