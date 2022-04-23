// import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div>WANTED-PRE-ONBOARDING</div>
        <div> [ FRONT-END ] </div>
      </header>
        <div className="CompoBody">
          <ol>
            <li className="Compo">
              <span className="name">Input.js</span>
              <Input></Input>
            </li>
            <li className="Compo">
              <span className="name">Toggle.js</span>
              <Toggle></Toggle>
            </li>
            <li className="Compo">
            <span className="name">Tab.js</span>
              <Tab></Tab>
            </li>
            <li className="Compo">
              <span className="name">Slider.js</span>
              <Slider></Slider>
            </li>
          </ol>
        </div>
    </div>
  );
}

export default App;
