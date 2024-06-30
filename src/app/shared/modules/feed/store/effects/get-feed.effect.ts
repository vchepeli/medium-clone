import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'

import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from '../actions/get-feed.action'
import {FeedService} from '../../services/feed.service'
import {GetFeedResponseInterface} from '../../types/get-feed-response.interface'

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({feed})
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )
}
