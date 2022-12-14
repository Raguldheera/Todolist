import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() taskList;
  newTask: string;
  constructor() { }

  ngOnInit() {
  }
  addTODO(){
    this.taskList.unshift(this.newTask);
    localStorage.setItem('my_tasks',JSON.stringify(this.taskList))
    this.newTask= '';
  }

}
