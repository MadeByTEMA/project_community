import { NextResponse } from "next/server";
import authRoute from '@/lib/AuthChecker';

async function handler(req, user) {
  return Response.json({ message: `Welcome, Manage ${user.roles}` });
}

export const POST = authRoute(handler, ["ADMIN", "MANAGE"]);