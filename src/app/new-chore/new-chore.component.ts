import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-chore',
  templateUrl: './new-chore.component.html',
  styleUrls: ['./new-chore.component.css']
})
export class NewChoreComponent implements OnInit {
  constructor(private store: StoreService, private fb: FormBuilder, private router: Router) {
  }

  choreForm = this.fb.group({
    description: ['', Validators.required],
    siblingId: ['', Validators.required],
  });

  ngOnInit() {
    this.store.getSiblings();
  }

  submitChore() {
    this.store.addChore(this.choreForm.value).add(() => {
      this.router.navigateByUrl('');
    });
  }
}
