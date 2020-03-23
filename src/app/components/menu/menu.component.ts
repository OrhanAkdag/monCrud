import { Component, OnInit, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() siteTitle: string;
  faHome = faHome;
  faBook = faBook;

  constructor() { }

  ngOnInit(): void {
  }

}
