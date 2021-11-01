import React from 'react';
import './Login.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        History.push(Redirect);
    }

    const Google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <div>
            {/* Login section starts  */}

            <section className="login" id="login">

                <h1 className="heading"> <span>Log</span> In </h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="icon" onClick={handleLogin}>
                            <Button onClick={signInUsingGoogle}>{Google}</Button>
                            <p>Click Here for Log In.</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* Login section ends  */}

        </div>
    );
};

export default Login;