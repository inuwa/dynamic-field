import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldType } from './shared/models/field-type.enum';
import { Field } from './shared/models/field.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	fieldType: Field = {
		name: 'email',
		type: FieldType.TEXTFIELD,
		validation: [Validators.required, Validators.email],
		errors: [
			{ key: 'required', value: 'Value is required' },
			{ key: 'email', value: 'Value must be an email' },
		]
	}
	formGroup!: FormGroup;
	constructor(private _formBuilder: FormBuilder) { }

	ngOnInit() {
		this._initialise();
	}

	$$save() {
		console.log(this.formGroup.value);
	}

	private _initialise() {
		this.formGroup = this._formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email])]
		})
	}
}
