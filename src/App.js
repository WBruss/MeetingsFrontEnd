import logo from './logo.svg';
import './App.css';

// React imports
import { BrowserRouter } from 'react-router-dom';

// Material UI
import { AppBar } from '@material-ui/core'

// ANTD
import { Layout } from 'antd';

// Component Imports
import Nav from './components/utilities/nav';
import SideNav from './components/utilities/side_nav';
import Dashboard from './components/dashboard';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    </>
  );
}

export default App;
