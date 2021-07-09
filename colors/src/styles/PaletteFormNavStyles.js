import { drawerWidth } from "./NewPaletteFormStyles"
import sizes from "./sizes"

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: "12px",
    marginRight: "20px",
    [sizes.down("xs")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  navBtns: {
    marginRight: "1rem",
    display: "flex",
    "& button": {
      margin: "0 0.5rem",
      display: "inline-block",
      
    width: "fit-content"
    },
    [sizes.down("xs")]: {
      marginRight: "0.2rem",
      "& button": {
        margin: 0,
        padding: 0
      }
    }
  }
});

export default styles;