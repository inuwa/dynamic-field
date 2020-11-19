import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { FieldType } from '../models/field-type.enum';
import { Field } from '../models/field.interface';

@Component({
	selector: 'lib-dynamic-field',
	templateUrl: './dynamic-field.component.html',
	styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit, OnChanges {
	@Input()
	field!: Field;
	public control!: FormControl;
	public FieldType = FieldType;
	constructor(private formGroupDir: FormGroupDirective) { }


	ngOnInit(): void {
		/**
		 * @angular/forms -> FormGroupDirective! 🎉
		 *
		 * https://angular.io/api/forms/FormGroupDirective
		 * "Binds an existing FormGroup to a DOM element."
		 *
		 * We can easily access Reactive Forms functionality from this component in our
		 * parent component without the need to pass our own inputs or event emitters.
		 */
		this.control = this.formGroupDir.control.get(this.field.name) as FormControl;
		// this.control.valueChanges.subscribe((e) => {
		// 	console.log(this.control.errors);
		// 	console.log(this.control)
		// });
	}

	ngOnChanges() {
	}
}
