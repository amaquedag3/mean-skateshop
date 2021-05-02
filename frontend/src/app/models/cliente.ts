export class Cliente {
    id: Number;
    email: String;
    username: String;
    pass: String;
    tipo: Number;

    constructor(){}

    addData(email: String, username: String, pass: String){
        this.email = email;
        this.username = username;
        this.pass = pass;
        this.tipo = 1;
    }
}
