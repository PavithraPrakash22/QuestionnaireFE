import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questionnaireFE';
  name:string;

  constructor(private router:Router){}
  ngOnInit(){
   
    
  }
  settok(){
    var set='';
    set=localStorage.getItem('token');
    this.name =localStorage.getItem('username');
    if(set==null)
    {
      return 0;
    }
    else{
      return 1;
    }
  }
  Add(){
      
  }
  logout(){
    localStorage.removeItem('username');
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
        localStorage.removeItem('userresponse');
      this.router.navigate(['signin']);
  }
}
