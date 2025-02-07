import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule

@Component({
  selector: 'app-quick-action-form',
  templateUrl: './quick-action-form.component.html',
  styleUrls: ['./quick-action-form.component.css'],
  standalone: true, // Especificamos que el componente es standalone
  imports: [FormsModule], // Aquí importamos FormsModule
})
export class QuickActionFormComponent {
  reserva = {
    fecha: '',
    hora: '',
    numeroPersonas: 1,
  };

  onSubmit() {
    console.log('Reserva realizada:', this.reserva);
    alert(
      `Reserva realizada con éxito:\nFecha: ${this.reserva.fecha}\nHora: ${this.reserva.hora}\nNúmero de personas: ${this.reserva.numeroPersonas}`
    );
    // Aquí puedes integrar el servicio para guardar los datos
  }
}
