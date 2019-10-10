import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ocultarRegistro: boolean;
  ocultarIngreso: boolean;
  ocultarImagen: boolean;

  //Login Firebase
  email: string; 
  password: string; 

  //Registro Firebase
  emailNuevo: string; 
  passwordNuevo: string; 
  confirm: string; 

  //Login localstorage
  usuarioLogueado: string;
  contrasenaUsuarioLogueado: string; 

  //Registro Local Storage
  nuevoUsuario: string; 
  nuevaContrasena: string;

  usuariosString;
  usuarios;

  constructor(private userService: UserService, private router: Router) { 
    this.ocultarImagen = false; 
    this.ocultarRegistro = true; 
    this.ocultarIngreso = true; 
  }

  //Login y registro con Firebase
  onLogin() {
    
    this.userService.login(this.email,this.password)
    .then(data => {
      localStorage.setItem('usuario', this.email);
      this.router.navigate(['/Principal']); 
    })
    .catch(err => {
      console.log(err);
      alert("Usuario no registrado");
    })
  }

  onRegister() {
    
    this.userService.register(this.emailNuevo,this.passwordNuevo, this.confirm)
    .then(data => {
      alert('Usuario registrado');
      this.ocultarRegistro = true; 
      this.ocultarImagen = false; 
    })
    .catch(err => {
      console.log(err);
      alert("Usuario no registrado");
    })
  }


  //Registro y Login con LocalStorage

  registroDeUsuario() {
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

  ingresoDeUsuario() {
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