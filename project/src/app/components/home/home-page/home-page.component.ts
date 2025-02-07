import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from '../content-list/content-list.component'; // Importamos ContentList
import { ReservationsService, Haircut } from '../../../services/reservations.service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeroSectionComponent, CommonModule, ContentListComponent], // Incluimos ContentListComponent
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  popularHaircuts: Haircut[] = [];
  allHaircuts: Haircut[] = [];

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
   
    this.allHaircuts = this.reservationsService.getRandomHaircuts(6); // Obtener todos los datos
  }
}
