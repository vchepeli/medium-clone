import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '../../shared/types/app-state.interface'
import {AuthStateInterface} from '../types/auth-state.interface'

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonynousInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)
