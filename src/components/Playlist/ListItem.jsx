import * as React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import Avatar from '@material-ui/core/Avatar';

class CurrentPlaying extends React.Component {
    static propTypes = {
        data: PropTypes.object,
    }

    constructor (props) {
        super(props);
        this.state = {

        };
    }

    getImage = (data) => {
        return (data.meta && data.meta.thumbnail_url) ? (
            <Avatar alt="poster" src={this.props.data.meta.thumbnail_url} />
        ) : (
            <ListItemIcon>
                <MusicVideoIcon />
            </ListItemIcon>
        )
    }

    getTitle = (data) => {
        return (
            <a href={data.url} target="_blank">
                {data.meta ? data.meta.title : data.url}
            </a>
        )
    }

    render () {
        const isPlaying = this.props.data.current_seconds >= 0;
        return (
            <ListItem selected={isPlaying}>
                {this.getImage(this.props.data)}
                <ListItemText 
                    primary={this.getTitle(this.props.data)} 
                    secondary={`By: ${this.props.data.subscriber}`}
                />
                { isPlaying && <MusicVideoIcon/>}
            </ListItem>
        )
    }
}

export default CurrentPlaying;