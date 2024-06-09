import {Injectable} from '@angular/core'
import {RegisterRequestInterface} from '../types/register-request.interface'
import {Observable, map} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/current-user.interface'
import {HttpClient} from '@angular/common/http'
import {AuthResponseInterface} from '../types/auth-response.interface'

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = 'https://conduit.productionready.io/api/users' //todo use ENV variables

    return this.httpClient
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
