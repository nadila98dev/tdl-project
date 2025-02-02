import axios from "axios";
import { config } from "../../config";
import api_routes from "../api-routes";

const axiosInstance = {
  getAllDataBooks: async () => {
    try {
      const response = await axios.get(
        `${config.base_api}/${api_routes.BOOKS}`
      );
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch marketing data: ${error.message}`);
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      const response = await axios.get(
        `${config.base_api}/${api_routes.USERS}}`
      );
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch marketing data: ${error.message}`);
      throw error;
    }
  },
  getAllRentals: async () => {
    try {
      const response = await axios.get(
        `${config.base_api}/${api_routes.RENTALS}`
      );
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch marketing data: ${error.message}`);
      throw error;
    }
  },
};
