import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class   NavbarComponent {
  toggleMenu() {
    const checkbox = document.getElementById('menu_hamburguesa') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false; 
    }
  }
}

