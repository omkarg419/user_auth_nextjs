import { connectDB } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

