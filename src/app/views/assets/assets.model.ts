export class AssetModel {
	constructor(
		public service_id: number,
		public service: string,
		public capex_opex: string,
		public license_rented_owned: string,
		public depreciation_rate: string,
		public cost_per_license: string,
		public owned_by_group_or_individual_company: string,
		public maintenace_status: string,
		public payg: string,
		public payment_freq: string,
		public contract_length: string,
		public expiry_date: string,
		public total_contract_value: string,
		public volume_of_users: string,
		public per_license_cost_per_year: string,
		public total_volume_in_of_licenses: string,
		public available_licenses: string,
		public notes: string,
		public date_created: string,
	) {}
}