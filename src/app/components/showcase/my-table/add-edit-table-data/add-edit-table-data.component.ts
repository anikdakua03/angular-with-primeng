import { Component, input, OnInit, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { DialogModule, DialogClasses, DialogStyle } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-table-data',
  imports: [DialogModule, InputTextModule, ButtonModule, FluidModule, InputNumberModule, FloatLabelModule, ReactiveFormsModule],
  templateUrl: './add-edit-table-data.component.html',
  styleUrl: './add-edit-table-data.component.scss'
})
export class AddEditTableDataComponent implements OnInit {
  showAddEditDialog = input.required<boolean>();
  selectedData = input<any | null>(null);

  onShowAddEditDialogCloseClick = output();
  onShowAddEditDialogClick = output();

  dialogClasses = DialogClasses;
  dialogStyles = new DialogStyle();

  addEditItemForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // Initialize form
    this.initializeForm();

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
    console.log("Form value :", this.addEditItemForm);
  }
}

