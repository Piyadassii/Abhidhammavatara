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
  if (theText[value][0].pali == undefined) {
    return false;
  //   // preventDefault();
  }
  // append Chapter Title;
  $(".container").parents("section").addClass("text");
  let chapterName =
    `<h1> ${chapterNamePali[value]}</h1>` +
    `<h2> ${chapterNameEng[value]}</h2>`;
  $(".container").append(chapterName);
  // append the text
  const $text = theText[value].map((text) => {
    textPali = `<div class="pali"> ${text.pali}</div>`;
    textLit = `<div class="lit"> ${text.lit}</div>`;
    text.free == "" || undefined
      ? (textFree = `<div class="free same-as-lit"> ${text.lit}</div>`) // if free translation is the same as literal, dublicate it
      : (textFree = `<div class="free"> ${text.free}</div>`);

    return textPali + textLit + textFree;
  });
  $(".container").append($text.join(""));

  //modal window with notes

  // $("[data-note]").click((event) => {
  //   const noteNumber = +event.target.dataset.note;
  //   const noteKind = event.target.dataset.textKind;
  //   const note = notesToTrans.find(
  //     (f) => f.chapter === value && f.id === noteNumber && f.text === noteKind
  //   );
  //   familiarNoteModal.setContent(`<div>${note.note}</div>`);
  //   familiarNoteModal.open();
  //   tippy("[data-tippy-content]", {
  //     theme: "light-yellow",
  //     allowHTML: true,
  //   });
  // });

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

// function noteBlockBuilder(note, noteNumber, section) {
//   let noteBlock = `<div id='note${section}${noteNumber}' class='popup'>
//     <a href="#anchor" class="popup_area"></a>
//     <div class='popup_body'>
//         <div class='popup_content'>
//             <a href='#anchor' class='popup_close'>&times;</a>
//             <div class='popup_text'>${note}</div>
//         </div>
//     </div>
//   </div>`;
//   $(".container").append(noteBlock);
// }

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

// let criticalApparatus = (value) => {
//   readings[value].forEach((variation, variationNumber) => {
//     let readingNumber = "#reading" + variationNumber,
//       witnessesHTML = variation.witnesses.map((witness) => {
//         //an array of witness with each one having its own class
//         let witnessClass = "witness" + witness;
//         return `<span class="${witnessClass}" data-witness-description>${witness} </span>`;
//       });
//     witnessesDescription = variation.witnesses.map((witness) => {
//       //generating an array with the description of witnesses
//       let description = searchDescription(witness);
//       return `<div><h2>${witness}</h2><p>${description.join("")}</p></div>`;
//     });

//     $(readingNumber).addClass("tooltipReference"); // adding a class to a tooltip reference (for decoration)
//     let tooltipReadingContent =
//       // `<a href='#noteWitnesses${variationNumber}' class='ref witnesses'>
//       `<span>
//     ${witnessesHTML.join("")}</span> ${variation.reading}`;
//     witnessesDescriptionBlock = witnessesDescription.join("");

//     noteBlockBuilder(witnessesDescriptionBlock, variationNumber, "Witnesses"); // building a div with witness description
//     tippy(readingNumber, {
//       // initiating a tippy
//       content: tooltipReadingContent,
//       trigger: "click",
//       allowHTML: true,
//       interactive: true,
//       theme: "light-yellow",
//       delay: [100, 250],
//     });
//     tippy("[data-tippy-content]", {
//       theme: "light-yellow",
//     });
//   });
// };

let criticalApparatus = (value) => {
  const witnessDescriptionArray = [];
  readings[value].map((reading, readingNumber) => {
    // const witnessHTML = reading.witnesses
    //   .map((witness) => {
    //     return `<span class='witness${witness} data-witness = ${readingNumber}'>${witness} </span>`;
    //   })
    //   .join("");

    const entries = reading.readings
      .map((entry) => {
        const reading = entry.reading,
          $witnesses = entry.wit
            .map((witness) => {
              return `<span class='witness${witness}' data-witness = '${readingNumber}'>${witness} </span>`;
            })
            .join("");
        return `<br><span>${reading} </span><span class="witnessesSet">${$witnesses}</span>`;
      })
      .join("");

    const entryWitDescription = reading.readings.map((entry) => {
      const allWitDescription = entry.wit
        .map((witness) => {
          return `<h2>${witness}</h2><p>${searchDescription(witness).join(
            ""
          )}</p>`;
        })
        .join("");
      // console.log(allWitDescription);
      return allWitDescription;
    });

    const positiveWitnessesHTML = reading.positiveWitnesses
      .map((witness) => {
        return `<span class='witness${witness} data-witness = ${readingNumber}'>${witness} </span>`;
      })
      .join("");

    const positiveWitnessesDescription = reading.positiveWitnesses.map(
      (witness) => {
        return `<h2>${witness}</h2><p>${searchDescription(witness).join(
          ""
        )}</p>`;
      }
    );

    criticalNote = `<span><b>${reading.lemma} </span><span class="witnessesSet" >${positiveWitnessesHTML}</b>:</span>${entries} `;

    $(`#reading${readingNumber}`).attr(
      "data-critical-note",
      `<span class = 'variant'>${criticalNote}</span>`
    );
  });

  tippy("[data-critical-note]", {
    theme: "light-yellow",
    interactive: true,
    allowHTML: true,
    trigger: "click",
    content(reference) {
      const note = reference.getAttribute("data-critical-note");
      return note;
    },
    
  });
};

// tippy("[data-tippy-content]", {
//   theme: "light-yellow",
// });



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
