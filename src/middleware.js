
import { NextResponse }  from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req){
  const secretKey = new TextEncoder().encode(process.env.JWT_KEY);
  const admin_only_paths =  "/css-admin";
  const admin_only_api = ['/api/form'];
  const authorized_user_paths = [ "/profile", "/profile/edit" ];
  const public_paths = ["/login", "/verify-otp", ];
  const url = req.nextUrl.clone();
  
  let token = req.cookies.get("auth_token")?.value;
  
  if(!token){
    token = req.headers.get('Authorization')?.startsWith('Bearer ') ? req.headers.get('Authorization').split(' ')[1] : null;
    if(!token){
      if(req.nextUrl.pathname.startsWith("/profile")  ){
        url.pathname = '/login';
        return NextResponse.redirect(url);
      }
      if(req.nextUrl.pathname.startsWith(admin_only_paths)  ){
        url.pathname = '/admin-login';
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
  }
}

const {payload} = await jwtVerify(token,secretKey);
const userRole = payload?.role?.toLowerCase().trim( );


if(userRole !== 'admin'){
  if(req.nextUrl.pathname.startsWith("/css-admin")){
    if(userRole==='customer'){
      url.pathname = '/profile';
      return NextResponse.redirect(url);
    }
  }
}

if(userRole === 'admin'){
  if(req.nextUrl.pathname.startsWith("/profile")){
    url.pathname = '/css-admin';
    return NextResponse.redirect(url);
  }
}

if(userRole === 'admin' || userRole === 'customer'){
  if(public_paths.includes(req.nextUrl.pathname)){
    url.pathname = userRole === 'admin' ? '/css-admin' : '/profile';
    return NextResponse.redirect(url);
  }
}

  return NextResponse.next();


}

export const config = {
  matcher: [
    "/css-admin/:path*",
    "/profile/:path*",
    "/profile",
    "/login",
    "/verify-otp",
    "/api/form/:path*",
    "/api/order/:path*"
  ]
}
