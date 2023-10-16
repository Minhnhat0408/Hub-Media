import { NextResponse } from 'next/server';

export async function POST(request: Request ) {
    const formData = await request.formData()
    formData.append('upload_preset',`${process.env.CLOUDINARY_UPLOAD_PRESET}`)
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
    const uploadedImageData = await response.json();
    const imageUrl = uploadedImageData.secure_url;
      
    

    return NextResponse.json(imageUrl);
 
}
