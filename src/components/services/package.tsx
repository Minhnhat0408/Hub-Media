import { Locale } from '@/i18n.config';
import { Coins } from 'lucide-react';
import { Key } from 'react';

export default function Package({
    title,
    pkg,
    price,
    details,
    lang,
    countService,
}: {
    title: string;
    pkg: string;
    price: string[];
    details: string[];
    lang: Locale;
    countService: number;
}) {
    return (
        <div className="group flex w-[450px]  flex-col items-center gap-y-8 border-[1px] border-gradient py-10 md:h-[600px]">
            <div className="flex h-fit flex-col items-center ">
                {/* {type && <h3 className="silver mb-2 text-3xl">{type}</h3>} */}
                <h2 className="text-3xl text-gradient ">{pkg}</h2>
            </div>

            <Coins className="h-20 w-20 rounded-full border-[1px] border-gradient p-4  text-gradient duration-500 group-hover:bg-gradient  group-hover:text-white " />
            <h3 className="super !text-3xl text-gradient ssm:text-4xl  ">
                {price[0]}
                <span className="text-sm "> vnd</span>
                <span className="text-sm ">{price.length > 1 && ' / ' + price[1]}</span>
            </h3>
            <ul className="mt-4 flex flex-col items-center gap-y-4 text-muted-foreground">
                {details ? (
                    details.map((item: string, ind: Key) => {
                        return <li key={ind}>{item}</li>;
                    })
                ) : (
                    <li>No specific details</li>
                )}
            </ul>
            <a
                className="mt-4 flex items-center justify-center rounded-none border-[1px] border-gradient px-4 py-3  duration-500 group-hover:bg-gradient "
                href={'/' + lang + '/contact/' + title + '/' + countService + '#form'}
            >
                <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                Choose Plan
            </a>
        </div>
    );
}
