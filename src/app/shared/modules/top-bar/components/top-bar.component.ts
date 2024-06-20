import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {CurrentUserInterface} from '../../../types/current-user.interface'
import {Store, select} from '@ngrx/store'
import {currentUserSelector, isAnonynousInSelector, isLoggedInSelector} from '../../../../auth/store/selectors'

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonynousInSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
