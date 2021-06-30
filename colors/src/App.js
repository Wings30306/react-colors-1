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
  findPalette(id) {
    return ColorArray.find(function (palette) {
      return palette.id === id
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps) => <PaletteList palettes={ColorArray} {...routeProps}/>} />
          <Route 
            exact
            path="/palette/new"
            render={() => <NewPaletteForm />}
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
              />)}/>
        </Switch>

      </div>
    );
  }

}

export default App;
