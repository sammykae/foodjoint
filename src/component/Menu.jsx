import React from "react";
import FoodCard from "./FoodCard";
import potato from "../assets/images/potato.png";
import beef_rice from "../assets/images/beef_rice.png";
import chicken_fried from "../assets/images/chicken_fried.png";
import beef_jollof from "../assets/images/beef_jollof.png";
import chicken_jollof from "../assets/images/chicken_jollof.png";
import some from "../assets/images/some.png";

const Menu = () => {
	const menuItems = [
		{
			img: potato,
			name: "Potato chips with Chicken",
			eatery: "Green Leaf Eatery",
			price: "25.00",
			status: false,
			openTime: "11:00 am",
			closeTime: "10:00 pm",
		},
		{
			img: beef_rice,
			name: "Beef fried rice",
			eatery: "Green Leaf Eatery",
			price: "25.00",
			status: false,
			openTime: "11:00 am",
			closeTime: "10:00 pm",
		},
		{
			img: chicken_fried,
			name: "Chicken fried rice",
			eatery: "Green Leaf Eatery",
			price: "25.00",
			status: false,
			openTime: "11:00 am",
			closeTime: "10:00 pm",
		},
		{
			img: beef_jollof,
			name: "Beef Jollof rice",
			eatery: "Green Leaf Eatery",
			price: "25.00",
			status: false,
			openTime: "11:00 am",
			closeTime: "10:00 pm",
		},
		{
			img: chicken_jollof,
			name: "Chicken Jollof rice",
			eatery: "Green Leaf Eatery",
			price: "25.00",
			status: false,
			openTime: "11:00 am",
			closeTime: "10:00 pm",
		},
		{
			img: some,
			name: "Potato chips with Chicken",
			eatery: "Green Leaf Eatery",
			price: "25.00",
			status: false,
			openTime: "11:00 am",
			closeTime: "10:00 pm",
		},
	];
	return (
		<div className="menu">
			{menuItems?.map((menu, i) => (
				<FoodCard key={i} menu={menu} />
			))}
		</div>
	);
};

export default Menu;
