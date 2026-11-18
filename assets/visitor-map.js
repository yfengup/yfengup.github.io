const liveVisitorMap = document.querySelector("#visitor-map-live");

function loadLiveVisitorMap() {
  if (liveVisitorMap.open) {
    const template = liveVisitorMap.querySelector("template");
    template.replaceWith(template.content);
    liveVisitorMap.removeEventListener("toggle", loadLiveVisitorMap);
  }
}

liveVisitorMap.addEventListener("toggle", loadLiveVisitorMap);
loadLiveVisitorMap();
