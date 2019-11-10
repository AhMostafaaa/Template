import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title = 'i18nDemo';

  languageList = [
    {code:'en',label:'English' },
    {code: 'ar',label:'Arabic' }

  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
    
  }
  

}
