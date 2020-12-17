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
      ? (textFree = `<p class="free"> ${lit[value][i]}</p>`) // if free translation is the same as literal, dublicate it
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

//chapter names
const chapterNamePali = [
  "Ganthārambhakathā",
  "1. Citta-niddeso",
  "2. Cetasika-niddeso",
  "3. Cetasikavibhāga-niddeso",
  "4. Ekavidhādi-niddeso",
  "5. Cittuppatti-niddeso",
  "6. Ārammaṇavibhāga-niddeso",
  "7. Vipākacittappavatti-niddeso",
  "8. Pakiṇṇaka-niddeso",
  "9. Puññavipākapaccaya-niddeso",
  "10. Rūpavibhāga-niddeso",
  "11. Nibbāna-niddeso",
  "12. Paññatti-niddeso",
  "13. Kārakapaṭivedha-niddeso",
  "14. Rūpāvacarasamādhi-bhāvanā-niddeso",
  "15. Arūpāvacarasamādhi-bhāvanā-niddeso",
  "16. Abhiññā-niddeso",
  "17. Abhiññārammaṇa-niddeso",
  "18. Diṭṭhi-visuddhi-niddeso",
  "19. Kaṅkhāvitaraṇa-visuddhi-niddeso",
  "20. Maggāmagga-ñāṇadassana-visuddhi-niddeso",
  "21. Paṭipadā-ñāṇadassana-visuddhi-niddeso",
  "22. Ñāṇadassana-visuddhi-niddeso",
  "23. Kilesappahānakathā",
  "24. Paccaya-niddeso",
  "Nigamanakathā",
];
const chapterNameEng = [
  "Introduction",
  "Exposition Of Consciousness",
  "Exposition Of Mental Factors",
  "Exposition Of Classification of Mental Factors",
  "Exposition by numerical groups",
  "Exposition of arising of consciousness",
  "Exposition of classification of objects",
  "Exposition of occurence of resultant consciousness",
  "Exposition of miscellaneous",
  "Exposition of conditions for resultans of merit",
  "Exposition of classification of matter",
  "Exposition of Nibbāna",
  "Exposition of concepts",
  "Exposition of comprehension of a doer",
  "Exposition of development of concentration of material sphere",
  "Exposition of development of concentration of immaterial sphere",
  "Exposition of supernormal powers",
  "Exposition of objects of supernormal powers",
  "Exposition of purification of view",
  "Exposition of purification by overcoming doubt",
  "Exposition of purification by knowing and seeing what is the path and what is not the path",
  "Exposition of purification by knowing and seeing the way",
  "Exposition of purification by knowing and seeing",
  "Discourse on the abandonment of defilments",
  "Exposition of conditions",
  "Colophon",
];

