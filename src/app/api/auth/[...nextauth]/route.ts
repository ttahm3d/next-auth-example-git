import Github from "next-auth/providers/github";
import NextAuth from "next-auth";

const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
