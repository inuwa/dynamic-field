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
import { ReactiveFormsModule } from '@angular/forms';
import { SentenceCasePipe } from './sentence-case.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [DynamicFieldComponent, SentenceCasePipe],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatSelectModule,
		MatSlideToggleModule,
		BrowserAnimationsModule
	],
	exports: [
		DynamicFieldComponent
	]
})
export class SharedModule { }
