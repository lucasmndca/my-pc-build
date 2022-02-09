import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import Cpu from 'src/app/interfaces/cpu.interface';

@Component({
  selector: 'app-manage-cpu',
  templateUrl: './manage-cpu.component.html',
  styleUrls: ['./manage-cpu.component.css']
})
export class ManageCpuComponent implements OnInit {

  @Input() cpuList: Observable<Cpu[]>;
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  emitCpuDeleteEvent(id: number): void {
    this.deleteEvent.emit(id);
  }

}
