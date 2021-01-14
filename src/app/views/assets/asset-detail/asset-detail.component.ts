import { Component, OnInit } from '@angular/core';
import { AssetModel } from '../assets.model';
import { AssetService } from '../assets.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
	selector: 'app-asset-detail',
	templateUrl: './asset-detail.component.html',
	styleUrls: ['./asset-detail.component.scss'],
})
export class AssetDetailComponent implements OnInit {
	assetDetail: AssetModel;
	id: number;
	constructor(
		private assetService: AssetService,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.route.params.subscribe(
			(params:Params)=>{
				this.id = +params['id'];
				this.assetDetail = this.assetService.getAsset(this.id);
			}
		)
	}

}
