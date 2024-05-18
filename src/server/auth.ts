import { login } from "@/lib/auth/mutations";
import NextAuth, { type DefaultSession } from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken: string;
      roles?: [string];
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

const providers: Provider[] = [
  Credentials({
    name: "Sign in",
    id: "credentials",
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "example@example.com",
      },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) {
        return null;
      }

      try {
        const user = (await login({ user: credentials })) as any;

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          accessToken: user.accessToken,
          roles: user.roles,
        };
      } catch (error) {
        return null;
      }
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt", maxAge: 30 * 60 },
  jwt: { maxAge: 30 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers,
  callbacks: {
    //@ts-ignore
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          accessToken: token.accessToken,
          roles: token.roles,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          accessToken: u.accessToken,
          roles: u.roles,
        };
      }
      return token;
    },
  },
});
