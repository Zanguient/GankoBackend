import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { MeadowAlarm } from '../../../shared/models/meadowAlarm.model';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.scss']
})
export class AddAlertComponent implements OnInit {

  alertMeadow: MeadowAlarm = new MeadowAlarm();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {}

}
