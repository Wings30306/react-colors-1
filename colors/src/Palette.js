import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";



class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500, format: "hex"}
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({ level })
    }

    changeFormat(val){
        this.setState({ format: val})
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const ColorBoxes = colors[level].map(color => (
            <ColorBox 
                color={color[format]} 
                name={color.name} 
                key={color.id}
                id={color.id}
                paletteId={id} />
        ))
        return (
            <div className="Palette">               
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
                <div className="Palette-colors">
                    {ColorBoxes}
                </div>
                <footer className="Palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette