import {Action, createReducer, on} from '@ngrx/store'
import {FeedStateInterface} from '../types/feed-state.interface'
import {getFeedAction, getFeedSuccessAction} from './actions/get-feed.action'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
