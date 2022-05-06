export const checkProduct = {
	add: async function (product: Product) {
		console.log("check my product");
		if (product.name === "") {
			return "There was an error";
		}
		if (!product.allergens) {
			product.allergens = [];
		}
		if (!product.diet) {
			product.diet = [];
		}
		if (!product.image) {
			product.image = "";
		}
		if (!product.price) {
			return "Please Select Price";
		} else if (product.price) {
			product.price = Number(product.price);
		}
		if (!product.type) {
			product.type = "food";
		} else if (product.type) {
			product.type = product.type[0];
		}
		if (!product.spicy_level) {
			product.spicy_level = 0;
		} else if (product.spicy_level) {
			product.spicy_level = Number(product.spicy_level);
		}
		return await product;
	},
	post: async function (body: Product) {
		//(url, body, token = false) {
		// const config = {
		//   headers: { 'Content-type': 'application/json' },
		// };
		// if (token) {
		//   if (localStorage.token) {
		//     setAuthToken(localStorage.token);
		//   }
		// }
		return await body; //axios.post(baseUrl + url, body, config);
	},
};
