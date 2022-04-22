import "./Toggle.scss"

const Toggle = (props) =>{
	const { isChecked, handleToggle } = props;

	return (
		<div className="toggle">
			<input 
				className="toggle-checkbox"
				id={'toggle-input'}
				type="checkbox" 
				checked={isChecked}
				onChange={handleToggle}/>
			<label
				className="toggle-label"
				htmlFor={'toggle-input'}>
				<span className="toggle-button" />
				<div className="text1">
					기본
				</div>
				<div className="text2">
					상세
				</div>
			</label>
		</div>
	);
};

export default Toggle;