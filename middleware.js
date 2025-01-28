import { NextResponse } from 'next/server';

const SECRET_KEY = process.env.JWT_SECRET;

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('auth_token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const roles = decodeToken(token).role;

    // ADMIN 권한만 접근 가능한 경로
    if (pathname.startsWith('/api/admin') || pathname.startsWith('/admin')) {
      if (!roles.includes('ADMIN')) {
        return NextResponse.redirect(new URL('/forbidden', req.url));
      }
    }

    // ADMIN과 MANAGER 권한만 접근 가능한 경로
    if (pathname.startsWith('/api/manage') || pathname.startsWith('/board/manage')) {
      if (!roles.includes('ADMIN') && !roles.includes('MANAGER')) {
        return NextResponse.redirect(new URL('/forbidden', req.url));
      }
    }

    // 다른 모든 경로는 모든 권한 허용
    return NextResponse.next();
  } catch (err) {
    console.error('JWT validation failed:', err);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/:path*'], // 모든 경로에 대해 미들웨어 적용
};
