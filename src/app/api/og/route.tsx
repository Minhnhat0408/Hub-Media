import Image from 'next/image';
import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    background: 'black',
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbacklog.png?alt=media&token=614ba539-c8fe-459a-8bb7-577f43f5917f'
                    }
                    alt="img"
                    width="1200"
                    height="630"
                />
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
