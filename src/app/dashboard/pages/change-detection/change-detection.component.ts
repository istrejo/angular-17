import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <app-title [title]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ templateEvent() }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2026,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2026,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
    }, 3000);
  }

  templateEvent() {
    console.log('Render');
  }
}
