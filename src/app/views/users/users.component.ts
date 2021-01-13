import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare let $: any;

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
	objectKeys = Object.keys;
	genders = ['male', 'female'];
	userForm: FormGroup;
	status_vals = {
		end: 'End',
		in_use: 'In Use',
		spare: 'Spare'
	};
	
	allowed_asset_vals = {
		mac_office:'Mac Office',
		mac_office_365:'Microsoft Office 365 - en-us',
		mac_office_2007:'Microsoft Office Word MUI (English) 2007',
		mac_office_2010:'Microsoft Office Word MUI (English) 2010'
	};

	ngOnInit() {
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
		console.log(this.userForm);
	}
}
