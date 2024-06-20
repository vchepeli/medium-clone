import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RegisterComponent} from './components/register/register.component'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-modules'
import {PersistanceService} from '../shared/services/persistance.service'
import {LoginEffect} from './store/effects/login.effect'
import {LoginComponent} from './components/login/login.component'
import {GetCurrentUserEffect} from './store/effects/get-current-user.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
