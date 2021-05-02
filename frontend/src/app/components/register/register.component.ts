import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public allClientes: Cliente[] = [];
 
  inputCliente = {
    username : '',
    email : '',
    pass1 : '',
    pass2 : ''
  }

  constructor( public clienteService: ClienteService, public authService: AuthService) { }

  ngOnInit(): void {
  }
  
  OnRegister(form: NgForm){
    if(this.validarDatos(form)){
      this.altaCliente(this.inputCliente.username, this.inputCliente.email, this.inputCliente.pass1);
      this.resetForm(form);
    }
  }

  validarDatos(form: NgForm){
    console.log("Validando register...");
    let valido = true;
    if(this.inputCliente.username == "" || this.inputCliente.email == "" || this.inputCliente.pass1 == "" || this.inputCliente.pass2 == ""){
      console.log("Campos incompletos");
      return false;
    }else if (this.inputCliente.pass1 != this.inputCliente.pass2){
      console.log("Contraseñas no coinciden");
      return false;
    }
    if (this.validarEmail(this.inputCliente.email)){ 
      valido = true;
    }else{
      return false;
    }
    return valido;
  }

  validarEmail(email: String){
    this.clienteService.getAllClientes().subscribe(res => {
      this.allClientes = res as Cliente[];
    })
    for (let x = 0; x < this.allClientes.length; x++){
      if (this.allClientes[x].email == email){ 
        console.log("Email encontrado en la BD")
        return false;
      }
    }
    return true;
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
  }

  altaCliente(username: String, email: String, pass: String){
    let newCliente = new Cliente()
    newCliente.addData(email, username, pass);
    this.authService.register(newCliente)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }
}
