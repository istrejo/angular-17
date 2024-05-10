import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if(user()) {

    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
      <div>
        <h3>{{ fullname() }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>

    } @else {
    <p>Loading information</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private UsersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.UsersService.getUserById(id))
    )
  );

  public fullname = computed(
    () => `${this.user()?.first_name} ${this.user()?.last_name}`
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User Information : ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    }
    return 'User Infomation';
  });

  // constructor() {
  //   this.route.params.subscribe((params) => {
  //     console.log(params);
  //   });
  // }
}
