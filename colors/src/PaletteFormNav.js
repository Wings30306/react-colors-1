import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import PaletteFormModal from "./PaletteFormModal";
import styles from "./styles/PaletteFormNavStyles"

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      formShowing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  showForm() {
    this.setState({ formShowing: true });
  };

  hideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const { classes, open, palettes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={this.showForm}>
              Save Palette
            </Button>
            <Link to='/'>
              <Button
                className={classes.button}
                variant='contained'
                color='secondary'
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
        {this.state.formShowing && <PaletteFormModal palettes={palettes} handleSubmit={this.props.savePalette} close={this.hideForm}/>}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);