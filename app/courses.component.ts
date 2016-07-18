import { Component } from 'angular2/core';
import { CoursesService } from './course.service';
import { AuthorService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';
@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
        {{title}}
        <ul>
          <input type="text" autoGrow />
          <li *ngFor="#course of courses">
          {{course}}</li>
        </ul>`,
    directives: [AutoGrowDirective],
    providers: [CoursesService, AuthorService],
})

export class CoursesComponent {
    title = "The title of courses page";
    courses: string[];
    authors: string[];
    constructor(courseService: CoursesService, authorService: AuthorService) {
        this.courses = courseService.getCourses();
        this.authors = authorService.getAuthors();
    }
}
