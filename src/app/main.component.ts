import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="main-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .main-container {
  background-color: black;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* This ensures content area expands to push footer down */
.main-container > *:not(.footer) {
  flex: 1 0 auto;
}
  `]
})
export class MainComponent { }
