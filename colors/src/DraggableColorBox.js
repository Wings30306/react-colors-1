import React from "react";
import Delete from "@material-ui/icons/Delete"
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles"

const DraggableColorBox = SortableElement((props) => {
    const { classes, color, handleClick } = props;
    return (
        <div 
            className={classes.root}
            style={{ backgroundColor: color.color }}
            >
                <div className={classes.boxContent}>
                    <span>{color.name}</span>
                    <Delete 
                        className={classes.deleteIcon}
                        onClick={handleClick} />
                </div>
            
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)