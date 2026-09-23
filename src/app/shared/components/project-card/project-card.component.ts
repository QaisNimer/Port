import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <article class="project-card reveal-card">
      <div class="project-card__media">
        @if (project().images.length) {
          <img [src]="project().images[0].src" [alt]="project().images[0].alt" loading="lazy" />
        } @else {
          <div class="project-card__placeholder" aria-hidden="true">{{ project().icon }}</div>
        }
      </div>
      <div class="project-card__body">
        <div class="project-card__meta">
          <span>{{ indexLabel() }}</span>
          <span>{{ project().category }}</span>
        </div>
        <h3>{{ project().title }}</h3>
        <p>{{ project().cardDescription }}</p>
        <div class="tags" aria-label="Technologies">
          @for (tech of project().technologies; track tech) {
            <span>{{ tech }}</span>
          }
        </div>
        <a class="text-link" [routerLink]="['/projects', project().slug]">View Project →</a>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly indexLabel = input.required<string>();
}
