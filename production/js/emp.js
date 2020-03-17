var rootRef=firebase.database()	.ref().child("emprunte");

   rootRef.on("child_added",snap => {
  var id_livre=snap.child("id_livre").val();
  var id_emprunte=snap.child("id_emprunte").val();
  var date_emp=snap.child("date_emp").val();
  var date_retour=snap.child("date_retour").val();
  var nom_livre=snap.child("nom_livre").val();
   var etat=snap.child("etat").val();
  $("#table_body").append("<tr><th>"+ id_livre+"</th><th>"+ id_emprunte+"</th><th>"+ 
    date_emp+"</th><th>"+ date_retour+"</th><th>"+ nom_livre+"</th><th>"+etat+"</th></td>");

});
 