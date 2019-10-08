import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ocultarRegistro: boolean;
  ocultarIngreso: boolean;
  ocultarImagen: boolean;

  usuarioLogueado: string;
  contrasenaUsuarioLogueado: string; 

  nuevoUsuario: string; 
  nuevaContrasena: string; 
  usuariosString;
  usuarios;

  constructor(private router: Router) { 
    this.ocultarImagen = false; 
    this.ocultarRegistro = true; 
    this.ocultarIngreso = true; 
  }

  registroDeUsuario() {debugger;
    this.usuariosString =  localStorage.getItem('usuarios');
    this.usuarios = JSON.parse(this.usuariosString);

    if(this.usuarios == null)
    {
      var usuario = [{'usuario': this.nuevoUsuario, 'contraseña': this.nuevaContrasena }];
      localStorage.setItem('usuarios', JSON.stringify(usuario));
    }
    else
    {
      var user = { 'usuario': this.nuevoUsuario, 'contraseña': this.nuevaContrasena};
      this.usuarios.push(user);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
 
    this.ocultarRegistro= true; 
    this.ocultarImagen = false; 
  }

  ingresoDeUsuario() {debugger
    this.usuariosString =  localStorage.getItem('usuarios');
    this.usuarios = JSON.parse(this.usuariosString);
    var encontro = false; 

    for(var i = 0; i < this.usuarios.length; i++) {
      console.log(this.usuarios[i].usuario);
      if(this.usuarios[i].usuario == this.usuarioLogueado && this.usuarios[i].contraseña == this.contrasenaUsuarioLogueado) {
        this.router.navigate(['/Principal']);
        encontro = true; 
        break; 
      }
    }
    if(encontro == false)
      alert("Nombre de usuario y/o contraseña incorrectos");
  }

  registrarse() {
    this.ocultarImagen = true; 
    this.ocultarRegistro = false;
    this.ocultarIngreso = true; 
  }

  ingresar() {
    this.ocultarImagen = true; 
    this.ocultarRegistro = true;
    this.ocultarIngreso = false; 
  }

  ngOnInit() {
  }

}

var guardado = localStorage.getItem('datos');

console.log('objetoObtenido: ', JSON.parse(guardado));