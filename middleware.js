import { NextResponse } from 'next/server'

export default function middleware(request) {
  const cookieJWT = request.cookies.get('jwt')?.value
  console.log('================cookieJWT', cookieJWT)
  if (cookieJWT && cookieJWT == null) {
    console.log('================cookieJWTinner', cookieJWT)
    return NextResponse.redirect(new URL('/', request.url))
  }
}


// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/log-in']
}
