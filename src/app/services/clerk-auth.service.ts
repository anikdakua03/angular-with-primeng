import { Injectable, OnInit } from '@angular/core';
// import { UserResource, OrganizationResource, ActiveSessionResource, ClientResource } from "@clerk/types"
// import { ReplaySubject } from 'rxjs';
import { BaseTheme, Elements, Layout, SignInProps, SignInTheme, Variables } from '@clerk/types';

@Injectable({
  providedIn: 'root'
})
export class ClerkAuthService implements OnInit {

  // public readonly clerk$: ReplaySubject<HeadlessBrowserClerk | BrowserClerk> = new ReplaySubject(1);
  // public readonly client$: ReplaySubject<ClientResource | undefined> = new ReplaySubject(1);
  // public readonly session$: ReplaySubject<ActiveSessionResource | undefined | null> = new ReplaySubject(1);
  // public readonly user$: ReplaySubject<UserResource | undefined | null> = new ReplaySubject(1);
  // public readonly organization$: ReplaySubject<OrganizationResource | undefined | null> = new ReplaySubject(1);


  // options: ClerkOptions = {
  //   apiUrl: "",
  //   apiVersion: "",
  //   audience: "",
  //   domain: "",
  //   isSatellite: false,
  //   jwtKey: "",
  //   proxyUrl: "",
  //   publishableKey: "",
  //   sdkMetadata: undefined,
  //   secretKey: "",
  //   telemetry: undefined,
  //   userAgent: "",
  // };

  // newCl = createClerkClient(this.options);
  // await clerk.load();

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

  }

  ngOnInit(): void {
  }

  initializeClerk() {

  }

  signIn() {

  }
}
