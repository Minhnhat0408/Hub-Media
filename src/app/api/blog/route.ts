import { db } from '@/firebase/firebase-app'
import { Blog } from '@/lib/constants'
import {  collection, getDocs } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    //get the title param
    const res = await getDocs(collection(db,'blogs'))
    const blogs = res.docs.map(doc => doc.data()) as Blog[]
    
    return NextResponse.json(blogs)
  }