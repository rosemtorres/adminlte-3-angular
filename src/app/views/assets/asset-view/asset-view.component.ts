import { Component, OnInit } from '@angular/core';
import { AssetService } from '../assets.service';
import { AssetModel} from '../assets.model';
declare let $: any;

@Component({
	selector: 'app-asset-view',
	templateUrl: './asset-view.component.html',
	styleUrls: ['./asset-view.component.scss'],
	providers: [AssetService],
})
export class AssetViewComponent implements OnInit {
	assets:AssetModel[];

	constructor(private assetService:AssetService) { }

	ngOnInit(): void {
		this.assets= this.assetService.getAssets();
		setTimeout(()=>{
			$(()=>{
				$('#assettable').DataTable();
			});
		},1000)
	}

}
