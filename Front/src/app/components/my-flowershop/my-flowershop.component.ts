import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-my-flowershop',
  templateUrl: './my-flowershop.component.html',
  styleUrls: ['./my-flowershop.component.css']
})
export class MyFlowershopComponent implements OnInit{
  flowershopId: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.flowershopId = this.getOwnerInfo();
    this.getFlowershop();
  }

  getOwnerInfo(): any {
    const token: any = localStorage.getItem('token');
    const tokenDesencripted: any = jwtDecode(token);
    console.log(tokenDesencripted.idFlowershops);
    return tokenDesencripted.idFlowershops;
  }

  getFlowershop(): void {
    this.http.get(`http://localhost:5000/flower-shops/${this.flowershopId}}`).subscribe((data: any) => {
      console.log(data);
    }, error => {
      console.log(error);
    }
    );
  }






}
