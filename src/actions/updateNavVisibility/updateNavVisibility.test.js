import updateNavVisibility from '../updateNavVisibility';

describe('Action Creator: updateNavVisibility', () => {
  it('should match its snapshot', () => {
    const result = updateNavVisibility();
    expect(result).toMatchSnapshot();
  })
});