import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import prisma from "../db/prisma.js";

const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleCallbackURL = process.env.GOOGLE_CALLBACK_URL;

if (!googleClientID || !googleClientSecret || !googleCallbackURL) {
  console.warn(
    "⚠️ Google OAuth environment variables are not fully configured."
  );
}

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID || "missing-client-id",
      clientSecret:
        googleClientSecret || "missing-client-secret",
      callbackURL:
        googleCallbackURL ||
        "http://localhost:5001/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const email =
          profile.emails?.[0]?.value || "";

        const image =
          profile.photos?.[0]?.value || "";

        if (!email) {
          return done(
            new Error(
              "Google account did not provide an email."
            ),
            null
          );
        }

        let user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              name: profile.displayName || null,
              image: image || null,
            },
          });

          console.log(
            "✅ New SearchSphere user created:",
            user.email
          );
        } else {
          user = await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              name:
                profile.displayName || user.name,
              image:
                image || user.image,
            },
          });

          console.log(
            "✅ Existing SearchSphere user logged in:",
            user.email
          );
        }

        return done(null, user);
      } catch (error) {
        console.error(
          "❌ GOOGLE USER / PRISMA ERROR:",
          error
        );

        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    console.error(
      "❌ PASSPORT DESERIALIZE ERROR:",
      error
    );

    return done(error, null);
  }
});

export default passport;