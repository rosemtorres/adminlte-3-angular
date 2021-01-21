import { AssetModel } from './assets.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AssetService{
	constructor(private http: HttpClient){}
	assets: AssetModel[];
	getAssets() {
		return this.http.get<{[key: string]: AssetModel}>('http://localhost/angularapi/?service=get')
		.pipe(map(responseData => {
			const postsArray = [];
			for (const key in responseData) {
				if(responseData.hasOwnProperty(key)) {
					postsArray.push({...responseData[key]});
				}
			}
			return postsArray;
		}))
	}

	getAsset(index:number) {
		return this.http.post<{[key: string]: AssetModel}>('http://localhost/angularapi/?service=getone',index)
		.pipe(map(responseData => {
			const postsArray = [];
			for (const key in responseData) {
				postsArray.push({...responseData[key]});
			}
			return postsArray;
		}));
	}

	createAsset(formValues) {
		return this.http.post('http://localhost/angularapi/?service=create',formValues);
	}
}