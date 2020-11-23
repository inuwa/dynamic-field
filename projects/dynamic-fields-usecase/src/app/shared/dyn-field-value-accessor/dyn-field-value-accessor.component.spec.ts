import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynFieldValueAccessorComponent } from './dyn-field-value-accessor.component';

describe('DynFieldValueAccessorComponent', () => {
	let component: DynFieldValueAccessorComponent;
	let fixture: ComponentFixture<DynFieldValueAccessorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DynFieldValueAccessorComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DynFieldValueAccessorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
