import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeadComponent } from './head/head.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeadComponent,
    AboutContainerComponent,
    MySkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
