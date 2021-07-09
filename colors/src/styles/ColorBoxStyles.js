import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
    ColorBox: {
        width: props => props.showingFullPalette ? "20%" : "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        marginBottom: "-4px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            opacity: "1"
        },
        [sizes.down("lg")]: {
            width: props => props.showingFullPalette ? "25%" : "33.33%",
            height: props => props.showingFullPalette ? "20%" : "30%",
        },
        [sizes.down("md")]: {
            width: props => props.showingFullPalette ? "50%" : "50%",
            height: props => props.showingFullPalette ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: props => props.showingFullPalette ? "100%" : "100%",
            height: props => props.showingFullPalette ? "5%" : "10%",
        }
    },
    copyText: {
        color: props => chroma(props.color).luminance() > 0.5 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.color).luminance() <= 0.10 ? "white" : "black"
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        color: props => chroma(props.color).luminance() > 0.5 ? "black" : "white",
        width: "60px",
        height: "auto",
        textTransform: "uppercase",
        textAlign: "center"
    },

    copyButton: {
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
        color: props => chroma(props.color).luminance() <= 0.10 ? "white" : "black",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform:"scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        textTransform: "uppercase",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: 0,
            [sizes.down("xs")]: {
                fontSize: "3rem"
            }
        },        
        "& p" : {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showMsg :{
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s"
    }
    
}

export default styles