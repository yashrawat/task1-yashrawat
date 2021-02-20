import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CampaignServiceService } from 'src/app/services/campaign-service.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit, OnDestroy {

  campaignData;
  campaignDataSubs: Subscription;

  constructor(public campaignService: CampaignServiceService) { }

  ngOnInit(): void {
    this.campaignData = this.campaignService.getAllCampaignData();
    this.campaignDataSubs = this.campaignService.getCampaignDataUpdated()
      .subscribe(fetchedCampaignData => {
        this.campaignData = fetchedCampaignData.campaignData;
      });
  }

  ngOnDestroy(): void {
    this.campaignDataSubs.unsubscribe();
  }

}
