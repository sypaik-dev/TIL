import { useState, useEffect } from 'react';  

export default function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.offsetHeight); 
    })
  }, []);

 return isBottom
}