import { cookies } from 'next/headers'; import crypto from 'crypto';
const secret=()=>process.env.AUTH_SECRET||'dev-secret-change-me';
export function signToken(id:string){return crypto.createHmac('sha256',secret()).update(id).digest('hex')+'.'+id}
export function verifyToken(token?:string){if(!token)return null; const [sig,id]=token.split('.'); if(!sig||!id)return null; const expected=crypto.createHmac('sha256',secret()).update(id).digest('hex'); return crypto.timingSafeEqual(Buffer.from(sig),Buffer.from(expected))?id:null}
export async function adminId(){return verifyToken((await cookies()).get('cfp_admin')?.value)}
