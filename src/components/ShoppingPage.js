import React from "react";
import Item from "./Item";

let ShoppingPage = (props) => {
	let data = props.items.filter((item) => {
		return item.type === props.page;
	});

	let pictures = data.map((picture) => {
		return (
			<Item
				source={Object.values(picture.image)}
				title={picture.title}
				price={picture.price}
				type={picture.type}
				id={picture.id}
			/>
		);
	});

	return (
		<div>
			<h2>Shop {props.page}</h2>
			<div className="shopping-container">{pictures}</div>
		</div>
	);
};
export default ShoppingPage;
