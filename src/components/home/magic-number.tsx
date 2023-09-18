import Counter from '../animations/counter';

function MagicNumber() {
    return (
        <section className="flex w-full justify-center gap-x-12 bg-muted py-20">
            <div className="group flex items-center gap-x-6">
                <Counter
                    from={0}
                    to={22}
                    duration={2}
                    className="text-stroke text-[120px] font-bold uppercase text-transparent duration-500 group-hover:text-gradient "
                />
                <span className="w-40 text-2xl text-muted-foreground duration-500 group-hover:text-white">
                    Hello everyone my name is minh
                </span>
            </div>
            <div className="group flex items-center gap-x-6">
                <Counter
                    from={0}
                    to={22}
                    duration={2}
                    className="text-stroke text-[120px] font-bold uppercase text-transparent duration-500 group-hover:text-gradient "
                />
                <span className="w-40 text-2xl text-muted-foreground duration-500 group-hover:text-white">
                    Hello everyone my name is minh
                </span>
            </div>
            <div className="group flex items-center gap-x-6">
                <Counter
                    from={0}
                    to={22}
                    duration={2}
                    className="text-stroke text-[120px] font-bold uppercase text-transparent duration-500 group-hover:text-gradient "
                />
                <span className="w-40 text-2xl text-muted-foreground duration-500 group-hover:text-white">
                    Hello everyone my name is minh
                </span>
            </div>
            <div className="group flex items-center gap-x-6">
                <Counter
                    from={0}
                    to={22}
                    duration={2}
                    className="text-stroke text-[120px] font-bold uppercase text-transparent duration-500 group-hover:text-gradient "
                />
                <span className="w-40 text-2xl text-muted-foreground duration-500 group-hover:text-white">
                    Hello everyone my name is minh
                </span>
            </div>
        </section>
    );
}

export default MagicNumber;
