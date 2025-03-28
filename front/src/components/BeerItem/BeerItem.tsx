import React, { FC } from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { BeerItemProps } from "./BeerItem.model";
import { RenderCount } from "../RenderCount/RenderCount";

export const BeerItem: FC<BeerItemProps> = ({ beer, rateBeer }) => {
  const handleRate = (rateValue: number): void => {
    try {
      rateBeer(beer, rateValue);
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    }
  };

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{beer.name}</div>
      <div className={styles.ibu}>IBU: {beer.ibu}</div>
      <div className={styles.score}>Score: {beer.score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate onRate={handleRate} />
      </div>
      <div>
        <RenderCount />
      </div>
    </div>
  );
};
