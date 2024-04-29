import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [CommonModule],
  template: `<p>heavy-loaders-slow works!</p>`,
  styles: ``,
})
export class UsersLoaderComponent {}
