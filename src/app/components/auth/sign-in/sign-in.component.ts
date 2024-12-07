import { Component } from '@angular/core';
import { ClerkAuthService } from '../../../services/clerk-auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {


  constructor(public clerk: ClerkAuthService) {
    clerk.signIn();
  }
}
