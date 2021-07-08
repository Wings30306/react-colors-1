import { Component } from "react";
import { Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorPickerFormStyles"


class ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor: "#BADA55",
            newColorName: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
    }
    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex})
      };
    
    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value})
    }

    handleSubmit(){
        this.props.addNewColor(this.state.currentColor, this.state.newColorName);
        this.setState({newColorName: ""})
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
          this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
          this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );
    }

    render(){
        const { currentColor, newColorName } = this.state;
        const { paletteFull, classes } = this.props
        return (
            <div className={classes.root}>
                <ChromePicker 
                    className={classes.picker}
                    color={currentColor}
                    onChangeComplete={newColor => this.updateCurrentColor(newColor)}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator 
                    className={classes.colorNameInput}
                    placeholder="new color name"
                    value={newColorName} 
                    onChange={this.handleChange}
                    variant="filled"
                    margin="normal"
                    name="newColorName"
                    validators={["required", "isColorNameUnique", "isColorUnique"]}
                    errorMessages={["This field is required", "Color names must be unique!", "Color already used!"]}/>
                    <Button 
                    className={classes.addColor}
                    variant="contained" 
                    color="primary"
                    disabled={paletteFull}
                    type="submit" 
                    style={{backgroundColor: paletteFull ? "grey" : currentColor }}>
                        { paletteFull ? "Palette Full!" : "Add Color" }
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)