const witnesses = [
  {
    witness: "K",
    description:
      "This Burmese script palm-leaf manuscript is the oldest dated manuscript that I was able to obtain.  It is held at the Universities' Central Library in Yangon, Myanmar under accession number 3738. The library digitalised this and other manuscripts from their collection on my request and provided me with good quality images. The text comes in a bundle together with its newer commentary, the <i>Abhidhammatthavikāsinī</i>. The leaves are 51*6.5 cm in size and usually have ten lines of rather clear writing. The title in the upper right corner of recto sides is Abhidhammāvatārajāko. A total of 51 leaves are numbered in the upper left corner of recto sides beginning with <i>ka</i> and ending with <i>ñe</i>. Even though being the oldest among available to me manuscripts it is abundant with mistakes, most frequent being <i>i</i> for <i>ī</i>, <i>ā</i> for <i>o</i>, <i>a</i> for <i>ā</i>, omission of syllables and <i>niggahīta</i>, <i>ṭ</i> for <i>ṭṭh</i>, sometimes <i>di</i> for <i>ti</i>, <i>tta</i> for <i>ttha</i>, and <i>ttha</i> for <i>tta</i>. Immediately after the text come first ten verses of the <i>Namakkārapāḷi</i>, which are followed by a colophon in Burmese stating that the copying of the commentary on abhidhamma was completed on the 1st day after the full moon of the tenth month in 1185 <i>Sakkarāja</i> year (1804).",
  },
  {
    witness: "I",
    description:
      "This Burmese script palm-leaf manuscript is the second oldest dated manuscript that I was able to obtain. It is held at the Universities' Central Library in Yangon, Myanmar under accession number 3922. The text comes in a bundle together with its two commentaries. The leaves are 48*6 cm in size and usually have ten lines of clear round writing. The title in the upper right corner of recto sides is Abhidhammāvatāra. A total of 46 leaves are numbered in the upper left corner of recto sides beginning with <i>ka</i> and ending with <i>ghau</i>. Mistakes are few, common ones being <i>i</i> for <i>ī</i>, the omission of <i>niggahīta</i>, and sometimes mu for pu. The colophon does not come immediately after the text but after the old commentary declaring the sacredness of letters with a common formula `<i>akkharaṃ ekamekañ ca buddharūpasamaṃ siyā</i>' and aspiration for the attainment of threefold wisdom, and after the new commentary stating the date of completion of copying being 2nd day in the half-month of the waxing moon of the fourth month in 1207 <i>Sakkarāja</i> year (1845), and expressing an aspiration for the attainment of <i>nibbāna</i>.",
  },
  {
    witness: "E",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL3771 and downloaded from <a href='http://purl.bdrc.io/resource/MW1FPL3771' target='_blank'>tbrs.org</a>. The images are of average quality. The text is bundled with three other texts: the <i>Samohavinodanī</i>, the <i>Nāmarūpapariccheda</i>, and the <i>Khemāpakaraṇa</i>. A total of 46 leaves are numbered in the upper left corner of recto sides beginning with <i>da</i> and ending with <i>pā:</i> and usually have 10 lines of somewhat crammed handwriting with frequent corrections. It does not distinguish between <i>i</i> and <i>ī</i> or <i>tta</i> and <i>ṭṭa</i>. The colophon does not come immediately after the text, but rather after the last text of the bundle stating that the copying was completed on the 6th day in the half-month of the waxing moon of the eighth month in 1226 <i>Sakkarāja</i> year (1864).",
  },
  {
    witness: "B",
    description:
      "Burmese script digitalized palm-leaf manuscript from U Pho Ti Library in Thaton, Mon State, Myanmar,  with identification number 761. It has been well described in <span data-tippy-content='Prutt, W., Y. Ousaka, and S. Kasamatsu (2019). Bristol: Pali Text Society.'>Prutt, Ousaka, and Kasamatsu (2019, p. 363).</span> Most frequent mistakes are <i>ya</i> for <i>ra</i>, <i>bba</i> for <i>ppa</i> and <i>ppha</i>, the omission of <i>niggahita</i> and sometimes entire words. The text is followed by an unusual verse in Pāḷī `<i>vamitabbaṃ vamittayaṃ ramitabbañ ca taṃ buddhaṃ dhammamaggaṃ namāmataṃ mahitabbaṃ gaṇaṅ guruṃ</i>' followed by its <i>nissaya</i>, lengthy aspirations and the date of completing copying, which was the 4th day in the half-month of the waxing moon of the first month in 1224 <i>Sakkarāja</i> year (1862) (<span data-tippy-content='Prutt, W., Y. Ousaka, and S. Kasamatsu (2019). Bristol: Pali Text Society.'>Prutt, Ousaka, and Kasamatsu (2019, ibid.).</span>, however, records the date as 1242).",
  },
  {
    witness: "D",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL2036 <a href='http://purl.bdrc.io/resource/MW1FPL2036' target='_blank'>tbrs.org</a>. The text is bundled with its new <i>nissaya</i>. A total of 52 leaves are numbered in the upper left corner of recto sides beginning with <i>ka</i> and ending with <i>ñū</i> and usually have 9 lines of mostly clear handwriting. The title in the upper right corner of recto sides is Abhidhammāvatārapāḷi. Apart from such common mistakes as writing <i>i</i> for <i>ī</i>, <i>ta</i> for <i>ṭa</i>, or omitting <i>niggahīta</i>, it sometimes confuses <i>ya</i> and <i>ra</i>. Immediately after the text follow lengthy colophon that starts with the common Pāḷi formula declaring the sacredness of letters: `<i>akkharaṃ ekamekañ ca buddharūpasamaṃ siyā tasmā hi paṇḍito paso likheyya piṭakattayaṃ ahaṃ vandāmi sabbadā</i>'. Then the scribe first dedicates the merit acquired in Burmese. After, in a form of Pāli <i>nissaya</i>, he expresses an aspiration for the attainment of nibbāna and acquiring various qualities of the great disciples of the Buddha. The date of completion of copying the manuscript, which comes in a colophon after the <i>Abhidhammāvatāranissaya</i>, is the 10th day in the half-month of the waxing moon of the tenth month in 1240 <i>Sakkarāja</i> year (1879).",
  },
  {
    witness: "F",
    description:
      "Burmese script digitalized palm-leaf manuscript from <a href='kelasa.org' target='_blank'>kelasa.org</a> collection with identification number 1918. The quality of the pictures is not uniform, some are of higher resolution than others. The text is bundled with ten other abhidhamma texts: the <i>Paramatthavinicchaya</i>, the <i>Khemāpakaraṇa</i>, the <i>Nāmācāradīpaka</i>, the <i>Saccasaṅkhepa</i>, the <i>Rūpavibhāga</i>, the <i>Rūpārūpavibhāga</i>, the <i>Nāmarūpapariccheda</i>, the <i>Abhidhammatthasaṅgaha</i>, the <i>Saṅkhepa</i>, and the <i>Apheggusāradīpani</i>. A total of 43 leaves are numbered in the upper left corner of recto sides beginning with <i>ka</i> and ending with <i>ghè</i>. They usually have 12 lines of mostly clear handwriting. The title in the upper right corner of recto sides is <i>Abhidhammāvatārapāḷi</i>. Mistakes are not too many, among them short for long vowels, occasional omission of <i>niggahita</i>, and <i>ba</i> for <i>pha</i>. Throughout the first chapter, it spells <i>kriya</i> as <i>kiriya</i>, even in verses where the additional vowel breaks the meter. According to the colophon, which comes immediately after the text, the copying completion date is the 1st day in the half-month of the waning moon of the fourth month in 1277 <i>Sakkarāja</i> year (1915). On the right margin of the last leaf of the bundle are stated donors' names and the town where the copying was done, Dedaye (De:daè).",
  },
  {
    witness: "A",
    description:
      "Burmese script digitalized palm-leaf manuscript from U Pho Ti Library in Thaton, Mon State, Myanmar,  with identification number 589. It has been described in <span data-tippy-content='Prutt, W., Y. Ousaka, and S. Kasamatsu (2019). Bristol: Pali Text Society.'>Prutt, Ousaka, and Kasamatsu (2019, p. 264).</span> Mistakes are only occasional. The title in the upper right corner of recto sides is <i>Abhidhammāvatārapāḷi</i>. Immediately after the text follows the colophon stating that the copying of the manuscript was completed on the 1st day after the full moon of the ninth month in 1290 <i>Sakkarāja</i> year (1928). On the left margin of the first and the last leaves of the text are stated donor's name and the town where the copying was done, Thaton (Sathuṃ).",
  },
  {
    witness: "G",
    description:
      "Kham script palm-leaf manuscript from Pāli Manuscript Collection in the Royal Asiatic Society with identification number Ras 34, the digital copy of which available for download from <a href='https://archive.org/details/rasburmese34' target='_blank'>archive.org</a>. It has been described in <span data-tippy-content='Filliozat, Jacqueline (1999). “Survey of the Pāli Manuscript Collection in the Royal Asiatic Society”. In: Journal of the Royal Asiatic Society 9, pp. 35–76.'>Filliozat (1999, p.46)</span>. Copying date is not stated, but Filliozat (1999, ibid.) conjectures that it might have been the manuscript that was presented to the Society in 1858 by King Mongkut (Rama IV). Six bundles of 183 leaves of text in total usually have five lines of clear writing, and a page number on the left of recto sides beginning with <i>ka</i> and ending with <i>ttaḥ</i>. The title written on the 1st leaf of each bundle is <i>braḥ pāṭha abhidhammavatāra phuk</i>. Mistakes are rare. Free space of the last leaf is filled with the `<i>Iti pi so</i>' formula up to <i>akāliko</i>. No colophon.",
  },
  {
    witness: "H",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL527 <a href='http://purl.bdrc.io/resource/MW1FPL527' target='_blank'>tbrs.org</a>). The text comes in a bundle together with its two commentaries. A total of 43 leaves are numbered in the upper left corner of recto sides beginning with <i>ka</i> and ending with <i>gho</i> and usually have 11 lines of clear handwriting. The title in the upper right corner of recto sides is <i>Abhidhammāvatārapāḷi</i>. Mistakes are only occasional. One colophon in Burmese at the end of the bundle. It only dedicates the merits and does not indicate any date.",
  },
  {
    witness: "PTS",
    description:
      "This Roman script printed edition of the <i>Abhidhammāvatāra</i> published in 1915 was prepared by A. P. Buddhadatta. It is the first text of the first volume of `<i>The Buddhadatta's Manuals</i>' and occupies 138 pages. Buddhadatta does not describe his sources but does mention that by the end of his work he got hold of a Burmese manuscript and has supplied variant readings from it. The text is accompanied by a thin critical apparatus. Being Sinhalese, the editor most likely used a Sinhalese manuscript or manuscripts. After the text, is attached the appendix with references to the <i>Nikāyas</i> that Mrs. Rhys Davids was able to trace, and some parallel passages supplied by A. P. Buddhadatta.",
  },
  {
    witness: "CS",
    description:
      "This Burmese script printed edition of the <i>Abhidhammāvatāra</i> published in 1962 represents the text recited at the sixth Buddhist council. The text occupies the first 186 pages of the book and is followed by three other works on abhidhamma: the <i>Nāmarūpapariccheda</i>, the <i>Paramatthavinicchaya</i>, and the <i>Saccasaṅkhepa</i>. In footnotes alternative Burmese and Sinhalese variants, and, on very rare occasions, references to <i>Tipiṭaka</i> are provided. The romanized version of the text is available at <a href='tipitaka.org' target='_blank'>tipitaka.org</a>, however, it is stripped off variants and references.",
  },
  {
    witness: "C",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL640 <a href='http://purl.bdrc.io/resource/MW1FPL640' target='_blank'>tbrs.org</a>). Copied in 1905, it has share mistakes with <i>I</i> and adds more. Thus it must be either a descendant or a lower quality sibling of <i>I</i>. This was the reason for excluding it from the edition.",
  },
  {
    witness: "J",
    description:
      "Burmese script palm-leaf manuscript from the Universities' Central Library in Yangon, Myanmar under the accession number 3922, which was copied in 1913. It contains a large number of mistakes, mostly omitting syllables, words, and phrases. Handwriting is unclear. These were the main reason for excluding it from the edition.",
  },
  {
    witness: "L",
    description:
      "Burmese script palm-leaf manuscript from the Universities' Central Library in Yangon, Myanmar under the accession number 9714, which was copied in 1869. The main reason for excluding it from the edition was an overwhelmingly large amount of mistakes and its apparent relationship with <i>K</i>.",
  },
];

