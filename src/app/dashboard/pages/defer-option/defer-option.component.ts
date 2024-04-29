import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-option.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferOptionComponent {}
