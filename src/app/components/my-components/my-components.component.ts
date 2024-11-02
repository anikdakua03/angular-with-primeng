import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';

@Component({
  selector: 'app-my-components',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './my-components.component.html',
  styleUrl: './my-components.component.scss'
})
export class MyComponentsComponent {

}
