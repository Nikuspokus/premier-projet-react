import React, { Component } from "react";
import "./App.css";
import Membre from "./components/Membre";
import Button from "./components/Button";

const famille = {
  membre1: {
    nom: "Nicolas",
    age: 35,
  },
  membre2: {
    nom: "Caroline",
    age: 35,
  },
  membre3: {
    nom: "Inès",
    age: 7,
  },
  membre4: {
    nom: "Elise",
    age: 1,
  },
  membre5: {
    nom: "Hugo",
    age: 1,
  },
  membre6: {
    nom: "Nesquik",
    age: 3,
  },
};

class App extends Component {
  state = {
    famille,
    isShow: false,
  };

  handleClick = (num) => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  };
  handleChange = (event, id) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    console.log(nom);
    famille[id].nom = nom;
    this.setState({ famille });
  };

  handleChange2 = (event) => {
    // 1 - on copie notre state
    const famille = { ...this.state.famille };
    // 2 - on fait no modification
    const nom = event.target.value;
    famille.membre2.nom = nom;
    // 3 - on met a jour notre state avec nos modifications
    this.setState({ famille });
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow });
  };

  cacherNom = id => {
    const famille = { ...this.state.famille };
    famille[id].nom = ' '
    this.setState({ famille });
  };

  render() {
    const { titre } = this.props;
    const { famille, isShow } = this.state;

    let description = null

    if (isShow) {
      description = <strong>Je suis un garçon </strong>
    } 
    // Object.keys permet de transformer notre objet en tableu de clé - methode la plus claire
    // pour afficher ma liste on utilise .map pour 
    // boucler autour d'un tableau le plus simple est de faire un "map"
    const liste = Object.keys(famille)
    .map(membre => (
      <Membre 
      key={membre}
      handleChange={event => this.handleChange(event, membre)}
      cacherNom={() => this.cacherNom(membre) }
      age={famille[membre].age} 
      nom={famille[membre].nom} />
    ))
    console.log(liste);

    return (
      <div className="App">
        <h1>{titre}</h1>
        { liste }
        {/* {<Membre age={famille.membre5.age} nom={famille.membre5.nom}>
          { description }
          <button onClick={this.handleShowDescription}>
            {isShow ? "Cacher" : "Montrer"}
          </button>
        </Membre>} */}
        {/* <Button vieillir={() => this.handleClick(2)} /> */}
      </div>
    );
  }
}

export default App;
