import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersFastComponent,
    TitleComponent,
    PrimengModule,
  ],
  templateUrl: './defer-option.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferOptionComponent {}
