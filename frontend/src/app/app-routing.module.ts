import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './components/campaign/campaign.component';
import { DiscoveryComponent } from './components/discovery/discovery.component';
import { LiveSupportComponent } from './components/live-support/live-support.component';
import { PixelComponent } from './components/pixel/pixel.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: 'discovery',
    component: DiscoveryComponent
  },
  {
    path: 'pixel',
    component: PixelComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'live-support',
    component: LiveSupportComponent
  },
  {
    path: '',
    redirectTo: '/campaign',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
