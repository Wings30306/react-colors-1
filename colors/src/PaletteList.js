import { Component } from "react";
import { Link } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/styles"
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles"

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colours</h1>
                        <Link to="/palette/new">Create new palette</Link>
                    </nav>

                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                                <MiniPalette
                                    key={palette.id}
                                    {...palette}
                                    handleClick={() => this.goToPalette(palette.id)}
                                    deletePalette={this.props.deletePalette}
                                />
                            </CSSTransition>))
                        }
                    </TransitionGroup>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)