import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'Angular Demo App';

  count: number = 0;

  constructor() {
    console.log('Constructor Called');
  }

  ngOnInit(): void {
    console.log('Component Initialized');
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
  
}
