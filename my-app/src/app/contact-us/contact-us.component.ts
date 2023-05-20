import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  onSubmit() {
    this.http
      .post('http://localhost:4000/api/v1/create',this.profileForm.value)
      .subscribe((data) => {
        console.warn('suscribewala', data)
      });
  }
}
