import { setPerson } from "./../infra/person.repository.js";

export const personService = {
  add,
};

function add(person) {
  setPerson(person)
    .then((res) => {
      console.log("Adicionado: ", res);
      alert("Adicionado com sucesso!");
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Error ao adicionar o usuário");
    });
}
