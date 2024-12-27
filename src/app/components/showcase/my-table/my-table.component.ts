import { Component, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DemoService } from '../../../services/demo.service';
import { IProduct } from '../../../shared/interfaces/product';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-table',
  imports: [TableModule, ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, CommonModule],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.scss'
})
export class MyTableComponent {

  readonly products = signal<IProduct[]>([]);

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
    // { id: 'image', name: 'Image' },
    { id: 'action', name: 'Action' },
  ];

  constructor(private demoService: DemoService) {

  }


  getAllUsers() {
    this.demoService.getRandomProducts().subscribe(
      res => {
        console.log(res);
        this.products.set(res.data.data);
      }
    )
  }
}
