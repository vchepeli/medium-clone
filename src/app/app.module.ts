import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {TopBarModule} from './shared/modules/top-bar/top-bar.module'
import {PersistanceService} from './shared/services/persistance.service'
import {AuthInterceptor} from './shared/services/auth-interceptor.service'
import {GlobalFeedModule} from './global-feed/global-feed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true, //todo production: false, development: true
    }),
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
