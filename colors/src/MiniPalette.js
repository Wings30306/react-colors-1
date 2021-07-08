import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles"
import { Component } from "react";
import styles from "./styles/MiniPaletteStyles"

class MiniPalette extends Component {
    constructor(props){
        super(props)
        this.deletePalette = this.deletePalette.bind(this)
    }

    deletePalette(e){
        e.stopPropagation();
        this.props.deletePalette(this.props.id)
    }

    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props;
        const miniColorBoxes = colors.map(color => (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            ></div>
        ))
        return (
            <div className={classes.root} onClick={handleClick}>
                <Delete
                    className={classes.deleteIcon}
                    onClick={this.deletePalette}
                />
                <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span>{emoji}</span>
                </h5>
            </div>
        )
    }

}

export default withStyles(styles)(MiniPalette)