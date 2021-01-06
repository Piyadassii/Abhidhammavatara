function displayText(value) {
  $(".container").empty();
  $(".container").removeClass("contents");
  $(".text").removeClass("text");
  let chapter = parseInt(document.getElementById("chapter-choice").value);
  if (!value || value == "nill") {
    tocBuilder();
    navigateFromToc();
  } else {
    textGenrator(value);
  }
}

//generates the text

function textGenrator(value) {
  if (pali[value] == undefined) {
    return false;
    // preventDefault();
  }
  // append Chapter Title;
  $(".container").parents("section").addClass("text");
  let chapterName =
    `<h1> ${chapterNamePali[value]}</h1>` +
    `<h2> ${chapterNameEng[value]}</h2>`;
  $(".container").append(chapterName);
  // append the text
  for (let i = 0; i < pali[value].length; i++) {
    textPali = `<p class="pali"> ${pali[value][i]}</p>`;
    textLit = `<p class="lit"> ${lit[value][i]}</p>`;
    free[value][i] == ""
      ? (textFree = `<p class="free same-as-lit"> ${lit[value][i]}</p>`) // if free translation is the same as literal, dublicate it
      : (textFree = `<p class="free"> ${free[value][i]}</p>`);
    $(".container").append(textPali + textLit + textFree);
  }

  //append the notes

  for (let i = 0; i < notesPali[value].length; i++) {
    noteBlockBuilder(notesPali[value][i], i, "Pali");
  }
  for (let i = 0; i < notesLit[value].length; i++) {
    noteBlockBuilder(notesLit[value][i], i, "Lit");
  }

  // generate critical apparatus

  criticalApparatus(value);

  //check the checkboxes

  checkBox("pali");
  checkBox("lit");
  checkBox("free");

  adjustWidth();
}

//content building functions

// builds a div with notes

function noteBlockBuilder(note, noteNumber, section) {
  let noteBlock = `<div id='note${section}${noteNumber}' class='popup'>
    <a href="#anchor" class="popup_area"></a>
    <div class='popup_body'>
        <div class='popup_content'>
            <a href='#anchor' class='popup_close'>&times;</a>
            <div class='popup_text'>${note}</div>
        </div>
    </div>
  </div>`;
  $(".container").append(noteBlock);
}

// builds a table of contents

function tocBuilder() {
  let tocEntries = chapterNamePali.map((title, chapterNumber) => {
    return `<li>${title}<ul><li>
        ${chapterNameEng[chapterNumber]}
        </li></ul></li>`;
  });
  $(".container").addClass("contents");
  $(".container").append(
    `<h1>Contents</h1><ol id='tableOfContents'>${tocEntries.join("")}</ol>`
  );
}

//generate a chapter by click of the name of one in the TOC
function navigateFromToc() {
  $("#tableOfContents li").click(function () {
    console.log($(this).prevAll().length);
    let chapterNumber = $(this).prevAll().length;
    $(".container").empty();
    $(".container").removeClass("contents");
    $(".text").removeClass("text");
    textGenrator(chapterNumber);
  });
}
navigateFromToc();
// searches for a description of a matching witness

function searchDescription(stringToMatch) {
  let descriptionString = witnesses.map(function (obj) {
    if (obj.witness == stringToMatch) {
      return obj.description;
    } else {
      return "";
    }
  });
  return descriptionString;
}

//creates critical apparatus

let criticalApparatus = (value) => {
  readings[value].forEach((variation, variationNumber) => {
    let readingNumber = "#reading" + variationNumber,
      witnessesHTML = variation.witnesses.map((witness) => {
        //an array of witness with each one having its own class
        let witnessClass = "witness" + witness;
        return `<span class="${witnessClass}">${witness} </span>`;
      });
    witnessesDescription = variation.witnesses.map((witness) => {
      //generating an array with the description of witnesses
      let description = searchDescription(witness);
      return `<div><h2>${witness}</h2><p>${description.join("")}</p></div>`;
    });

    $(readingNumber).addClass("tooltipReference"); // adding a class to a tooltip reference (for decoration)
    let tooltipReadingContent = `<a href='#noteWitnesses${variationNumber}' class='ref witnesses'>${witnessesHTML.join(
      ""
    )}</a> ${variation.reading}`;
    witnessesDescriptionBlock = witnessesDescription.join("");
    noteBlockBuilder(witnessesDescriptionBlock, variationNumber, "Witnesses"); // building a div with witness description
    tippy(readingNumber, {
      // initiating a tippy
      content: tooltipReadingContent,
      allowHTML: true,
      interactive: true,
      theme: "light-yellow",
      delay: [100, 250],
    });
    tippy("[data-tippy-content]", {
      theme: "light-yellow",
    });
  });
};

tippy("[data-tippy-content]", {
  theme: "light-yellow",
});

const adjustWidth = () => {
  if (document.querySelector(".flex-wide") != undefined) {
    $(".flex-wide").removeClass("flex-wide");
  }

  threeNotChecked("pali", "lit", "free");
  freeAndLitAlign();
};

//widen the text if less than three types are displayed
const threeNotChecked = (a, b, c) => {
  if (
    !(
      $(`#${a}`).is(":checked") &&
      $(`#${b}`).is(":checked") &&
      $(`#${c}`).is(":checked")
    )
  ) {
    $(`.${a}`).addClass("flex-wide");
    $(`.${b}`).addClass("flex-wide");
    $(`.${c}`).addClass("flex-wide");
  }
};

//if free and lit are displayed, adjust the width; if free is same as lit, hide free and increase the width of lit.
const freeAndLitAlign = () => {
  if ($(`#lit`).is(":checked") && $(`#free`).is(":checked")) {
    $(".flex-wide").removeClass("flex-wide");
    $(".same-as-lit").hide();
    $(".same-as-lit").prev().addClass("flex-wide");
  } else if ($(`#free`).is(":checked")) {
    $(".same-as-lit").show();
  }
};
