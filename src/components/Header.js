import React from 'react'
import i18n from '../translation/i18n';

import logo from '../logo.svg';

import './style.css';

const Header = () => {
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <header className="App-header">
            <div className="w-100 d-flex justify-content-between">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="d-flex align-items-center">
                    <select onChange={changeLanguage}>
                        <option value="vi">
                            Vietnamese
                        </option>
                        <option value="en">
                            English
                        </option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header
