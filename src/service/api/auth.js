import api_routes from "../api-routes";
import { fetchData } from "../networking";

export async function getLoginSession(data) {
  const response = await fetchData(api_routes.LOGIN, data, "POST", null);
  if (response?.success) {
    return response.access_token;
  }
  throw new Error("Error fetching data");
}
