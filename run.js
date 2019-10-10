function walkText(node) {
  console.log("walking text");
  if (node.nodeType == 3) {
    node.data = node.data.replace(/pull\srequest/gi, "vibe check");
    node.data = node.data.replace(/branch/gi, "mood");
    node.data = node.data.replace(/merge\sconflict/gi, "bruh moment");
    node.data = node.data.replace(/conflict/gi, "bruh moment");
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
walkText(document.body);
