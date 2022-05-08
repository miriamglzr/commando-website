import { Page } from "../../components/Page";
import { useAppCtx } from "../../context.tsx/Context";
import EditProduct from "../../components/EditProductModal";
import AddProductModal from "../../components/AddProductModal";
import { useEffect, useState } from "react";

export default function Menu() {
	const [products, setProducts] = useState<Product[] | undefined>(undefined);
	const productContext = useAppCtx();
	useEffect(() => {
		if (products === undefined) {
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
				<div className="row d-flex container">
					<div className="col d-flex justify-content-start mt-4">
						<h4>Menu</h4>
					</div>
					<div className="col d-flex justify-content-end">
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
