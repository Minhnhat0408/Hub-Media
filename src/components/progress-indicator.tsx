"use client"

import useProgressScroll from "@/hooks/useProgressScroll";

function ProgressIndicator() {
  const completion = useProgressScroll()

  return (
    <div className='top-0 left-0 h-1 w-full bg-white/60 z-9'>
      <div style={{ transform: `translateX(${completion - 100}%)` }} className='bg-gradient z-10 h-1 w-full'>

      </div>
    </div>
  );
}

export default ProgressIndicator;