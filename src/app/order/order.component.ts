import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  menuItems = [
    {
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish with creamy sauce.',
      price: 120,
      image: 'assets/Back1.jpg',
    },
    {
      name: 'Grilled Chicken Salad',
      description: 'Fresh greens topped with grilled chicken and dressing.',
      price: 150,
      image: 'assets/bg.jpg',
    },
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
      price: 99,
      image: 'assets/burger.jpg',
    },
  ];

  
  cart: any[] = [];
  customerName: string = '';
  email: string = '';

  constructor(private http:HttpClient){}

  addToCart(item: any) {
    this.cart.push(item);
    alert(`${item.name} added to cart!`);
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  checkout() {
    if (!this.customerName || !this.email || this.cart.length === 0) {
      alert('Please provide your details and add items to the cart before checking out.');
      return;
    }

    const orderData = {
      customerName: this.customerName,
      email: this.email,
      items: this.cart,
      totalAmount: this.getTotalPrice(),
    };

    this.http.post('http://localhost:3001/orders', orderData).subscribe(
      (response: any) => {
        alert('Order placed successfully!');
        this.cart = [];
        this.customerName = '';
        this.email = '';
      },
      (error) => {
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again later.');
      }
    );
  }
}