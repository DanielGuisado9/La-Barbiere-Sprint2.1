import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule
import { QuickActionFormComponent } from '../quick-action-form/quick-action-form.component';
import { ServiceListComponent } from '../service-list/service-list.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { AvailabilityCalendarComponent } from '../availability-calendar/availability-calendar.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  standalone: true, // Especificamos que el componente es standalone
  imports: [FormsModule, QuickActionFormComponent, ServiceListComponent, NavbarComponent, FooterComponent, AvailabilityCalendarComponent], // Aquí importamos FormsModule
})
export class ReservaComponent {
  // Atributos para manejar los datos del formulario
  reservationData = {
    fecha: '',
    hora: '',
    numeroPersonas: 1,
  };

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevenir comportamiento por defecto del formulario
    console.log('Reserva realizada:', this.reservationData);
    alert(
      `Reserva confirmada:\nFecha: ${this.reservationData.fecha}\nHora: ${this.reservationData.hora}\nNúmero de personas: ${this.reservationData.numeroPersonas}`
    );
  }
}
