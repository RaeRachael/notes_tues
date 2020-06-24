function controllerTest() {
  let noteList = new NoteList;
  let noteListController = new NoteListController(noteList);
  expect.isTrue(noteListController);
}

controllerTest()
