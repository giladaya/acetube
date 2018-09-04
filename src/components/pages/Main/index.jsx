import * as React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../../Playlist';
import CurrentPlaying from '../../CurrentPlaying'
import NewItemModal from '../../NewItemModal';


class Main extends React.Component {
    static propTypes = {
        onLogout: PropTypes.func,
        onAddItem: PropTypes.func,
        userInfo: PropTypes.object,
        isLoading: PropTypes.bool,
        playlist: PropTypes.array,
        currentItem: PropTypes.object,
    }

    constructor (props) {
        super(props);
        this.state = {
            addItemModalOpen: false,
        };
    }

    handleOpenAddItemModal = () => {
        this.setState({
            addItemModalOpen: true,
        });
    }

    handleAddItemSubmit = (data) => {
        this.setState({
            addItemModalOpen: false,
        });
        if (data) {
            this.props.onAddItem(data);
        }
    }

    getCurrentPlaying() {
        return (
            <div>
                Current Playing
                <CurrentPlaying
                    data={this.props.currentItem}
                />
            </div>
        )
    }

    render () {
        return (
            <div>
                Hello, {this.props.userInfo.name}<br/>

                <button onClick={this.props.onLogout}>Logout</button>
                <button onClick={this.handleOpenAddItemModal}>Add</button>
                {this.props.isLoading && 'Loading...'}
                <br/>
                Playlist
                <Playlist
                    items={this.props.playlist}
                />
                <br/>
                {
                    this.props.currentItem && this.getCurrentPlaying()
                }
                <NewItemModal
                    isOpen={this.state.addItemModalOpen}
                    handleClose={this.handleAddItemSubmit}
                />
            </div>
        )
    }
}

export default Main;