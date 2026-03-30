import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {

  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

register() {
  if (this.email && this.password) {
    alert("Account created successfully");
    this.router.navigate(['/home']);
  } else {
    alert("Please fill all fields");
  }
}
}