import { KeyValue } from '@angular/common';
import { Validators } from '@angular/forms';
import { FieldType } from './field-type.enum';

export interface Field {
	name: string;
	type: FieldType;
	children?: Field[];
	defaultValue?: any;
	disabled?: boolean;
	options?: string[];
	parent?: string;
	validation?: Validators[];
	visible?: boolean;
	errors?: KeyValue<string, string>[];
}