import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationItem } from '../../../core/models/navigation-item.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="container nav-shell">
        <a class="brand" routerLink="/" (click)="closeMenu()" aria-label="Salma Momani home">
          SM<span>.</span>
        </a>

        <button
          class="menu-button"
          type="button"
          [class.is-open]="menuOpen()"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          (click)="toggleMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="primary-navigation" class="nav-links" [class.is-open]="menuOpen()">
          @for (item of navigation; track item.label) {
            <a
              [routerLink]="item.route"
              [fragment]="item.fragment"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: item.route === '/' && !item.fragment }"
              (click)="navigate(item)"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </div>
    </header>
  `,
})
export class NavbarComponent {
  private readonly router = inject(Router);
  readonly menuOpen = signal(false);

  readonly navigation: NavigationItem[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Skills', route: '/', fragment: 'skills' },
    { label: 'Training', route: '/', fragment: 'training' },
    { label: 'Activities', route: '/', fragment: 'activities' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  navigate(item: NavigationItem): void {
    this.closeMenu();

    if (item.fragment && this.router.url.split('#')[0] === item.route) {
      document.getElementById(item.fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
