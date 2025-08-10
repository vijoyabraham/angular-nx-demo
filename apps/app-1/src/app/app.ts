import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UiTitle} from '@nx-angular/ui-title'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule, ReactiveFormsModule,RouterModule,UiTitle, MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app-1';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
