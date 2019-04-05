import { Component, OnInit } from '@angular/core';
import { fakeTypeCours } from 'src/assets/fake_typecours';
import { TypeCours } from 'src/app/models/TypeCours';
import { AbonnementsService } from 'src/app/_services/abonnements.service';

@Component({
  selector: 'app-courslist',
  templateUrl: './courslist.component.html',
  styleUrls: ['./courslist.component.scss']
})
export class CourslistComponent implements OnInit {
  typeCours: TypeCours[];
  constructor(private abonnementService: AbonnementsService) { }

  ngOnInit() {
    this.abonnementService.getAbonnement().subscribe(response => {
      this.typeCours = response;
      console.log(this.typeCours);

    }, err => {
      console.log(err);
    });

    // this.typeCours=fakeTypeCours;
  }
more(q){

}

}
