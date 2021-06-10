import React, {Component} from "react"
import ColorBox from "./ColorBox"
import "./Palette.css"

class Palette extends Component {
    render() {
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                {this.props.colors.map(color => (
                    <ColorBox color={color.color} name={color.name} />
                ))}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette