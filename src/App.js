import logo from './logo.svg';
import './App.css';

// React imports
import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';

// Material UI
import { AppBar } from '@material-ui/core'

// ANTD
import { Layout } from 'antd';

// Component Imports
import Nav from './components/utilities/nav';
import SideNav from './components/utilities/side_nav';
import Dashboard from './components/dashboard';
import RegistrationPage from './components/pages/registration/registration_page';
import LoginPage from './components/pages/login/login_page';

const { Header, Footer, Sider, Content } = Layout;

// App Context 
export const AppContext = createContext();

function App() {
  const [appData, setAppData] = useState({
    roomData : [],
    meetingData: [],
  });

  let loggedIn = false;

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <BrowserRouter>

        {loggedIn?
        <Dashboard/>  :       
        <LoginPage/>        
      }
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
