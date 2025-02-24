import { limit } from "@/lib/data";
import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/v1";

export const fetchBlogs = async (page:number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog`, {
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
          "An error occurred while fetching blogs"
      );
    } else {
      throw new Error("An unknown error occurred while fetching blogs");
    }
  }
};



// Generic API response interface
export interface ApiResponse<T> {
  success: number;
  message: string;
  result: T;
}

// Updated Blog interface to match the API response
export interface Blog {
  _id: string;
  images: {
    cardImage: string;
    coverImage: string;
  };
  publisherName: string;
  title: string;
  content: string;
  approxReadTime: number;
  createdAt: string;
  updatedAt: string;
  publishedDate: string;
  modifiedDate: string;
}

// Fetch blog by ID
export const fetchBlogById = async (id: string): Promise<ApiResponse<Blog>> => {
  try {
    const response = await axios.get<ApiResponse<Blog>>(`${API_BASE_URL}/blog/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error fetching blog:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while fetching the blog");
  }
};


