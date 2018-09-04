import * as React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.userRef = React.createRef();
        this.state = {

        };
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const name = this.userRef.current.value;
        this.props.onLogin(name)
    }

    render () {
        return (
            <div>
                Login
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input ref={this.userRef}/>
                    </label>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Login;