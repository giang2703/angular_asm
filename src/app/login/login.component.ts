import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../iuser';
import { DulieuService } from '../dulieu.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private d: DulieuService) {}

  loginUser(user: IUser): void {
    this.d.loginUser(user).subscribe(
      (data) => {
        console.log(data);
        alert('Đăng nhập thành công');
        // Chuyển đến trang sau khi đăng nhập thành công
        // this.router.navigate(['/some_route']);
      },
      (error) => {
        console.error('Đăng nhập thất bại', error);
        alert('Đăng nhập thất bại');
      }
    );
  }
}
