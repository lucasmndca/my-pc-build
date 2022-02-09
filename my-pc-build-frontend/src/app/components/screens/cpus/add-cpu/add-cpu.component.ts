import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Cpu from 'src/app/interfaces/cpu.interface';

@Component({
  selector: 'app-add-cpu',
  templateUrl: './add-cpu.component.html',
  styleUrls: ['./add-cpu.component.css']
})
export class AddCpuComponent implements OnInit {

  @Output() saved = new EventEmitter();

  newCpu: Cpu = {
    name: '',
    clock: 0,
    cores: 0,
    threads: 0,
    price: 0,
    id: 0
  };

  constructor() { }

  ngOnInit(): void { }

  saveCpu(): void {
    this.saved.emit(this.newCpu);
  }

}
