import {useEffect} from 'react';

export const ListComp = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return <div>Restaurants</div>;
};
export default ListComp;
