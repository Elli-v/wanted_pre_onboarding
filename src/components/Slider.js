import "./Slider.scss"
import React, { useState } from 'react';

const Slider = () =>{
	const [value, setValue] = useState(1);
	const handleValue = (e) => {
		setValue(e.target.value);
	;}
	
	const percentList = [1, 25, 50, 75, 100];

	return (
		<div>
			<h2>Slider.js</h2>
			<div className="slider">
				<div className="sliderValue">
					<span className="value">{value}</span>
					<span className="percent">%</span>
				</div>
				<div className="sliderField">
					<input 
						className="sliderBar"
						type="range" 
						min="1" 
						max="100" 
						value={value} 
						onChange={handleValue}
					></input>
					<div className="sliderPercent">
						{percentList.map((e) => {
							return (
							<div
								key={e.id}
								onClick={() => {setValue(e);}}>
								{e}%
							</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;