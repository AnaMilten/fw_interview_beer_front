import { connect } from "react-redux";
import { StoreState } from "../../redux/state";
import { allBeersSelector, beerActions } from "../../redux/state/beers";
import { BeerItem } from "./BeerItem";

export default connect(
  (
   state: StoreState
  ) => {
    return {
     loading: state.beers.loading,
      beers: allBeersSelector(state),
    }
  },
  { rateBeer: beerActions.rateBeer }
)(BeerItem)
