import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string = 'default';
  sellerName:string = '';
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if (val.url) {
        if(localStorage.getItem("seller")&&val.url.includes('seller')){
          console.warn("inside seller");
          this.menuType='seller';
          let sName= localStorage.getItem('seller');
          let sellerData= sName &&JSON.parse(sName)[0];
          this.sellerName=sellerData.name;
        }
        else{
          this.menuType='default';
          console.warn("outside");
        }
      }
    })
  }
  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
  
}
