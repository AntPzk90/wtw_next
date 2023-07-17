import {NextResponse} from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  const cookieValue = request.cookies.get('jwt')?.value
  console.log('cookies ====================================================', cookieValue)
  if (!cookieValue) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}


// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/log-in']
}
