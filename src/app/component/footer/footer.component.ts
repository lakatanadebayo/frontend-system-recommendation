import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  //emailAddresse = 'contact@view.com';
  srce = 'SRCE';
  currentYear  = new Date().getFullYear();
}
