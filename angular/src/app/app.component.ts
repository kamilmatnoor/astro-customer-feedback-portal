import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  constructor(private userService: UserService) { 
    this.userService.getAll().then(res=> {
      console.log(res)
    })
  }
}
