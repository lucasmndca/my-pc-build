import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Cpu from '../interfaces/cpu.interface';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  constructor(private $http: HttpClient) { }

  getAll(): Observable<Cpu[]> {
    return this.$http.get<Cpu[]>('http://localhost:8080/cpu');
  }
}
