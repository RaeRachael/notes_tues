function NoteListController(list) {
  this.list = list;
  list.addNote("Favourite drink: seltzer");
  this.listView = new NoteListView(list);
};

NoteListController.prototype.addHTML = function() {
  document.getElementById("app").innerHTML = this.listView.returnHTML();
};

var noteListController = new NoteListController(new NoteList);
console.log(noteListController);
noteListController.addHTML()
