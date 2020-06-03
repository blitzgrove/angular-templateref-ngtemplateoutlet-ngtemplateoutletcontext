import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  template: TemplateRef<any>;
  context: any;

  showRef(template: TemplateRef<any>, context: any) {
    this.template = template;
    this.context = context
  }
}
