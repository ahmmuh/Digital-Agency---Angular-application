import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AmazingDesignComponent } from './components/amazing-design/amazing-design.component';
import { LeaderShipComponent } from './components/leader-ship/leader-ship.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceComponent,
    PortfolioComponent,
    CustomerComponent,
    AmazingDesignComponent,
    LeaderShipComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
