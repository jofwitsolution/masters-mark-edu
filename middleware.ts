import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/contact",
  "/blog(.*)",
  "/events(.*)",
  "/reviews(.*)",
  "/from-director-desk",
  "/gallery",
  "/privacy-policy",
  "/management(.*)",
  "/schools(.*)",
  "/mastersmark-admin/sign-in(.*)",
  "/mastersmark-admin/sign-up(.*)",
  "/mastersmark-admin/log-out",
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