const readings = [
  [
    {
      witnesses: ["B", "D", "F", "H", "K"],
      reading: "anuttamaṃ",
    },
    {
      witnesses: ["B", "C"],
      reading: "tatthā taṃ",
    },
  ],
  [
    {
      witnesses: ["B", "C", "D", "E", "F", "G", "I", "K"],
      reading: "attano santānaṃ",
    },
    {
      witnesses: ["D", "F", "G", "K", "PTS"],
      reading: "ca",
    },
  ],
];

const pali = [
  [
    "1. anantakaruṇāpaññaṃ tathāgatam <span id='reading0'>anuttaraṃ</span> <br> vanditvā sirasā buddhaṃ, dhammaṃ sādhugaṇam ’pi ca",
    "2-3. paṇḍukambalanāmāya, silāyātulavikkamo <br>nisinno devarājassa vimale sītale tale<br> yaṃ devadevo devānaṃ, devadevehi pūjito <br> desesi devalokasmiṃ, dhammaṃ devapurakkhato",
    "4. <span id='reading1'>tatthāhaṃ</span> pāṭavatthāya, bhikkhūnaṃ piṭakuttame <br>abhidhammāvatāran tu, madhuraṃ mativaḍḍhanaṃ",
    "5. tāḷaṃ mohakavāṭassa, vighāṭanam anuttaraṃ bhikkhūnaṃ <br>pavisantānaṃ, abhidhamma-mahāpuraṃ",
    "6. suduttaraṃ tarantānaṃ, abhidhammamahodadhiṃ <br>suduttaraṃ tarantānaṃ, taraṃ ’va makarākaraṃ",
    "7. ābhidhammikabhikkhūnaṃ, hatthasāram anuttaraṃ<br> pavakkhāmi samāsena, taṃ suṇātha samāhitā",
  ],
  [
    "8. cittaṃ cetasikaṃ rūpaṃ, nibbānan ti niruttaro<br>catudhā desayī dhamme, catusaccappakāsano",
    "tattha cittan ’ti visayavijānanaṃ cittaṃ, tassa pana ko vacanattho? vuccate: <a href='#notePali0' class='ref'>sabbasaṅgāhakavasena pana cintetī ti cittaṃ</a>, <a href='#notePali1' class='ref'><span id='reading0'>attasantānaṃ</span>  vā cinotī ti pi cittaṃ.</a> [2]",
    "9. vicittakaraṇā cittaṃ attano cittatāya vā,<br>  paññattiyam pi viññāṇe, vicitte cittakammake,<br>  cittasammuti daṭṭhabbā viññāṇe idha viññunā",
    "taṃ pana sārammaṇato ekavidhaṃ, savipākāvipākato duvidhaṃ. tattha savipākaṃ nāma kusalākusalaṃ; avipākaṃ abyākataṃ. kusalākusalābyākatajātibhedato tividhaṃ. tattha kusalan ’ti pan’ etassa ko vacanattho?",
    "10. kucchitānaṃ salanato, kusānaṃ lavanena vā<br>  kusena lātabbattā vā, kusalan ’ti pavuccati",
    "11. cheke kusalasaddo ’yaṃ, ārogye anavajjake<br>  diṭṭho iṭṭhavipāke <span id='reading1'>pi</span>, anavajjādike idha",
  ],
];

