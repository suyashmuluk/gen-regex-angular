import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenRegexAngular } from 'gen-regex-angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-gen-regex';
  my_form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public test: GenRegexAngular) {
  }

  required_regex = this.test.regexpattern('mail')

  ngOnInit() {
    this.my_form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.required_regex)]]
    })
  }

  validateForm() {
    console.log(this.my_form)
  }
}
