import { Injectable, OnInit, signal } from '@angular/core';
import { Clerk } from "@clerk/clerk-js";
import { UserResource } from '@clerk/types';
import { environment } from '@environments/environment';
import { CLERK_OPTIONS } from './all-clerk-options';


@Injectable({
  providedIn: 'root'
})
export class ClerkAuthService implements OnInit {

  key = environment.CLERK_PUBLISHABLE_KEY;

  clerk = new Clerk(this.key);

  // Signal to hold the logged-in user
  private readonly loggedInUser = signal<UserResource | null>(null);

  constructor() {
    // this.initializeClerk();
  }

  ngOnInit(): void {
    // this.updateUserState();
  }

  async initializeClerk() {
    await this.clerk.load(CLERK_OPTIONS).then(() => {
      console.log("Clerk loaded...");
    }).catch(err => {
      console.log("But got some error from Clerk :", err);
    });

    // Automatically update the user state on sign-in or sign-out events
    this.clerk.addListener(() => {
      this.updateUserState();
    });
  }

  // Method to get the signal's value (accessor)
  get getUserFromSignal() {
    return this.loggedInUser();
  }

  signIn() {
    return this.clerk.openSignIn();
  }

  // Sign out the user
  async signOut(): Promise<void> {
    if (this.clerk) {
      await this.clerk.signOut();
      console.log('User signed out successfully');
    }
  }

  currentUser() {
    return this.clerk.user;
  }

  google() {
    return this.clerk.openGoogleOneTap();
  }

  openUserProfile() {
    this.clerk.openUserProfile();
  }

  closeUserProfile() {
    this.clerk.closeUserProfile();
  }

  // Update the current user state
  private updateUserState(): void {
    this.loggedInUser.set(this.clerk.user || null);
    console.log('Current user:', this.loggedInUser());
  }
}
