import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreateStatus: string = 'No Server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreateStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
