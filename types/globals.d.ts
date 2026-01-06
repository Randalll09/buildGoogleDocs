export {};

declare global {
  interface CustomJwtSessionClaims {
    org_id?: string;
    o?: {
      id: string;
      rol: string;
      slg: string;
    };
  }
}
