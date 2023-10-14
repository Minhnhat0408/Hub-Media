import { useEffect, useState } from 'react';

function useDebounce(value : string , delay : number) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const time = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(time);
    }, [value]);

    return debounce;
}

export default useDebounce;
