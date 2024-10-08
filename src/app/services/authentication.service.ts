import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  login(user: string, password: string): boolean {
    console.log('Autenticando usuário...');
    // Simulando autenticação
    return user === 'admin' && password === 'admin';
  }
}
