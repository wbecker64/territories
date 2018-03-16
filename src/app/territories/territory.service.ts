import { Injectable } from '@angular/core';
import { Territory } from './territory';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TerritoryService {
    private territoriesUrl = '/api/territories';

    constructor (private http: Http) {}

    // get("/api/territories")
    getTerritories(): Promise<void | Territory[]> {
      return this.http.get(this.territoriesUrl)
                 .toPromise()
                 .then(response => response.json() as Territory[])
                 .catch(this.handleError);
    }

    // post("/api/territories")
    createTerritory(newTerritory: Territory): Promise<void | Territory> {
      return this.http.post(this.territoriesUrl, newTerritory)
                 .toPromise()
                 .then(response => response.json() as Territory)
                 .catch(this.handleError);
    }

    // get("/api/territories/:id") endpoint not used by Angular app

    // delete("/api/territories/:id")
    deleteTerritory(delTerritoryId: String): Promise<void | String> {
      return this.http.delete(this.territoriesUrl + '/' + delTerritoryId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/territories/:id")
    updateTerritory(putTerritory: Territory): Promise<void | Territory> {
      var putUrl = this.territoriesUrl + '/' + putTerritory._id;
      return this.http.put(putUrl, putTerritory)
                 .toPromise()
                 .then(response => response.json() as Territory)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
