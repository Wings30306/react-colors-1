import { Component } from "react";
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, CssBaseline } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'

class PaletteFormNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            newPaletteName: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
        this.props.palettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
      )
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value})
    }

    handleSubmit(){
        this.props.savePalette(this.state.newPaletteName)
    }

    render(){
        const { open, classes, handleDrawerOpen } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div>
                    <CssBaseline />
                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Create Your Own Palette
                    </Typography>
                    <ValidatorForm onSubmit={this.handleSubmit}>
                        <TextValidator 
                        value={newPaletteName}
                        name="newPaletteName"
                        onChange={this.handleChange}
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={["Please name your palette", "Palette name already taken!"]}
                        />
                        <Button variant="contained" color="primary" type="submit">Save Palette</Button>
                    </ValidatorForm>
                    <Link to="/">Back to Palettes List</Link>        
                    </Toolbar>
                </AppBar>
            </div>
            
        )
    }
    
}

export default PaletteFormNav