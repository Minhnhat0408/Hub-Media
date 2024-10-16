import { NextResponse } from 'next/server'
 
export async function GET(request: Request ) {
    //get the title param
    const { searchParams  } = new URL(request.url)
    const key = searchParams.get('key')
    const title = searchParams.get('title')
    if(key === process.env.EDIT_PRIVATE_KEY){
        return NextResponse.json({title:title,key:key})
    }else{
        return NextResponse.json({error: "Invalid key"})
    }   
}