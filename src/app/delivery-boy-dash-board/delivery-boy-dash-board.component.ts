import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-delivery-boy-dash-board',
  templateUrl: './delivery-boy-dash-board.component.html',
  styleUrls: ['./delivery-boy-dash-board.component.css']
})
export class DeliveryBoyDashBoardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : DonationService
  ) { }

  deliveryBoy : any[]
  username : string
  deliveryRoute : any
  deliveryBoyLogs : any


  ngOnInit() {
    this.username = sessionStorage.getItem('username');

    console.log(this.username)
    this.service.fetchDeliveryBoyProfile(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryBoy=data;})
    
    console.log(this.username)
    this.service.fetchDeliveryBoyLogs(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryBoyLogs=data;})
  }

  fetchRoute(){
    console.log(this.username)
    this.service.fetchDeliveryBoyRoute(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryRoute=data;})
  }
}
