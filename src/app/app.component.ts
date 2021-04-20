import { Component,OnInit } from '@angular/core';
import { CartService } from './@core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'tufarmaclick';

constructor(private carritoService : CartService) {

}


  ngOnInit(): void {

    this.carritoService.iniciarCarritoDeCompras();
    
  }

}
