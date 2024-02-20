import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  myForm !: FormGroup

constructor( private fb: FormBuilder){}

ngOnInit(): void {
   this.getInfo()


}


@ViewChild('container') container!: ElementRef;

signIn() {
  this.container.nativeElement.classList.remove('right-panel-active');
}

signUp() {
  this.container.nativeElement.classList.add('right-panel-active');
}

getInfo(){
  this.myForm = this.fb.group({
    username:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, 
      Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
      Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    role:[''],
    isActive:[false]
 
  },
  {
    validator: this.passwordMatchvalidator
  })
}

Onsubmit(form:FormGroup){
  if(form.valid){
    console.log("form")
  }
}

passwordMatchvalidator(form:FormGroup){
  const passwordControl = form.get('password');
  const confirmPasswordControl = form.get('confirmPassword')

  if(passwordControl && confirmPasswordControl){
    if(passwordControl.value !== confirmPasswordControl.value){
      confirmPasswordControl.setErrors({passwordMismatch : true})
    } else{
      confirmPasswordControl.setErrors(null)
    }

  }

}



}
