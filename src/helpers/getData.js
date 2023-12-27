import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"


export const getData = async(request) =>{
    try{
        const token = request.cookies.get("IRS")?.value
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)

        return decoded.id

    }catch(error){
        throw new Error(error.message)
    }
}
