import { Star } from '@material-ui/icons';
import React,{useContext} from 'react';
import './Login.scss';

function Login() {

    return (
        <div className="login_container">
            <img className="img1" src="/images/login-background.jpg" alt=""/>
            <div className="logindata">
                <p>
                     Daily Updated Movies list With IMDB<Star className="star"/> Rating and Release Date
                </p>
                <button className="btn">LOGIN TO GET STARTED</button>
                <h2>
                Developed by:<span>Aman Gupta<span>.</span></span>
                </h2>
            </div>
        </div>
    )
}

export default Login;
