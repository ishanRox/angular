import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LogggingService } from '../login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();


  constructor(private loggingService: LogggingService,
    private accountService: AccountService) {

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    //other than emiting and making other to detect it 
    //we our self add data toa service

    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

  }
}
