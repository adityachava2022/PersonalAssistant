import { Component, OnInit } from '@angular/core';
import {Todo} from "../shared/models/Todo";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: Todo[]= [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/todos").subscribe((resp: any) => {
      this.todolist = resp;
    },
      (error => {
        console.log(" some error " , error);
      }));
  }

}
