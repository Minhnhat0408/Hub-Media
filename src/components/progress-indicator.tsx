"use client"

import useProgressScroll from "@/hooks/useProgressScroll";

function ProgressIndicator() {
  const completion = useProgressScroll()

    return ( 
        <div style={{ transform: `translateX(${completion - 100}%)` }} className='bg-gradient h-1 w-full'>

        </div>
     );
}

export default ProgressIndicator;