import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { INhanVien } from '../inhan-vien';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent {
  list_nv: INhanVien[] = [];

  ngOnInit():void{
    this.loadNhanVien();
  }

  loadNhanVien(): void {
    fetch(`http://localhost:3000/nhan_vien`)
      .then((res) => res.json())
      .then((data) => {
        this.list_nv = data as INhanVien[];
      });
  }

  xoaNhanVien(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa nhân viên này không?')) {
      fetch(`http://localhost:3000/nhan_vien/${id}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then(() => {
        alert('Xóa nhân viên thành công');
        this.loadNhanVien();
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Xóa nhân viên thất bại');
      });
    }
  }
}
