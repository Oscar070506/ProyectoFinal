import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api-servcice';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-character-component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-character-component.html',
  styleUrl: './add-character-component.css',
})
export class AddCharacterComponent {
  form: FormGroup;

  nombre: FormControl;
  especie: FormControl;
  rol: FormControl;
  personalidad: FormControl;
  tiempo_en_pantalla_s: FormControl;

  constructor(private apiService: ApiService) {

    // Se crea un formulario con distintas validaciones para cada campo
    this.nombre = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.especie = new FormControl('', [
      Validators.required
    ]);

    this.rol = new FormControl('', [
      Validators.required
    ]);

    this.personalidad = new FormControl('', [
      Validators.required
    ]);

    this.tiempo_en_pantalla_s = new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]);

    this.form = new FormGroup({
      nombre: this.nombre,
      especie: this.especie,
      rol: this.rol,
      personalidad: this.personalidad,
      tiempo_en_pantalla_s: this.tiempo_en_pantalla_s
    });
  }

  enviar() {
    console.log('Personaje creado');

    if (this.form.valid) {
      const newPersonaje = this.form.value;
      
      console.log(newPersonaje);
      this.form.reset();
    }
  }
}