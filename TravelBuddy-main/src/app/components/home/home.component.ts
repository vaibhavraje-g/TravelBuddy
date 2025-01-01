import { Component, OnInit } from '@angular/core';
import { TrekkingService } from '../../shared/services/trekking/trekking.service';
import { CampingService } from '../../shared/services/camping/camping.service';
import { AdventureService } from '../../shared/services/adventure/adventure.service';
import { BackpackingService } from '../../shared/services/backpacking/backpacking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  treks: any[] = [];
  camps: any[] = [];
  adventures: any[] = [];
  backpacks: any[] = [];

  constructor(
    private trekkingService: TrekkingService,
    private campingService: CampingService,
    private adventureService: AdventureService,
    private backpackingService: BackpackingService
  ) {}

  ngOnInit(): void {
    this.loadTrekkingEvents();
    this.loadCampingEvents();
    this.loadAdventureEvents();
    this.loadBackpackingEvents();
  }

  private loadTrekkingEvents(): void {
    this.trekkingService.getAllTreks().subscribe(
      (data: any[]) => (this.treks = data),
      (error) => console.error('Error fetching trekking events:', error)
    );
  }

  private loadCampingEvents(): void {
    this.campingService.getAllCamps().subscribe(
      (data: any[]) => (this.camps = data),
      (error) => console.error('Error fetching camping events:', error)
    );
  }

  private loadAdventureEvents(): void {
    this.adventureService.getAllAdventure().subscribe(
      (data: any[]) => (this.adventures = data),
      (error) => console.error('Error fetching adventure events:', error)
    );
  }

  private loadBackpackingEvents(): void {
    this.backpackingService.getAllBackpacks().subscribe(
      (data: any[]) => (this.backpacks = data),
      (error) => console.error('Error fetching backpacking events:', error)
    );
  }
}
