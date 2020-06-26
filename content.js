"use strict";

const correctTextNode = (textNode, correctCapitalization) => {
  textNode.textContent = textNode.textContent.replace(
    /covid/g,
    correctCapitalization
  );
  textNode.textContent = textNode.textContent.replace(
    /coronavirus/g,
    "Coronavirus"
  );
};

const depthFirstTraversal = (node, correctCapitalization) => {
  if (node.nodeType === Node.TEXT_NODE) {
    correctTextNode(node, correctCapitalization);
  }
  node.childNodes.forEach((node) =>
    depthFirstTraversal(node, correctCapitalization)
  );
};

chrome.storage.sync.get({ capitalization: "acronym" }, (options) => {
  let correctCapitalization = "COVID";
  if (options.capitalization === "initial") {
    correctCapitalization = "Covid";
  }
  depthFirstTraversal(document, correctCapitalization);
});
