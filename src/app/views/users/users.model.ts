export class UserModel {
	constructor(
		public user_id: number,
		public sam_account_name: string,
		public computer_name_from_ad: string,
		public company: string,
		public status: string,
		public first_name: string,
		public last_name: string,
		public email: string,
		public manu: string,
		public model: string,
		public type: string,
		public os: string,
		public memory: number,
		public processor: string,
		public purchase_value: string,
		public allowed_asset: string,
		public date_created: string,
	){}
}