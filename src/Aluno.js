import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Aluno extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    const { id } = this.props.dadosPessoa;
    const url = `http://localhost:3001/dadosPessoais/${id}`;

    fetch(url, {
      method: "DELETE"
    });

    this.props.fetchdadosPessoaisCallback();
  }

  render() {
    const {
      id,
      nome,
      nascimento,
      cpf,
      pais,
      genero,
      uf,
      localidade,
      telefone,
      email,
      escolaridade
    } = this.props.dadosPessoa;
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nome completo</th>
                  <th scope="col">Data de nascimento</th>
                  <th scope="col">CPF</th>
                  <th scope="col">País de origem</th>
                  <th scope="col">Gênero</th>
                  <th scope="col">Estado onde vive</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Escolaridade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{nome}</td>
                  <td>{nascimento}</td>
                  <td>{cpf}</td>
                  <td>{pais}</td>
                  <td>{genero}</td>
                  <td>{uf}</td>
                  <td>{localidade}</td>
                  <td>{telefone}</td>
                  <td>{email}</td>
                  <td>{escolaridade}</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={this.delete}
                      type="button"
                      class="btn btn-danger"
                    >
                      Apagar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}