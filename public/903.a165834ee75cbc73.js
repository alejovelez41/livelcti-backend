"use strict";(self.webpackChunklive_lcti=self.webpackChunklive_lcti||[]).push([[903],{6903:(I,m,l)=>{l.r(m),l.d(m,{OutilsModule:()=>U});var c=l(9808),u=l(6466),e=l(1223);let f=(()=>{class i{constructor(){}enregistrerNotes(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-nav-outils"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},directives:[u.lC],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]}),i})();var o=l(2382),p=l(2914),a=l(6470),h=l(9010);function g(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.entreprise.denomination," ")}}function v(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"th",20),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t.heure),e.xp6(2),e.Oqu(t.note)}}const _=function(i){return["/entreprise/societe",i]};let Z=(()=>{class i{constructor(t,n,s,d){this.fb=t,this.entrepriseService=n,this.dataService=s,this.controleService=d,this.entreprises=[],this.monFormulaire=this.fb.group({note:["",[o.kI.required]]})}enregistrer(){console.log("enregistrement Ent called");let t={heure:"",note:""};t.heure=this.obtenirHeure(new Date),t.note=this.monFormulaire.controls.note.value,this.entreprise.notes_outils.push(t),this.entrepriseService.setEntreprise(this.entreprise),this.monFormulaire.controls.note.setValue(""),this.entrepriseService.editerEntreprise(this.entreprise).subscribe(n=>{console.log(n)})}changeVal(){}efffacerNote(){this.monFormulaire.controls.note.setValue("")}obtenirHeure(t){return[[t.getHours().toString().padStart(2,"0"),t.getMinutes().toString().padStart(2,"0")].join(":"),[t.getDate().toString().padStart(2,"0"),(t.getMonth()+1).toString().padStart(2,"0"),t.getFullYear()].join("-")].join(" ")}setEntreprise(t){this.entrepriseService.setEntreprise(t)}ngOnInit(){this.individu=this.dataService.getIndividu(),this.idInd=this.individu?this.individu.id:"",this.entreprises=this.entrepriseService.getSocietes(),this.idEnt=this.individu?this.individu.idEnt:this.entreprise?this.entreprise.id:"",this.entreprise=this.individu?this.entrepriseService.sociteById(this.idEnt):this.entrepriseService.getDataEntreprise(),this.controle=this.controleService.getControle(),this.idCont=this.controle?this.controle.id:"",console.log("boite \xe0 outils",this.controle)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.qu),e.Y36(p.H),e.Y36(a.D),e.Y36(h.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-notes-ent"]],decls:33,vars:6,consts:[[1,"d-flex","flex-row","mb-3","align-items-center","justify-content-between"],[1,"align-self-center","me-2",2,"color","#122F62","font-weight","bold",3,"routerLink"],["src","../assets/fleche.svg","alt","","width","18","height","18","display","flex"],[1,"ms-2"],[1,"h3"],[4,"ngIf"],[1,"h3","text-center","mx-5"],["autocomplete","off",1,"row","g-1",3,"formGroup"],[1,"d-flex","flex-row"],[1,"col-lg","mb-2"],[1,"d-grid"],["type","button",1,"btn","btn-danger","mx-2",3,"click"],["type","button",1,"btn","btn-info","mx-2",3,"click"],[1,"d-flex","flex-row","mb-3","align-items-center"],["placeholder","\xc9crivez vos annotations ici","rows","5","formControlName","note",1,"form-control","mb-4",2,"background-color","#DBE7FF"],[1,"d-flex","flex-column"],[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._UZ(2,"img",2),e.TgZ(3,"U",3),e._uU(4,"Revenir \xe0 la fiche entreprise"),e.qZA()(),e.TgZ(5,"p",4),e._uU(6," Notes sur la societ\xe9 "),e.YNc(7,g,2,1,"span",5),e.qZA(),e._UZ(8,"span",6),e.qZA(),e.TgZ(9,"form",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"button",11),e.NdJ("click",function(){return n.efffacerNote()}),e._uU(14," Effacer ce note "),e.qZA()()(),e.TgZ(15,"div",9)(16,"div",10)(17,"button",12),e.NdJ("click",function(){return n.enregistrer()}),e._uU(18," Enregistrer ce note "),e.qZA()()()(),e.TgZ(19,"div",13)(20,"textarea",14),e._uU(21,"        "),e.qZA()(),e.TgZ(22,"div",15)(23,"div",16)(24,"table",17)(25,"thead")(26,"tr")(27,"th",18),e._uU(28,"Date"),e.qZA(),e.TgZ(29,"th",18),e._uU(30,"Annotation"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,v,5,2,"tr",19),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.VKq(4,_,n.individu.idEnt)),e.xp6(6),e.Q6J("ngIf",n.entreprise.denomination),e.xp6(2),e.Q6J("formGroup",n.monFormulaire),e.xp6(23),e.Q6J("ngForOf",n.entreprise.notes_outils))},directives:[u.yS,c.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg],encapsulation:2}),i})();function b(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.controle.id," ")}}function x(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"th",20),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t.heure),e.xp6(2),e.Oqu(t.note)}}let S=(()=>{class i{constructor(t,n,s,d){this.fb=t,this.entrepriseService=n,this.dataService=s,this.controleService=d,this.entreprises=[],this.monFormulaire=this.fb.group({note:["",[o.kI.required]]})}enregistrer(){console.log("enregistrement Ent called");let t={heure:"",note:""};t.heure=this.obtenirHeure(new Date),t.note=this.monFormulaire.controls.note.value,this.controle.notesCont.push(t),this.controleService.setControle(this.controle),this.monFormulaire.controls.note.setValue(""),this.controleService.editerControle(this.controle).subscribe(n=>{console.log(n)})}efffacerNote(){this.monFormulaire.controls.note.setValue("")}obtenirHeure(t){return[[t.getHours().toString().padStart(2,"0"),t.getMinutes().toString().padStart(2,"0")].join(":"),[t.getDate().toString().padStart(2,"0"),(t.getMonth()+1).toString().padStart(2,"0"),t.getFullYear()].join("-")].join(" ")}ngOnInit(){this.individu=this.dataService.getIndividu(),this.idInd=this.individu?this.individu.id:"",this.entreprises=this.entrepriseService.getSocietes(),this.idEnt=this.individu?this.individu.idEnt:this.entreprise?this.entreprise.id:"",this.entreprise=this.individu?this.entrepriseService.sociteById(this.idEnt):this.entrepriseService.getDataEntreprise(),this.controle=this.controleService.getControle(),this.idCont=this.controle?this.controle.id:"",console.log("boite \xe0 outils",this.controle)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.qu),e.Y36(p.H),e.Y36(a.D),e.Y36(h.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-notes-event"]],decls:33,vars:3,consts:[[1,"d-flex","flex-row","mb-3","align-items-center","justify-content-between"],["routerLink","/dossiers/en-cours",1,"align-self-center","me-2",2,"color","#122F62","font-weight","bold"],["src","../assets/fleche.svg","alt","","width","18","height","18","display","flex"],[1,"ms-2"],[1,"h3"],[4,"ngIf"],[1,"h3","text-center","mx-5"],["autocomplete","off",1,"row","g-1",3,"formGroup"],[1,"d-flex","flex-row"],[1,"col-lg","mb-2"],[1,"d-grid"],["type","button",1,"btn","btn-danger","mx-2",3,"click"],["type","button",1,"btn","btn-info","mx-2",3,"click"],[1,"d-flex","flex-row","mb-3","align-items-center"],["placeholder","\xc9crivez vos annotations ici","rows","5","formControlName","note",1,"form-control","mb-4",2,"background-color","#DBE7FF"],[1,"d-flex","flex-column"],[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._UZ(2,"img",2),e.TgZ(3,"U",3),e._uU(4,"Revenir aux \xe9v\xe8nements"),e.qZA()(),e.TgZ(5,"p",4),e._uU(6," Notes sur l'\xe9v\xe8nement "),e.YNc(7,b,2,1,"span",5),e.qZA(),e._UZ(8,"span",6),e.qZA(),e.TgZ(9,"form",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"button",11),e.NdJ("click",function(){return n.efffacerNote()}),e._uU(14," Effacer ce note "),e.qZA()()(),e.TgZ(15,"div",9)(16,"div",10)(17,"button",12),e.NdJ("click",function(){return n.enregistrer()}),e._uU(18," Enregistrer ce note "),e.qZA()()()(),e.TgZ(19,"div",13)(20,"textarea",14),e._uU(21,"        "),e.qZA()(),e.TgZ(22,"div",15)(23,"div",16)(24,"table",17)(25,"thead")(26,"tr")(27,"th",18),e._uU(28,"Date"),e.qZA(),e.TgZ(29,"th",18),e._uU(30,"Annotation"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,x,5,2,"tr",19),e.qZA()()()()()),2&t&&(e.xp6(7),e.Q6J("ngIf",n.controle.id),e.xp6(2),e.Q6J("formGroup",n.monFormulaire),e.xp6(23),e.Q6J("ngForOf",n.controle.notesCont))},directives:[u.yS,c.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg],encapsulation:2}),i})();function E(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("",t.individu.civilite," ")}}function N(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("",t.individu.nom," ")}}function T(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.individu.prenom)}}function C(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"th",20),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t.heure),e.xp6(2),e.Oqu(t.note)}}const q=function(i){return["/formulaires/description",i]},A=[{path:"",component:f,children:[{path:"notesInd/:id",component:(()=>{class i{constructor(t,n,s,d){this.fb=t,this.entrepriseService=n,this.dataService=s,this.controleService=d,this.entreprises=[],this.monFormulaire=this.fb.group({note:["",[o.kI.required]]})}enregistrer(){console.log("enregistre called");let t={heure:"",note:""};t.heure=this.obtenirHeure(new Date),t.note=this.monFormulaire.controls.note.value,this.individu.notesInd.push(t),this.dataService.setIndividu(this.individu),this.monFormulaire.controls.note.setValue("")}changeVal(){}efffacerNote(){this.monFormulaire.controls.note.setValue("")}obtenirHeure(t){return[[t.getHours().toString().padStart(2,"0"),t.getMinutes().toString().padStart(2,"0")].join(":"),[t.getDate().toString().padStart(2,"0"),(t.getMonth()+1).toString().padStart(2,"0"),t.getFullYear()].join("-")].join(" ")}setEntreprise(t){this.entrepriseService.setEntreprise(t)}ngOnInit(){this.individu=this.dataService.getIndividu(),this.idInd=this.individu?this.individu.id:"",this.entreprises=this.entrepriseService.getSocietes(),this.idEnt=this.individu?this.individu.idEnt:this.entreprise?this.entreprise.id:"",this.entreprise=this.individu?this.entrepriseService.sociteById(this.idEnt):this.entrepriseService.getDataEntreprise(),this.controle=this.controleService.getControle(),this.idCont=this.controle?this.controle.id:"",console.log("boite \xe0 outils",this.controle)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.qu),e.Y36(p.H),e.Y36(a.D),e.Y36(h.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-notes-ind"]],decls:38,vars:11,consts:[[1,"d-flex","flex-row","mb-3","align-items-center","justify-content-between"],[1,"align-self-center","me-2",2,"color","#122F62","font-weight","bold",3,"routerLink"],["src","../assets/fleche.svg","alt","","width","18","height","18","display","flex"],[1,"ms-2"],[1,"h3"],[4,"ngIf"],[1,"h3","text-center","mx-5"],["autocomplete","off",1,"row","g-1",3,"formGroup"],[1,"d-flex","flex-row"],[1,"col-lg","mb-2"],[1,"d-grid"],["type","button",1,"btn","btn-danger","mx-2",3,"click"],["type","button",1,"btn","btn-info","mx-2",3,"click"],[1,"d-flex","flex-row","mb-3","align-items-center"],["placeholder","\xc9crivez vos annotations ici","rows","5","formControlName","note",1,"form-control","mb-4",2,"background-color","#DBE7FF"],[1,"d-flex","flex-column"],[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._UZ(2,"img",2),e.TgZ(3,"U",3),e._uU(4,"Revenir \xe0 l'individu"),e.qZA()(),e.TgZ(5,"p",4),e._uU(6," Notes sur "),e.YNc(7,E,2,1,"span",5),e.YNc(8,N,2,1,"span",5),e.YNc(9,T,2,1,"span",5),e.qZA(),e._UZ(10,"span",6),e.qZA(),e.TgZ(11,"form",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"button",11),e.NdJ("click",function(){return n.efffacerNote()}),e._uU(16," Effacer ce note "),e.qZA()()(),e.TgZ(17,"div",9)(18,"div",10)(19,"button",12),e.NdJ("click",function(){return n.enregistrer()}),e._uU(20," Enregistrer ce note "),e.qZA()()()(),e.TgZ(21,"div",13)(22,"textarea",14),e._uU(23,"        "),e.qZA()(),e.TgZ(24,"div",15)(25,"div",16)(26,"table",17)(27,"thead")(28,"tr")(29,"th",18),e._uU(30,"Date"),e.qZA(),e.TgZ(31,"th",18),e._uU(32,"Annotation"),e.qZA()()(),e.TgZ(33,"tbody"),e.YNc(34,C,5,2,"tr",19),e.qZA()()()()(),e.TgZ(35,"pre"),e._uU(36),e.ALo(37,"json"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.VKq(9,q,n.individu.id)),e.xp6(6),e.Q6J("ngIf",n.individu.civilite),e.xp6(1),e.Q6J("ngIf",n.individu.nom),e.xp6(1),e.Q6J("ngIf",n.individu.prenom),e.xp6(2),e.Q6J("formGroup",n.monFormulaire),e.xp6(23),e.Q6J("ngForOf",n.individu.notesInd),e.xp6(2),e.Oqu(e.lcZ(37,7,n.individu)))},directives:[u.yS,c.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg],pipes:[c.Ts],encapsulation:2}),i})()},{path:"notesEnt/:id",component:Z},{path:"notesEvent/:id",component:S},{path:"**",redirectTo:"notesInd/:id"}]}];let F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[u.Bz.forChild(A)],u.Bz]}),i})(),U=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.ez,F,o.UX,o.u5]]}),i})()}}]);