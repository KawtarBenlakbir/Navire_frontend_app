import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/AuthService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'digital-app-navire';
constructor(private authService : AuthService) {
}
  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage();
  }
}
