import { useCallback, useEffect, useState } from "react";

export function useModelState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return {isOpen, open, close}
}

export const useMediaQuery = query => {
    const [matches, setMatches] = useState(
        () => window.matchMedia(query).matches
    );

    useEffect(() => {
      const queryList = window.matchMedia(query);
      setMatches(queryList.matches);

      const listener = evt => setMatches(evt.matches);

      queryList.addEventListener(listener, []);
      return () => queryList.removeEventListener(listener, []);
    }, [query])
    
    return matches;
}