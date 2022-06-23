import Header from './Layout/Header/Header';
import Banner from './Layout/Banner/Banner';
import Main from './Layout/Main/Main';

import './Reset.css';
import './Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;