var rootRef=firebase.database()	.ref().child("stockage");

   rootRef.on("child_added",snap => {
  var nomdocc=snap.child("nomDoc").val();
  var nomddomain=snap.child("nomDomain").val();
  var prixx=snap.child("Prix").val();
  var dateeentree=snap.child("dateEntree").val();
  var qtee=snap.child("Qte").val();
  var Action=snap.child("action").val();
  $("#table_body").append("<tr><th>"+ nomddoc+"</th><th>"+ nomddomain+"</th><th>"+Action+
  	"</th><th>"+qtee+"</th><th>"+ dateeentree+"</th><th>"+ prixx+
  	"</th></tr>");

});
 
 function add() {
const nomDoc=document.getElementById('nom_doc');
        const database=firebase.database();
        const rootRef=database.ref('stockage');
       
   rootRef.child(nomDoc.value).set({
     nomDoc:document.getElementById('nom_doc').value,
            nomDomain:document.getElementById('nom_domain').value,
            Prix:document.getElementById('prix').value,
            dateEntree:document.getElementById('date_entree').value,
            Qte:document.getElementById('qte').value  
            action:document.getElementById('qte').value});
       
        }


