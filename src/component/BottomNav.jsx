import React from "react";
import food from "../assets/images/food.png";
import dishes from "../assets/images/dishes.png";
import order from "../assets/images/order.png";

const BottomNav = () => {
	return (
		<div className="bottom-nav">
			<div className="icon">
				<img src={dishes} alt="" />
				<p id="main">Dishes</p>
			</div>
			<div className="icon">
				<img src={food} alt="" />
				<p>Food</p>
			</div>
			<div className="icon">
				<img src={order} alt="" />
				<p>Order</p>
			</div>
		</div>
	);
};

export default BottomNav;
