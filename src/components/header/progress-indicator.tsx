"use client"

import useProgressScroll from "@/hooks/useProgressScroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ProgressIndicator() {
  const completion = useProgressScroll()

  // useEffect(() => {
  //   console.log(completion)
  // }, [completion, pathname])
  return (
    <div className='z-10 relative h-1 w-full bg-white/60 '>
      <div style={{ transform: `translateX(${completion - 100}%)` }} className='bg-gradient  h-full w-full '>

      </div>
    </div>
  );
}

export default ProgressIndicator;