"use strict";(self.webpackChunklive_lcti=self.webpackChunklive_lcti||[]).push([[734],{5734:(O,f,a)=>{a.r(f),a.d(f,{OutilsModule:()=>I});var d=a(9808),h=a(6466),e=a(1223);let b=(()=>{class n{constructor(){}revenirArriere(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-informations"]],decls:70,vars:0,consts:[[1,"d-flex","flex-row","mb-3","align-items-center","justify-content-between"],[1,"align-self-center","me-2",2,"color","#122F62","font-weight","bold",3,"click"],["src","../assets/fleche.svg","alt","","width","18","height","18","display","flex"],[1,"ms-2"],[1,"h3"],[1,"h3","text-center","mx-5"],["id","dataControle",1,"container"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],[1,"list-group","list-group-flush"],[1,"list-group-item"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e.NdJ("click",function(){return i.revenirArriere()}),e._UZ(2,"img",2),e.TgZ(3,"U",3),e._uU(4,"Revenir en arri\xe8re"),e.qZA()(),e.TgZ(5,"p",4),e._uU(6," Consultation des informations "),e.qZA(),e._UZ(7,"span",5),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"p",4),e._uU(12,"Informations REI :"),e.qZA()(),e.TgZ(13,"div",7)(14,"ul",9)(15,"li",10),e._uU(16," Siren : 882313042 "),e.qZA(),e.TgZ(17,"li",10),e._uU(18," Denomination : LS TRAVAUX "),e.qZA(),e.TgZ(19,"li",10),e._uU(20," Code Naf : 4399C - MACONNERIE GENERALE, GROS \u0152UVRE DE BAT "),e.qZA(),e.TgZ(21,"li",10),e._uU(22," Date de cr\xe9ation : 03/03/2020 "),e.qZA(),e.TgZ(23,"li",10),e._uU(24," Date de d\xe9but d'activit\xe9 : 03/03/2020 "),e.qZA(),e.TgZ(25,"li",10),e._uU(26," Libelle de voie : ZA MOULIN DES LANDES "),e.qZA(),e.TgZ(27,"li",10),e._uU(28," Siren : 882313042 "),e.qZA(),e.TgZ(29,"li",10),e._uU(30," Urssaf comp\xe9tente : 527 "),e.qZA(),e.TgZ(31,"li",10),e._uU(32," Code Postal : 49480 "),e.qZA(),e.TgZ(33,"li",10),e._uU(34," Libell\xe9 commune : VERRIERES EN ANJOU "),e.qZA(),e.TgZ(35,"li",10),e._uU(36," Date de fin d'activit\xe9 : "),e.qZA(),e.TgZ(37,"li",10),e._uU(38," Qualit\xe9 Dirigeant : Pr\xe9sident de SAS "),e.qZA(),e.TgZ(39,"li",10),e._uU(40," Nom patronymique : AYKUL "),e.qZA(),e.TgZ(41,"li",10),e._uU(42," Pr\xe9noms patronymiques : ABDULKERIM "),e.qZA(),e.TgZ(43,"li",10),e._uU(44," Date de naissance : 03/09/2,,, "),e.qZA(),e.TgZ(45,"li",10),e._uU(46," Lieu de naissance : 99202 "),e.qZA(),e.TgZ(47,"li",10),e._uU(48," Titre : SAS "),e.qZA()()(),e.TgZ(49,"div",8)(50,"p",4),e._uU(51,"Informations DPAE :"),e.qZA()(),e.TgZ(52,"div",7)(53,"ul",9)(54,"li",10),e._uU(55," Siret : 88231304200013 "),e.qZA(),e.TgZ(56,"li",10),e._uU(57," Nom : CERBAS "),e.qZA(),e.TgZ(58,"li",10),e._uU(59," Pr\xe9nom : AHMET "),e.qZA(),e.TgZ(60,"li",10),e._uU(61," Date de naissance : 06/05/1967 "),e.qZA(),e.TgZ(62,"li",10),e._uU(63," Date d'embauche : 16/03/2020 "),e.qZA(),e.TgZ(64,"li",10),e._uU(65," Heure d'embauche : 08:00:00 "),e.qZA(),e.TgZ(66,"li",10),e._uU(67," Date de d\xe9claration : 17/03/2020 "),e.qZA(),e.TgZ(68,"li",10),e._uU(69," Heure de d\xe9claration : 11:48:21 "),e.qZA()()()()())},encapsulation:2}),n})(),Z=(()=>{class n{constructor(){}enregistrerNotes(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-nav-outils"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},directives:[h.lC],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();var r=a(2382),p=a(9026),g=a(9530),v=a(6470),_=a(2914),N=a(9010);function y(n,l){if(1&n&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nom)}}let T=(()=>{class n{constructor(t,i,o,s,c,u,m){this.outilsService=t,this.modalService=i,this.fb=o,this.router=s,this.dataService=c,this.entrepriseService=u,this.controleService=m,this.allNotes=[],this.allNoms=[],this.note={heure:"",note:"",type:"",id:"",titre:"",nom:""},this.mesNoms=[],this.monFormulaire=this.fb.group({titre_note:["",[r.kI.required]],note:["",[r.kI.required]],nom:["",[r.kI.required]],heure:["",[r.kI.required]]})}changeNom(){console.log("changeNom called"),console.log(this.monFormulaire.controls.nom.value),this.note.id=this.monFormulaire.controls.nom.value,this.allNoms.forEach(t=>{if(t.id==this.monFormulaire.controls.nom.value){this.note.nom=t.nom;const o=this.note.nom.split(" - ");this.note.type=o[0]}})}createNoteById(t){console.log("CreateNoteByID called",t),"evenement"==t.type?this.outilsService.getControleById(t.id).subscribe(i=>{i.notesCont.push(t),console.log("edited controle with note",i),this.outilsService.editerControle(i).subscribe(o=>{console.log("controle enregistr\xe9",o),this.controleService.setControle(o),this.modalService.close("succes")})}):"entreprise"==t.type?this.outilsService.getEntrepriseById(t.id).subscribe(i=>{i.notes_outils.push(t),console.log("edited Ent with note",i),this.outilsService.editerEntreprise(i).subscribe(o=>{console.log("Entreprise enregistr\xe9",o),this.entrepriseService.setEntreprise(o),this.modalService.close("succes")})}):"individu"==t.type&&(console.log("tESTS 1ST IF INDIVIDU"),this.outilsService.getIndividuById(t.id).subscribe(i=>{i.notesInd.push(t),console.log("edited Ind with note",i),this.outilsService.editerIndividu(i).subscribe(o=>{console.log("ind enregistr\xe9",o),this.dataService.setIndividu(o),this.modalService.close("succes")})}))}enregistrer(){console.log("enregistrer called"),this.note.heure=this.obtenirHeure(new Date),this.createNoteById(this.note)}efffacerNote(){this.monFormulaire.controls.note.setValue(""),this.changeVal()}changeVal(){this.note.titre=this.monFormulaire.value.titre_note,this.note.note=this.monFormulaire.value.note}obtenirHeure(t){return[[t.getHours().toString().padStart(2,"0"),t.getMinutes().toString().padStart(2,"0")].join(":"),[t.getDate().toString().padStart(2,"0"),(t.getMonth()+1).toString().padStart(2,"0"),t.getFullYear()].join("-")].join(" ")}ngOnInit(){if(this.allNotes=this.outilsService.getAllNotes(),this.allNoms=this.outilsService.getAllNoms(),this.outilsService.getNewNote()){if(console.log("Init route",this.outilsService.getRoute()),console.log("OnInit modale new Type",this.outilsService.getType()),"evenement"==this.outilsService.getType()){let t;console.log("assignation contrl"),t=this.outilsService.getControle(),this.note.id=t.id,this.note.type="evenement",this.note.nom=this.note.type.concat(" - ",t.nomControle),this.monFormulaire.controls.nom.setValue(this.note.nom)}else if("entreprise"==this.outilsService.getType()){let t;console.log("assignation ent"),t=this.outilsService.getEntreprise(),this.note.id=t.id,this.note.type="entreprise",this.note.nom=this.note.type.concat(" - ",t.denomination),this.monFormulaire.controls.nom.setValue(this.note.nom)}else if("individu"==this.outilsService.getType()){let t;console.log("assignation ind"),console.log(this.outilsService.getIndividu()),t=this.outilsService.getIndividu(),console.log("id",t.id),this.note.id=t.id.toString(),this.note.type="individu",this.note.nom=this.note.type.concat(" - ",t.nom.concat(" ",t.prenom)),this.monFormulaire.controls.nom.setValue(this.note.nom)}}else if("evenement"==this.outilsService.getType()){let t;t=this.outilsService.getControle(),this.monFormulaire.controls.nom.setValue(t.etat),this.note.id=t.id,this.note.type="evenement"}else if("entreprise"==this.outilsService.getType()){let t;t=this.outilsService.getEntreprise(),this.monFormulaire.controls.nom.setValue(t.denomination),this.note.id=t.id,this.note.type="evenement"}else if("individu"==this.outilsService.getType()){let t;console.log(this.outilsService.getIndividu()),t=this.outilsService.getIndividu(),console.log("id",t.id),this.monFormulaire.controls.nom.setValue(t.nom.concat(" ",t.prenom)),this.note.id=t.id.toString(),this.note.type="evenement"}console.log("url router",this.router.url)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.x),e.Y36(g.Kz),e.Y36(r.qu),e.Y36(h.F0),e.Y36(v.D),e.Y36(_.H),e.Y36(N.G))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-note"]],decls:35,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["autocomplete","off",1,"row","g-1",3,"formGroup"],[1,"h5","col-lg-5","mt-4","mb-2","px-4","text-end",2,"color","#1D458C"],["for","floatingInputnom"],[1,"col-lg-7","mt-4","mb-2","px-4",2,"font-weight","bold"],[1,"col-lg-12","mt-4","mb-2","px-4"],[1,"form-floating"],["formControlName","nom","id","floatingInputnom",1,"form-select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-12","my-2","px-4"],["type","text","formControlName","titre_note","id","floatingInputtitre","placeholder","Titre de ma note",1,"form-control",3,"change"],["for","floatingInputtitre"],[1,"col-lg-12","mt-2","px-4"],["placeholder","\xc9crivez vos annotations ici","rows","5","formControlName","note",1,"form-control","mb-4",2,"border","1px solid #7AEEF4 !important",3,"change"],[1,"d-flex","flex-row"],[1,"col-lg","mb-4"],[1,"d-grid"],["type","button",1,"btn","btn-outline-danger","ms-4","me-2",3,"click"],["type","button",1,"btn","btn-info","ms-2","me-4",3,"click"],["src","../assets/enregistrer.svg","alt","","width","20","height","20","display","flex",1,"me-2"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2," Prise de notes "),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.modalService.dismiss("Cross click")}),e.qZA()(),e.TgZ(4,"form",3)(5,"div",4)(6,"label",5),e._uU(7,"Nouvelle note pour :"),e.qZA()(),e.TgZ(8,"div",6)(9,"label",5),e._uU(10),e.qZA()(),e.TgZ(11,"div",7)(12,"div",8)(13,"select",9),e.NdJ("change",function(){return i.changeNom()}),e._UZ(14,"option",10),e.YNc(15,y,2,2,"option",11),e.qZA(),e.TgZ(16,"label",5),e._uU(17,"Modifier l'affectation de la note ? "),e.qZA()()(),e.TgZ(18,"div",12)(19,"div",8)(20,"input",13),e.NdJ("change",function(){return i.changeVal()}),e.qZA(),e.TgZ(21,"label",14),e._uU(22,"Titre de ma note"),e.qZA()()(),e.TgZ(23,"div",15)(24,"textarea",16),e.NdJ("change",function(){return i.changeVal()}),e.qZA()(),e.TgZ(25,"div",17)(26,"div",18)(27,"div",19)(28,"button",20),e.NdJ("click",function(){return i.efffacerNote()}),e._uU(29," Effacer la note "),e.qZA()()(),e.TgZ(30,"div",18)(31,"div",19)(32,"button",21),e.NdJ("click",function(){return i.enregistrer()}),e._UZ(33,"img",22),e._uU(34," Enregistrer "),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",i.monFormulaire),e.xp6(6),e.Oqu(i.note.nom),e.xp6(5),e.Q6J("ngForOf",i.allNoms))},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,d.sg,r.Fj],encapsulation:2}),n})(),S=(()=>{class n{constructor(t,i,o,s){this.outilsService=t,this.modalService=i,this.fb=o,this.router=s,this.allNotes=[],this.allNoms=[],this.noteOriginal={heure:"",note:"",type:"",id:"",titre:"",nom:""},this.note={heure:"",note:"",type:"",id:"",titre:"",nom:""},this.mesNoms=[],this.monFormulaire=this.fb.group({titre_note:["",[r.kI.required]],note:["",[r.kI.required]],nom:["",[r.kI.required]],heure:["",[r.kI.required]]})}changeNom(){}enregistrer(){console.log("enregistrer called"),"evenement"==this.note.type?(this.outilsService.getControleById(this.note.id).subscribe(t=>{console.log("cont obtenue by id : ",t);let i=0;t.notesCont.forEach(o=>{this.noteOriginal.note==o.note&&(console.log("success ",o),t.notesCont[i]=this.note,this.outilsService.editerControle(t).subscribe(s=>{console.log("controle enregistr\xe9",s),this.modalService.close("succes")})),i+=1})}),this.modalService.close("succes")):"entreprise"==this.note.type?(this.outilsService.getEntrepriseById(this.note.id).subscribe(t=>{let i=0;t.notes_outils.forEach(o=>{this.noteOriginal.note==o.note&&(console.log("success ",o),t.notes_outils[i]=this.note,this.outilsService.editerEntreprise(t).subscribe(s=>{console.log("entreprise enregistr\xe9",s),this.modalService.close("succes")})),i+=1})}),this.modalService.close("succes")):"individu"==this.note.type&&(this.outilsService.getIndividuById(this.note.id).subscribe(t=>{let i=0;t.notesInd.forEach(o=>{this.noteOriginal.note==o.note&&(console.log("success ",o),t.notesInd[i]=this.note,this.outilsService.editerIndividu(t).subscribe(s=>{console.log("INDIVIDU enregistr\xe9",s),this.modalService.close("succes")})),i+=1})}),this.modalService.close("succes"))}efffacerNote(){this.monFormulaire.controls.note.setValue(""),this.changeVal()}changeVal(){this.note.titre=this.monFormulaire.value.titre_note,this.note.note=this.monFormulaire.value.note,this.note.nom=this.note.type.concat(" - ",this.note.titre),this.monFormulaire.controls.nom.setValue(this.note.nom)}obtenirHeure(t){return[[t.getHours().toString().padStart(2,"0"),t.getMinutes().toString().padStart(2,"0")].join(":"),[t.getDate().toString().padStart(2,"0"),(t.getMonth()+1).toString().padStart(2,"0"),t.getFullYear()].join("-")].join(" ")}ngOnInit(){if(this.allNotes=this.outilsService.getAllNotes(),this.allNoms=this.outilsService.getAllNoms(),this.noteOriginal=this.outilsService.getNoteOriginal(),"evenement"==this.outilsService.getType()){let t;t=this.outilsService.getControle(),this.monFormulaire.controls.nom.setValue("evenement".concat(" - ",t.dt_controle)),this.monFormulaire.controls.titre_note.setValue(this.noteOriginal.titre),this.monFormulaire.controls.note.setValue(this.noteOriginal.note),this.note.id=t.id,this.note.type="evenement",this.note.nom=this.noteOriginal.nom,this.note.note=this.noteOriginal.note,this.note.titre=this.noteOriginal.titre,this.note.heure=this.noteOriginal.heure}else if("entreprise"==this.outilsService.getType()){let t;t=this.outilsService.getEntreprise(),this.monFormulaire.controls.nom.setValue("entreprise".concat(" - ",t.denomination)),this.monFormulaire.controls.titre_note.setValue(this.noteOriginal.titre),this.monFormulaire.controls.note.setValue(this.noteOriginal.note),this.note.id=t.id,this.note.type="entreprise",this.note.nom=this.noteOriginal.nom,this.note.note=this.noteOriginal.note,this.note.titre=this.noteOriginal.titre,this.note.heure=this.noteOriginal.heure}else if("individu"==this.outilsService.getType()){let t;console.log("individu dans le servide outils",this.outilsService.getIndividu()),t=this.outilsService.getIndividu(),console.log("id",t.id),this.monFormulaire.controls.nom.setValue("individu".concat(" - ",t.nom," ",t.prenom)),this.monFormulaire.controls.titre_note.setValue(this.noteOriginal.titre),this.monFormulaire.controls.note.setValue(this.noteOriginal.note),this.note.id=t.id.toString(),this.note.type="individu",this.note.nom=this.noteOriginal.nom,this.note.note=this.noteOriginal.note,this.note.titre=this.noteOriginal.titre,this.note.heure=this.noteOriginal.heure}else console.log("Acc\xe8s en dehors de une reference valide"),this.monFormulaire.controls.nom.setValue(this.noteOriginal.nom),this.monFormulaire.controls.titre_note.setValue(this.noteOriginal.titre),this.monFormulaire.controls.note.setValue(this.noteOriginal.note),this.note.id=this.noteOriginal.id,this.note.type=this.noteOriginal.type,this.note.nom=this.noteOriginal.nom,this.note.note=this.noteOriginal.note,this.note.titre=this.noteOriginal.titre,this.note.heure=this.noteOriginal.heure;console.log("url router",this.router.url)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.x),e.Y36(g.Kz),e.Y36(r.qu),e.Y36(h.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-note"]],decls:30,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["autocomplete","off",1,"row","g-1",3,"formGroup"],[1,"h5","col-lg-5","mt-4","mb-2","px-4","text-end",2,"color","#1D458C"],["for","floatingInputnom"],[1,"col-lg-7","mt-4","mb-2","px-4",2,"font-weight","bold"],[1,"col-lg-12","my-2","px-4"],[1,"form-floating"],["type","text","formControlName","titre_note","id","floatingInputtitre","placeholder","Titre de ma note",1,"form-control",3,"change"],["for","floatingInputtitre"],[1,"col-lg-12","mt-2","px-4"],["placeholder","\xc9crivez vos annotations ici","rows","5","formControlName","note",1,"form-control","mb-4",2,"border","1px solid #7AEEF4 !important",3,"change"],[1,"d-flex","flex-row"],[1,"col-lg","mb-4"],[1,"d-grid"],["type","button",1,"btn","btn-outline-danger","ms-4","me-2",3,"click"],["type","button",1,"btn","btn-info","ms-2","me-4",3,"click"],["src","../assets/enregistrer.svg","alt","","width","20","height","20","display","flex",1,"me-2"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2," Prise de notes "),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.modalService.close("Cross click")}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"form",4)(7,"div",5)(8,"label",6),e._uU(9,"R\xe9f\xe9rence note : "),e.qZA()(),e.TgZ(10,"div",7)(11,"label",6),e._uU(12),e.qZA()(),e.TgZ(13,"div",8)(14,"div",9)(15,"input",10),e.NdJ("change",function(){return i.changeVal()}),e.qZA(),e.TgZ(16,"label",11),e._uU(17,"Titre de ma note"),e.qZA()()(),e.TgZ(18,"div",12)(19,"textarea",13),e.NdJ("change",function(){return i.changeVal()}),e.qZA()(),e.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"button",17),e.NdJ("click",function(){return i.efffacerNote()}),e._uU(24," Effacer la note "),e.qZA()()(),e.TgZ(25,"div",15)(26,"div",16)(27,"button",18),e.NdJ("click",function(){return i.enregistrer()}),e._UZ(28,"img",19),e._uU(29," Enregistrer "),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("formGroup",i.monFormulaire),e.xp6(6),e.Oqu(i.note.nom))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u],encapsulation:2}),n})(),A=(()=>{class n{constructor(t){this.activeModal=t}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-delete-note"]],decls:26,vars:0,consts:[[1,"container-fluid","px-0","pb-0",2,"background-color","#FFF4D2"],[1,"modal-header","d-flex","justify-content-end"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"d-flex","flex-column"],[1,"d-flex","flex-row","justify-content-center"],[1,"d-flex","my-3"],["src","../assets/alert.svg","alt","","width","60","height","60","display","flex"],[1,"d-flex","flex-row","justify-content-center","mt-2"],[1,"d-flex"],[1,"h4","mb-3",2,"color","black","text-align","center"],[1,"d-flex","flex-row","justify-content-center","my-4"],[1,"d-flex","p-4"],[1,"col"],[1,"d-grid","mx-2"],["type","button",1,"btn","btn-outline-info",2,"background","white",3,"click"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return i.activeModal.dismiss("Cross click")}),e.TgZ(3,"span",3),e._uU(4,"\xd7"),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6),e._UZ(8,"img",7),e.qZA()(),e.TgZ(9,"div",8)(10,"div",9)(11,"p",10),e._uU(12," Attention, vous allez supprimer cette note de fa\xe7on permanente. "),e.qZA()()(),e.TgZ(13,"div",11)(14,"div",9)(15,"p",10),e._uU(16," Voulez-vous vraiment continuer ? "),e.qZA()()()(),e.TgZ(17,"div",12)(18,"div",13)(19,"div",14)(20,"button",15),e.NdJ("click",function(){return i.activeModal.close("non")}),e._uU(21," Non, annuler"),e.qZA()()(),e.TgZ(22,"div",13)(23,"div",14)(24,"button",16),e.NdJ("click",function(){return i.activeModal.close("oui")}),e._uU(25," Oui, continuer"),e.qZA()()()()())},encapsulation:2}),n})();function C(n,l){if(1&n&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function E(n,l){if(1&n&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function x(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",27)(1,"button",28),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().ouvrirModalPriseNotes(o)}),e.TgZ(2,"div",29)(3,"div",30)(4,"p",31),e._uU(5),e.qZA()()()(),e.TgZ(6,"p",32),e._uU(7),e.qZA(),e.TgZ(8,"p",33),e._uU(9),e.qZA(),e.TgZ(10,"div",34)(11,"button",35),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().ouvrirModalDeleteNotes(o)}),e.TgZ(12,"div",36),e._UZ(13,"img",37),e.qZA()()()()}if(2&n){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.note),e.xp6(2),e.Oqu(t.titre),e.xp6(2),e.Oqu(t.heure)}}function q(n,l){if(1&n&&(e.TgZ(0,"div",25),e.YNc(1,x,14,3,"div",26),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.Q6J("ngIf",t)}}const F=[{path:"",component:Z,children:[{path:"notes",component:(()=>{class n{constructor(t,i,o,s,c,u,m){this.fb=t,this.router=i,this.modalService=o,this.outilsService=s,this.entrepriseService=c,this.dataService=u,this.controleService=m,this.individus=[],this.routeArriere="",this.id_note="",this.allNotes=[],this.allNoms=[],this.mesNotes=[],this.mesNoms=[],this.entreprises=[],this.controles=[],this.types=["Toutes mes notes","evenement","entreprise","individu"],this.monFormulaire=this.fb.group({type_note:["",[r.kI.required]],nom:["",[r.kI.required]]})}revenirArriere(){this.router.navigate([this.routeArriere])}ouvrirModalNouvelleNote(t){this.outilsService.setIdNote(t),this.outilsService.setNewNote(!0),this.modalService.open(T,{size:"lg"}).result.then(o=>{if(console.log("data : ",o),!o||"Cross click"!==o)return o?(console.log("SuccessVar Data :",o),void this.chargerNotes()):void 0;console.log("Obtained Data :",o)})}ouvrirModalPriseNotes(t){this.outilsService.setNoteOriginal(t),this.outilsService.setNewNote(!1),this.modalService.open(S,{size:"lg"}).result.then(o=>{if(console.log("data : ",o),!o||"Cross click"!==o)return o?(console.log("SuccessVar Data :",o),void this.chargerNotes()):void 0;console.log("Obtained Data :",o)})}ouvrirModalDeleteNotes(t){this.outilsService.setNoteOriginal(t),this.outilsService.setNewNote(!1),this.modalService.open(A,{size:"lg"}).result.then(o=>{if(console.log("data : ",o),!o||"Cross click"!==o)return"non"==o?(console.log("Result non"),void this.chargerNotes()):"oui"==o?(console.log("enregistrer called"),"evenement"==t.type&&this.outilsService.getControleById(t.id).subscribe(s=>{console.log("cont obtenue by id : ",s);let c=0;s.notesCont.forEach(u=>{t.note==u.note&&(console.log("success ",u),s.notesCont.splice(c,1),console.log("Deleted note",s),this.outilsService.editerControle(s).subscribe(m=>{console.log("controle enregistr\xe9",m),this.chargerNotes()})),c+=1})}),"entreprise"==t.type&&this.outilsService.getEntrepriseById(t.id).subscribe(s=>{console.log("ent obtenue by id : ",s);let c=0;s.notes_outils.forEach(u=>{t.note==u.note&&(console.log("success ",u),s.notes_outils.splice(c,1),console.log("Deleted note",s),this.outilsService.editerEntreprise(s).subscribe(m=>{console.log("controle enregistr\xe9",m),this.chargerNotes()})),c+=1})}),void("individu"==t.type&&this.outilsService.getIndividuById(t.id).subscribe(s=>{console.log("cont obtenue by id : ",s);let c=0;s.notesInd.forEach(u=>{t.note==u.note&&(console.log("success ",u),s.notesInd.splice(c,1),console.log("Deleted note",s),this.outilsService.editerIndividu(s).subscribe(m=>{console.log("controle enregistr\xe9",m),this.chargerNotes()})),c+=1})}))):void 0;console.log("Obtained Data :",o)})}deleteNote(){}recupNotes(){this.allNotes=[],this.allNoms=[],this.controles.forEach(t=>{const i={id:t.id,nom:"evenement".concat(" - ",t.nomControle)};this.allNoms.push(i),console.log("Entered in controles loop"),t.notesCont&&t.notesCont.forEach(o=>{console.log("Note controle : ",o);let s={heure:"",note:"",type:"",id:"",titre:"",nom:""};s.heure=o.heure,s.note=o.note,s.type="evenement",s.id=o.id,s.titre=o.titre,s.nom=o.nom,this.allNotes.push(s)})}),this.entreprises.forEach(t=>{const i={id:t.id,nom:"entreprise".concat(" - ",t.denomination)};this.allNoms.push(i),console.log("Entered in entreprises loop"),t.notes_outils&&t.notes_outils.forEach(o=>{let s={heure:"",note:"",type:"",id:"",titre:"",nom:""};s.heure=o.heure,s.note=o.note,s.type="entreprise",s.id=t.id,s.titre=o.titre,s.nom=o.nom,this.allNotes.push(s)})}),this.individus.forEach(t=>{const i={id:t.id,nom:"individu".concat(" - ",t.nom," ",t.prenom)};this.allNoms.push(i),t.notesInd&&t.notesInd.forEach(o=>{let s={heure:"",note:"",type:"",id:"",titre:"",nom:""};s.heure=o.heure,s.note=o.note,s.type="individu",s.id=t.id,s.titre=o.titre,s.nom=o.nom,this.allNotes.push(s)})}),console.log("RecupNotes called, result : ",this.allNotes),console.log("All Noms, result : ",this.allNoms),this.outilsService.setAllNotes(this.allNotes),this.outilsService.setAllNoms(this.allNoms)}changeVal(){"Toutes mes notes"==this.monFormulaire.value.type_note?(this.monFormulaire.controls.nom.setValue(""),this.mesNotes=this.allNotes,this.mesNotes.forEach(t=>{this.mesNoms.includes(t.nom)||this.mesNoms.push(t.nom)})):(this.mesNotes=[],this.mesNoms=[],this.monFormulaire.controls.nom.setValue(""),this.allNotes.forEach(t=>{t.type==this.monFormulaire.value.type_note&&(this.mesNotes.push(t),this.mesNoms.includes(t.nom)||this.mesNoms.push(t.nom))})),console.log("changeVal",this.mesNotes),console.log("noms change val",this.mesNoms)}test(){console.log("hello")}changeNom(){if(console.log("debut changeNom",this.monFormulaire.value.nom),console.log(this.monFormulaire.controls.nom.value),""==this.monFormulaire.value.nom)this.changeVal();else{this.mesNotes=[];let t="";this.allNotes.forEach(i=>{i.nom==this.monFormulaire.value.nom&&(this.mesNotes.push(i),t=i.type)}),this.monFormulaire.controls.type_note.setValue(t)}console.log("changeNom",this.mesNotes)}findControles(){}chargerNotes(){this.controleService.getControles().subscribe(t=>{this.controles=t,console.log("controless query",this.controles),this.entrepriseService.getEntreprises().subscribe(i=>{this.entreprises=i,console.log("entreprises query: ",this.entreprises),this.dataService.getIndividus().subscribe(o=>{this.individus=o,console.log("individus query: ",this.individus),this.recupNotes(),this.monFormulaire.controls.type_note.setValue("Toutes mes notes"),this.changeVal()})})})}ngOnInit(){this.routeArriere=this.outilsService.getRoute(),console.log("controless query",this.controles),this.chargerNotes(),this.id_note=this.outilsService.getIdNote()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.qu),e.Y36(h.F0),e.Y36(g.FF),e.Y36(p.x),e.Y36(_.H),e.Y36(v.D),e.Y36(N.G))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-notes"]],decls:33,vars:4,consts:[[1,"d-flex","flex-row","mb-3","align-items-center","justify-content-between"],[1,"align-self-center","me-2",2,"color","#122F62","font-weight","bold",3,"click"],["src","../assets/fleche.svg","alt","","width","18","height","18","display","flex"],[1,"ms-2"],[1,"h3"],[1,"h3","text-center","mx-5"],["autocomplete","off",1,"row","mb-2","g-1",3,"formGroup"],[1,"d-flex","flex-row","justify-content-center","mb-2"],[1,"col-lg-6","mx-1"],[1,"form-floating"],["formControlName","type_note","id","floatingInputtype_note",1,"form-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","floatingInputtype_note"],["formControlName","nom","id","floatingInputnom",1,"form-select",3,"change"],["value",""],["for","floatingInputnom"],[1,"d-flex","flex-row","flex-wrap","justify-content-center"],[1,"card","h-100","border-light","mb-3","ms-3","p-0",2,"width","12rem","height","14rem !important"],[1,"p-0",2,"border-width","0","height","100%",3,"click"],[1,"card-body","d-flex","flex-column","px-0",2,"background-color","#E0FDFF","height","100%"],[1,"d-flex","justify-content-center","mt-3",2,"height","100%"],["src","../assets/notesBleu.svg","alt","img notes-bleu","width","60","height","60"],[1,"card-text","my-1",2,"color","#0D5A5E","text-align","center","font-weight","bold"],["class","d-flex",4,"ngFor","ngForOf"],[3,"value"],[1,"d-flex"],["class","card h-100 justify-content-center mb-3 ms-3 p-0 ","style","width: 12rem; height: 14rem !important",4,"ngIf"],[1,"card","h-100","justify-content-center","mb-3","ms-3","p-0",2,"width","12rem","height","14rem !important"],[1,"btn","btn-light","p-0",2,"border-width","0","height","100%",3,"click"],[1,"card-body","d-flex","flex-column","p-0",2,"height","100%"],[1,"d-flex","justify-content-center","align-items-center",2,"border","1px solid #7AEEF4 !important","height","100%"],[1,"card-text","m-0",2,"font-size","small"],[1,"card-text","m-0",2,"color","#0D5A5E","text-align","center","font-weight","bold"],[1,"card-text","m-0",2,"color","#0D5A5E","text-align","center"],[1,"d-flex","justify-content-center"],[1,"btn","btn-lg","btn-danger","ms-1",3,"click"],[1,"text-center"],["src","../assets/poubelle.svg","alt","","width","20","height","20","display","flex"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e.NdJ("click",function(){return i.revenirArriere()}),e._UZ(2,"img",2),e.TgZ(3,"U",3),e._uU(4,"Revenir en arri\xe8re"),e.qZA()(),e.TgZ(5,"p",4),e._uU(6," Toutes les notes "),e.qZA(),e._UZ(7,"span",5),e.qZA(),e.TgZ(8,"form",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"select",10),e.NdJ("change",function(){return i.changeVal()}),e.YNc(13,C,2,2,"option",11),e._uU(14,"> "),e.qZA(),e.TgZ(15,"label",12),e._uU(16,"Type de note"),e.qZA()()(),e.TgZ(17,"div",8)(18,"div",9)(19,"select",13),e.NdJ("change",function(){return i.changeNom()}),e._UZ(20,"option",14),e.YNc(21,E,2,2,"option",11),e.qZA(),e.TgZ(22,"label",15),e._uU(23,"Nom"),e.qZA()()()()(),e.TgZ(24,"div",16)(25,"div",17)(26,"button",18),e.NdJ("click",function(){return i.ouvrirModalNouvelleNote(i.id_note)}),e.TgZ(27,"div",19)(28,"div",20),e._UZ(29,"img",21),e.qZA(),e.TgZ(30,"p",22),e._uU(31,"PRENDRE UNE NOUVELLE NOTE"),e.qZA()()()(),e.YNc(32,q,2,1,"div",23),e.qZA()),2&t&&(e.xp6(8),e.Q6J("formGroup",i.monFormulaire),e.xp6(5),e.Q6J("ngForOf",i.types),e.xp6(8),e.Q6J("ngForOf",i.mesNoms),e.xp6(11),e.Q6J("ngForOf",i.mesNotes))},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,d.sg,r.YN,r.Kr,d.O5],styles:[".btn-danger[_ngcontent-%COMP%] {\n        width: 32px;\n\t\theight: 32px;\n\t\tpadding: 0px;\n\t\tborder-radius: 80px;\n\t\tfont-size: 15px;\n\t\ttext-align: center;\n        background-color: #FFDDE0;\n    }\n    .card[_ngcontent-%COMP%] {\n        border: 1px solid rgb(254, 254, 254);\n    }\n    .btn-light[_ngcontent-%COMP%] {\n        background-color:white !important;\n    }\n    .btn-light[_ngcontent-%COMP%]:hover {\n        background-color: #E6E9EC !important;\n    }"]}),n})()},{path:"informations",component:b},{path:"**",redirectTo:"notes"}]}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(F)],h.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,U,r.UX,r.u5]]}),n})()}}]);