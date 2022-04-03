import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'step';

  steps = [
    { active: true, name: 'grupo' },
  ]

  message() {
    this.steps = [
      { active: true, name: 'grupo' },
      { active: true, name: 'message' },
    ];
  }

  custo() {
    this.steps = [
      { active: true, name: 'grupo' },
      { active: true, name: 'message' },
      { active: true, name: 'custo' },
    ];
  }

  timeline() {
    this.steps = [
      { active: true, name: 'grupo' },
      { active: true, name: 'message' },
      { active: true, name: 'custo' },
      { active: true, name: 'timeline' },
    ];
  }

  voltar() {
    this.steps = [
      { active: true, name: 'grupo' },
    ];
  }
}
