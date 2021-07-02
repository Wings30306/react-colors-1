import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        marginBottom: "-4px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
    }
    
}

function DraggableColorBox(props){
    return (
        <div 
            className={props.classes.root}
            style={{ backgroundColor: props.color.color }}
            >
            {props.color.name}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)