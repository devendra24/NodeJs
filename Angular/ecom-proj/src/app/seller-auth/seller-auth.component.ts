import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { LogIn, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) { }
  show:boolean = true;
  authError:string ='';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.seller.userSignUP(data);
  }
  logIn(data: LogIn): void {
    this.authError='';
    this.seller.userLogIn(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email Or Passord Wrong";
      }
    })
  }
  toggle(){
    if (this.show) {
      this.show=false;
    }
    else{
      this.show=true;
    }
  }
}
