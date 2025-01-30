import pool from '@/lib/db';
import jwt from 'jsonwebtoken';
import { withLogging } from "@/lib/withLogging";
import { withErrorHandling } from "@/lib/withErrorHandling";

export async function handler(req) {
  const { id, password } = await req.json();
  const [ user ] = await pool.query('SELECT * FROM users WHERE id = ? AND password = ?', [id, password]);
    
  if (user.length === 0) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }
  const token = jwt.sign(
    {
      sub: user[0].id,
      nickname: user[0].nickname,
      ip: req.ip,
      auth_country: 'KR', // 인증된 국가 설정
      ip_country: 'KR', // 클라이언트 IP 국가
      roles: user[0].role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: {
        "Set-Cookie": `auth_token=${token}; HttpOnly; Path=/; Secure=${process.env.NODE_ENV === "production" ? "true" : "false"}; SameSite=Strict; Max-Age=${60 * 60}`
      },
    }
  );
}

export const GET = withLogging(withErrorHandling(handler));
export const POST = withLogging(withErrorHandling(handler));