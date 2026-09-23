import { TestBed } from '@angular/core/testing';
import { projects } from '../data/projects.data';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('returns every migrated project', () => {
    expect(service.getProjects().length).toBe(11);
    expect(service.getProjects()).toEqual(projects);
  });

  it('finds projects by slug', () => {
    expect(service.getProjectBySlug('giraffe-escape')?.title).toBe('Giraffe Escape');
    expect(service.getProjectBySlug('missing-project')).toBeUndefined();
  });

  it('groups projects by BTEC level', () => {
    expect(service.getProjectsByLevel('BTEC LEVEL 2').length).toBe(4);
    expect(service.getProjectsByLevel('BTEC LEVEL 3').length).toBe(7);
  });

  it('preserves migrated screenshot paths', () => {
    expect(service.getProjectBySlug('resort-booking')?.images.length).toBe(10);
    expect(service.getProjectBySlug('university-management')?.images[0].src).toContain('.jpeg');
  });
});
