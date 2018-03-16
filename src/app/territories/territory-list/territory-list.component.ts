import { Component, OnInit } from '@angular/core';
import { Territory } from '../territory';
import { TerritoryService } from '../territory.service';
import { TerritoryDetailsComponent } from '../territory-details/territory-details.component';

@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html',
  styleUrls: ['./territory-list.component.css'],
  providers: [TerritoryService]
})

export class TerritoryListComponent implements OnInit {

  territories: Territory[]
  selectedTerritory: Territory

  constructor(private territoryService: TerritoryService) { }

  ngOnInit() {
     this.territoryService
      .getTerritories()
      .then((territories: Territory[]) => {
        this.territories = territories;
      });
  }

  private getIndexOfTerritory = (territoryId: String) => {
    return this.territories.findIndex((territory) => {
      return territory._id === territoryId;
    });
  }

  selectTerritory(territory: Territory) {
    this.selectedTerritory = territory
  }

  createNewTerritory() {
    var territory: Territory = {
      name: '',
      state: '',
      proclaimer: ''
    };

    // By default, a newly-created territory will have the selected state.
    this.selectTerritory(territory);
  }

  deleteTerritory = (territoryId: String) => {
    var idx = this.getIndexOfTerritory(territoryId);
    if (idx !== -1) {
      this.territories.splice(idx, 1);
      this.selectTerritory(null);
    }
    return this.territories;
  }

  addTerritory = (territory: Territory) => {
    this.territories.push(territory);
    this.selectTerritory(territory);
    return this.territories;
  }

  updateTerritory = (territory: Territory) => {
    var idx = this.getIndexOfTerritory(territory._id);
    if (idx !== -1) {
      this.territories[idx] = territory;
      this.selectTerritory(territory);
    }
    return this.territories;
  }
}
