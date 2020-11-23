import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SentenceCasePipe } from './sentence-case.pipe';
import { DynFieldValueAccessorComponent } from './dyn-field-value-accessor/dyn-field-value-accessor.component';

@NgModule({
	declarations: [
		DynamicFieldComponent,
		SentenceCasePipe,
		DynFieldValueAccessorComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatSelectModule,
		MatSlideToggleModule,
	],
	exports: [
		DynamicFieldComponent,
		DynFieldValueAccessorComponent
	]
})
export class SharedModule { }
