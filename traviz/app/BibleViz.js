var BibleViz = new (function () {
  this.versionIndex = 0;
  this.versions = [];
  this.sourceIds = editionIds;
  this.sources = bibleEditions;
  this.colors = new TRAVizConfig().getColors(this.sources.length);

  this.initialize = function () {
    this.container = $('<div class="container"/>').appendTo($("#container")[0]);
    var biblePos = $("<table class='biblePos'></table>").appendTo(
      this.container
    );
    this.verseData = $("<div class='header'></div>").appendTo(this.container);
    $(this.verseData).css("height", "20px");
    this.from = $("<div>Abhidhammāvatāra</div>").appendTo(this.verseData);
    $(this.from).css("position", "absolute");
    $(this.from).css("left", "100px");
    this.to = $(`<div>${verses}</div>`).appendTo(this.verseData);
    $(this.to).css("position", "absolute");
    $(this.to).css("right", "150px");
    this.info = $(
      "<div><table class='witness-table'><table-layout:auto;width:100%><tr><td>witness</td><td>CS</td><td>PTS</td><td>Ras 32</td><td>UPT 589</td><td>UPT 761</td><td>UCL 3922</td><td>F 640</td><td>F 2036</td><td>F 3771</td><td>Kelasa</td><td>F 527</td><td>UCL 15017</td><td>UCL 3738</td><td>UCL 9714</td></tr><tr><td>code</td><td>CS</td><td>PTS</td><td>G</td><td>A</td><td>B</td><td>I</td><td>C</td><td>D</td><td>E</td><td>F</td><td>H</td><td>J</td><td>K</td><td>L</td></tr><tr><td>year</td><td>1962</td><td>1915</td><td><1858</td><td>1928</td><td>1862</td><td>1845</td><td>1905</td><td>1879</td><td>1864</td><td>1915</td><td>?</td><td>1913</td><td>1804</td><td>1869</td></tr><tr><td>number of lines</td><td>na</td><td>na</td><td>5</td><td>10</td><td>9</td><td>10</td><td>11</td><td>11</td><td>9</td><td>10</td><td>12</td><td>10</td><td>10</td><td>11</td></tr></table>"
    ).appendTo(this.container);
    $(this.info).css("position", "absolute");
    $(this.info).css("left", "100px");
    this.alignment = $(
      "<div style='text-align:center;overflow-y:auto;margin-top: 80px;'></div>"
    ).appendTo(this.container);
    var sel = false;
    var labels = [];
    var ac = function (label, index) {
      $(label).click(function () {
        if (!BibleViz.versions[index]) {
          return;
        }
        BibleViz.versionIndex = index;
        $(sel).css("text-decoration", "none");
        $(label).css("text-decoration", "underline");
        sel = label;
        BibleViz.loadVerses();
      });
    };
    var cell0 = $("<div/>").appendTo(this.container);
    $(cell0).css("position", "fixed");
    $(cell0).css("background-color", "hsl(240, 100%, 10%, 0.4)");
    var header = $('<div class="iconLabel">Main Branch:</div>').appendTo(cell0);
    $(header).css("font-size", "16px");
    var toggleEdition = function (box, id) {
      $(box).click(function () {
        if (BibleViz.versions[id]) {
          var vi = undefined,
            rpl = undefined;
          for (var i = 0; i < BibleViz.versions.length; i++) {
            if (BibleViz.versions[i] && i != id) {
              vi = true;
              if (BibleViz.versionIndex == id) {
                rpl = i;
                BibleViz.versionIndex = i;
                break;
              }
            }
          }
          if (!vi) {
            alert("Select at least one edition!");
            return;
          }
          if (typeof rpl != "undefined") {
            $(labels[id]).css("text-decoration", "none");
            $(labels[rpl]).css("text-decoration", "underline");
            sel = labels[rpl];
          }
        }
        BibleViz.versions[id] = !BibleViz.versions[id];
        if (BibleViz.versions[id]) {
          $(box).css("background-image", "url(images/check.png)");
        } else {
          $(box).css("background-image", "url(images/cancel.png)");
        }
        BibleViz.loadVerses();
      });
    };
    this.colorMap = [];
    $(cell0).css("padding-right", "50px");
    for (var i = 0; i < this.sourceIds.length; i++) {
      this.colorMap[this.sources[i]] = this.colors[i];
      this.versions.push(true);
      var box = $("<div class='icon'></div>").appendTo(cell0);
      $(box).css("background-color", this.colors[i]);
      $(box).css("opacity", "0.7");
      $(box).css("background-image", "url(images/check.png)");
      var label = $(
        "<div class='iconLabel'>" + this.sourceIds[i] + "</div>"
      ).appendTo(cell0);
      labels.push(label);
      if (i == 0) {
        $(label).css("text-decoration", "underline");
        sel = label;
      }
      if (i == this.sourceIds.length - 1) {
        $(label).css("padding-right", "50px");
      }
      $(box).attr("title", this.sources[i]);
      $(label).attr("title", this.sources[i]);
      $(label).css("font-size", "16px");
      ac(label, i);
      toggleEdition(box, i);
    }
    var box = $("<div class='icon'></div>").appendTo(cell0);
    $(box).css("background-color", "#3E576F");
    var label = $("<div class='iconLabel'>Majority</div>").appendTo(cell0);
    $(box).attr("title", "Majority");
    $(label).attr("title", "Majority");
    $(label).css("cursor", "default");
    $(label).css("font-size", "16px");
    $(cell0).css("left", $(window).width() / 2 - $(cell0).width() / 2 + "px");
    $(cell0).css("top", "5px");
    BibleViz.loadVerses();
  };

  this.loadVerses = function () {
    $(this.alignment).empty();
    var width = $(this.alignment).width();
    var visHeight = 0;
    for (var i = 0; i < bibleVerses.length - 1; i++) {
      var list = [];
      var sids = [];
      var vi = 0;
      for (var j = 0; j < bibleVerses[i].length; j++) {
        if (this.versions[j]) {
          list.push({
            edition: bibleEditions[j],
            text: bibleVerses[i][j],
          });
          sids.push(j);
          if (this.versionIndex > j) {
            vi++;
          }
        }
      }
      var alignmentViz = $(
        "<div id='alignment" + i + "' style='display:block;'></div>"
      ).appendTo(this.alignment);
      $(alignmentViz).css("width", width - 184 + "px");
      $(alignmentViz).css("padding-right", "100px");
      $(alignmentViz).css("padding-left", "84px");
      $(alignmentViz).css("margin-top", "10px");
      var av = new TRAViz("alignment" + i, {
        connectionType: "all",
        vertexBackground: false,
      });
      av.align(list);
      av.setColorMap(this.colorMap);
      av.visualize();
      visHeight += $(alignmentViz).height();
    }
    $(this.copyrightInfo).appendTo(this.alignment);
    $(this.copyrightInfo).css("margin-top", "30px");
    $(this.copyrightInfo).css("padding-right", "100px");
    $(this.copyrightInfo).css("padding-left", "84px");
    $("#bibleBg").css(
      "height",
      visHeight + 250 + $(this.copyrightInfo).height() + "px"
    );
  };
})();
