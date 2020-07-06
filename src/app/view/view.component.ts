import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerresponseService } from '../Services/answerresponse.service';
import { Answerresponse } from '../Models/answerresponse';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  item: any = [];
  answer: any = [];
  max: any;
  constructor(private router: Router, private _service: AnswerresponseService) {
    this.id = +localStorage.getItem('userid');
    this._service.GetAnswerResponse(this.id).subscribe(k => {
      this.item = k;
      for (let index = 0; index < this.item.length; index++) {
        if (this.item[index].ans1 == null)
          this.item[index].ans1 = "na";
        if (this.item[index].ans2 == null)
          this.item[index].ans2 = "na";
        if (this.item[index].ans3 == null)
          this.item[index].ans3 = "na";
        if (this.item[index].ans4 == null)
          this.item[index].ans4 = "na";
        if (this.item[index].ans5 == null)
          this.item[index].ans5 = "na";
        if (this.item[index].ans6 == null)
          this.item[index].ans6 = "na";
        if (this.item[index].ans7 == null)
          this.item[index].ans7 = "na";
        if (this.item[index].ans8 == null)
          this.item[index].ans8 = "na";
        if (this.item[index].ans9 == null)
          this.item[index].ans9 = "na";
        if (this.item[index].ans10 == null)
          this.item[index].ans10 = "na";
        if (this.item[index].ans11 == null)
          this.item[index].ans11 = "na";
          if (this.item[index].ans12 == null)
          this.item[index].ans12 = "na";
        if (this.item[index].ans13 == null)
          this.item[index].ans13 = "na";
        if (this.item[index].ans14 == null)
          this.item[index].ans14 = "na";
        if (this.item[index].ans15 == null)
          this.item[index].ans15 = "na";
        if (this.item[index].ans16 == null)
          this.item[index].ans16 = "na";
        if (this.item[index].ans16 == null)
          this.item[index].ans16 = "na";
        if (this.item[index].ans17 == null)
          this.item[index].ans17 = "na";
        if (this.item[index].ans18 == null)
          this.item[index].ans18 = "na";

      }
      
      this.max = Math.max.apply(Math, this.item.map(function (o) { return o.userResponseCount; }));
      for(let index=0;index<this.item.length;index++)
      {
        if(this.item[index].userResponseCount==this.max)
        {
          this.answer = this.item[index];
        }
      }
      console.log(this.max);
      console.log(this.item);
      console.log(this.answer);
    });

  }
  ngOnInit(): void {
  }

}
