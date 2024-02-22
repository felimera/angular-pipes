import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'andres';
  public nameUpper: string = 'ANDRES';
  public fullName: string = 'aNdReS FeLiPe';

  public customDate: Date = new Date();
}
