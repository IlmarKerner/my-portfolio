import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeadComponent } from './head/head.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeadComponent,
    AboutContainerComponent,
    MySkillsComponent,
    PortfolioComponent,
    FirstProjectComponent,
    SecondProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
