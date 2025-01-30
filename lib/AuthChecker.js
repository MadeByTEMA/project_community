import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

function verifyJWT(token) {
  try {
    if (!token) return null;
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

function checkRole(user, allowedRoles) {
  return user && allowedRoles.includes(user.roles);
}

export default function authRoute(handler, allowedRoles) {
  return async function (req) {
    const token = req.cookies.get('auth_token');
    const user = verifyJWT(token.value);
    if (!checkRole(user, allowedRoles)) {
      return NextResponse.json({ message: "권한이 없습니다." }, { status: 403 });
    }

    return handler(req, user); // 유효한 사용자라면 원래 핸들러 실행
  };
}

export function authPage(cookies, allowedRoles) {
    const token = cookies.get("auth_token")?.value || null;
    
    const user = verifyJWT(token);
  
    if (!checkRole(user, allowedRoles)) {
      return false;
    } else {
      return true;
    }
}