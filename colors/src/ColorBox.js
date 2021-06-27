import { Component } from "react";
import { Link } from "react-router-dom"
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";

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
        const { name, color, id, paletteId, showLink } = this.props
        const { copied } = this.state
        const isDarkColor = chroma(color).luminance() <= 0.10;
        const isLightColor = chroma(color).luminance() > 0.5;
        return (
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                <div style={{ background: color }} className="ColorBox" >
                    <div className={`copy-overlay ${copied && "show"}`} style={{ background: color }}/>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && "light-text"}>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    {showLink && <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                    </Link>
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox