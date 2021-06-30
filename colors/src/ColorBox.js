import { Component } from "react";
import { Link } from "react-router-dom"
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { withStyles } from "@material-ui/styles"
import chroma from "chroma-js";

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        marginBottom: "-4px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            opacity: "1"
        }
    },
    copyText: {
        color: props => chroma(props.color).luminance() > 0.5 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.color).luminance() <= 0.10 ? "white" : "black"
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        color: props => chroma(props.color).luminance() > 0.5 ? "black" : "white",
        width: "60px",
        height: "auto",
        textTransform: "uppercase",
        textAlign: "center"
    },

    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => chroma(props.color).luminance() <= 0.10 ? "white" : "black",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    }
}

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied: false};
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }

    render() {
        const { name, color, id, paletteId, showingFullPalette, classes } = this.props
        const { copied } = this.state
        return (
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                <div style={{ background: color }} className={classes.ColorBox} >
                    <div className={`copy-overlay ${copied && "show"}`} style={{ background: color }}/>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1 className={classes.copyText}>Copied</h1>
                        <p className={classes.copyText}>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)