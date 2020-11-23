import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldType } from '../models/field-type.enum';
import { Field } from '../models/field.interface';

@Component({
	selector: 'dyn-field-value-accessor',
	templateUrl: './dyn-field-value-accessor.component.html',
	styleUrls: ['./dyn-field-value-accessor.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DynFieldValueAccessorComponent),
			multi: true
		}
	]
})
export class DynFieldValueAccessorComponent implements OnInit, ControlValueAccessor {
	@Input() field!: Field;
	// control!: FormControl;
	FieldType = FieldType;
	val: any;
	onChanged = (value: any) => { };
	onTouched = (value: any) => { };

	set value(value: any) {
		if (value !== undefined && this.val !== value) {
			this.val = value;
			this.onChanged(value);
			this.onTouched(value);
		}

	}
	get control(): FormControl {
		return this.formGroupDir.control.get(this.field.name) as FormControl || null;
	}



	constructor(private formGroupDir: FormGroupDirective) { }

	ngOnInit(): void {
		// this.control = this.formGroupDir.control.get(this.field.name) as FormControl;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	registerOnChange(fn: any): void {
		this.onChanged = fn;
	}

	writeValue(value: any): void {
		this.value = value;
		this.onChanged(value);
		this.onTouched(value);
	}
}
