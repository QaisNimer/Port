import { Component, computed, HostListener, input, signal } from '@angular/core';
import { GalleryImage } from '../../../core/models/project.model';

@Component({
  selector: 'app-gallery',
  template: `
    @if (images().length) {
      <section class="gallery" aria-label="Project screenshots">
        <div class="gallery__stage">
          <button
            class="gallery__button gallery__button--prev"
            type="button"
            aria-label="Previous image"
            [disabled]="images().length === 1"
            (click)="previous()"
          >
            ‹
          </button>
          <button class="gallery__image-button" type="button" (click)="openLightbox()" aria-label="Open image">
            <img [src]="activeImage().src" [alt]="activeImage().alt" loading="lazy" />
          </button>
          <button
            class="gallery__button gallery__button--next"
            type="button"
            aria-label="Next image"
            [disabled]="images().length === 1"
            (click)="next()"
          >
            ›
          </button>
          <span class="gallery__counter">{{ activeIndex() + 1 }} / {{ images().length }}</span>
        </div>

        @if (images().length > 1) {
          <div class="gallery__thumbs" aria-label="Select screenshot">
            @for (image of images(); track image.src; let i = $index) {
              <button
                type="button"
                [class.active]="i === activeIndex()"
                [attr.aria-label]="'Show image ' + (i + 1)"
                (click)="select(i)"
              >
                <img [src]="image.src" [alt]="image.alt" loading="lazy" />
              </button>
            }
          </div>
        }
      </section>
    } @else {
      <div class="gallery-empty">No screenshots available for this project yet.</div>
    }

    @if (lightboxOpen()) {
      <div class="lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer">
        <button class="lightbox__close" type="button" aria-label="Close image" (click)="closeLightbox()">×</button>
        <button class="lightbox__nav" type="button" aria-label="Previous image" (click)="previous()">‹</button>
        <img [src]="activeImage().src" [alt]="activeImage().alt" />
        <button class="lightbox__nav" type="button" aria-label="Next image" (click)="next()">›</button>
      </div>
    }
  `,
})
export class GalleryComponent {
  readonly images = input.required<GalleryImage[]>();
  readonly activeIndex = signal(0);
  readonly lightboxOpen = signal(false);
  readonly activeImage = computed(() => this.images()[this.activeIndex()] ?? this.images()[0]);

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.images().length) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      this.previous();
    }

    if (event.key === 'ArrowRight') {
      this.next();
    }

    if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }

  select(index: number): void {
    this.activeIndex.set(index);
  }

  previous(): void {
    this.activeIndex.update((index) => (index - 1 + this.images().length) % this.images().length);
  }

  next(): void {
    this.activeIndex.update((index) => (index + 1) % this.images().length);
  }

  openLightbox(): void {
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }
}