const notesPali = [
  [],
  [
    "Abhi-āv-pt I 1: <i>Ārammaṇaṃ cinteti jānātīti cittaṃ, tadā sabbaṃ cittaṃ adhippetaṃ.</i>",
    "Abhi-āv-pt I 1: <i>Javanavīthivasena attasantānaṃ cinotī ti cittaṃ, tadā kusalākusalamahākiriyācittaṃ adhippetaṃ</i>.",
  ],
];

const lit = [
  [
    "1. Having respectfully paid homage to the unsurpassed Tathāgata of infinite compassion and wisdom, the Buddha, the Dhamma and the excellent group [the Saṅgha],",
    "2-3. the Dhamma that honoured by the deities, in front of the deities, the God of gods unequalled in power, seated on the spotless cool stone of the king of the deities, called paṇḍukambala, taught the deities in the world of dieties,",
    "4. for the sake of monks’ skilfulness in the highest piṭaka 'The Introduction to Abhidhamma', which is sweet, and results in the growth of wisdom,",
    "5. a key to the door of delusion, an unsurpassed blow [that opens that door] for the monks entering the great city of Abhidhamma,",
    "6. for those crossing so difficult to cross great ocean of Abhidhamma, like a raft for crossing so difficult to cross ocean where sea-monsters live,",
    "7. I will explain in brief [the Abhidhammāvatāra], an supreme, invaluable tool for the ābhidhammika-monks; listen to that attentively.",
  ],
  [
    "8. The Unsurpassed One who made known the four noble truths taught four <i>dhamma</i>s: consciousness, mental factors, matter and <i>nibbāna</i>.",
    "Herein, ‘consciousness’ means consciousness as cognizing an object. What does it mean? It is said, <a href='#noteLit0' class='ref'> all-inclusively  it’s called ‘consciousness’ (<i>citta</i>) because it thinks (<i>cinteti</i>);</a> or else <a href='#noteLit1' class='ref'>it is called consciousness as that which accumulates (<i>cinoti</i>) the continuum of one-self.</a> [2]",
    "9. It’s called ‘consciousness’ (<i>citta</i>) due to its making things variegated (<i>vicitta/vicitra</i>), or due to its own being variegated (<i>cittatā/citratā</i>). [It can mean] mind as concept , cognition (<i>viññāṇa</i>), variegated (<i>vicitta</i>), and painting-work (<i>cittakammaka</i>) . Here it should be understood by a wise person in the sense of cognition.",
    "It is of one kind as to having an object; it is of two kinds with regard to producing and not producing results. Herein, wholesome and unwholesome are productive of results; indeterminate ones are not productive of results. According to its classification as wholesome, unwholesome, or indeterminate, it is of three kinds. What is the meaning of this ‘wholesome’ (<i>kusala</i>) here?",
    "10. It’s called ‘wholesome’ because of its shaking (<i>salana</i>) contemptible (<i>kucchita</i>), or cutting (<i>lavana</i>) of blades of kusa grass (<i>kusa</i>) , or else because it is something that by knowledge (<i>kusa</i>)  should be acquired (<i>lātabba</i>).",
    "11. The word ‘wholesome’ is seen in the meanings: clever, health, faultless, and giving agreeable results. Herein, [it means] ‘blameless’, and ‘giving agreeable results’.",
  ],
];

