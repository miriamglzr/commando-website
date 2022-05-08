type Product = {
	product_id: number;
	name: string;
	price: number;
	section_id: number;
	description: string;
	spicy_level: number;
	allergens: string[];
	diet: string[];
	type: string;
	image: string;
	// createdAt: string;
	// updatedAt: string;
};

type Table = string


var products: Product[];
var tables: Table[]