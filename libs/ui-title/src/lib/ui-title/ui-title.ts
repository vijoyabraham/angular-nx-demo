import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-title',
  imports: [CommonModule],
  templateUrl: './ui-title.html',
  styleUrl: './ui-title.css',
})
export class UiTitle {
  title = input.required<string>();
}
