import {Component, Input, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {getFeedAction} from '../store/actions/get-feed.action'
import {Observable} from 'rxjs'
import {GetFeedResponseInterface} from '../types/get-feed-response.interface'
import {errorSelector, feedSelector, isLoadingSelector} from '../store/selectors'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }
  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  fetchData() {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
