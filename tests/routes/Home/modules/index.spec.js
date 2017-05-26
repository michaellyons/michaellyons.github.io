import {
  WATCH_VID,
  INCREASE_ROWS,
  increment,
  default as homeReducer
} from 'routes/Home/modules'

// const initialState = {
//   focus: null,
//   focusRow: null,
//   show: 1,
//   showVideo: false
// }
describe('(Redux Module) Home', () => {
  it('Should export a constant WATCH_VID.', () => {
    expect(WATCH_VID).to.equal('WATCH_VID')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(homeReducer).to.be.a('function')
    })
  })

  describe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(increment).to.be.a('function')
    })

    it('Should return an action with type "INCREASE_ROWS".', () => {
      expect(increment()).to.have.property('type', INCREASE_ROWS)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(increment(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(increment()).to.have.property('payload', 1)
    })
  })
})
