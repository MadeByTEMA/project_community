import jwt from 'jsonwebtoken';

export async function GET(req) {
  const token = req.cookies.get('auth_token');
  console.log(token.value);
  if (!token) {
    return new Response(JSON.stringify({ error: 'Token not found' }), {
      status: 401,
    });
  }

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    return new Response(JSON.stringify(decoded), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
    });
  }
}