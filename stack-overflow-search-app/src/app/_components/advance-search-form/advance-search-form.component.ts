import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advance-search-form',
  templateUrl: './advance-search-form.component.html',
  styleUrls: ['./advance-search-form.component.scss'],
})
export class AdvanceSearchFormComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
