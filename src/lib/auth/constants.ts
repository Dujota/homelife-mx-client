export const TIMEOUT = process.env.NEXT_PUBLIC_API_TIMEOUT
  ? parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT)
  : 8000;

export const AUTH_ROUTES = process.env.AUTH_ROUTES?.split(",");