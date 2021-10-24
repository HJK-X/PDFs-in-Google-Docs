function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Show PDF viewer', 'showSidebar')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('PDF Viewer');
  DocumentApp.getUi().showSidebar(ui);
}