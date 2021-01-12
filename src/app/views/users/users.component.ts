import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  genders = ['male', 'female'];
  userForm: FormGroup;

  statusOptions: string[] = ['End', 'In Use', 'Spare'];
  assetsOptions: string[] = [
    'Mac Office',
    'Microsoft Office 365 - en-us',
    'Microsoft Office Word MUI (English) 2007',
    'Microsoft Office Word MUI (English) 2010',
  ];

  statusFilteredOptions: Observable<string[]>;
  assetsFilteredOptions: Observable<string[]>;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  allowed_assets = new FormControl();
  assets: string[] = [];
  allAssets: string[] = [
    'Mac Office',
    'Microsoft Office 365 - en-us',
    'Microsoft Office Word MUI (English) 2007',
    'Microsoft Office Word MUI (English) 2010',
  ];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

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

    this.statusFilteredOptions = this.userForm.get('status').valueChanges.pipe(
      startWith(''),
      map((value) => this._statusfilter(value))
    );

    // this.assetsFilteredOptions = this.userForm.get("allowed_assets").valueChanges
    // 	.pipe(
    // 		startWith(''),
    // 		map(value => this._assetsfilter(value))
    // 	);

    this.assetsFilteredOptions = this.userForm
      .get('allowed_assets')
      .valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) =>
          fruit ? this._filter(fruit) : this.allAssets.slice()
        )
      );
  }

  private _statusfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.statusOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private _assetsfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.assetsOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allAssets.filter(
      (fruit) => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.assets.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.allowed_assets.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.assets.indexOf(fruit);

    if (index >= 0) {
      this.assets.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.assets.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.allowed_assets.setValue(null);
  }

  onSubmit() {
    console.log(this.userForm);
  }
}
