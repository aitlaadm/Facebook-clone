import Button from '@material-ui/core/Button';
import React from 'react'
import './Login.css'
import { auth, provider } from './Firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Footer from './Footer'
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
            .catch((error) => alert(error.message))
    };
    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://studiofrequences.files.wordpress.com/2020/11/facebook-logo.png' alt='logo' />
                <img src='https://e3.365dm.com/19/11/2048x1152/skynews-facebook-logo_4826956.jpg' alt="facebook" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            <Footer />
        </div>
    );
}

export default Login
