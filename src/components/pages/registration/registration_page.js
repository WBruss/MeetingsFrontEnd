import React from 'react'
import RegistrationForm from './registration_form'

import { Layout } from 'antd';
import './registration.css'

function RegistrationPage() {
    return(
        <>
            <div className="registration_page">

                <RegistrationForm/>
            </div>
        </>
    )
}

export default RegistrationPage;