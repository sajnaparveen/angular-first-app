import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userName :String="sajna";
btndisable =true;
message=""

age=20;
date=18;

users=[{
  name:'sajna',
  number:1234,
  status:'active',
  place:'karur'
},{
  name:'sharmi',
  number:1234,
  status:'active',
  place:'delhi'
},
{
  name:'musthi',
  number:1234,
  status:'InActive',
  place:'chennai'
},
{
  name:'aarifa',
  number:1234,
  status:'active',
  place:'delhi'
},
{
  name:'asfa',
  number:1234,
  status:'InActive',
  place:'karur'
}
]
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
this.btndisable = false;
    },2000)
  }
  changename(){
    this.userName="sajnaparveen"

  }
}
