import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-servcice';
import { Character } from '../../Models/character';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header-component/header-component';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, RouterLink],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css',
})
export class EditPage implements OnInit {

  character: Character | null = null;
  form: FormGroup;

  nombre: FormControl;
  especie: FormControl;
  rol: FormControl;
  personalidad: FormControl;
  tiempo_en_pantalla_s: FormControl;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.nombre = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]);

    this.especie = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.rol = new FormControl('', [
      Validators.required
    ]);

    this.personalidad = new FormControl('', [
      Validators.required
    ]);

    this.tiempo_en_pantalla_s = new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]);

    this.form = new FormGroup({
      nombre: this.nombre,
      especie: this.especie,
      rol: this.rol,
      personalidad: this.personalidad,
      tiempo_en_pantalla_s: this.tiempo_en_pantalla_s
    });
  }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('index');
    if (index) {
      this.apiService.getCharacterById(index).subscribe({
        next: (resp: Character) => {
          this.character = resp;
          // Rellena el formulario con los datos actuales del personaje
          this.form.patchValue({
            nombre: resp.nombre,
            especie: resp.especie,
            rol: resp.rol,
            personalidad: resp.personalidad,
            tiempo_en_pantalla_s: resp.tiempo_en_pantalla_s
          });
          this.cdr.detectChanges();
        },
        error: (e: any) => console.log('Error GET:', e)
      });
    }
  }

  enviar(): void {
    if (this.form.valid && this.character) {
      const updatedCharacter = this.form.value;
      this.apiService.putCharacter(this.character.id, updatedCharacter).subscribe({
        next: () => {
          this.router.navigate(['/list-page']);
        },
        error: (e: any) => console.log('Error PUT:', e)
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/character-details', this.character?.id]);
  }
}