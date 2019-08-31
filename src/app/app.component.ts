import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tanslate-app-ngx';
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'uk'])
    translate.setDefaultLang('uk');
    translate.use('uk');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|uk/) ? browserLang : 'en');
    console.log(browserLang)
  }
}
