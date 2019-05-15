import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public name: string = '';
  public signupname: string = '';
  public signuppassword: string = '';
  public username:any = '';
  public password:any = '';
  public email = '';
  public token = '';
  public canSignUp: boolean = false;
  public loggedUserName: string = '';
  public logged: boolean = false;
 

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }

  auth(){
    if(this.username != '' && this.password != ''){
      this.provider.auth(this.username, this.password).then(res =>{
        console.log(localStorage);
         localStorage.setItem('token', res.token);
         this.provider.isStaff = res.is_staff;
         this.logged = true;
         this.loggedUserName = res.username;
         this.username = '';
         this.password = '';
      });
    }
  }

  logout(){
    this.provider.logout().then(res => {
        localStorage.removeItem('token');
        this.logged = false;
        this.loggedUserName = '';
    });
  }

  signup(){
    if(this.signupname !== '' && this.signuppassword !== '' && this.email){
      this.provider.signup(this.signupname, this.signuppassword,this.email ).then(res => 
        this.provider.auth(this.signupname, this.signuppassword).then(r => {
           localStorage.setItem('token',r.token);
           this.provider.isStaff = r.is_staff;
           this.logged = true;
           this.loggedUserName = r.username;
           this.signupname = '';
           this.signuppassword = '';
      
      }));
    }
  }

  public makeSignUp(){
    if (!this.canSignUp)
      this.canSignUp = true;
    else
      this.canSignUp = false;
   }

}
