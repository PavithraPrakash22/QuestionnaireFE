import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answerresponse } from '../Models/answerresponse';
import {AnswerresponseService} from '../Services/answerresponse.service';
import { Router } from '@angular/router';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  products: any = [];
  items: any=[];
  questionnaire:any =[];
  questions: any=[];
  choices: any=[];
  item:Answerresponse;
  list:Answerresponse[];
  msg:string;
  x:string="";
  

  constructor(private httpClient: HttpClient,private _service:AnswerresponseService,private router:Router) { 
    this.item = new Answerresponse();
  }

  ngOnInit(): void {
    this.httpClient.get("assets/Questionnaire.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      this.questionnaire = this.products.questionnaire;
      console.log(this.questionnaire);
      for (let index = 0; index < 18; index++) {
        this.questions[index] = this.questionnaire.questions;
      }
      console.log(this.questions);
      for (let index = 0; index < 18; index++) {
        this.choices[index] = this.questionnaire.questions[index].choices;
        
      }
      
      console.log(this.choices);
    },err=>{
      console.log("subscribe err");
   });
  }
  

  check(x)
  {
    if(x == "multiple-choice")
    {
      return true;
    }
    return false;

  }
  Add(form: NgForm)
  {
    if(localStorage.getItem('token')!=null)
    {
      this.item.ans1=form.value.ans0;
    this.item.ans2=form.value.ans1;
    this.item.ans3=form.value.ans2;
    this.item.ans4=form.value.ans3;
    this.item.ans5=form.value.ans4;
    this.item.ans6=form.value.ans5;
    this.item.ans7=form.value.ans6;
    this.item.ans8=form.value.ans7;
    this.item.ans9=form.value.ans8;
    this.item.ans10=form.value.ans9;
    this.item.ans11=form.value.ans10;
    this.item.ans12=form.value.ans11;
    this.item.ans13=form.value.ans12;
    this.item.ans14=form.value.ans13;
    this.item.ans15=form.value.ans14;
    this.item.ans16=form.value.ans15;
    this.item.ans17=form.value.ans16;
    this.item.ans18=form.value.ans17;
    this.item.userId = Number(localStorage.getItem('userid'));
    this.item.userResponseCount=Number(localStorage.getItem('userresponse'));
    this.item.userResponseCount=this.item.userResponseCount+1;
    localStorage.setItem('userresponse',this.item.userResponseCount.toString());
    console.log(localStorage.getItem('userresponse'));
    console.log(this.item);
    this._service.AddAnswerResponse(this.item).subscribe(k=>this.msg=k)
    this.router.navigate(['view']);

    }
    else
    {
      this.router.navigate(['signin']);
    }
  }
  
}
