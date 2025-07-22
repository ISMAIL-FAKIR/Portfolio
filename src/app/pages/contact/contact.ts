import { Component } from '@angular/core';
import { NgForm, NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  successMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const endpoint = 'https://formspree.io/f/mjkoyrba'; 
    this.http.post(endpoint, this.formData).subscribe({
      next: () => {
        this.successMessage = 'Message envoyé avec succès !';
        this.formData = { name: '', email: '', message: '' };
      },
      error: () => {
        this.successMessage = 'Erreur lors de l’envoi. Réessayez.';
      }
    });
  }
}
