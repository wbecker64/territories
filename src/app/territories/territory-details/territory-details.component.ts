import { Component, Input } from '@angular/core';
import { Territory } from '../territory';
import { TerritoryService } from '../territory.service';

@Component({
  selector: 'app-territory-details',
  templateUrl: './territory-details.component.html',
  styleUrls: ['./territory-details.component.css']
})

export class TerritoryDetailsComponent {
  @Input()
  territory: Territory;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private territoryService: TerritoryService) {}

  createTerritory(territory: Territory) {
    this.territoryService.createTerritory(territory).then((newTerritory: Territory) => {
      this.createHandler(newTerritory);
    });
  }

  updateTerritory(territory: Territory): void {
    this.territoryService.updateTerritory(territory).then((updatedTerritory: Territory) => {
      this.updateHandler(updatedTerritory);
    });
  }

  deleteTerritory(territoryId: String): void {
    this.territoryService.deleteTerritory(territoryId).then((deletedTerritoryId: String) => {
      this.deleteHandler(deletedTerritoryId);
    });
  }
}
