import {API_URL} from "../config";

export const API = {
    fetchRewards: async function () {
        const response = await fetch(`${API_URL}/rewards`);
        return await response.json();
    }
}