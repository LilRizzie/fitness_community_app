import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SubscriptionComponent } from './subscription/subscription.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'home', component: SubscriptionComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];