import "./Tab.scss"
import React, { useState } from 'react';

const Tab = () =>{

	const [toggleState, setToggleState] = useState(1);
	const clickTab = (index) => {
		setToggleState(index);
	}

	return (
		<div>
			<h2>Tab.js</h2>
			<div className="tab">
				<div className="tab-block">
					<button className={toggleState === 1 ? "active-tabs" : "tabs"}
						onClick={() => clickTab(1)}>감자</button>
					<button className={toggleState === 2 ? "active-tabs" : "tabs"}
						onClick={() => clickTab(2)}>고구마</button>
					<button className={toggleState === 3 ? "active-tabs" : "tabs"}
						onClick={() => clickTab(3)}>카레라이스</button>
				</div>
			</div>
		</div>
	);
};

export default Tab;
