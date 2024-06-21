import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';

@Component({
  selector: 'app-nv-sua',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent {
  id: number = 0;
  data: INhanVien = <INhanVien>{};

  constructor(
    private d: DulieuService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.lay1NhanVien(this.id).subscribe(
      nv => {
        console.log("nv=", nv);
        this.data = nv as INhanVien;
      },
      error => {
        console.error('Lỗi khi lấy thông tin nhân viên: ', error);
        alert('Lỗi khi lấy thông tin nhân viên');
      }
    );
  }

  xuly(): void {
    this.d.suaNhanVien(this.data).subscribe(
      result => {
        console.log("result=", result);
        alert('Sửa thành công');
        // chuyển tới danh sách nhân viên
        this.router.navigate(['/nhan_vien']);
      },
      error => {
        console.error('Lỗi khi sửa nhân viên: ', error);
        alert('Lỗi khi sửa nhân viên');
      }
    );
  }
}
