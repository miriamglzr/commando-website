import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import useSWR from "swr";

export type Product = {
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

export type AppContextInterface = {
	products: Product[];
	onProductCreated: (products: Product) => void;
	getProducts: () => void;
	updateProducts: () => void;
};

const AppCtx = createContext<AppContextInterface | null>(null);

export const AppCtxProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<Product[]>([]);

	const onProductCreated = async (product: Product) => {
		console.log("add", product);
		console.log(product);
		setProducts([...products, product]);

		const url = `/api/menu`;
		const data = await axios.post(url, product);
		console.log(data);
		setProducts(data?.data);
	};

	const getProducts = async () => {
		const url = `/api/menu`;
		const data = await axios.get(url);
		console.log(data);
		setProducts(data?.data);
	};

	const updateProducts = () => {
		console.log("update");
		return products;
	};

	return (
		<AppCtx.Provider
			value={{ products, onProductCreated, getProducts, updateProducts }}
		>
			{children}
		</AppCtx.Provider>
	);
};

export const useAppCtx = () => useContext(AppCtx);
