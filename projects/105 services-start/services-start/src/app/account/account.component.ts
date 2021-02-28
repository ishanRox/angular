import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LogggingService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogggingService]
})
export class AccountComponent {
  //we still need input because we still reciving data from outside
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private loggingService: LogggingService, private accountService: AccountService) {

  }
  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
