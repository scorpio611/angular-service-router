import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-login-step1',
  templateUrl: './login-step1.component.html',
  styleUrls: ['./login-step1.component.scss']
})
export class LoginStep1Component {
  username = new FormControl('');

  constructor(private router: Router,
              private loginServiceService: LoginServiceService) {
  }


  nextStep() {
    this.loginServiceService.loginData.username = this.username.value;
    this.router.navigateByUrl('/login-step-2');
  }
}
