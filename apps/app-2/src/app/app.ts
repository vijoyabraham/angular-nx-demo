import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UiTitle} from '@nx-angular/ui-title'
import { MatButtonModule } from '@angular/material/button';
@Component({
  imports: [RouterModule,UiTitle,MatButtonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app-2';
}
