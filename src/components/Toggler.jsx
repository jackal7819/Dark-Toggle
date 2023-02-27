import useLocalStorage from 'use-local-storage';
import { useState } from 'react';

const Toggler = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const [isActive, setActive] = useState('true');

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        setActive(!isActive);
    };

    return (
        <div className='toggler' data-theme={theme}>
            <div className='login'>
                <h1>Login</h1>
                <div className='container'>
                    <div className='top'>
                        <i className='fa-brands fa-google-plus-g'></i>
                        <i className='fa-brands fa-facebook-f'></i>
                        <i className='fa-brands fa-linkedin-in'></i>
                        <i className='fa-brands fa-twitter'></i>
                        <i className='fa-brands fa-apple'></i>
                    </div>
                    <p className='divider'>
                        <span>Or</span>
                    </p>
                    <form>
                        <label>E-mail</label>
                        <input type='email' placeholder='Enter your email' />
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                        />
                        <div className='remember'>
                            <input
                                type='checkbox'
                                checked={isChecked}
                                onChange={handleOnChange}
                            />
                            <p>Remember Me</p>
                        </div>
                        <button>Log In</button>
                    </form>
                    <div className='bottom'>
                        <p>Forgot your password?</p>
                        <a href='/'>Reset Password</a>
                    </div>
                    <p className='create'>Create Account</p>
                </div>
                <div className='theme-toggle'>
                    <h2>{theme === 'dark' ? 'Light' : 'Dark'} Theme</h2>
                    <i
                        onClick={switchTheme}
                        id='btn'
                        className={
                            isActive
                                ? 'fa-solid fa-toggle-off'
                                : 'fa-solid fa-toggle-on'
                        }></i>
                </div>
            </div>
        </div>
    );
};

export default Toggler;
