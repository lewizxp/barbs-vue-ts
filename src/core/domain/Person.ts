export class Person {
  name: string;
  email: string;
  telephone: string;
  document?: string;
  gender?: string;
  photo?: string;
  typePerson: string; // fisica | juridica
  typeAccess: string; // cliente | gestor
  password: string;
  isActive: boolean;
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.telephone = "";
    this.isActive = true;
    this.typeAccess = "cliente";
    this.typePerson = "fisica";
  }
}
