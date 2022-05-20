"use strict";

var ICONS;

(function (ICONS) {
  ICONS["WAVE"] = "\uD83D\uDC4B";
  ICONS["COMPUTER"] = "\uD83D\uDDA5\uFE0F";
})(ICONS || (ICONS = {}));

document.getElementById("icon").innerHTML = ICONS.WAVE;
