function walkText(node) {
  if (node.nodeType == 3) {
    const pr = /pull\srequest/gi;
    const branch = /branch(es)?/gi;
    const conflict = /merge?\sconflict/gi;
    switch (true) {
      case pr.test(node.data):
        node.data = node.data.replace(pr, "vibe check");
        break;
      case branch.test(node.data):
        node.data = node.data.replace(branch, "mood$1").replace("e", "");
        break;
      case conflict.test(node.data):
        node.data = node.data.replace(conflict, "bruh moment");
        break;
      default:
        break;
    }
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
walkText(document.body);
