import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { contactInfo } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact-page',
  template: `
    <section class="page-hero" id="main-content">
      <div class="container">
        <p class="eyebrow">CONTACT</p>
        <h1>Let's connect and <span>create.</span></h1>
      </div>
    </section>
    <section class="section contact-band">
      <div class="container">
        <div class="contact-panel">
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
export class ContactPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly contact = contactInfo;

  ngOnInit(): void {
    this.title.setTitle('Salma Momani | Contact');
    this.meta.updateTag({
      name: 'description',
      content: 'Contact Salma Momani.',
    });
  }
}
