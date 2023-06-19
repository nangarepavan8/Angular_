import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  headear = "Welcome to Nitor Infotech..!!!"
  salary = 20000;

  colorname = "red";

  classname = "headclass";
  styleValue = { "color": "black", "font-size": "44px", "font-weight": "bold " };

  colors = ["black", "green", "yellow", "red", "orange" ]
  ngOnInit(): void {

  }

  FunctionClick(name: string) {
    alert(name);
  }


}
