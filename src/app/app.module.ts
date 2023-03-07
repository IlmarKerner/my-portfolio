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
import { ThirdProjectComponent } from './third-project/third-project.component';
import { FourthProjectComponent } from './fourth-project/fourth-project.component';
import { FifthProjectComponent } from './fifth-project/fifth-project.component';
import { ContactComponent } from './contact/contact.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeadComponent,
    AboutContainerComponent,
    MySkillsComponent,
    PortfolioComponent,
    FirstProjectComponent,
    SecondProjectComponent,
    ThirdProjectComponent,
    FourthProjectComponent,
    FifthProjectComponent,
    ContactComponent,
    ContactContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
