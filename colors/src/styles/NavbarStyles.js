const styles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "6vh"
    },
    logo: {
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
        textDecoration: "none"
        }
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
            backgroundColor: "grey"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: "darkgreen",
            outline: "none",
            border: "2px solid green",
        }
    }
}

export default styles