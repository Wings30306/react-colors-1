import { Component } from "react";
import { Link } from "react-router-dom"
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/ColorBoxStyles"

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
                    <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background: color }}/>
                    <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                        <h1 className={classes.copyText}>Copied</h1>
                        <p className={classes.copyText}>{color}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
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