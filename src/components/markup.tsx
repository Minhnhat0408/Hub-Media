import { cn } from '@/lib/utils';

function Mark({
    dotanimate,
    lineanimate,
    horizontal = false,
    flip = false,
    classLine,
    classDot,
}: {
    dotanimate?: boolean;
    lineanimate?: boolean;
    horizontal?: boolean;
    flip?: boolean;
    classLine?: string;
    classDot?: string;

}) {
    return (
        <>
            {horizontal ? (
                flip ? (
                    <div className={cn('flex items-center ')}>
                        <div
                            className={cn(
                                'mr-2 inline-flex sm:h-[10px] sm:w-[10px] rounded-full bg-gradient h-[6px] w-[6px]',
                                {
                                    dot: dotanimate,
                                },classDot
                            
                            )}
                        ></div>
                        <div className={cn('h-[1px] sm:w-16 w-10 bg-muted-foreground',classLine )}></div>
                    </div>
                ) : (
                    <div className={cn('flex items-center ')}>
                        <div className={cn('h-[1px] sm:w-16 w-10 bg-muted-foreground',classLine )}></div>
                        <div
                            className={cn(
                                'ml-2 inline-flex sm:h-[10px] sm:w-[10px] rounded-full bg-gradient h-[6px] w-[6px]',
                                dotanimate && ' dot',classDot
                           
                            )}
                        ></div>
                    </div>
                )
            ) : (
                <div className={cn('flex h-28 flex-col items-center')}>
                    <div
                        className={cn(
                            'mb-2 inline-flex sm:h-[10px] sm:w-[10px] rounded-full bg-gradient h-[6px] w-[6px]',
                            dotanimate && ' dot',
                            classDot
                        )}
                    ></div>
                    <div
                        className={cn(
                            'sm:h-16 h-10 w-[1px] bg-muted-foreground',
                            lineanimate && ' line-shrink',classLine
                       
                        )}
                    ></div>
                </div>
            )}
        </>
    );
}

export default Mark;
