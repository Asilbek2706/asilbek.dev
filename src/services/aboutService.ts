import type {AboutData, ApiResponse} from "../types";
import api from "../api/axios.ts";

export const getAboutInfo = async (): Promise<AboutData> => {
    const response = await api.get<ApiResponse<AboutData>>('/about/');
    return response.data.data[0];
};

export class getAboutData {
}