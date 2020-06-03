// This creates the dev tools panel using the panel.html file as the template

chrome.devtools.panels.create(
  "REACTionary", // title
  "", // icon
  "./panel.html", // content
  function() {
    // code that will run when the devtools panel is loaded up
  }
)
// Adds a sidebar to the elements panel
// Not sure if useful and only looks like it can be added to Elements (i.e. not our own panel)
// See Devtools for more information - https://developer.chrome.com/extensions/devtools
// chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
//     function(sidebar) {
//         // sidebar initialization code here
//         sidebar.setObject({ some_data: "Some data to show" });
// });
