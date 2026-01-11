import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "@auth/core/providers/github"

export const config: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/protected-page") return !!auth;
        return true;
      } catch (e) {
        console.error(e);
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
