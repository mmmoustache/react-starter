import updateTerm from '../updateTerm';

describe('Action Creator: updateTerm', () => {
  it('should match its snapshot', () => {
    const result = updateTerm();
    expect(result).toMatchSnapshot();
  })
});