import { Injectable } from '@angular/core';
import { projects } from '../data/projects.data';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Project[] {
    return projects;
  }

  getProjectsByLevel(level: Project['level']): Project[] {
    return projects.filter((project) => project.level === level);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
  }
}
