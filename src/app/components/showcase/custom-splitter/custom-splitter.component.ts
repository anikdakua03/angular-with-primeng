import { Component, signal } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { PrimeNgModule } from '@shared/modules/prime-ng.module';

@Component({
  selector: 'app-custom-splitter',
  imports: [PrimeNgModule, AngularSplitModule],
  templateUrl: './custom-splitter.component.html',
  styleUrl: './custom-splitter.component.scss'
})
export class CustomSplitterComponent {
  readonly displayDialog = signal<boolean>(false);

  cars: { brand: string, model: string, year: number }[] = [
    { brand: 'Toyota', model: 'Corolla', year: 2020 },
    { brand: 'Ford', model: 'Focus', year: 2019 },
    { brand: 'BMW', model: '320i', year: 2021 },
    { brand: 'Toyota12', model: 'Corolla', year: 2020 },
    { brand: 'Ford34', model: 'Focus', year: 2019 },
    { brand: 'BMW346', model: '320i', year: 2021 },
    { brand: 'Toyota54', model: 'Corolla', year: 2020 },
    { brand: 'Ford578', model: 'Focus', year: 2019 },
    { brand: 'BMW6809', model: '320i', year: 2021 },
    { brand: 'Toyota089', model: 'Corolla', year: 2020 },
    { brand: 'Ford478', model: 'Focus', year: 2019 },
    { brand: 'BMW364', model: '320i', year: 2021 },
    { brand: 'Toyota25623', model: 'Corolla', year: 2020 },
    { brand: 'Ford568', model: 'Focus', year: 2019 },
    { brand: 'BMW6780', model: '320i', year: 2021 },
  ];

  selectedCars!: unknown;

  showDialog() {
    this.displayDialog.set(true);
  }

  closeDialog() {
    this.displayDialog.set(false);
  }
}
