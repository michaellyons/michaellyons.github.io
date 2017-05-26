import HomeRoute from 'routes/Home'

describe('(Route) Home', () => {
  it('returns a route configuration object', () => {
    expect(typeof HomeRoute({})).to.equal('object')
  })
})
