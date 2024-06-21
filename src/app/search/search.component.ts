import { routes } from './../../../../assignment-app/src/app/app.routes';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  faMagnifyingGlass = faMagnifyingGlass;
  @Output() searchParams = new EventEmitter<string>();
  q: string = '';
  constructor(private router: ActivatedRoute){}
  ngOnInit(): void {
    this.q = this.router.snapshot.queryParams['q'];
  }

  handleSearch(){
    this.searchParams.emit(this.q);
  }
}
