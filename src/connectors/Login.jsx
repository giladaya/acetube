import * as React from 'react';
import LoginPage from '../components/pages/Login/Mui';
import * as Auth from '../services/Auth';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <LoginPage
                onLogin={Auth.doLogin}
            />
        )
    }
}

export default Login;