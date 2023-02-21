import React from "react";
import cart_white from "../assets/images/cart_white.png";
const FoodCard = ({ menu }) => {
	return (
		<div className="food-card">
			<div className="img">
				<img src={menu?.img} alt="" />
			</div>
			<div className="text">
				<h4>{menu?.name}</h4>
				<p>{menu?.eatery}</p>
			</div>
			<div className="right">
				<div className="img">
					<img src={cart_white} alt="" />
				</div>
				<p className="price">GHC&nbsp;{menu?.price}</p>
				<p className="time">
					<span className="status">{menu?.status ? "Open" : "Closed"}</span>
					<span>{menu?.openTime}</span>
					<span> - </span>
					<span>{menu?.closeTime}</span>
				</p>
			</div>
		</div>
	);
};

export default FoodCard;
