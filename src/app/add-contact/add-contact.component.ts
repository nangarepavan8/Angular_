import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  route: any;
  /**
   *
   */
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    const routeid = this.router.snapshot.paramMap.get('id');
    console.log(routeid);
  }

}
