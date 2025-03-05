import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'uebiz-top-menu',
  imports: [ButtonModule, MenubarModule],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {}
