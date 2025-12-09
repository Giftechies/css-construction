import { NextResponse } from 'next/server';
import * as jose from 'jose'; 

// IMPORTANT: Ensure your JWT_KEY environment variable is set in your .env file
// and is accessible here. This key must match the one used to sign the token 
// in your login API (pages/api/auth/login.js).
const JWT_KEY = new TextEncoder().encode(process.env.JWT_KEY ||"SECRET_KEY");

export async function middleware(request) {
  const protectedPath = '/admin';
  const loginUrl = '/login'; // Adjust to your actual login page
  const homeUrl = '/';      // Redirect non-admins here

  // 1. Check if the request targets the protected path
  if (request.nextUrl.pathname.startsWith(protectedPath)) {
    // 2. Retrieve the token from the 'token' cookie
    const token = request.cookies.get('token')?.value;

    // --- Authentication Check (Is user logged in?) ---
    if (!token) {
      // User is not logged in, redirect to login page
      const url = request.nextUrl.clone();
      url.pathname = loginUrl;
      // Pass the original path so the user can be redirected back after login
      url.searchParams.set('redirect', request.nextUrl.pathname); 
      return NextResponse.redirect(url);
    }

    try {
      // 3. Verify the token using jose for the Edge Runtime
      // This step securely checks the token's signature and expiration.
      const { payload } = await jose.jwtVerify(token, JWT_KEY);

      // 4. Authorization Check (Does the user have the 'admin' role?)
      const userRole = payload.role;
      
      if (userRole !== 'admin') {
        console.warn(`Access Denied: User ${payload.username} has role '${userRole}' and was blocked from ${protectedPath}.`);
        // User is logged in but is NOT an admin, redirect to a non-admin page (home)
        return NextResponse.redirect(new URL(homeUrl, request.url));
      }

      // 5. If authenticated AND authorized, allow the request to proceed
      return NextResponse.next();

    } catch (error) {
      console.error("JWT Verification failed in middleware (Token invalid or expired):", error.message);
      
      // Token is invalid, expired, or tampered with. Redirect to login.
      const url = request.nextUrl.clone();
      url.pathname = loginUrl;
      url.searchParams.set('error', 'session_expired');
      
      // Clear the invalid cookie to ensure the user performs a fresh login
      const response = NextResponse.redirect(url);
      response.cookies.delete('token');
      return response;
    }
  }

  // Allow all other requests to proceed normally
  return NextResponse.next();
}

// Configuration to specify which paths the middleware applies to
export const config = {
  // Apply middleware to all routes that start with /admin
  matcher: [
    '/admin/:path*',
  ],
};
