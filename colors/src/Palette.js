import React, { Component } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./Footer";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

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
        const { classes } = this.props
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const ColorBoxes = colors[level].map(color => (
            <ColorBox 
                color={color[format]} 
                name={color.name} 
                key={color.id}
                id={color.id}
                paletteId={id}
                showingFullPalette={true} />
        ))
        return (
            <div className={classes.Palette}>               
                <Navbar showLevel level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
                <div className={classes.colors}>
                    {ColorBoxes}
                </div>
                <PaletteFooter className={classes.PaletteFooter} paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette)