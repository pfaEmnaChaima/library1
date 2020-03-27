var rootRef=firebase.database()	.ref().child("climatiseur");
   rootRef.on("child_added",snap => {
  var id_clim=snap.child("id_clim").val();
  var emplace=snap.child("emplace").val();
  var mode=snap.child("mode").val();
  var temp=snap.child("temp").val();
  var etat=snap.child("etat").val();
  var marq=snap.child("marque").val();
  $("#table_tem").append("<tr><th>"+ id_clim+"</th><th>"+marq+"</th><th>"+etat+"</th><th>"+temp+"</th><th>"+ mode+"</th><th>"+emplace +"</th></tr>");

});
 

function add() {
          const id_clim=document.getElementById('id_clim');
          const database=firebase.database();
          const rootRef=database.ref('climatiseur');
          rootRef.child(id_clim.value).set({
          	id_clim:document.getElementById('id_clim').value,
            marque:document.getElementById('marq').value,
            emplace:document.getElementById('empc').value,
            etat:getElementById('etat_clim').value,
            temp:document.getElementById('tempera').value,
            mode:document.getElementById('mode').value   });
        }


