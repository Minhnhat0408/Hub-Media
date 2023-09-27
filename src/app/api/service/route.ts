import { db } from '@/firebase/firebase-app'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
    //get the title param
    const res = await getDocs(collection(db,'services'))
    const services = res.docs.map(doc => doc.data())
    return NextResponse.json({ services })
  }