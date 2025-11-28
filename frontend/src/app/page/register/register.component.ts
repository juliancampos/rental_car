import { Component } from '@angular/core';

import { FormComponent } from "../../components/form/form.component";
import { VehicleService } from '../../services/vehicle.service';
import { VehicleList } from '../../models/Vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private vehicleService: VehicleService, private router: Router) {}

  createVehicle(vehicle: VehicleList) {
    this.vehicleService.postVehicle(vehicle).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
