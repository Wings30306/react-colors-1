import { Component } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { DialogContentText } from "@material-ui/core";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css"

class PaletteFormModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stage: "form",
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    showEmojiPicker() {
        this.setState({ stage: "emoji"})
    }

    savePalette(emoji){
        let newEmoji = emoji.native;
        this.props.handleSubmit(this.state.newPaletteName, newEmoji)
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.stage === "emoji"}
                    onClose={this.props.hideForm}
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker 
                        onSelect={this.savePalette}
                        title="Choose a palette emoji">
                            
                    </Picker>
                </Dialog>
                <Dialog
                    open={this.state.stage === "form"}
                    onClose={this.props.hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Name your palette</DialogTitle>
                    <ValidatorForm
                        onSubmit={this.showEmojiPicker}
                    >
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your beautiful new palette. Make sure it's unique!
                            </DialogContentText>
                            <TextValidator
                                label='Palette Name'
                                value={this.state.newPaletteName}
                                name='newPaletteName'
                                onChange={this.handleChange}
                                fullWidth
                                margin="normal"
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already used"]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.props.close} color="primary">
                                Cancel
                            </Button>
                            <Button variant='contained' color='primary' type='submit'>
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteFormModal
