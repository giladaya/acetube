import * as React from 'react';
import MainPage from '../components/pages/Main/Mui';
import * as Auth from '../services/Auth';
import * as Api from '../services/Api.mock';

class Main extends React.Component {
    timer;

    constructor (props) {
        super(props);
        this.state = {
            playlist: [],
            isFetching: true,
            currentItem: null,
        };
    }

    fetchList = () => {
        Api.getPlaylist()
        .then(playlist => {
            this.setState({
                playlist,
                isFetching: false,
            });
            this.refreshCurrentItem();
        })
    }

    componentDidMount() {
        this.fetchList();
        // this.timer = setInterval(this.fetchList, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    refreshCurrentItem = () => {
        const currentItem = this.state.playlist.find(item => (item.current_seconds >= 0))
        if (currentItem) {
            if (! this.state.currentItem || currentItem.id !== this.state.currentItem.id){
                Api.getItemMeta(currentItem)
                .then(data => {
                    this.setState({
                        currentItem: {
                            ...currentItem,
                            meta: data,
                        },
                    })
                })
                .catch(err => {
                    console.error(err)
                    this.setState({
                        currentItem,
                    })
                })
            }
        } else {
            this.setState({
                currentItem: null,
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (this.state.playlist !== prevState.playlist) {
            this.refreshCurrentItem();
        }
    }      

    handleAddItem = (data) => {
        Api.addItem(data)
        .then(data => {
            this.setState({
                playlist: this.state.playlist.concat(data),
            })
        })
    }

    render () {
        return (
            <MainPage
                onLogout={Auth.doLogout}
                userInfo={Auth.getUserDetails()}
                playlist={this.state.playlist}
                onAddItem={this.handleAddItem}
                isFetching={this.state.isFetching}
                currentItem={this.state.currentItem}
            />
        )
    }
}

export default Main;