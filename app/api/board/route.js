import { NextResponse } from "next/server";
import authRoute from '@/lib/AuthChecker';

export async function POST() {
  return Response.json({ message: `Welcome, USER` });
}