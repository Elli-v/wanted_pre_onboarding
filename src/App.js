// import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div>WANTED-PRE-ONBOARDING</div>
        <div> [ FRONT-END ] </div>
      </header>
        <div className="CompoBody">
          <div className="Compo00">
            <span>Toggle.js</span>
            <Toggle></Toggle>
          </div>
          <div className="Compo01">
            <span>Tab.js</span>
            <Tab></Tab></div>
          <div className="Compo02">        </div>
        </div>
    </div>
  );
}

export default App;
