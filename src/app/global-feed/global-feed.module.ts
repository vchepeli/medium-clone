import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {GlobalFeedComponent} from './components/global-feed.component'
import {RouterModule} from '@angular/router'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
