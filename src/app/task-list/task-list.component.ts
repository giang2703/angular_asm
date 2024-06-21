import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  list_task: ITask[] = [];
  ngOnInit():void{
    this.loadTask();

  }

  loadTask():void{
    fetch(`http://localhost:3000/task`)
    .then(res => res.json())
    .then(data => {
      this.list_task = data as ITask[];
    });
  }

  xoaTask(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa task này không?')) {
      fetch(`http://localhost:3000/task/${id}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then(() => {
        alert('Xóa task thành công');
        this.loadTask();
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Xóa task thất bại');
      });
    }
  }
}
