import { Component, OnInit } from '@angular/core';
import { MonPremierServiceService } from '../mes-services/mon-premier-service.service';

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.css']
})
export class MonPremierComposantComponent implements OnInit {

  monInt = 0;
  constructor(private monService: MonPremierServiceService) { }

  ngOnInit(): void {
     this.monInt = this.monService.sommeDeuxPlusTrois();
  }

}
