import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent],
  template: `
    <section class="page-hero" id="main-content">
      <div class="container">
        <p class="eyebrow">BTEC PROJECTS</p>
        <h1>Projects I have <span>built.</span></h1>
        <p class="section-intro">
          A collection of practical projects completed throughout my BTEC Level 2 and Level 3 studies.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="level-header level-header--first">
          <p class="eyebrow">BTEC LEVEL 2</p>
          <h2>My <span>Level 2 projects.</span></h2>
          <p class="section-intro">
            Beginner projects that helped me build my first practical programming, app development and web development skills.
          </p>
        </div>
        <div class="projects-grid">
          @for (project of level2Projects; track project.slug; let i = $index) {
            <app-project-card [project]="project" [indexLabel]="pad(i + 1)" />
          }
        </div>

        <div class="level-header">
          <p class="eyebrow">BTEC LEVEL 3</p>
          <h2>My <span>Level 3 projects.</span></h2>
          <p class="section-intro">
            Larger projects where I developed more advanced skills across software development, web development, mobile apps, games, AI and cybersecurity.
          </p>
        </div>
        <div class="projects-grid">
          @for (project of level3Projects; track project.slug; let i = $index) {
            <app-project-card [project]="project" [indexLabel]="pad(i + 5)" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly projects = inject(ProjectService);

  readonly level2Projects = this.projects.getProjectsByLevel('BTEC LEVEL 2');
  readonly level3Projects = this.projects.getProjectsByLevel('BTEC LEVEL 3');

  ngOnInit(): void {
    this.title.setTitle('Salma Momani | Projects');
    this.meta.updateTag({
      name: 'description',
      content: 'BTEC Level 2 and Level 3 projects by Salma Momani.',
    });
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
