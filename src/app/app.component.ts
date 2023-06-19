import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {


  constructor(private router: Router) {


  }

  isMenuVisible = true;
  ngDoCheck(): void {
    const currentroute = this.router.url;
    console.log(currentroute);

    if (currentroute == '/login') {
      this.isMenuVisible = false;
    }
    else {
      this.isMenuVisible = true;
    }
  }
  title = 'Angular14';

}
