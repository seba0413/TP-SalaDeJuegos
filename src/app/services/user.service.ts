import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable} from '@angular/core';


@Injectable()
export class UserService {

    constructor(private fbAuth: AngularFireAuth) { }

    login(email: string, password: string) {

        return this.fbAuth.auth.signInWithEmailAndPassword(email, password);
    }

    register(email: string, password: string, confirm: string) {
        if(password != confirm)
        {
            return Promise.reject("Las contraseñas no coinciden");
        }
        return this.fbAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    forget(email: string){
        return this.fbAuth.auth.sendPasswordResetEmail(email);
    }
}