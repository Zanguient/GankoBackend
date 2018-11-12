import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('milk', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/milk.svg'))
      .addSvgIcon('group', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'))
      .addSvgIcon('health', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/health.svg'))
      .addSvgIcon('logout', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'))
      .addSvgIcon('manage', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/manage.svg'))
      .addSvgIcon('meadow', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/meadow.svg'))
      .addSvgIcon('movement', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/movement.svg'))
      .addSvgIcon('reports', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/reports.svg'))
      .addSvgIcon('straw', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/straw.svg'))
      .addSvgIcon('vaccine', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vaccine.svg'))
      .addSvgIcon('feed', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/feed.svg'))
      .addSvgIcon('bovine', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bovine.svg'))
      .addSvgIcon('ceba', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ceba.svg'))
      .addSvgIcon('reproductive', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/reproductive.svg'))
      .addSvgIcon('farmer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/farmer.svg'))
      .addSvgIcon('users', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/users.svg'))
      .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'))
      .addSvgIcon('coins', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/coin.svg'));
  }

}
