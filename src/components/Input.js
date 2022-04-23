import "./Input.scss"
import React, { useState } from 'react';

const Input = () =>{
	return (
		<div className="input">
			<div className="email">
				<span>E-mail</span>
				<input 
					type="email"
					placeholder="E-mail"></input>
				<div className="email-icon"></div>
			</div>
			<div className="password">
				<span>Password</span>
				<input 
					type="password"
					placeholder="Password"></input>
				<div className="pw-icon"></div>
			</div>
		</div>
	);
};

export default Input;