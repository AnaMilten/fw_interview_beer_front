import React, { useRef, useEffect } from "react";

export interface RenderCountProps {}

export const useComponentRenderCount = (): number => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  return renderCountRef.current;
};
