import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DemoService } from '../../../../services/demo.service';

@Component({
  selector: 'app-add-edit-table-data',
  imports: [DialogModule, InputTextModule, ButtonModule, FluidModule, InputNumberModule, FloatLabelModule, ReactiveFormsModule],
  templateUrl: './add-edit-table-data.component.html',
  styleUrl: './add-edit-table-data.component.scss'
})
export class AddEditTableDataComponent implements OnInit, OnChanges {
  showAddEditDialog = input.required<boolean>();
  selectedData = input<any | null>(null);

  onShowAddEditDialogCloseClick = output();
  onShowAddEditDialogClick = output();

  // dialogClasses = DialogClasses;
  // dialogStyles = new DialogStyle();

  addEditItemForm!: FormGroup;

  constructor(private fb: FormBuilder, private demoService: DemoService) {
  }

  ngOnInit(): void {
    // Initialize form
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Checking selected data : ", this.selectedData());
    if (this.selectedData() !== null) {
      this.addEditItemForm.patchValue({
        title: this.selectedData().title,
        category: this.selectedData().category,
        price: this.selectedData().price,
        stock: this.selectedData().stock,
        discountPercentage: this.selectedData().discountPercentage,
        description: this.selectedData().description,
        rating: this.selectedData().rating,
        brand: this.selectedData().brand,
        thumbnail: this.selectedData().thumbnail,
      });
    }
  }

  private initializeForm(): void {
    this.addEditItemForm = this.fb.group({
      title: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      price: new FormControl(null, Validators.required),
      stock: new FormControl(null, Validators.required),
      discountPercentage: new FormControl(null, Validators.required),
      description: new FormControl("", Validators.required),
      rating: new FormControl(null, Validators.required),
      brand: new FormControl("", Validators.required),
      thumbnail: new FormControl("", Validators.required),
    });
  }

  closeDialog(): void {
    this.onShowAddEditDialogCloseClick.emit();
  }

  addOrEditItem(): void {
    console.log("Updated form value :", this.addEditItemForm.value);

    const allCurrentProducts = this.demoService.products();

    let foundIndex = allCurrentProducts.findIndex(a => a.id === this.selectedData().id);

    allCurrentProducts[foundIndex] = this.addEditItemForm.value;

    this.closeDialog();
  }
}

