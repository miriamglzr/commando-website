import { Button } from "antd";
import {
	InferGetStaticPropsType,
	GetStaticProps,
	GetServerSidePropsResult,
} from "next";
import { motion } from "framer-motion";
import ItemCard from "../../Components/ItemCard";
import { Page } from "../../Components/Page";
import { useAppCtx } from "../../context.tsx/Products";
import fakeMenu from "../../database/fakeMenu.json";
import { AddProduct } from "../../Components/layout.styles";
import Link from "next/link";
import EditProduct from "../../Components/EditProductModal";
import AddProductModal from "../../Components/AddProductModal";
import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";

interface IndexMenuProps {
	products: Product[] | undefined;
}

// export async function getServerSideProps(): Promise<
// 	GetServerSidePropsResult<IndexMenuProps>
// > {
// 	const productContext = useAppCtx();
// 	return {
// 		props: { products: productContext?.getProducts() },
// 	};
// }

export default function Menu() {
	const [products, setProducts] = useState<Product[] | undefined>(undefined);
	const productContext = useAppCtx();
	useEffect(() => {
		if (products === undefined) {
			console.log("get products");
			productContext?.getProducts();
			setProducts(productContext?.products);
		} else {
			productContext?.updateProducts();
			setProducts(productContext?.products);
		}
	}, [productContext?.updateProducts]);

	return (
		<Page>
			<title>Mando | Menu</title>
			<div className="col">
				<div className="d-flex container justify-content-end">
					<div className="d-flex justify-content-end">
						<AddProductModal />
					</div>
				</div>
				<div className="container row" style={{ padding: 0, maxWidth: "90%" }}>
					<div
						className="container  row mt-2 d-flex justify-content-between"
						style={{ height: 200, display: "block" }}
					>
						{products?.map((product: Product, i: number) => {
							return (
								<div key={i} className="col-md-3 col-sm-6 col-xs-12 m-2">
									<EditProduct data={product} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Page>
	);
}
