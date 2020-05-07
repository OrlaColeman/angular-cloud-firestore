import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  createToken(token){
    return this.firestore.collection('Details').add(token);
  }
  readToken(){
    return this.firestore.collection('Details').snapshotChanges();
  }
  updateToken(tokenID, token){
    return this.firestore.doc('Details/' + tokenID).update(token);
  }
  deleteToken(tokenID){
    return this.firestore.doc(tokenID).delete();
  }
}
