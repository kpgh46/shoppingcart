/* eslint-disable import/no-anonymous-default-export */
import outdoorOne from "./Assets/outdoor/pexels-ata-ebem-11021595.jpg";
import outdoorTwo from "./Assets/outdoor/pexels-marianne-238377.jpg";
import outdoorThree from "./Assets/outdoor/pexels-michael-burrows-7125620.jpg";
import outdoorFour from "./Assets/outdoor/pexels-skylar-kang-6430742.jpg";
import indoorOne from "./Assets/indoor/pexels-designecologist-1008692.jpg";
import indoorTwo from "./Assets/indoor/pexels-martin-péchy-1866149.jpg";
import indoorThree from "./Assets/indoor/pexels-mick-victor-1420902.jpg";
import indoorFour from "./Assets/indoor/pexels-pixabay-358572.jpg";
export default [
	{
		id: 1,
		type: "outdoor",
		title: "chair",
		price: 4,
		image: { outdoorOne },
	},
	{
		id: 2,
		type: "outdoor",
		title: "table",
		price: 7,
		image: { outdoorTwo },
	},
	{
		id: 3,
		type: "outdoor",
		title: "barstool",
		price: 2,
		image: { outdoorThree },
	},
	{
		id: 4,
		type: "outdoor",
		title: "couch",
		price: 8,
		image: { outdoorFour },
	},
	{
		id: 5,
		type: "indoor",
		title: "couch",
		price: 8,
		image: { indoorOne },
	},
	{
		id: 6,
		type: "indoor",
		title: "couch",
		price: 8,
		image: { indoorTwo },
	},
	{
		id: 7,
		type: "indoor",
		title: "couch",
		price: 8,
		image: { indoorThree },
	},
	{
		id: 8,
		type: "indoor",
		title: "couch",
		price: 8,
		image: { indoorFour },
	},
];
