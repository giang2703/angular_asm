import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../iuser';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: IUser[] = [];
  constructor(private d: DulieuService,) {}
  ngOnInit(): void {
    this.d.layNhanVien().subscribe((data) => {
      this.register = data as IUser[];
    });
  } //ngOnInit
  xuly(rg: IUser): void {
    this.d.themRegister(rg).subscribe((data) => {
      console.log(rg, data);
      alert('Đăng ký thành công');
      // Chuyển đến trang khác sau khi đăng ký thành công
      // this.router.navigate(['/some_route']);
    }, (error) => {
      console.error('Đăng ký thất bại', error);
      alert('Đăng ký thất bại');
    });
  }
}
