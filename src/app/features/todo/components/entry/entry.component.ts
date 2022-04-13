import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { todoItemCreated } from '../../state/actions/todos.events';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  form = this.formBuilder.group({
    description: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
  });
  constructor(private formBuilder: FormBuilder, private store: Store) {}

  get description() {
    return this.form.get('description');
  }

  ngOnInit(): void {}

  submit(ctrl: HTMLInputElement) {
    if (this.form.valid) {
      const description = this.description?.value;
      this.store.dispatch(todoItemCreated({ description }));
      this.form.reset();
      ctrl.focus();
    } else {
      // can't dispatch.
    }
  }
}
