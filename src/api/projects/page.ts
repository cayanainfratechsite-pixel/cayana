import axios from "axios";
import { limit } from "@/lib/data";
const API_BASE_URL = "https://backend.cayana.co.in/api/v1";

export interface ProjectEnquiryPayload {
  category: string;
  projectId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  date: string;
  time: string;
}

export const submitProjectEnquiry = async (data: ProjectEnquiryPayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/enquiry/add`, data);
    return response;
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    alert(
      "There was an error submitting your enquiry. Please try again later."
    );
  }
};

export const fetchProjects = async (page: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/project/getAll`, {
      params: {
        page,
        limit: limit,
      },
        headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching applications"
      );
    } else {
      throw new Error("An unknown error occurred while fetching applications");
    }
  }
};
