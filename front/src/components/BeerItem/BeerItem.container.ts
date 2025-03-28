import { connect } from "react-redux";
import { StoreState } from "../../redux/state";
import { beerActions } from "../../redux/state/beers";
import { BeerItem } from "./BeerItem";

export default connect(
  (state: StoreState) => {
    return {
      loading: state.beers.loading,
    };
  },
  { rateBeer: beerActions.rateBeer }
)(BeerItem);
