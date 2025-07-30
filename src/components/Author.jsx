import React from "react";

// Componente de Classe
// Não é possível utilizar hooks

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message:
        "Feito para estudos por Geraldo Duarte com auxílo de Full Stack Club - Felipe Rocha",
    };
  }
  render() {
    return (
      <h1 className="absolute bottom-0 flex justify-center text-center text-slate-400 font-medium">{this.state.message}</h1>
    );
  }
}

export default Author;
