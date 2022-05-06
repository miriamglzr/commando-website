import React from "react";
import { Avatar, Tooltip, Card } from "antd";
import { allergenIcons } from "../database/allergens";
//import { StaticImageData } from "next/image";

type Allergen = {
	id: number;
	name: string;
	icon: StaticImageData;
};

type StaticImageData = {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
};

const peppers = (value: number) => {
	switch (value) {
		case 1:
			return <span className="ml-2">🌶️</span>;

		case 2:
			return <span className="row ml-2">🌶️🌶️</span>;

		case 3:
			return <span className="row ml-2">🌶️🌶️🌶️</span>;
		default:
			break;
	}
};

const itemAllergens = (values: any) => {
	return (
		<span>
			{values.map((tag: any) => {
				//let icon: StaticImageData;
				allergenIcons.map((allergen) => {
					if (tag === allergen.name) {
						return (
							<Tooltip title={tag} key={allergen.id}>
								<img
									width={24}
									src={allergen.icon.src}
									alt={allergen.name}
									data-tooltip={allergen.name}
									className="ml-1"
								/>
							</Tooltip>
						);
					}
				});
			})}
		</span>
	);
};

export default function ItemCard({ item }: { item: Product }) {
	return (
		<Card
			key={item.product_id}
			style={{ width: "200px", padding: 0 }}
			onClick={() => console.log(item.name)}
			hoverable
		>
			<div style={{ width: "100%" }}>
				<Avatar
					src={item.image}
					alt={item.name}
					className="item-img"
					//fallback="https://as2.ftcdn.net/v2/jpg/02/73/82/69/1000_F_273826938_g3zTc4k5UtVsYDgZnPyVkzR6WEmyeuhB.jpg"
					style={{ height: 100, width: 100 }}
				/>
			</div>
			<Card.Meta
				title={item.name}
				description={
					<div className="row">
						<div className="col item-col-description">
							<div className="row">
								<span className="row item-name">
									{peppers(item.spicy_level)}
								</span>

								<span>{item.price} €</span>
							</div>

							<p className="item-description">
								{item.description.length > 50
									? item.description.substring(0, 50).concat("...")
									: item.description}
							</p>
							<span>{itemAllergens(item.allergens)}</span>
						</div>
					</div>
				}
			/>
		</Card>
	);
}
