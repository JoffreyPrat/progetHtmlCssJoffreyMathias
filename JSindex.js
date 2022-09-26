function afficher(id) {
    document.querySelectorAll('.toggle').forEach(function(elem) {
        elem.style.display = "none";
        document.querySelector('#btn_' + elem.id).disabled = false;
    });
    document.getElementById(id).style.display = "block";
    document.querySelector('#btn_'+id).disabled = true;
}