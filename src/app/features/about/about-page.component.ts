import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink],
  template: `
    <section class="page-hero" id="main-content">
      <div class="container">
        <p class="eyebrow">ABOUT ME</p>
        <h1>IT skills with a <span>practical mindset.</span></h1>
      </div>
    </section>
    <section class="section">
      <div class="container two-column">
        <div class="profile-card">
          <div class="profile-top">
            <div class="profile-avatar">SM</div>
            <div>
              <h3>Salma Momani</h3>
              <p>Trainee Student</p>
            </div>
          </div>
          <div class="profile-row"><span>Education</span><strong>BTEC Level 3</strong></div>
          <div class="profile-row"><span>Programming</span><strong>Python & C#</strong></div>
          <div class="profile-row"><span>Web</span><strong>HTML, CSS & JavaScript</strong></div>
          <div class="profile-row"><span>Languages</span><strong>Arabic & English</strong></div>
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
          <a class="btn btn-primary" routerLink="/projects">Explore My Work</a>
        </div>
      </div>
    </section>
  `,
})
export class AboutPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Salma Momani | About');
    this.meta.updateTag({
      name: 'description',
      content: 'About Salma Momani, IT Trainee and aspiring software developer.',
    });
  }
}
