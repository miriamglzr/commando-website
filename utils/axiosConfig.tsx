import axios from "axios";

const baseUrl = "http://localhost:3000/api";

// ========================================================================================
export const axiosConfig = {
	get: async function (url: string, token = false) {
		const config = { headers: { "Content-type": "application/json" } };
		return await axios.get(baseUrl + url, config);
	},
	post: async function (url: string, body: any, token = false) {
		console.log("TIME TO POST AXIOS");
		const config = {
			headers: { "Content-type": "application/json" },
		};
		return await axios.post(baseUrl + url, body, config);
	},

	put: async function (url: string, body: any, token = false) {
		const config = {
			headers: { "Content-type": "application/json" },
		};
		return await axios.put(baseUrl + url, body, config);
	},
	delete: async function (url: string, token = false) {
		const config = {
			headers: { "Content-type": "application/json" },
		};
		console.log("axios deleted");
		return await axios.delete(baseUrl + url, config);
	},
};
