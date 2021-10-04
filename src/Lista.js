import React from "react";
import Aluno from "./Aluno";

export default function Lista(props) {
  const dadosPessoaisLista = props.dadosPessoais.map((dadosPessoa) => {
    return (
      <Aluno
        key={dadosPessoa.id}
        dadosPessoa={dadosPessoa}
        fetchdadosPessoaisCallback={props.fetchdadosPessoaisCallback}
      />
    );
  });

  return <div> {dadosPessoaisLista}</div>;
}
