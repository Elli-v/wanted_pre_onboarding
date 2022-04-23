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
          <ol>
            <li className="Compo">
              <span className="name">Toggle.js</span>
              <Toggle></Toggle>
            </li>
            <li className="Compo">
            <span className="name">Tab.js</span>
              <Tab></Tab>
            </li>
            <li className="Compo">
              <span className="name">123</span>
            </li>
          </ol>
        </div>
    </div>
  );
}

export default App;
