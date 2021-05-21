import Header from './components/Header'
import ClassComponent from './components/Class'
import Functional from './components/Functional'

import './App.css';

function App() {
  return (
    <div>
        <div className="App">
            <Header />
        </div>
        <div className="content d-flex w-100">
            <ClassComponent />
            <Functional />
        </div>
    </div>
  );
}

export default App;
