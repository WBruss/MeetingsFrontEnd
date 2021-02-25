import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';
import { Slide } from '@material-ui/core';

import './dashboard.css';

//  Components
import DashboardPage from './pages/dashboard_page';
import MeetingsPage from './pages/meetings_page';
import RoomsPage from './pages/rooms_page';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Dashboard(){
    return(
        <>  
        {/* <Router></Router> */}
            <Layout>
                    <div className="header">
                        <Header className="head">
                            <h1>
                                Meeting Room Management System
                            </h1> 
                        </Header>
                    </div>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        {/* <Switch> */}
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['Dashboard']}
                                className = "sider-layout-background"
                            >   
                                <Menu.Item key="Dashboard">
                                    <Link to="/">
                                        Dashboard
                                    </Link>
                                </Menu.Item>                                
                                <Menu.Item key="Meetings">
                                    <Link to="/meetings">
                                            Meetings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="Rooms">
                                    <Link to="/rooms">
                                        Rooms
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        {/* </Switch> */}
                    </Sider>
                    <Layout>
                        <Content
                            className="site-layout-background"
                            style={{
                              padding: 24,
                              margin: 0,
                              minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route exact path="/">
                                    <DashboardPage/>
                                </Route>
                                <Route exact path="/meetings" >
                                    <MeetingsPage/>
                                </Route>
                                <Route exact path="/rooms">
                                    <RoomsPage/>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default Dashboard