import "./Input.scss"
import React, { useState } from 'react';

import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImEyeBlocked, ImEye } from "react-icons/im";

const Input = () =>{
	const [isActive, setActive] = React.useState(false);
	const [isShow, setShow] = React.useState(false);
	const [isType, setType] = React.useState("password");

	const checkEmail = (e) => {
		if (e[0] !== "@" && e.includes("@"))
		{
			let sp = e.split("@");
			if (sp.length >= 2 && sp[1][0] !== (".") && sp[1].includes("."))
       			return true;
			else return false;
		}
		else return false;
    };

	const emailChecking = (e) => {
		setActive(checkEmail(e.target.value));
	};

	const passwordChecking = () => {
		if (isShow) setType("password");
		else setType("text");
		setShow(!isShow);
	};
	
	return (
		<div>
            <h2>Toggle.js</h2>
			<div className="input">
				<div className="toggleInput">
					<div className="div">E-mail</div>
					<div className="box">
						<input className="inputbox"
							type="email"
							placeholder="E-mail"
							onChange={emailChecking}>
						</input>
						<div className="e-icon">
							<BsFillCheckCircleFill className={isActive ? "active-icon" : "inactive-icon"}/>	
						</div>
					</div>
				</div>
				<div className="vaildMsg">{isActive ? "  " : "Invaild E-mail address."}</div>
				<div className="toggleInput">
					<div className="div">Password</div>
					<div className="box">
						<input className="inputbox" type={isType} placeholder="Password"></input>
						{isShow ? <ImEye className="show" onClick={passwordChecking}/> 
						: <ImEyeBlocked className="hide" onClick={passwordChecking}/>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Input;