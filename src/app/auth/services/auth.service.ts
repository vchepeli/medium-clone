import {Injectable} from '@angular/core'
import {RegisterRequestInterface} from '../types/register-request.interface'
import {Observable, map} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/current-user.interface'
import {HttpClient} from '@angular/common/http'
import {AuthResponseInterface} from '../types/auth-response.interface'
import {LoginRequestInterface} from '../types/login-request.interface'

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = 'https://conduit.productionready.io/api/users' //todo use ENV variables
    return this.httpClient.post<AuthResponseInterface>(url, data).pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = 'https://conduit.productionready.io/api/users/login' //todo use ENV variables
    return this.httpClient.post<AuthResponseInterface>(url, data).pipe(map(this.getUser))
  }

  getUser(response: AuthResponseInterface) {
    return response.user
  }
}
