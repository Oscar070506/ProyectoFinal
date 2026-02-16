import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Character } from '../../Models/character';
import { CommonModule } from '@angular/common';
import { AddCharacterComponent } from "../add-character-component/add-character-component";
@Component({
  selector: 'app-edit-character-component',
  imports: [CommonModule, ReactiveFormsModule, AddCharacterComponent],
  templateUrl: './edit-character-component.html',
  styleUrl: './edit-character-component.css',
})
export class EditCharacterComponent {

  // El componente hijo recibe un usuario del componente padre
  @Input() character!: Character;

  // Se emite un evento cuando el usuario pulsa "actualizar" o "cancelar"
  @Output() onUpdate = new EventEmitter<Character>();
  @Output() onCancel = new EventEmitter<void>();

  form!: FormGroup;

  ngOnInit() {
    // Formulario con los datos del usuario recibido
    this.form = new FormGroup({
      name: new FormControl(this.character.nombre, [
        Validators.required,
        ]
      ),
      species: new FormControl(this.character.especie, [
        Validators.required
        ]
      ),
      rol: new FormControl(this.character.rol, [
        Validators.required
        ]
      ),
      personality: new FormControl(this.character.personalidad, [
        Validators.required] 
      ),
      screen_time: new FormControl(this.character.tiempo_en_pantalla_s, [
        Validators.required]
      )
    });
  }

  get name() {
    return this.form.get('name')!;
  }

  get species() {
    return this.form.get('species')!;
  }

  get rol() {
    return this.form.get('rol')!;
  }

  get personality() {
    return this.form.get('personality')!;
  }

  get screen_time() {
    return this.form.get('screen_time')!;
  }


  // Emitir evento de actualización al padre
  actualizarUsuario() {
    if (this.form.valid) {
      this.onUpdate.emit(this.form.value);
    }
  }

  // Emitir evento de cancelación al padre
  cancelar() {
    this.onCancel.emit();
  }
}

