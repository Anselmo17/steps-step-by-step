import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnChanges {

  @Input() steps: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const step = changes.steps;
    if (step.currentValue) {
      this.steps = step.currentValue;
      console.log('O valor do contato é diferente do anterior!');
    }
  }

}
