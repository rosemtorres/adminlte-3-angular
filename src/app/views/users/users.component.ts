import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './users.service';
import { AssetService } from '../assets/assets.service';
declare let $: any;

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
	constructor(
		private userService:UserService,
		private assetService:AssetService,
	){}

	userCreated: boolean = false;;
	objectKeys = Object.keys;
	genders = ['male', 'female'];
	userForm: FormGroup;
	status_vals = {
		end: 'End',
		in_use: 'In Use',
		spare: 'Spare'
	};
	allowed_asset_vals = [];

	ngOnInit() {
		this.assetService.getAssets().subscribe((datas)=>{
			for(let data of datas) {
				this.allowed_asset_vals.push(data.service);
			}
		});

		$('.allowed_asset').select2();
		this.userForm = new FormGroup({
			sam_account_name: new FormControl(null),
			computer_name_from_ad: new FormControl(null),
			company: new FormControl(null),
			status: new FormControl(null),
			first_name: new FormControl(null),
			last_name: new FormControl(null),
			email: new FormControl(null),
			manu: new FormControl(null),
			model: new FormControl(null),
			type: new FormControl(null),
			date_created: new FormControl(null),
			os: new FormControl(null),
			memory: new FormControl(null),
			processor: new FormControl(null),
			purchase_value: new FormControl(null),
			allowed_asset: new FormControl(null),
		});
	}

	onSubmit() {
		this.userForm.patchValue({'allowed_asset': $('.allowed_asset').val().toString()});
		this.userService.createUser(this.userForm.value)
		.subscribe((posts)=>{
			if (posts === true) {
				this.userCreated = true;
			}
		});
	}
}
