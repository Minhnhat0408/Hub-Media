import { validateString } from '@/lib/utils'
import {Resend} from 'resend'
import { NextResponse } from 'next/server'
import Email from '@/app/[lang]/contact/email'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request ) {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const name = formData.get('name') as string  
    const message = formData.get('message') as  string
    const services = formData.get('services') as string

    if(!validateString(email,500)){
        return NextResponse.json({error: 'Invalid email'})

    }
    if(!validateString(message,5000)){
        return NextResponse.json({error: 'Invalid message'})
    }

    const res = await resend.emails.send({
        from: 'Hub Media <onboarding@resend.dev>',
        to: 'kurominhnhat@gmail.com',
        subject: 'Liên hệ từ website Hub Media',
        reply_to: email as string,
        react: React.createElement(Email,{email,phone,name,message,services})
    });
  
    
    // const res = await getDoc(doc(db,'services',title))
    return NextResponse.json(res)
}