import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

const BACKEND_URL = `${environment.apiURL}/campaign`;

@Injectable({
  providedIn: 'root'
})
export class CampaignServiceService {

  private campaignData = [];
  private campaignDataUpdated = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  getCampaignData(): any {
    return this.campaignData;
  }

  getCampaignDataUpdated(): any {
    return this.campaignDataUpdated.asObservable();
  }

  // get campaign data
  getAllCampaignData(): any {
    this.http.get<{ message: string; campaignData; }>(`${BACKEND_URL}/getAllCampaignData`)
      .subscribe(fetchedCampaignData => {
        this.campaignData = fetchedCampaignData.campaignData;
        this.campaignDataUpdated.next({ campaignData: [...this.campaignData] });
      });
  }
}
