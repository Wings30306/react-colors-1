import { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import PaletteFooter from "./Footer";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

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
        const { palette, classes } = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                color={color[this.state.format]} 
                showingFullPalette={false} />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar changeFormat={this.changeFormat} showLevel={false}/>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${palette.id}`}>Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)