import React from "react";
import Delete from "@material-ui/icons/Delete"
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        marginBottom: "-4px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0, 0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

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