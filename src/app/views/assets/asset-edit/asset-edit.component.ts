import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssetService } from '../assets.service';
import { AssetModel } from '../assets.model';
import { ActivatedRoute, Params } from '@angular/router';
declare let $: any;


@Component({
	selector: 'app-asset-edit',
	templateUrl: './asset-edit.component.html',
	styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {
	constructor(
		private assetService: AssetService,
		private route: ActivatedRoute,
	) {}
	serviceEdited: boolean = false;
	assetDetail: AssetModel;
	assetForm: FormGroup;
	objectKeys = Object.keys;
	service_vals = [];
	capex_opex_vals = { capex: 'Ca Pex', opex: 'Opex' };
	license_rented_owned_vals = { rented: 'Rented', owned: 'Owned' };
	depreciation_rate_vals = [];
	cost_per_license_vals = [];
	owned_by_group_or_individual_company_vals = {
		group: 'Group',
		individual: 'Individual Company',
	};
	maintenace_status_vals = { active: 'Active', inactive: 'Inactive' };
	payg_vals = { yes: 'Yes', no: 'No' };
	payment_freq_vals = [];
	contract_length_vals = [];
	expiry_date_vals = [];
	total_contract_value_vals = [];
	volume_of_users_vals = [];
	per_license_cost_per_year_vals = [];
	total_volume_in_of_licenses_vals = [];
	available_licenses_vals = [];
	notes_vals = [];
	id: number;

	ngOnInit(): void {
		$('.select2').select2();
		// $('[ data-inputmask]').inputmask();

		this.route.params.subscribe((params: Params)=>{
			this.id = +params['id'];
			this.assetService.getAsset(this.id).subscribe((responseData)=>{
				this.assetDetail = responseData[0];
				this.assetForm.setValue({
					service_id: this.assetDetail.service_id,
					service: this.assetDetail.service,
					capex_opex: this.assetDetail.capex_opex,
					license_rented_owned: this.assetDetail.license_rented_owned,
					depreciation_rate: this.assetDetail.depreciation_rate,
					cost_per_license: this.assetDetail.cost_per_license,
					owned_by_group_or_individual_company: this.assetDetail.owned_by_group_or_individual_company,
					maintenace_status: this.assetDetail.maintenace_status,
					payg: this.assetDetail.payg,
					payment_freq: this.assetDetail.payment_freq,
					contract_length: this.assetDetail.contract_length,
					expiry_date: this.assetDetail.expiry_date,
					total_contract_value: this.assetDetail.total_contract_value,
					volume_of_users: this.assetDetail.volume_of_users,
					per_license_cost_per_year: this.assetDetail.per_license_cost_per_year,
					total_volume_in_of_licenses: this.assetDetail.total_volume_in_of_licenses,
					available_licenses: this.assetDetail.available_licenses,
					notes: this.assetDetail.notes,
				});
			});
		});

		this.assetForm = new FormGroup({
			service_id: new FormControl(null),
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
		});
	}

	onSubmit() {
		this.assetService
			.editAsset(this.assetForm.value)
			.subscribe((responseData) => {
				if (responseData === true) {
					this.serviceEdited = true;
				}
			});
	}

}
