import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';

@Component({
  selector: 'app-project-details-page',
  imports: [GalleryComponent, RouterLink],
  template: `
    @if (project) {
      <section class="project-detail" id="main-content">
        <div class="container">
          <a class="back-link" routerLink="/projects">← Back to My Projects</a>
          <header class="project-detail__header">
            <p class="eyebrow">{{ project.level }}</p>
            <h1>{{ project.title }}</h1>
            <p>{{ project.detailDescription }}</p>
          </header>
          <app-gallery [images]="project.images" />
          <section class="project-info">
            <h2>Technologies</h2>
            <div class="tags">
              @for (tech of project.technologies; track tech) {
                <span>{{ tech }}</span>
              }
            </div>
          </section>
        </div>
      </section>
    }
  `,
})
export class ProjectDetailsPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projects = inject(ProjectService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  project?: Project;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = slug ? this.projects.getProjectBySlug(slug) : undefined;

    if (!this.project) {
      void this.router.navigateByUrl('/projects');
      return;
    }

    this.title.setTitle(`Salma Momani | ${this.project.title}`);
    this.meta.updateTag({
      name: 'description',
      content: this.project.detailDescription,
    });
  }
}
