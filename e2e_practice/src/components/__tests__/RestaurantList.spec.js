import {ListComp} from '../ListComp';
import {render} from '@testing-library/react';

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    const restaurants = [];

    render(
      <ListComp loadRestaurants={loadRestaurants} restaurants={restaurants} />,
    );

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays restaurants', () => {
    const noop = () => {};
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];

    const {queryByText} = render(
      <ListComp loadRestaurants={noop} restaurants={restaurants} />,
    );

    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
