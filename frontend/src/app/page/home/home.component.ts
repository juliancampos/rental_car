import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleList } from '../../models/Vehicle';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  vehicles: VehicleList[] = [];
  vehiclesDefault: VehicleList[] = [];
  
  constructor(private vehicleService: VehicleService){}
  
  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(response => {
      this.vehicles = response.data;
      this.vehiclesDefault = response.data;
    })
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    if (!value) {
      this.vehicles = this.vehiclesDefault;
      return;
    }

    this.vehicles = this.vehiclesDefault.filter(vehicle => {
      return vehicle.modelo.toLocaleLowerCase().includes(value); 
    })
  }

  delete(id: number| undefined) {
    this.vehicleService.deletVehicle(id).subscribe(response => {
      window.location.reload();
    })
  }
}
