import React from 'react';

import styles from './Sidebar.module.css';
import { Form, User } from '../index';

import userData from '~/data/userData.json';

const Sidebar = () => {

    const handleLogout = () => {
        console.log('logout')
    }   

    return (
        <div className={styles.root}> 
            <div className={styles.top}>
                <User
                    email={userData.email}
                    name={userData.name}
                    image={userData.url}
                    logout={() => handleLogout}
                />
            </div>

            <div className={styles.center}>
                <Form />
            </div>
        </div>
    )
}

export default Sidebar;