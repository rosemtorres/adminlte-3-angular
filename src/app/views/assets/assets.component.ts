import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssetService } from './assets.service';
declare let $: any;

@Component({
	selector: 'app-assets',
	templateUrl: './assets.component.html',
	styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
	constructor(private assetService:AssetService){}
	serviceCreated:boolean = false;

	assetForm: FormGroup;
	objectKeys = Object.keys;
	service_vals = [];
	capex_opex_vals = { capex: 'Ca Pex', opex: 'Opex' };
	license_rented_owned_vals = { rented:'Rented', owned:'Owned'};
	depreciation_rate_vals = [];
	cost_per_license_vals = [];
	owned_by_group_or_individual_company_vals = { group:'Group', individual:'Individual Company' };
	maintenace_status_vals = { active:'Active', inactive:'Inactive'};
	payg_vals = {yes:'Yes', no: 'No'};
	payment_freq_vals = [];
	contract_length_vals = [];
	expiry_date_vals = [];
	total_contract_value_vals = [];
	volume_of_users_vals = [];
	per_license_cost_per_year_vals = [];
	total_volume_in_of_licenses_vals = [];
	available_licenses_vals = [];
	notes_vals = [];

	ngOnInit(): void {
		$('.select2').select2();
		// $('[ data-inputmask]').inputmask();

		this.assetForm = new FormGroup ({
			service: new FormControl(null),
			capex_opex: new FormControl(null),
			license_rented_owned: new FormControl(null),
			depreciation_rate: new FormControl(null),
			cost_per_license: new FormControl(null),
			owned_by_group_or_individual_company: new FormControl(null),
			maintenace_status: new FormControl(null),
			payg: new FormControl(null),
			payment_freq: new FormControl(null),
			contract_length: new FormControl(null),
			expiry_date: new FormControl(null),
			total_contract_value: new FormControl(null),
			volume_of_users: new FormControl(null),
			per_license_cost_per_year: new FormControl(null),
			total_volume_in_of_licenses: new FormControl(null),
			available_licenses: new FormControl(null),
			notes: new FormControl(null),
		})
	}

	onSubmit() {
		this.assetService.createAsset(this.assetForm.value).subscribe((responseData)=>{
			if(responseData === true) {
				this.serviceCreated = true;
			}
		});;
	}
}
