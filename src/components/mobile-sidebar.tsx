"use client"
import { ArrowRight, Menu } from "lucide-react";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";


function MobileSidebar({ lang, navigation }: { lang: Locale, navigation: any }) {
    const [isMounted, setIsMounted] = useState(false)
    const pathname = usePathname();
    useEffect(() => {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger >
                <Button variant={"ghost"} size={"icon"} className="xl:hidden justify-center " >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0 pt-10 w-56">
                {/* <Sidebar/> */}
                <aside className="flex flex-col items-start justify-start w-full h-full gap-y-3 p-4 pt-10">
                
                    {
                        routes.map((route, index) => (
                            <Link
                                key={route.href}
                                href={`/${lang + route.href}`}
                                className={cn(
                                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gradient duration-500 rounded-lg transition",
                                    pathname === `/${lang + route.href}` ? ' text-gradient' : '',
                                )}
                            >
                                <div className="flex items-center flex-1 justify-between ">
                                    {navigation[route.tag]}
                                    <ArrowRight />
                                </div>
                            </Link>
                        ))
                    }
              
            
                </aside>

            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;