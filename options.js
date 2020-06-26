"use strict";

const saveOptions = () => {
  let capitalization = "acronym";
  if (document.querySelector("#initial").checked) {
    capitalization = "initial";
  }
  chrome.storage.sync.set({ capitalization: capitalization }, () => {
    const statusElement = document.querySelector("#status");
    statusElement.textContent = "Saved";
    setTimeout(() => {
      statusElement.textContent = "";
    }, 2500);
  });
};

const loadOptions = () => {
  chrome.storage.sync.get({ capitalization: "acronym" }, (options) => {
    if (options.capitalization === "initial") {
      document.querySelector("#initial").checked = true;
    }
  });
};

document.addEventListener("DOMContentLoaded", loadOptions);
document.querySelector("#save").addEventListener("click", saveOptions);
