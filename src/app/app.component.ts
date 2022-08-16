import { Component } from '@angular/core';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-demo-app';
  // constructor(private printer: TestComponentComponent) {}
  // //  Print Page
  // public printThisPage() {
  //   window.print();
  // }
}