const notesLit = [
  [],
  [
    "Abhi-āv-pt I 1: When consciousness is defined as that which knows, thinks about an object, all consciousness is meant.",
    "Abhi-āv-pt I 1: When consciousness is defined as that which accumulates the continuum of one-self, only wholesome, unwholesome and great functional consciousness is meant.",
  ],
];

const free = [
  [
    "1. To Tathāgata of boundless compassion and wisdom,  to the Buddha, the Dhamma and the excellent group,  I pay homage respectfully bowing my head.",
    "2-3. I will explain in brief the Dhamma  that God of gods of incomparable might  in front of the gods  seated on the cool throne of the king of gods  taught the Gods in the world of gods.",
    "4. The Abhidhammāvatāra, sweet, enhancing the wisdom,  is for furtherance of monks’ skill in preeminent piṭaka.",
    "5. For the monks who enter the great Abhidhamma city  it’s a key, an unmatched blow that open doors of delusion.",
    "6. For those crossing so difficult to cross Abhidhamma-ocean,  it’s like raft for crossing so difficult to cross sea-monster quarters.",
    "7.  For ābhidhammika monks in brief I’ll expound  this supreme, precious tool,  listen, pay heed to that.",
  ],
  [
    "8. The one who showed the four ennobling truths,  four <i>dhamma</i>s taught the Unsurpassed One:  <i>citta</i> or consciousness, <i>cetasika</i> – mental factors,  <i>rūpa</i> or matter, and <i>nibbāna</i>.",
    "Here, <i>citta</i> means consciousness as cognition of an object. What does it mean? Any citta is called so because it thinks (<i>cinteti</i>) [about an object], or, because the <i>citta</i>s [that constitute an action] also accumulate (<i>cinoti</i>) the continuum of one-self.",
    "9. It variegates or it is variegated-<i>vicitta</i> thus it’s <i>citta</i>.  <br>It can denote a painting or simply a name, cognition or a thing variegated.  <br>The meaning of cognition is the sense that knowledgeable should understand here.",
    "",
    "10. Contemtible-<i>ku</i> it shakes-sala thus it’s called <i>kusala</i>.  <br>Like blades of <i>kusa</i> grass it cuts thus it is <i>kusala</i>.  <br>Or else by knowledge-<i>kusa</i> it’s to be acquired, so it’s named <i>kusala</i>.",
    "11. In many meanings <i>kusala</i> is seen:<br>   Health, skilful, faultless, and agreeable results producing.<br>In here, the last two are the ones that we mean.",
  ],
];
