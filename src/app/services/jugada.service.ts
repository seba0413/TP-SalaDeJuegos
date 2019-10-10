import { Injectable } from '@angular/core';
import { Jugada } from 'src/app/models/jugada';
import { AngularFirestore, DocumentReference, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JugadaService {

  constructor(private db: AngularFirestore) { }

  private jugadaCollectionName = 'jugadas';

  saveJugada(jugada: Jugada): Promise<DocumentReference> {
    return this.db.collection(this.jugadaCollectionName).add(jugada);
  }
}
