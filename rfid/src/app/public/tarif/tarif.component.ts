import { Component, OnInit } from '@angular/core';
import { AbonnementsService } from 'src/app/_services/abonnements.service';
import { TypeAbnmt } from 'src/app/models/type-abnmt';
import { fakeAbnmt } from 'src/assets/fake_typeAbnmt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent implements OnInit {
  abonnement: any[];
  typeAbnmt: TypeAbnmt[];


  constructor(private abonnementService: AbonnementsService, private router: Router) { }

  ngOnInit() {
    this.typeAbnmt = fakeAbnmt;
  }

  // userAbonnement() {
  //   this.router.navigate(['login']);
  // }

}
