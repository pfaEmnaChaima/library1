   // Your web app's Firebase configuration
        var firebaseConfig = {
              apiKey: "AIzaSyBiUHy07aEruI_ZgBmg-A8ez6bBc-W1gtw",
              authDomain: "smart-library1.firebaseapp.com",
              databaseURL: "https://smart-library1.firebaseio.com",
              projectId: "smart-library1",
              storageBucket: "smart-library1.appspot.com",
              messagingSenderId: "215824460430",
              appId: "1:215824460430:web:6d9b13ab3c7629b377b7df",
              measurementId: "G-BC9C4EV24W"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        
       

     

var rootRef=firebase.database() .ref().child("climatiseur");
   rootRef.on("child_added",snap => {
  var id_clim=snap.child("id_clim").val();
  var emplace=snap.child("emplace").val();
  
  if (snap.child("etat").val()) {
    var etat="Ouvert";
  var mode=snap.child("mode").val();
  var temp=snap.child("temp").val();
}
  else
    { var etat="Ferme";}
  var marq=snap.child("marque").val();
  $("#table_tem").append("<tr><th>"+ id_clim+"</th><th>"+marq+"</th><th>"+emplace+"</th><th>"+etat+"<button id=\"add_button\" data-toggle=\"modal\" data-target=\"#cl\" class=\"btn btn-danger pull-right btn-sm\" ><i class=\"fa fa-edit\"></i></button></th><th>"+temp+"</th><th>"+ mode+"</th></tr>");
});

function addt() {
          const id_clim=document.getElementById('id_clim');
          const database=firebase.database();
          const rootRef=database.ref('climatiseur');
          rootRef.child(id_clim.value).set({
            id_clim:document.getElementById('id_clim').value,
            marque:document.getElementById('marq').value,
            emplace:document.getElementById('empc').value,
            temp:document.getElementById('tempera').value,
            mode:document.getElementById('mode').value ,
            etat:document.getElementById('ouv').checked})}


