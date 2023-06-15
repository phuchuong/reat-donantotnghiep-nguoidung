// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { TrangchuTempalates } from './templates/Trangchu/TrangchuTemplae';
import Trangchu from './pages/Trangchu/Trangchu';
import Chitiet from './pages/Chitiet/Chitiet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <TrangchuTempalates exact path={'/home'} Compoment={Trangchu} />
        <TrangchuTempalates exact path={'/chitiet'} Compoment={Chitiet} />


        <TrangchuTempalates exact path={'*'} Compoment={Trangchu} />
        <TrangchuTempalates exact path={'/'} Compoment={Trangchu} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
