import { NextResponse } from 'next/server'
 
export async function GET(request: Request ) {
    //get the title param
    const { searchParams  } = new URL(request.url)
    const id = searchParams.get('id')
    const key = process.env.EDIT_PRIVATE_KEY
    return NextResponse.redirect(`${process.env.URL}/vi/blog/edit/?key=${key}&id=${id}`)
    
}