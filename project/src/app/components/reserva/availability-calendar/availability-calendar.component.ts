import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './availability-calendar.component.html',
  styleUrls: ['./availability-calendar.component.css'],
})
export class AvailabilityCalendarComponent {
  selectedDate: Date | null = null;
  selectedTime: string | null = null; // Para almacenar la hora seleccionada

  // Horarios dinámicos
  get availableTimes(): string[] {
    if (!this.selectedDate) return [];
    return this.generateTimeSlots(9, 21); // Genera horarios de 9:00 a 21:00
  }

  // Generar horarios dinámicamente
  private generateTimeSlots(startHour: number, endHour: number): string[] {
    const slots: string[] = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`);
    }
    return slots;
  }

  // Método para seleccionar una hora
  selectTime(time: string): void {
    this.selectedTime = time;
    console.log(`Hora seleccionada: ${time}`);
  }
}

