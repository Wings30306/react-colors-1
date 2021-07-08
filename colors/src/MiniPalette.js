import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles"
import styles from "./styles/MiniPaletteStyles"

function MiniPalette(props) {
    const {classes, paletteName, emoji, colors} = props;
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}    
        ></div>
    ))
    return(    
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete}>
                <Delete className={classes.deleteIcon}/>
            </div>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
                {paletteName}
                <span>{emoji}</span>
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)