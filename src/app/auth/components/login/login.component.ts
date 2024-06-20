import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'
import {LoginRequestInterface} from '../../types/login-request.interface'
import {loginAction} from '../../store/actions/login.actions'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }
  
  initializeForm(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({request}))
  }
}
