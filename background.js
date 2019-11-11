// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Ecrire la date du lendemain');
  window.alert(localStorage.getItem("lg"));
  var myCode = `var auj = new Date();
  //délai pour chaque jour, commence à dimanche
  var délai = [1, 1, 1, 1, 1,3, 2]; 
  var livraison = new Date();
    //détecter le language du navigateur pour savoir comment imprimer la date: 20/09/2019 ou 09/20/2019
  var language = window.navigator.userLanguage || window.navigator.language;
  livraison.setDate(auj.getDate()+délai[auj.getDay()]);
	if ((document.activeElement.type == "text")||(document.activeElement.type == "textarea")){
  document.activeElement.value = livraison.toLocaleDateString("`+localStorage.getItem('lg')+`")+document.activeElement.value;
  }`;
 
  chrome.tabs.executeScript({
    code: myCode
  });
});