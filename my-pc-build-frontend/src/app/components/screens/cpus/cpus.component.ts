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
    this.cpuList = this.service.getAll();
  }

}
