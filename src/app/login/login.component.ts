import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   *
   */
  constructor(private service: UserService, private router: Router) {


  }
  ngOnInit(): void {
    localStorage.clear();
  }
  respdata: any;
  ProceedLogin(logindata: any) {

    // console.log(logindata.valid);
    // console.log(logindata.value);

    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.respdata = item;

        // console.log(this.respdata);

        if (this.respdata != null) {
          localStorage.setItem('token', this.respdata.jwtToken);
          this.router.navigate(['/home']);
        }
        else {
          alert("login faild");

        }
      });
    }

  }
  RedirectRegister() {
    this.router.navigate(['access/register']);
  }

}
