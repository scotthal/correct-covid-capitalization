"use strict";

const correctTextNode = (textNode) => {
  textNode.textContent = textNode.textContent.replace(/covid/g, "COVID");
  textNode.textContent = textNode.textContent.replace(
    /coronavirus/g,
    "Coronavirus"
  );
};

const depthFirstTraversal = (node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    correctTextNode(node);
  }
  node.childNodes.forEach((node) => depthFirstTraversal(node));
};

depthFirstTraversal(document);
