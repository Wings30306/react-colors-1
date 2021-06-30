import { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import PaletteFooter from "./Footer";
import Navbar from "./Navbar";

class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = { format: "hex" }
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeFormat(val){
        this.setState({ format: val})
    }

    gatherShades(palette, colorId){
        let shades = []
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorId)
            )
        }
        return shades.slice(1)
    }

    render(){
        const { palette } = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                color={color[this.state.format]} 
                showingFullPalette={false} />
        ))
        return (
            <div className="SingleColorPalette Palette">
                <Navbar changeFormat={this.changeFormat} showLevel={false}/>
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox">
                        <Link className="back-button" to={`/palette/${palette.id}`}>Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}

export default SingleColorPalette