import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  genders = ['male', 'female'];
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      sam_account_name: new FormControl(null),
      computer_name_from_ad: new FormControl(null),
      company: new FormControl(null),
      status: new FormControl(null),
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      email: new FormControl(null),
      manu: new FormControl(null),
      model: new FormControl(null),
      type: new FormControl(null),
      date_created: new FormControl(null),
      os: new FormControl(null),
      memory: new FormControl(null),
      processor: new FormControl(null),
      purchase_value: new FormControl(null),
      allowed_assets: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }
}
