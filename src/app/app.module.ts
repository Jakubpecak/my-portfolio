import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MyProfileComponent } from './components/main/my-profile/my-profile.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutMeComponent } from './components/main/my-profile/about-me/about-me.component';
import { SkillsComponent } from './components/main/my-profile/skills/skills.component';
import { ContactComponent } from './components/main/my-profile/contact/contact.component';
import { HomeComponent } from './components/main/my-profile/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SkillsAccordionComponent } from './components/main/my-profile/skills/skills-accordion/skills-accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    HomeComponent,
    SkillsAccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
