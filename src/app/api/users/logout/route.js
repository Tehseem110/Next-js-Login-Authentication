const { NextResponse } = require("next/server");

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout Successfully",
      success: true,
    });
    response.cookies.set("IRS", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
