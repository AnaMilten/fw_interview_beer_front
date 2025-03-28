import React, { FC } from "react";
import { Loader } from "../Loader";

import styles from "./BeerList.module.scss";
import { BeerListProps } from "./BeerList";
import { RenderCount } from "../RenderCount/RenderCount";
import BeerItem from "../BeerItem";

export const BeerList: FC<BeerListProps> = ({ beers, loading }) => (
  <div className={styles.Beerlist}>
    {!loading && beers.map((beer) => <BeerItem key={beer.uuid} beer={beer} />)}
    {loading && <Loader />}
    <RenderCount />
  </div>
);
