import reducer from '../updateNavVisibility';

describe('Reducer: updateNavVisibility', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle UPDATE_NAV_VISIBILITY', () => {
    expect(
      reducer([], {
        type: 'UPDATE_NAV_VISIBILITY',
        text: 'Run the tests'
      })
    ).toEqual('Run the tests');
  });
});