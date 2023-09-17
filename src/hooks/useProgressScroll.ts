"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

const useProgressScroll = () => {
  const [completion, setCompletion] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    
    setCompletion(0)
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if(scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    }

  }, [pathname]);

  return completion;
}

export default useProgressScroll