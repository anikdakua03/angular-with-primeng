import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DemoService } from '../../../services/demo.service';
import { PrimengTableWrapperComponent } from "../../../shared/components/primeng-table-wrapper/primeng-table-wrapper.component";
import { IProduct } from '../../../shared/interfaces/product';
import { AddEditTableDataComponent } from "./add-edit-table-data/add-edit-table-data.component";

@Component({
  selector: 'app-my-table',
  imports: [TableModule, ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, CommonModule, AddEditTableDataComponent, PrimengTableWrapperComponent],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.scss'
})
export class MyTableComponent {

  selectedData: IProduct | null = null;

  showAddEditModal = signal<boolean>(false);

  cols = [
    // { id: 'id', name: 'Id' },
    { id: 'title', name: 'Title' },
    { id: 'category', name: 'Category' },
    { id: 'price', name: 'Price' },
    { id: 'stock', name: 'Stock' },
    { id: 'discountPercentage', name: 'Discount Percentage' },
    { id: 'description', name: 'Description' },
    { id: 'rating', name: 'Rating' },
    { id: 'brand', name: 'Brand' },
    // { id: 'thumbnail', name: 'Thumbnail' },
    // { id: 'image', name: 'Image' }
  ];

  columnFilters = this.cols.map(a => a.id)

  constructor(public demoService: DemoService) {

  }

  openAddEditModal(): void {
    this.showAddEditModal.set(true);
  }

  getAllUsers(): void {
    // this.demoService.getRandomProducts().subscribe(
    //   res => {
    //     console.log(res);
    //     this.products.set(res.data.data);
    //   }
    // )
  }

  onAddRandomProduct(): void {
    const randomIndex = Math.floor(Math.random() * this.demoService.allRandomProducts.length);

    const randomProductToAdd = this.demoService.allRandomProducts[randomIndex];
    console.log("Random product : ", randomProductToAdd);

    this.demoService.products.update((prevProduct: IProduct[]) =>
      [...prevProduct, randomProductToAdd]
    );
  }

  onEditProduct(product: IProduct) {
    this.selectedData = product;
    this.showAddEditModal.set(true);
    console.log("Selected product : ", product);
  }

  onDeleteProduct(product: IProduct) {
    console.log("Selected product to delete : ", product);
    if (confirm(`Are you sure that you want to delete this ${product.title} product ?`)) {
      this.demoService.products.set(this.demoService.products().filter(a => a.id !== product.id));
    }
  }

  getSelectedData(products: IProduct[]) {
    console.log("Selected products through check box : ", products);
  }
}
