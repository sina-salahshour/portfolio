import { useCallback, useEffect, useState } from "react";

import { mediaMobile } from "@/ui/screens/root/root.screen.css";

/**
 * when on server, and also on the first render, we assume we are on desktop
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const onScreenSizeChange = useCallback(
    function onScreenSizeChange() {
      if (window == null) {
        return;
      }
      const matches = window.matchMedia(mediaMobile).matches;

      if (matches && isMobile) {
        return;
      }
      if (!matches && !isMobile) {
        return;
      }

      setIsMobile(matches);
    },
    [isMobile],
  );

  useEffect(() => {
    window.addEventListener("resize", onScreenSizeChange);
    window.addEventListener("orientationchange", onScreenSizeChange);
    onScreenSizeChange();
    return () => {
      window.removeEventListener("resize", onScreenSizeChange);
      window.removeEventListener("orientationchange", onScreenSizeChange);
    };
  }, [onScreenSizeChange]);

  return isMobile;
}
