import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.css']
})
export class SigninComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

login() {
  if (this.email && this.password) {
    alert("Login successful");
    this.router.navigate(['/home']);
  } else {
    alert("Enter your details");
  }
}
}