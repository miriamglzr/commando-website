import { Button } from "antd";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { motion } from "framer-motion";
import ItemCard from "../../Components/ItemCard";
import { Page } from "../../Components/Page";
import { useAppCtx } from "../../context.tsx/Products";
import fakeMenu from "../../database/fakeMenu.json";
import { AddProduct } from "../../Components/layout.styles";
import Link from "next/link";
import EditProduct from "../../Components/EditProductModal";
import AddProductModal from "../../Components/AddProductModal";

export const getStaticProps: GetStaticProps = async () => {
	const data = fakeMenu;

	return {
		props: {
			products: data,
		},
	};
};

export default function Menu({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	// console.log("products", products);
	// console.log(products);
	return (
		<Page>
			<div className="row d-flex">
				<div className="col d-flex justify-content-start">
					<Link href="/">
						<a>Go back</a>
					</Link>
				</div>
				<h4 className="col">Menu</h4>
				<div className="col d-flex justify-content-end">
					<AddProductModal />
				</div>
			</div>
			<div
				className="container row mt-2 d-flex justify-content-between"
				style={{ height: 200, display: "block" }}
			>
				{products.map((product: Product, i: number) => {
					return (
						<div key={i} className="col-md-3 col-sm-6 col-xs-12 m-2">
							<EditProduct data={product} />
						</div>
					);
				})}
			</div>
		</Page>
	);
}
