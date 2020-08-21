import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { phonenumbervalidator } from './validators/phonenumbervalidator';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { user } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  users: user[];
  form: FormGroup;

  constructor(private firestore: AngularFirestore, private fb: FormBuilder, public userService: UserService) {
    // For the below [validator.required it should be in this square bracket]
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, phonenumbervalidator,Validators.pattern("^[0-9]{10}$")]],
      country: [''],
      city: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  countries = [
    { id: 1, name: "India" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ]
  revert() {
    this.form.reset();
  }
  onSubmit() {
    console.log(this.form.value);
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      // console.log(users);
      this.users = users;
    });
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get email() {
    return this.form.get('email');
  }
  get phonenumber() {
    return this.form.get('phonenumber');
  }
  get country() {
    return this.form.get('country');
  }
  get city() {
    return this.form.get('city');
  }

}

// export class customValidator {
//   static firstname(firestore: AngularFirestore){
//     return (control: AbstractControl) => {
//       const firstname = control.value;
//       console.log("the value of the firstname(from the custom validator) is " + firstname );
//       return firestore.collection('users')
//     }
//   }
// }



// function phonenumbervalidator  (control:AbstractControl): { [key: string]:any } | null {

//   return valid ? null : {invalidNumber: {valid: false,value: control.value}}
// }

// function phonenumbervalidators (control: AbstractControl): { [key: string]: any } | null {
//   const valid = /^\d+$/.test(control.value)
//   return valid ? null : { invalidNumber: {valid: false,value: control.value}}
// }
// function phonenumbervalidator (control: AbstractControl): { [key: string]: any } | null {  
//   if( control.value.length !== 10 || control.value !== undefined && (isNaN(control.value))){
//     return { 'mobilevalidator': true};
//   }
//   return null;
// }