import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private router: Router
  ) {
    this.formGroup = new FormGroup({
      player1: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      player2: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      lines: new FormControl('', [Validators.required, Validators.min(2), Validators.max(20)]),
      cols: new FormControl('', [Validators.required, Validators.min(2), Validators.max(20)]),

    });
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.router.navigate(['game'], this.getQueryParams());
    } else {
      alert('Formulário inválido.');
    }
  }

  private getQueryParams(): NavigationExtras {
    return { queryParams:
        {
          player1: this.formGroup.controls['player1'].value.toString().toUpperCase(),
          player2: this.formGroup.controls['player2'].value.toString().toUpperCase(),
          lines: this.formGroup.controls['lines'].value,
          cols: this.formGroup.controls['cols'].value
        }
    };
  }

}
