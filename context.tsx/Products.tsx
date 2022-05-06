import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import useSWR from "swr";

export type Product = {
	product_id: number;
	name: string;
	price: number;
	section: string;
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
};

const AppCtx = createContext<AppContextInterface | null>(null);

export const AppCtxProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<Product[]>([]);

	const onProductCreated = async (product: Product) => {
		setProducts([...products, product]);

		const url = `/api/menu`;
		const data = await axios.post(url, product);
		setProducts(data.data);
	};

	const fetcher = async (url: string) => await axios.get(url);

	const url = `/api/menu`;

	const { data } = useSWR(url, fetcher);
	console.log(data?.data);
	// setProducts(data?.data);

	return (
		<AppCtx.Provider
			value={{ products: products ?? data?.data, onProductCreated }}
		>
			{children}
		</AppCtx.Provider>
	);
};

export const useAppCtx = () => useContext(AppCtx);
