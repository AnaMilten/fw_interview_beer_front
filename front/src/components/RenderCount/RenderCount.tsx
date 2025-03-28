import React, { FC } from "react";
import { RenderCountProps, useComponentRenderCount } from "./RenderCount.model";
import styles from "./RenderCount.module.scss";

export const RenderCount: FC<RenderCountProps> = () => {
  const renderCount = useComponentRenderCount();

  return (
    <div className={styles.value}>
      <p>{`Render:  ${renderCount}`}</p>
    </div>
  );
};
