import React from 'react';
import Header from './components/Header/index';
import Main from './pages/main/index';
import Routes from './routes';

import './styles.css'


const App = () => (
  <div className="App">
    
      <Header />
      <Routes />  
    </div>

);

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    )
  }
}*/

export default App;
