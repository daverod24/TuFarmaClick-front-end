import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  toggledValue = true;
 

  constructor( private auth: AuthService)  { }

  ngOnInit(): void {
  }
  
  
  toggled() {
    if (this.toggledValue === undefined) {
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
   
  }
  logout() {
    this.auth.logout();
  }

}
