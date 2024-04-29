import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, PrimengModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('F');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }

  changeGrade(grade: Grade) {
    this.grade.set(grade);
  }
}
