import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import LinearProgress from '@material-ui/core/LinearProgress';
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
        return (
            <List component="nav">
                <ListItem>
                    {this.getImage(this.props.data)}
                    <ListItemText 
                        primary={this.getTitle(this.props.data)} 
                        secondary={`By: ${this.props.data.subscriber}`}
                    />
                    <LinearProgress 
                        variant="determinate" 
                        value={72} 
                    />
                </ListItem>
            </List>
        )
    }

    _render () {
        return (
            <div>
                <b>{this.props.data.meta.title}</b><br/>
                Submitted by: {this.props.data.subscriber}
            </div>
        )
    }
}

export default CurrentPlaying;