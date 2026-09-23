import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { activities, contactInfo, skills, timelineItems } from '../../core/data/portfolio.data';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, ProjectCardComponent],
  template: `
    <section id="home" class="hero-section">
      <div class="container hero-grid" id="main-content">
        <div class="hero-copy">
          <p class="eyebrow">TRAINEE STUDENT • BTEC LEVEL 3</p>
          <h1>Salma <span>Momani</span></h1>
          <h2>IT Trainee & Aspiring <span class="line-break">Software Developer</span></h2>
          <p class="hero-text">
            An IT graduate with skills in programming, web development, mobile app development,
            cybersecurity, databases, data analysis and technical support.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" routerLink="/projects">Explore My Work</a>
            <a class="btn btn-secondary" routerLink="/contact">Contact Me</a>
          </div>
          <div class="quick-info" aria-label="Quick contact information">
            <span>{{ contact.location }}</span>
            <span>{{ contact.heroEmail }}</span>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Profile summary">
          <div class="profile-orbit">
            <span>SM</span>
          </div>
          <div class="hero-stat">
            <span>Education</span>
            <strong>BTEC Level 3</strong>
          </div>
          <div class="hero-stat">
            <span>Programming</span>
            <strong>Python & C#</strong>
          </div>
          <div class="hero-stat">
            <span>Web</span>
            <strong>HTML, CSS & JavaScript</strong>
          </div>
        </aside>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container two-column">
        <div class="section-heading">
          <p class="eyebrow">01 — ABOUT ME</p>
          <h2>IT skills with a <span>practical mindset.</span></h2>
        </div>
        <div class="copy-stack">
          <p>
            I am a BTEC Program graduate at Level 3 and an IT trainee interested in
            software development and technology.
          </p>
          <p>
            My background includes programming fundamentals, web development, mobile
            application development, cybersecurity, databases, technical support,
            data analysis and digital design.
          </p>
          <p>
            I enjoy learning through training, workshops and practical projects while
            developing my problem-solving, teamwork, communication and time-management skills.
          </p>
        </div>
      </div>
    </section>

    <section id="skills" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">02 — TECHNICAL SKILLS</p>
          <h2>What I have <span>worked with.</span></h2>
        </div>
        <div class="skills-grid">
          @for (skill of skillItems; track skill.title) {
            <article class="skill-card reveal-card">
              <div class="skill-icon">{{ skill.icon }}</div>
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.description }}</p>
              <div class="tags">
                @for (tag of skill.tags; track tag) {
                  <span>{{ tag }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section id="training" class="section">
      <div class="container two-column">
        <div class="section-heading">
          <p class="eyebrow">03 — EDUCATION & TRAINING</p>
          <h2>My <span>learning journey.</span></h2>
        </div>
        <div class="timeline">
          @for (item of trainingItems; track item.title) {
            <article class="timeline-item">
              <span class="timeline-dot"></span>
              <div>
                <span class="timeline-label">{{ item.label }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section id="activities" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">05 — PROJECTS & ACTIVITIES</p>
          <h2>Hands-on <span>experience.</span></h2>
          <p class="section-intro">Selected workshops, competitions and technology programs listed in my CV.</p>
        </div>
        <div class="activities-grid">
          @for (activity of activityItems; track activity.title) {
            <article class="activity-card reveal-card">
              <div class="activity-top">
                <span>{{ activity.number }}</span>
                <strong>{{ activity.icon }}</strong>
              </div>
              <span class="card-category">{{ activity.category }}</span>
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.description }}</p>
              <div class="tags">
                @for (tag of activity.tags; track tag) {
                  <span>{{ tag }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section id="btec-projects" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">06 — BTEC PROJECTS</p>
          <h2>Projects I have <span>built.</span></h2>
          <p class="section-intro">
            A collection of practical projects completed throughout my BTEC Level 2 and Level 3 studies.
          </p>
        </div>

        <div class="level-header">
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

    <section id="contact" class="section contact-band">
      <div class="container">
        <div class="contact-panel">
          <p class="eyebrow">07 — CONTACT</p>
          <h2>Let's connect and <span>create.</span></h2>
          <p>Interested in software development, IT, digital services and technology opportunities.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" [href]="'mailto:' + contact.email">Email Me</a>
            <a class="btn btn-secondary" href="tel:+962779424518">Call Me</a>
          </div>
          <div class="contact-details">
            <span>{{ contact.email }}</span>
            <span>{{ contact.phone }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomePageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly projects = inject(ProjectService);

  readonly contact = contactInfo;
  readonly skillItems = skills;
  readonly trainingItems = timelineItems;
  readonly activityItems = activities;
  readonly level2Projects = this.projects.getProjectsByLevel('BTEC LEVEL 2');
  readonly level3Projects = this.projects.getProjectsByLevel('BTEC LEVEL 3');

  ngOnInit(): void {
    this.title.setTitle('Salma Momani | Portfolio');
    this.meta.updateTag({
      name: 'description',
      content: 'Salma Momani - Trainee Student portfolio.',
    });
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
