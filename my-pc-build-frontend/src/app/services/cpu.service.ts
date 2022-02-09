import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, take } from 'rxjs';
import Cpu from '../interfaces/cpu.interface';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private readonly api: string = 'http://localhost:8080';

  constructor(private $http: HttpClient) { }

  getAll(): Observable<Cpu[]> {
    return this.$http.get<Cpu[]>(`${this.api}/cpu`);
  }

  save(cpu: Cpu): Observable<string> {
    return this.$http.post(`${this.api}/cpu/add`, cpu, { responseType: 'text' }).pipe(take(1));
  }

  delete(id: number): Observable<string> {
    return this.$http.delete(`${this.api}/cpu/delete?id=${id}`, { responseType: 'text' }).pipe(take(1));
  }
}
