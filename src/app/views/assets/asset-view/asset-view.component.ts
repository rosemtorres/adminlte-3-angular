import { Component, OnInit } from '@angular/core';
import { AssetService } from '../assets.service';
import { AssetModel} from '../assets.model';
declare let $: any;

@Component({
	selector: 'app-asset-view',
	templateUrl: './asset-view.component.html',
	styleUrls: ['./asset-view.component.scss'],
	// providers: [AssetService],
})
export class AssetViewComponent implements OnInit {
	assets:AssetModel[];
	showselect:boolean = true;

	constructor(
		private assetService:AssetService,
	) { }

	ngOnInit(): void {
		this.assetService.getAssets()
		.subscribe((posts)=>{
			this.assets = posts;
		});

		setTimeout(()=>{
			$(()=>{
				$('#assettable').DataTable();
			});
		},100)
	}

}
