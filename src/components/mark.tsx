import { cn } from '@/lib/utils';

function Mark({
    dotanimate,
    lineanimate,
    horizontal = false,
    flip = false,

}: {
    dotanimate?: boolean;
    lineanimate?: boolean;
    horizontal?: boolean;
    flip?: boolean;

}) {
    return (
        <>
            {horizontal ? (
                flip ? (
                    <div className={cn('flex w-28 items-center ')}>
                        <div
                            className={cn(
                                'mr-2 inline-flex h-[10px] w-[10px] rounded-full bg-gradient',
                                dotanimate && ' dot',
                            )}
                        ></div>
                        <div className={cn('h-[1px] w-16 bg-muted-foreground')}></div>
                    </div>
                ) : (
                    <div className={cn('flex w-28 items-center ')}>
                        <div className={cn('h-[1px] w-16 bg-muted-foreground')}></div>
                        <div
                            className={cn(
                                'ml-2 inline-flex h-[10px] w-[10px] rounded-full bg-gradient',
                                dotanimate && ' dot',
                            )}
                        ></div>
                    </div>
                )
            ) : (
                <div className={cn('flex h-28 flex-col items-center')}>
                    <div
                        className={cn(
                            'mb-2 inline-flex h-[10px] w-[10px] rounded-full bg-gradient',
                            dotanimate && ' dot',
                        )}
                    ></div>
                    <div className={cn('h-16 w-[2px] bg-muted-foreground', lineanimate && ' line-shrink')}></div>
                </div>
            )}
        </>
    );
}

export default Mark;
