import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.css']
})
export class SubscriptionComponent {

  subscribe(plan: string) {
    console.log("Subscribed to:", plan);
    alert("You selected " + plan + " plan");
  }
}
