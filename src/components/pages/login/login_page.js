import React from 'react'
import LoginForm from './login_form'

import { Layout } from 'antd';
import './login.css'

function LoginPage() {
    return(
        <>
            <div className="login_page">

                <LoginForm/>
            </div>
        </>
    )
}

export default LoginPage;