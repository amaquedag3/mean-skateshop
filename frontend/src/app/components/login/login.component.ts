import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputCliente: Cliente = new Cliente();
  public allClientes: Cliente[] = [];

  constructor(public clienteService: ClienteService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    if(this.validarDatos(form)){
      this.authService.login(this.inputCliente.email, this.inputCliente.pass);
    }
  }


  validarDatos(form: NgForm){
    console.log("Validando login...");

    if(form.value.username == "" || form.value.pass == ""){
      console.log("Campos incompletos");
      return false;
    }

    this.clienteService.getAllClientes().subscribe(res => {
      this.allClientes = res as Cliente[];
    })

    for (let x = 0; x < this.allClientes.length; x++){
      if(this.allClientes[x].email == this.inputCliente.email &&
         this.allClientes[x].pass == this.inputCliente.pass){
          return true;
      }
    }

    return false;
  }

}
