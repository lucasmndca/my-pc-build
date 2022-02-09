import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Cpu from 'src/app/interfaces/cpu.interface';
import { CpuService } from 'src/app/services/cpu.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.css']
})
export class CpusComponent implements OnInit {
  cpuList: Observable<Cpu[]>;

  constructor(private service: CpuService) { }

  ngOnInit(): void {
    this.updateCpuList();
  }

  saveCpu(newCpu: Cpu): void {
    this.service
      .save(newCpu)
      .subscribe({
        next: (msg) => console.log(msg),
        error: (e) => console.error(e),
        complete: () => this.updateCpuList()
      });
  }

  updateCpuList(): void {
    this.cpuList = this.service.getAll();
  }

  deleteCpu(id: number): void {
    this.service
      .delete(id)
      .subscribe({
        next: (msg) => console.log(msg),
        error: (e) => console.error(e),
        complete: () => this.updateCpuList()
      });
  }

}
