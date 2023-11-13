'use client';

import { useEffect, useRef } from 'react';
import Plyr, { APITypes } from 'plyr-react';
import 'plyr-react/plyr.css';
import { cn } from '@/lib/utils';

type VideoPlayerProps = {
    src: string;
    options?: Plyr.Options;
    className?: string;
};

const VideoPlayer = ({ src, options, className }: VideoPlayerProps) => {
    const ref = useRef<APITypes>(null);
    const plyrVideo = src ? (
        <Plyr
            ref={ref}
            // className="object-cover w-full h-full"
            source={{
                type: 'video',
                sources: [
                    {
                        src: src,
                        provider: 'html5',
                    },
                ],
            }}
            options={options}
        />
    ) : null;

    return (
        <div className={cn('video-player aspect-video ', className)} style={{ boxShadow: '10px 10px 15px 5px rgba(0,0,0,0.6)',backgroundImage:"url('https://utfs.io/f/f2c489d8-1f1f-40b8-85f5-9ab2c8bf8d14-evio82.png')",backgroundRepeat:'no-repeat',backgroundPositionX:'center' ,     }}>
            {plyrVideo}
        </div>
    );
};

export default VideoPlayer;
