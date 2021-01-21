import { UserModel } from './users.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService{
	constructor(private http: HttpClient){}
	users: UserModel[];
	getUsers() {
		return this.http.get<{[key: string]: UserModel}>('http://localhost/angularapi/?user=get')
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

	getUser(index:number) {
		return this.http.post<{[key: string]: UserModel}>('http://localhost/angularapi/?user=getone',index)
		.pipe(map(responseData => {
			const postsArray = [];
			for (const key in responseData) {
				postsArray.push({...responseData[key]});
			}
			return postsArray;
		}));
	}

	createUser(formValues) {
		return this.http.post('http://localhost/angularapi/?user=create',formValues);
	}

	editUser(formValues) {
		return this.http.post('http://localhost/angularapi/?user=edit',formValues);
	}
}