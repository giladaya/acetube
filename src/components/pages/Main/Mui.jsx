import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';  
import { MainListItems, secondaryListItems } from './ListItems';
import Playlist from '../../Playlist';
import CurrentPlaying from '../../CurrentPlaying';
import NewItemModal from '../../NewItemModal';
import DjSetModal from '../../DjSetModal';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class Dashboard extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func,
    onAddItem: PropTypes.func,
    userInfo: PropTypes.object,
    isLoading: PropTypes.bool,
    playlist: PropTypes.array,
    currentItem: PropTypes.object,
  }

  state = {
    drawerIsOpen: false,
    addItemModalOpen: false,
    djSetModalOpen: false,
    anchorEl: null,
  };

  constructor(props) {
    super(props);
  }

  handleUserMenuClose = () => {
    this.setState({ anchorEl: null });
  }
  handleUserMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  };

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
  handleOpenDjSetModal = () => {
    this.setState({
      djSetModalOpen: true,
    });
  }
  handleDjSetSubmit = (data) => {
      this.setState({
        djSetModalOpen: false,
      });
      if (data) {
          this.props.onAddItem(data);
      }
  }

  handleLogout = () => {
    this.handleUserMenuClose();
    this.props.onLogout();
  }

  getCurrentPlaying() {
    return null;
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
              Now Playing
            </Typography>
            <Typography component="div" className={classes.chartContainer}>
              <CurrentPlaying
                  data={this.props.currentItem}
              />
            </Typography>
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.drawerIsOpen && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.drawerIsOpen} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.drawerIsOpen && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Avatar alt="Remy Sharp" src="/logo.png" className={classes.avatar} />
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                AceTube
              </Typography>
              
              <div>
                {this.props.userInfo.name}
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleUserMenuOpen}
                  color="inherit"
                >
                  <AccountCircleIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleUserMenuClose}
                >
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.drawerIsOpen && classes.drawerPaperClose),
            }}
            open={this.state.drawerIsOpen}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <MainListItems
                handleOpenAddItemModal={this.handleOpenAddItemModal}
                handleOpenDjSetModal={this.handleOpenDjSetModal}
              />
            </List>
            {/* <Divider />
            <List>{secondaryListItems}</List> */}
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {
                this.props.currentItem ? this.getCurrentPlaying() : 'Nothing here'
            }
            <Typography variant="display1" gutterBottom>
              Playlist
            </Typography>
            <div className={classes.tableContainer}>
              <Playlist
                    items={this.props.playlist}
              />
            </div>
          </main>
        </div>
        <NewItemModal
            isOpen={this.state.addItemModalOpen}
            handleClose={this.handleAddItemSubmit}
        />
        <DjSetModal
            isOpen={this.state.djSetModalOpen}
            handleClose={this.handleDjSetSubmit}
        />
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);