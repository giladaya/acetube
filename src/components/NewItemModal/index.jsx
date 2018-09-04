import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class NewItemModal extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        handleClose: PropTypes.func,
    }

    constructor (props) {
        super(props);
        this.urlRef = React.createRef();
        this.state = {

        };
    }

    handleCancel = () => {
        this.props.handleClose(null);
    }
    handleSubmit = () => {
        const url = this.urlRef.current.value;
        const data = {
            url
        };
        this.props.handleClose(data);
    }

    render () {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Add New Item</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Paste the URL of a music video
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Url"
                        type="text"
                        fullWidth
                        inputRef={this.urlRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default NewItemModal;