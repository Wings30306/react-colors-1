import { Component } from "react";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React Colours</h1>
                {palettes.map(palette => (
                    <MiniPalette {...palette} />

                ))}
            </div>
        )
    }
}

export default PaletteList