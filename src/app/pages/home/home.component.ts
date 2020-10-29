import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alumnos = [];
  doc;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    //this.afs.collection('lab4').doc('utn').collection('alumnos');
    //es lo mismo que
    //this.afs.collection('lab4/utn/alumnos');
    const doc1 = this.afs.collection('lab4').doc('utn').collection('alumnos');
    const doc2 = this.afs.collection('lab4').doc('utn').collection('alumnos').doc('xmAr0Iq9A3dCkZOfdvL5');
    this.doc=doc2;
    //doc1.add({nombre:'insertado'})
    doc1.valueChanges().subscribe(data => {
      this.alumnos=data;
    });

    //where query
    //SELECT * FROM alumnos WHERE nombre = jorge
    const doc3 = this.afs.collection('lab4/utn/alumnos', ref => ref.where("nombre", "==", "jorge"));
    console.log(doc3);
  }


  modificar()
  {
    this.doc.update({nombre:'jorge'});
  }
}
