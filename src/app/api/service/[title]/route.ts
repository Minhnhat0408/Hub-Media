import { db } from '@/firebase/firebase-app'
import { doc, getDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request, {params : {title}}: {params: {title: string}} ) {
    //get the title param
    const res = await getDoc(doc(db,'services',title))
    const service = res.data()
    return NextResponse.json({ service })
}