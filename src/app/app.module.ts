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
import { ContactFormComponent } from './components/main/my-profile/contact/contact-form/contact-form.component';
import { InputComponent } from './components/shared/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ErrorComponent } from './components/shared/error/error.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { QualificationComponent } from './components/main/qualification/qualification.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ServiceComponent } from './components/main/my-profile/service/service.component';
import { PopupComponent } from './components/shared/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PortfolioComponent } from './components/main/my-profile/portfolio/portfolio.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './components/shared/carousel-holder/carousel-holder.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

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
    ContactFormComponent,
    InputComponent,
    ErrorComponent,
    SpinnerComponent,
    QualificationComponent,
    ServiceComponent,
    PopupComponent,
    PortfolioComponent,
    CarouselHolderComponent
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
    CdkAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    DragScrollModule,
    CarouselModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
