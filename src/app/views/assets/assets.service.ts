import { AssetModel } from './assets.model';
export class AssetService{
	assets: AssetModel[] = [
		new AssetModel(
			"Microsoft Office 365 - en-us",
			"Opex",
			"Rented",
			"",
			"",
			" Indivdual Company",
			" Active",
			"Yes",
			"1",
			"12",
			"",
			"",
			"1",
			"$ -   ",
			"1",
			"0",
			"",
		),
		new AssetModel(
			"MS CORE CAL",
			"Opex",
			"Owned",
			"",
			"",
			"Group",
			"Active",
			"Yes",
			"12",
			"36",
			"2021",
			"$ 300,000 ",
			"630",
			"$ 158.73 ",
			"617",
			"-13",
			""
		)
	];

	getAssets() {
		return this.assets;
	}

	getAsset(index:number) {
		return this.assets[index];
	}
}
































