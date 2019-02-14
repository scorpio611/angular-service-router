import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryService} from './dictionary.service';
import {LoginStep2Component} from './login-step2/login-step2.component';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TimelinesComponent} from './timelines/timelines.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    LoginStep2Component,
    LoginStep1Component,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
