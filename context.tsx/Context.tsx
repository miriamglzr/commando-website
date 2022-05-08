import { createContext, ReactNode, useContext, useState } from "react";
import { axiosConfig } from "../utils/axiosConfig";

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
export type AppNotification = {
	message: string;
	type: string;
	open: boolean;
};

export type AppContextInterface = {
	products: Product[];
	appNotification: AppNotification;
	onProductCreated: (products: Product) => void;
	getProducts: () => void;
	updateProducts: () => void;
	onProductUpdated: (products: Product) => void;
	sendNotification: (notification: string, severity: string) => void;
	clearNotifications: () => void;
};

const AppCtx = createContext<AppContextInterface | null>(null);

export const AppCtxProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [appNotification, setAppNotification] = useState<AppNotification>({
		message: "",
		type: "info",
		open: false,
	});

	const onProductCreated = async (product: Product) => {
		setProducts([...products, product]);

		const url = `/products`;
		const data = await axiosConfig.post(url, product);
		await sendNotification("Product Created", "success");

		setProducts(data?.data);
	};
	const onProductUpdated = async (product: Product) => {
		const url = `/products`;
		const data = await axiosConfig.put(url, product);
		await sendNotification("Product Updated", "success");

		setProducts(data?.data);
	};

	const getProducts = async () => {
		const url = `/products`;
		const data = await axiosConfig.get(url);
		setProducts(data?.data);
	};

	const updateProducts = () => {
		return products;
	};
	const sendNotification = (notification: string, severity: string) => {
		setAppNotification({
			message: notification,
			type: severity,
			open: true,
		});
	};

	const clearNotifications = () => {
		setAppNotification({
			message: "",
			type: "info",
			open: false,
		});
	};

	return (
		<AppCtx.Provider
			value={{
				products,
				onProductCreated,
				getProducts,
				updateProducts,
				onProductUpdated,
				sendNotification,
				clearNotifications,
				appNotification,
			}}
		>
			{children}
		</AppCtx.Provider>
	);
};

export const useAppCtx = () => useContext(AppCtx);
