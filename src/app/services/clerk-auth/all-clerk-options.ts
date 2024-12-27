import { Appearance, BaseTheme, ClerkOptions, Elements, Layout, SignInProps, SignInTheme, SignOutOptions, Variables } from '@clerk/types';

// Basic layout properties
const layout: Layout = {
    logoImageUrl: "",
    logoPlacement: "outside",
    helpPageUrl: "",
    privacyPageUrl: "",
    logoLinkUrl: "",
    shimmer: true,
    showOptionalFields: true,
    socialButtonsPlacement: "top",
    socialButtonsVariant: "auto",
    termsPageUrl: "",
    unsafe_disableDevelopmentModeWarnings: false
};

// CSS variables 
const variables: Variables = {
    // borderRadius: "0.5rem",
    // colorBackground: "black",
    // colorDanger: "",
    // colorInputBackground: "",
    // colorInputText: "",
    // colorNeutral: "",
    // colorPrimary: "",
    // colorShimmer: "",
    // colorSuccess: "",
    // colorText: "",
    // colorTextOnPrimaryBackground: "",
    // colorTextSecondary: "",
    // colorWarning: "",
    // fontFamily: "",
    // fontFamilyButtons: "",
    // fontSize: "1rem",
    // fontWeight: {
    //   bold: "lighter",
    //   medium: "lighter",
    //   normal: "normal"
    // },
    // spacingUnit: ""
};

// HTML elements can be customized
const elements: Elements = {};

// Base theme or themes can be used, if needed can use other available different themes from Clerk
const baseTheme: BaseTheme = {
    __type: "prebuilt_appearance"
};

const signInTheme: SignInTheme = {
    baseTheme: baseTheme,
    layout: layout,
    variables: variables,
    elements: elements
};

const signInProp: SignInProps = {
    forceRedirectUrl: "http://localhost:4200/showcase",
    fallbackRedirectUrl: "http://localhost:4200/showcase",
    signUpUrl: "string",
    appearance: signInTheme,
    afterSignOutUrl: "http://localhost:4200"
};

const signOutOptions: SignOutOptions = {
    redirectUrl: "http://localhost:4200"
}

const appearance: Appearance = {
    baseTheme: baseTheme,
    // baseTheme: [],
    createOrganization: {
        // For organizations
    },
    elements: elements,
    layout: layout,
    oneTap: {
    },
    organizationList: {
    },
    organizationProfile: {
    },
    organizationSwitcher: {
    },
    signIn: {
    },
    signUp: {
    },
    userButton: {
    },
    userProfile: {
    },
    userVerification: {
    },
    variables: variables,
    waitlist: {
    }
};

export const CLERK_OPTIONS: ClerkOptions = {
    // Set load options here
    __experimental_router: {
        mode: 'path',
        name: '',
        pathname: function (): string {
            throw new Error('Function not implemented.');
        },
        push: function (path: string): void {
            throw new Error('Function not implemented.');
        },
        replace: function (path: string): void {
            throw new Error('Function not implemented.');
        },
        searchParams: function (): URLSearchParams {
            throw new Error('Function not implemented.');
        },
        shallowPush: function (path: string): void {
            throw new Error('Function not implemented.');
        }
    },
    __internal_claimKeylessApplicationUrl: undefined,
    afterMultiSessionSingleSignOutUrl: undefined,
    afterSignOutUrl: undefined,
    allowedRedirectOrigins: undefined,
    allowedRedirectProtocols: undefined,
    appearance: appearance,
    experimental: {},
    isSatellite: false,
    localization: undefined,
    polling: undefined,
    routerDebug: undefined,
    routerPush: undefined,
    routerReplace: undefined,
    sdkMetadata: undefined,
    selectInitialSession: undefined,
    signInUrl: undefined,
    signInFallbackRedirectUrl: undefined,
    signInForceRedirectUrl: undefined,
    signUpFallbackRedirectUrl: undefined,
    signUpForceRedirectUrl: undefined,
    signUpUrl: undefined,
    standardBrowser: undefined,
    supportEmail: "support@support.com",
    telemetry: undefined,
    touchSession: undefined,
    waitlistUrl: undefined
};