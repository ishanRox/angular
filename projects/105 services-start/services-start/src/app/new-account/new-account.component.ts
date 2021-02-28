import { Component, EventEmitter, Output } from '@angular/core';
import { LogggingService } from '../login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    //stupid way or using a service
    const service = new LogggingService();
    service.logStatusChange(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus);

  }
}
