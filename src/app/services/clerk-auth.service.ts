import { Injectable, OnInit } from '@angular/core';
import { Clerk } from "@clerk/clerk-js";
import { BaseTheme, Elements, Layout, SignInProps, SignInTheme, Variables } from '@clerk/types';


@Injectable({
  providedIn: 'root'
})
export class ClerkAuthService implements OnInit {


  key = "";

  clerk = new Clerk(this.key);

  baseTheme: BaseTheme = {
    __type: 'prebuilt_appearance'
  };

  layout: Layout = {};
  variables: Variables = {};
  elements: Elements = {};

  signInTheme: SignInTheme = {
    baseTheme: this.baseTheme,
    layout: this.layout,
    variables: this.variables,
    elements: this.elements
  };

  signInProp: SignInProps = {
    forceRedirectUrl: "string | null",
    fallbackRedirectUrl: "string | null",
    signUpUrl: "string",
    appearance: this.signInTheme,
  };


  constructor() {
    this.initializeClerk();
  }

  ngOnInit(): void {
  }

  async initializeClerk() {
    await this.clerk.load({
      // Set load options here
    });
  }

  signIn() {
    return this.clerk.openSignIn();
  }

  sign() {
    return this.clerk.openSignUp({

    });
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
}
