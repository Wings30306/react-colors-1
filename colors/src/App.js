import { generatePalette } from './colorHelpers';
import 'react-router-dom'
import Palette from './Palette';
import ColorArray from "./seedColors"
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state = {
      palettes: savedPalettes || ColorArray
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    })
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] }, 
      this.syncLocalStorage
    )
  }

  deletePalette(id){
    this.setState(
      st => ({palettes: st.palettes.filter(palette => palette.id !== id )}
      ),
      this.syncLocalStorage
    )
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps) => <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />} />
          <Route
            exact
            path="/palette/new"
            render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} palettes={this.state.palettes} />}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id))}
              />)}
          />
          <Route
            exact path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId))}
                colorId={routeProps.match.params.colorId}
              />)} />
        </Switch>

      </div>
    );
  }

}

export default App;
