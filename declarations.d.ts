declare module '@cashfreepayments/cashfree-js' {
    // This is a minimal declaration for the module
    export function load(options: { mode: 'production' | 'test' }): Promise<any>;
    export type Cashfree = any; // Replace with more detailed types if you have them
    export type StyleObject = any; // Replace with the correct type for StyleObject if known
  }