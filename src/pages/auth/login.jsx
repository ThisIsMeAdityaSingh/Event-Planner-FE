import {Chrome, Facebook} from 'lucide-react'
import "./auth.css";
import { Link } from 'react-router-dom';

export default function Login(){
    return (
        <main className="auth-page-container">
        <section className="auth-form-section">
            <p className='auth-form-main-heading'>Sign in to your account</p>
            <span>Or <Link to={'/register'}>start your 14-day free trial</Link></span>
            <br />
            <br />
            <div className="auth-form-login-button">
                <div><Chrome size={18}/>{' '}<p>Sign in with Google</p></div>
            </div>
            <br />
            <div className="auth-form-login-button">
                <div><Facebook size={18}/>{' '}<p>Sign in with Facebook</p></div>
            </div>
            <br />
            <br />
            <div className='auth-form-sign-up-with-email-divider'>
                <div className='line'></div>
                <div className='content'>Or continue with</div>
                <div className='line'></div>
            </div>
            <br />
            <form className='auth-section-sign-up-form'>
                <label htmlFor='auth-page-email'>Email Address</label>
                <input id='auth-page-email' name='email' type='text' placeholder='your@example.com' />
                <br />
                <label htmlFor='auth-page-password'>Password</label>
                <input id='auth-page-password' name='password' type='password' placeholder='password' />
                <br />
                <input id='auth-page-submit' type='submit' />
            </form>
        </section>
    </main>
    );
}