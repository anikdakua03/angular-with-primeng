/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, inject, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DemoService } from '../../../../services/demo.service';
import { PrimeNgModule } from '../../../../shared/modules/prime-ng.module';
import { TableDataStore } from '../../../../store/table-data/table-data.store';

@Component({
  selector: 'app-add-edit-table-data',
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './add-edit-table-data.component.html',
  styleUrl: './add-edit-table-data.component.scss'
})
export class AddEditTableDataComponent implements OnInit, OnChanges {
  readonly showAddEditDialog = input.required<boolean>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly selectedData = input<any | null>(null);

  onShowAddEditDialogCloseClick = output();
  onShowAddEditDialogClick = output();

  // dialogClasses = DialogClasses;
  // dialogStyles = new DialogStyle();

  addEditItemForm!: FormGroup;

  readonly tableDataStore = inject(TableDataStore);

  constructor(private fb: FormBuilder, private demoService: DemoService) {
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

  ngOnInit(): void {
    // Initialize form
    this.initializeForm();
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

    const allCurrentProducts = this.tableDataStore.products();

    const foundIndex = allCurrentProducts.findIndex(a => a.id === this.selectedData().id);

    // allCurrentProducts[foundIndex].brand = this.addEditItemForm.value.brand;
    // allCurrentProducts[foundIndex].category = this.addEditItemForm.value.category;
    // allCurrentProducts[foundIndex].description = this.addEditItemForm.value.description;
    // allCurrentProducts[foundIndex].discountPercentage = this.addEditItemForm.value.discountPercentage;
    // allCurrentProducts[foundIndex].images = this.addEditItemForm.value.images;
    // allCurrentProducts[foundIndex].price = this.addEditItemForm.value.price;
    // allCurrentProducts[foundIndex].rating = this.addEditItemForm.value.rating;
    // allCurrentProducts[foundIndex].stock = this.addEditItemForm.value.stock;
    // allCurrentProducts[foundIndex].thumbnail = this.addEditItemForm.value.thumbnail;
    // allCurrentProducts[foundIndex].title = this.addEditItemForm.value.title;

    this.tableDataStore.editProduct(foundIndex, this.addEditItemForm.value);

    this.closeDialog();
  }
}

