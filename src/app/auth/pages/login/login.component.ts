import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router:Router, private authService:AuthService) { }

  login(){

    this.authService.login()
      .subscribe(ans=>{
        console.log(ans);

        if(ans.id)
        {
          this.router.navigate(['./heroes']);
        }

      });
    
  }

}
