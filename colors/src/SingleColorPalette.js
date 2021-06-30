import { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import PaletteFooter from "./Footer";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles"

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "0",
        overflow: "hidden",
    },
    colors: {
        height: "90%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        marginBottom: "-4px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        backgroundColor: "black",
        "& a": {
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
            color: "white",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none"
        }
    }
}

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