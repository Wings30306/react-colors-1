import { Component } from "react";
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
        const { palette, colorId} = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} color={color[this.state.format]} showLink={false} />
        ))
        return (
            <div className="Palette">
                <Navbar changeFormat={this.changeFormat} showLevel={false}/>
                <h1>SingleColorPalette for {palette.paletteName} - {colorId}</h1>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}

export default SingleColorPalette