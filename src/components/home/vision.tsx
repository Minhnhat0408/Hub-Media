import Image from 'next/image';

function Vision({ vision }: { vision: string[] }) {
    return (
        <section className="relative flex w-full h-[500px] overflow-hidden items-center justify-center bg-muted py-20   text-center">
            {/* <h1 className="text-6xl super mb-3 font-bold">Tầm nhìn của Hub Media</h1> */}
            <Image
                src="https://gaaga.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/home-portfolio-2.jpg"
                width={0}
                height={0}
                alt="image"
                sizes="100vw"
                className="absolute w-full h-auto   "
            />
            <div className=" z-[1] bg-vision flex w-[70%] h-fit   justify-center  ">
          
                <h2 className=" p-16 text-white   text-[45px] font-bold leading-[50px] ">
                        &ldquo; Hub Media{' '}
                        <span className="inline-flex">
                            <Image
                                src="/logo/logonotext.png"
                                width={0}
                                height={0}
                                alt="image"
                                sizes="100vw"
                                className="h-auto w-[50px] overflow-hidden "
                            />
                        </span>{' '}
                        {vision[0]}{' '}
                        <span className="inline-flex">
                            <Image
                                src="/images/1f4c8.png"
                                width={0}
                                height={0}
                                alt="image"
                                sizes="100vw"
                                className="h-auto w-[40px] rounded-s-full  "
                            />
                              <Image
                                src="/images/1f4c9.png"
                                width={0}
                                height={0}
                                alt="image"
                                sizes="100vw"
                                className="h-auto w-[40px] rounded-e-full  "
                            />
                        </span>{' '}
                       {vision[1]} &rdquo;
                </h2>
            </div>
        </section>
    );
}

export default Vision;
