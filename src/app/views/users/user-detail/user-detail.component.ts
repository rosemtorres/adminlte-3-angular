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
		this.userDetail = new UserModel(0,'','','','','','','','','','','',0,'','','','');
		this.route.params.subscribe(
			(params:Params) => {
				this.id = +params['id'];
				this.userService.getUser(this.id)
				.subscribe((posts)=>{
					this.userDetail = posts[0]
				});
			}
		)
	}

}
