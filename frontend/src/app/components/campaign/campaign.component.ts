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
  fileToUpload: File = null;

  constructor(public campaignService: CampaignServiceService) { }

  uploadFileToS3(files: FileList): any {
    this.fileToUpload = files.item(0);
    this.campaignService.uploadFile(this.fileToUpload);
  }

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
