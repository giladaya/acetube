import * as React from 'react';
import PropTypes from 'prop-types';

class Base extends React.Component {
    static propTypes = {
    }

    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div>
                Base
            </div>
        )
    }
}

export default Base;