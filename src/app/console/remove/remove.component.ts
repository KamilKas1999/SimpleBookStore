import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {}

  onRemove(form: NgForm) {
    this.consoleService.remove(form.value.toDelete, form.value.id);
  }
}
