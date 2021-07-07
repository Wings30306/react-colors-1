import { Component } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { DialogContentText } from "@material-ui/core";

class PaletteFormModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            newPaletteName: ""
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this);
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

    handleClickOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };



    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Name your palette</DialogTitle>
                    <ValidatorForm
                        onSubmit={() => this.props.handleSubmit(this.state.newPaletteName)}
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
                            <Button onClick={this.handleClose} color="primary">
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
