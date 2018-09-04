import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

class Playlist extends React.Component {
    static propTypes = {
        items: PropTypes.array,
    }

    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render () {
        if (this.props.items.length === 0) {
            return 'No Items';
        }

        return (
            <List component="nav">
                {this.props.items.map((item, idx) => (
                    <ListItem key={idx} data={item}/>
                ))}
            </List>
        )
    }
}

export default Playlist;