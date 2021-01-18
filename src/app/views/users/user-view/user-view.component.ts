import { Component, OnInit } from '@angular/core';
import { UserModel } from '../users.model';
import { UserService } from '../users.service';
declare let $: any;

@Component({
	selector: 'app-user-view',
	templateUrl: './user-view.component.html',
	styleUrls: ['./user-view.component.scss'],
	providers: [ UserService ]
})

export class UserViewComponent implements OnInit {
	users: UserModel[];
	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.userService.getUsers()
		.subscribe((posts)=>{
			this.users = posts;
		});
		setTimeout(function () {
			$(function () {
				$('#usertable').DataTable();
			});
		}, 100);
	}

}
