import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/sharepage/navbar/navbar.component';
import { FooterComponent } from './components/sharepage/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { BookingpageComponent } from './components/bookingpage/bookingpage.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { GoogleFormPageComponent } from './components/google-form-page/google-form-page.component';
import { ViewAllPageComponent } from './components/view-all-page/view-all-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DestinationsComponent,
    AboutusComponent,
    ContactComponent,
    AddDataComponent,
    BookingpageComponent,
    CarouselComponent,
    GoogleFormPageComponent,
    ViewAllPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
