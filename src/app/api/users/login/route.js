import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/dbConfig/dbConfig";

connect()

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    if (!email || !password)
      return NextResponse.json(
        { message: "Plz Provide Required Field" },
        { status: 404 }
      );
    const user = await User.findOne({ email: email });
    if (!user)
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword)
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    const createToken = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(createToken, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    const response = NextResponse.json(
      { message: "Login Successfully", success: true },
      { status: 200 }
    );
    response.cookies.set("IRS", token, { httpOnly: true });
    return response
  } catch (error) {
    return NextResponse.json(
      { error: error.message, message: "Server Error" },
      { status: 500 }
    );
  }
};
