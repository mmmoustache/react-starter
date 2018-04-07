import reducer from '../updateTerm';

describe('Reducer: updateTerm', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle UPDATE_TERM', () => {
    expect(
      reducer([], {
        type: 'UPDATE_TERM',
        text: 'Run the tests'
      })
    ).toEqual('Run the tests');
  });
});