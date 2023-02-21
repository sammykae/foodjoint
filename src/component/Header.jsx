import React from "react";
import user from "../assets/images/user.png";
import bell from "../assets/images/bell.png";

const Header = () => {
	return (
		<div className="header">
			<h3>Foodjoint</h3>
			<div className="right">
				<div>
					<img src={bell} alt="" />
				</div>
				<div>
					<img src={user} alt="user" />
				</div>
			</div>
		</div>
	);
};

export default Header;
