import axios from "axios";

const API_BASE_URL = "https://backend.cayana.co.in/";

export interface ContactEnquiryPayload {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  city: string;
  message: string;
}

export const submitContactEnquiry = async (data: ContactEnquiryPayload) => {
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
