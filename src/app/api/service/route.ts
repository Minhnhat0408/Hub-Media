import { db } from '@/firebase/firebase-app'
import { doc, getDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') as string
    console.log(title)
    const res = await getDoc(doc(db,'services',title))
    const service = res.data()
    return NextResponse.json({ service })
  }