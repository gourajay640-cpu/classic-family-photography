import {NextResponse} from 'next/server'; import {db} from '@/lib/db'; export async function GET(){return NextResponse.json(await db.package.findMany({where:{active:true},orderBy:{price:'asc'}}))}
