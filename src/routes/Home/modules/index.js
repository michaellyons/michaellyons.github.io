// ------------------------------------
// Constants
// ------------------------------------
export const WATCH_VID = 'WATCH_VID'
export const STOP_VID = 'STOP_VID'
export const SET_FOCUS = 'SET_FOCUS'
export const INCREASE_ROWS = 'INCREASE_ROWS'
export const DECREASE_ROWS = 'DECREASE_ROWS'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : INCREASE_ROWS,
    payload : value
  }
}
export function decrement (value = 1) {
  return {
    type    : DECREASE_ROWS,
    payload : value
  }
}
export function focus (row = null, focus = null) {
  return {
    type    : SET_FOCUS,
    row,
    focus
  }
}
export function watchVid () {
  return {
    type    : WATCH_VID
  }
}
export function stopVid () {
  return {
    type    : STOP_VID
  }
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  decrement,
  focus,
  watchVid,
  stopVid
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [WATCH_VID]    : (state, action) => ({ ...state, showVideo: true }),
  [STOP_VID]    : (state, action) => ({ ...state, showVideo: false }),
  [SET_FOCUS]    : (state, action) => ({ ...state, focus: action.focus, focusRow: action.row }),
  [INCREASE_ROWS]    : (state, action) => ({ ...state, show: state.show + 1 }),
  [DECREASE_ROWS]    : (state, action) => ({ ...state, show: (state.show > 1 ? state.show - 1 : 1) })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  focus: null,
  focusRow: null,
  show: 1,
  showVideo: false
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
