import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let fixture: ComponentFixture<GalleryComponent>;
  let component: GalleryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    fixture.componentRef.setInput('images', [
      { src: 'assets/projects/one.png', alt: 'First screenshot' },
      { src: 'assets/projects/two.png', alt: 'Second screenshot' },
    ]);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('moves through images in both directions', () => {
    expect(component.activeIndex()).toBe(0);
    component.next();
    expect(component.activeIndex()).toBe(1);
    component.next();
    expect(component.activeIndex()).toBe(0);
    component.previous();
    expect(component.activeIndex()).toBe(1);
  });

  it('opens and closes the lightbox', () => {
    component.openLightbox();
    expect(component.lightboxOpen()).toBe(true);
    component.closeLightbox();
    expect(component.lightboxOpen()).toBe(false);
  });
});
