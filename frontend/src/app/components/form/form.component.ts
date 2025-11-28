import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleList } from '../../models/Vehicle';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<VehicleList>();
  vehicleForm!: FormGroup;

  ngOnInit(): void {
    this.vehicleForm = new FormGroup({
      id: new FormControl(0),
      modelo: new FormControl(''),
      placa: new FormControl(''),
      chassi: new FormControl(''),
      ano: new FormControl(''),
      renavam: new FormControl(''),
      marca: new FormControl('')
    });
  }

  submit() {
    this.onSubmit.emit(this.vehicleForm.value);
  }

}
