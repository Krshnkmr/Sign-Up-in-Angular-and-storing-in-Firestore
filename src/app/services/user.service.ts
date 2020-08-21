import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { user } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersCollection: AngularFirestoreCollection<user>;
  users: Observable<user[]>;

  constructor(public firestore: AngularFirestore) {
    // this.users = this.firestore.collection('users').valueChanges();
    // this.users = this.firestore.collection('users').snapshotChanges();
   }
   
   getUsers(){
     return this.users;
   }
}
