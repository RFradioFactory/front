import './App.css'
import Header from './components/header/header';
import Registr from './components/Registration/Registration';
import LogIn from './components/LogIn/LogIn';
import Main from './components/main/main';
import NewShop from './components/main/newShop/newShop';
import MyShops from './components/main/myShops/myShops';
import NewPass from './components/main/newPass/newPass';
import { AuthProvider } from './components/sevise/AutoContext';
import { Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/main' element = {<Main/>}>
            <Route path='newShop' element = {<NewShop/>}/>
            <Route path='newPassword' element = {<NewPass/>}/>
            <Route path='myShops' element = {<MyShops/>}/>
          </Route>
          <Route path='/Reg' element = {<Registr/>}></Route>
          <Route path='/Login' element = {<LogIn/>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
};



export default App
