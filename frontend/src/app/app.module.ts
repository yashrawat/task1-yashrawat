import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { PixelComponent } from './components/pixel/pixel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LiveSupportComponent } from './components/live-support/live-support.component';
import { DiscoveryComponent } from './components/discovery/discovery.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CampaignComponent,
    PixelComponent,
    ProfileComponent,
    LiveSupportComponent,
    DiscoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
