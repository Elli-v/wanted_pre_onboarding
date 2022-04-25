import "./Dropdown.scss"
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = () =>{

    const [value, setClick] = useState("All Symbols");
	
	useEffect(() => {
        listToggleFunction();
    }, [value]);

    const listToggleFunction = () => {
        document.getElementById("dropdown").classList.toggle("show");
    };

	return (
        <div>
            <h2>Dropdown.js</h2>
            <div className="dropdown">
                <div className="container">
                    <input id="dropdown" type="checkbox"></input>
                    <label className="dropdownLabel" for="dropdown">
                    <div>{value}</div>
                    <FaAngleDown className="icon" />
                    </label>
                    <div className="content"
                        onClick={(e) => {
                            setClick(e.target.innerText);
                        }}>
                        <p>All Symbols</p>
                        <p>BTCUSD.RERP</p>
                        <p>ETHUSD.RERP</p>
                        <p>BCHUSD.RERP</p>
                        <p>LTCUSD.RERP</p>
                        <p>XRPUSD.RERP</p>
                        <p>SOLUSD.RERP</p>
                        <p>MTCUSD.RERP</p>
                        <p>ADAUSD.RERP</p>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Dropdown;