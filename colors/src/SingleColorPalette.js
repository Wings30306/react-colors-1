import { Component } from "react";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";

class SingleColorPalette extends Component {
    render(){
        const { paletteId, colorId } = this.props.match.params;
        const colors = generatePalette(seedColors[paletteId]).map(color => color.id === colorId)
        console.log(colors)
        return (
            <div>
                <h1>SingleColorPalette for {this.props.match.params.paletteId} - {this.props.match.params.colorId}</h1>
            </div>
        )
    }
}

export default SingleColorPalette