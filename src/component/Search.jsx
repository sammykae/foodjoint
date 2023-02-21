import React from "react";
import cart from "../assets/images/cart.png";
import search from "../assets/images/search.png";
const Search = () => {
	return (
		<div className="search">
			<div className="input-container">
				<div className="icon">
					<img className="search_button" src={search} alt="search" />
				</div>
				<input
					className="input"
					placeholder="Search..."
					type="text"
					name=""
					id=""
				/>
			</div>
			<div className="cart">
				<img src={cart} alt="cart" />
			</div>
		</div>
	);
};

export default Search;
