import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles, { drawerWidth } from "./styles/NewPaletteFormStyles"


class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      colors: this.props.palettes[Math.floor(Math.random() * props.palettes.length)]["colors"],
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  addNewColor(color, name) {
    const newColor = {
      color: color,
      name: name
    }
    this.setState({ colors: [...this.state.colors, newColor], newColorName: "" })
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  savePalette(newPaletteName, emoji) {
    let newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
      emoji: emoji
    }
    this.props.savePalette(newPalette);
    this.props.history.push("/")
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  clearPalette() {
    this.setState({ colors: [] })
  };

  addRandomColor() {
    let colors = this.props.palettes[Math.floor(Math.random() * this.props.palettes.length)]["colors"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    if (!this.state.colors.includes(randomColor)){
      this.setState({ colors: [...this.state.colors, randomColor] })
    }
    
    // Can be improved - make sure no double colors! ---- DONE 08/07
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors

    return (
      <div className={classes.root}>
        <CssBaseline />
        <PaletteFormNav
          open={open}
          classes={classes}
          palettes={palettes}
          handleChange={this.handleChange}
          handleDrawerOpen={this.handleDrawerOpen}
          savePalette={this.savePalette}
          drawerWidth={drawerWidth} />

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={ classes.container }>
            <Typography variant="h4" gutterBottom>Add A Color</Typography>
            <div className={classes.buttons}>
              <Button 
                className={classes.button} 
                variant="contained" 
                color="secondary" 
                onClick={this.clearPalette}>
                  Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={paletteFull}
                onClick={this.addRandomColor}
              >Random Color</Button>
            </div>
            <ColorPickerForm
              paletteFull={paletteFull}
              colors={colors}
              addNewColor={this.addNewColor} />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);