import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})

export class UserViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$('#example2').DataTable();
  }

}
