import { Component, OnInit } from '@angular/core';
import { UserService } from "../users.service";
import { UserModel } from "../users.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
	userDetail: UserModel;
	id: number;

	constructor(
		private userService:UserService,
		private route:ActivatedRoute
	) { }

	ngOnInit(): void {
		this.userDetail = this.userService.getUser(this.id);
		this.route.params.subscribe(
			(params:Params) => {
				this.id = +params['id'];
				this.userDetail = this.userService.getUser(this.id);
			}
		)
	}

}
