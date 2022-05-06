// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fakeMenu from "../../database/fakeMenu.json";

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
	image?: string;
};

globalThis.products = fakeMenu;

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Product[]>
) {
	if (req.method === "POST" && req.body) {
		globalThis.products.push(req.body);
		res.status(201).json(products);
	} else {
		res.status(200).json(products);
	}
}
