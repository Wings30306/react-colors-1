import { Component } from "react";
import Slider from 'rc-slider';
import { IconButton, MenuItem, Select, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import 'rc-slider/assets/index.css';
import "./Navbar.css"
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex", open: false}
        this.changeFormat = this.changeFormat.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    changeFormat(e){
        this.setState({ format: e.target.value, open: true })
        this.props.changeFormat(e.target.value)
    }

    closeSnackbar(){
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel, showLevel } = this.props
        const { format } = this.state;
        return (
            <nav className="Navbar">
                <div className="logo">
                    <Link exact to="/">reactcolorpicker</Link>
                </div>
                {
                    showLevel &&
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                    
                } 
                <div className="select-container">
                    <Select value={format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {format.toUpperCase()}!</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnackbar} 
                            color="inherit" 
                            key="close" 
                            aria-label="close">
                            <Close />
                        </IconButton>]}
                />
            </nav>
        )
    }
}

export default Navbar;