import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CarouselUtilityComponent } from './body/carousel-utility/carousel-utility.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentDisplayComponent } from './body/content-display/content-display.component';
import { FaqComponent } from './body/faq/faq.component';
import { ServisesTabComponent } from './body/servises-tab/servises-tab.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CarouselUtilityComponent,
    ContentDisplayComponent,
    FaqComponent,
    ServisesTabComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
