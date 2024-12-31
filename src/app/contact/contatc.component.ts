import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contatc',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './contatc.component.html',
  styleUrl: './contatc.component.css'
})
export class ContatcComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http:HttpClient){}

  onSubmit() {
    this.http.post('http://localhost:3001/contact', this.contact)
      .subscribe({
        next: (response: any) => {
          alert('Thank you for contacting us!');
          this.contact = { name: '', email: '', message: '' }; // Reset form
        },
        error: (error) => {
          console.error('Error details:', error);
          alert('Something went wrong. Please try again later.');
        }
      });
  }

}

