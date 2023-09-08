import { NextResponse } from 'next/server'

export default function middleware(request) {
  const cookieJWT = request.cookies.get('jwt')?.value
  if (cookieJWT) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}


// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/log-in']
}
