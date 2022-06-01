import React from "react";

let ShoppingPage = (props) => {
	let data = props.items;

	let pictures = data.map((picture) => {
		return (
			<img
				src={Object.values(picture.image)}
				alt="pic"
				className="main-item-photo"
			></img>
		);
	});

	return (
		<div className="shopping-container">
			<h2>Shop {props.page}</h2>
			{pictures}
		</div>
	);
};
export default ShoppingPage;
