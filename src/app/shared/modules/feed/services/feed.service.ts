import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {GetFeedResponseInterface} from '../types/get-feed-response.interface'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class FeedService {
  constructor(private httpClient: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = 'https://conduit.productionready.io/api' + url

    return this.httpClient.get<GetFeedResponseInterface>(fullUrl)
  }
}
