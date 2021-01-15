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
      "<div><table style='border-collapse:collapse;border:1px solid black;'><table-layout:auto;width:100%><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>witness</th><th style='border: 1px solid black;'>CS</th><th style='border: 1px solid black;'>PTS</th><th style='border: 1px solid black;'>Ras 32</th><th style='border: 1px solid black;'>UPT 589</th><th style='border: 1px solid black;'>UPT 761</th><th style='border: 1px solid black;'>UCL 3922</th><th style='border: 1px solid black;'>F 640</th><th style='border: 1px solid black;'>F 2036</th><th style='border: 1px solid black;'>F 3771</th><th style='border: 1px solid black;'>Kelasa</th><th style='border: 1px solid black;'>F 527</th><th style='border: 1px solid black;'>UCL 15017</th><th style='border: 1px solid black;'>UCL 3738</th><th style='border: 1px solid black;'>UCL 9714</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>code</th><th style='border: 1px solid black;'>CS</th><th style='border: 1px solid black;'>PTS</th><th style='border: 1px solid black;'>G</th><th style='border: 1px solid black;'>A</th><th style='border: 1px solid black;'>B</th><th style='border: 1px solid black;'>I</th><th style='border: 1px solid black;'>C</th><th style='border: 1px solid black;'>D</th><th style='border: 1px solid black;'>E</th><th style='border: 1px solid black;'>F</th><th style='border: 1px solid black;'>H</th><th style='border: 1px solid black;'>J</th><th style='border: 1px solid black;'>K</th><th style='border: 1px solid black;'>L</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>year</th><th style='border: 1px solid black;'>1954</th><th style='border: 1px solid black;'>1915</th><th style='border: 1px solid black;'><1858</th><th style='border: 1px solid black;'>1928</th><th style='border: 1px solid black;'>1879</th><th style='border: 1px solid black;'>1845</th><th style='border: 1px solid black;'>1905</th><th style='border: 1px solid black;'>1878</th><th style='border: 1px solid black;'>1864</th><th style='border: 1px solid black;'>1915</th><th style='border: 1px solid black;'>?</th><th style='border: 1px solid black;'>1913</th><th style='border: 1px solid black;'>1803</th><th style='border: 1px solid black;'>1869</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>number of lines</th><th style='border: 1px solid black;'>na</th><th style='border: 1px solid black;'>na</th><th style='border: 1px solid black;'>5</th><th style='border: 1px solid black;'>10</th><th style='border: 1px solid black;'>9</th><th style='border: 1px solid black;'>10</th><th style='border: 1px solid black;'>11</th><th style='border: 1px solid black;'>11</th><th style='border: 1px solid black;'>9</th><th style='border: 1px solid black;'>10</th><th style='border: 1px solid black;'>12</th><th style='border: 1px solid black;'>10</th><th style='border: 1px solid black;'>10</th><th>11</th></tr></table>"
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
