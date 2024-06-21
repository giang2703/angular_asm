import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IDuAn } from '../idu-an';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule, RouterLink],
  templateUrl: './duan-list.component.html',
  styleUrl: './duan-list.component.css',
})
export class DuanListComponent {
  list_du_an: IDuAn[] = [];

 ngOnInit(): void {
    this.loadDuAn();
  }

  loadDuAn(): void {
    fetch(`http://localhost:3000/du_an`)
      .then((res) => res.json())
      .then((data) => {
        this.list_du_an = data as IDuAn[];
      });
  }
  xoaDuAn(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa dự án này không?')) {
      fetch(`http://localhost:3000/du_an/${id}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then(() => {
        alert('Xóa dự án thành công');
        this.loadDuAn(); // Reload the project list
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Xóa dự án thất bại');
      });
    }
  }
}
