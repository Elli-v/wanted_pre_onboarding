// import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div>WANTED-PRE-ONBOARDING</div>
        <div> [ FRONT-END ] - 오수빈</div>
      </header>
        <div className="CompoBody">
          <div>
              <Toggle></Toggle>
              <hr />
              <Tab></Tab>
              <hr />
              <Slider></Slider>
              <hr />
              <Input></Input>
              <hr />
              <Dropdown></Dropdown>
          </div>


        </div>
    </div>
  );
}

export default App;
