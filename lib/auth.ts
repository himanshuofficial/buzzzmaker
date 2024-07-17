import { request } from "http";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { describe } from "node:test";
import { useRouter } from "next/navigation";

const secretKey = "b=w^$^n60tnf5^3%mb&1si=z6f!vh9ofjrrn$3loc+2b+9tq=8"
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime("2400 minutes from now") //TODO: While deploying reduce to 8hrs
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256']
    })
    return payload;
}

export async function login(formData: FormData) {
    const user = {email: formData.get("username")};

    if(user.email === "user" && formData.get("password") === "password") {
        const expires = new Date(Date.now() + 30 * 60000) 
        const session = await encrypt({user, expires})
        console.log(session)
        cookies().set('session', session, {expires, httpOnly: true})
    }
}

export async function logout() {
    cookies().set('session', '', {expires: new Date(0)})
}

export async function getSession() {
    const session = cookies().get('session')?.value;
    if(!session) return null;
    // since there is only one user 
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    console.log("returning")
    if(!session) {
        return;
    }
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 2400 * 60000);
    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires
    })
    return res;
}
