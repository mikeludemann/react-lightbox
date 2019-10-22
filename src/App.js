import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Lightbox from './components/lightbox';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      images: [
        {
          source: require('./assets/mario-kart-tour.png'), alttext: "Mario Kart Tour"
        },
        {
          source: require('./assets/doctor-mario-world.jpg'), alttext: "Doctor Mario World"
        }
      ]
    }
  }
      
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="content">
          <Lightbox 
            images={this.state.images}
          >
          </Lightbox>
        </section>
        <footer className="App-footer">
          (c) Copyright - Mike Ludemann
        </footer>
      </div>
    );
  }
}

export default App;
