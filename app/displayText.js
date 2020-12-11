function displayText(value) {
  $(".container").empty();
  $(".container").removeClass("contents");
  let chapter = parseInt(document.getElementById("chapter-choice").value);
  if (!value || value == "nill") {
    tocBuilder();
  } else {
    // append Chapter Title;
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
  }
}

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

function tocBuilder() {
  $(".container").addClass("contents");
  $(".container").append("<h1>Contents</h1><ul>");
  chapterNamePali.forEach(function (title, chapterNumber) {
    let tocEntry = `<li>${title}<ul><li>
      ${chapterNameEng[chapterNumber]}
      </li></ul></li>`;
    $(".container").append(tocEntry);
  });
  $(".container").append("</ul>");
}

const chapterNamePali = [
  "Ganthārambhakathā",
  "1. Cittaniddeso",
  "2. Cetasikaniddeso",
  "3. Cetasikavibhāganiddeso",
  "4. Ekavidhādiniddeso",
  "5. Cittuppattiniddeso",
  "6. Ārammaṇavibhāganiddeso",
  "7. Vipākacittappavattiniddeso",
  "8. Pakiṇṇakaniddeso",
  "9. Puññavipākapaccayaniddeso",
  "10. Rūpavibhāganiddeso",
  "11. Nibbānaniddeso",
  "12. Paññattiniddeso",
  "13. Kārakapaṭivedhaniddeso",
  "14. Rūpāvacarasamādhibhāvanāniddeso",
  "15. Arūpāvacarasamādhibhāvanāniddeso",
  "16. Abhiññāniddeso",
  "17. Abhiññārammaṇaniddeso",
  "18. Diṭṭhivisuddhiniddeso",
  "19. Kaṅkhāvitaraṇavisuddhiniddeso",
  "20. Maggāmaggañāṇadassanavisuddhiniddeso",
  "21. Paṭipadāñāṇadassanavisuddhiniddeso",
  "22. Ñāṇadassanavisuddhiniddeso",
  "23. Kilesappahānakathā",
  "24. Paccayaniddeso",
  "Nigamanakathā",
];
const chapterNameEng = [
  "Introduction",
  "The Exposition Of Consciousness",
  "The Exposition Of Mental Factors",
  "The Exposition Of Classification of Mental Factors",
  "The Exposition by numerical groups",
  "The Exposition of arising of consciousness",
  "The Exposition of classification of objects",
  "The Exposition of occurence of resultant consciousness",
  "The Exposition of miscellaneous",
  "The Exposition of conditions for resultans of merit",
  "The Exposition of classification of matter",
  "The Exposition of Nibbāna",
  "The Exposition of concepts",
  "The Exposition of comprehension of a doer",
  "The Exposition of development of concentration of material sphere",
  "The Exposition of development of concentration of immaterial sphere",
  "The Exposition of the supernormal powers",
  "The Exposition of objects of the supernormal powers",
  "The Exposition of purification of view",
  "The Exposition of purification by overcoming doubt",
  "The Exposition of purification by knowing and seeing what is the path and what is not the path",
  "The Exposition of purification by knowing and seeing the way",
  "The Exposition of purification by knowing and seeing",
  "The discourse on the abandonment of defilments",
  "The Exposition of conditions",
  "Colophon",
];

const pali = [
  [
    "1. anantakaruṇāpaññaṃ tathāgatam <span class='tooltip' onclick='' aria-haspopup='true'>anuttaraṃ<span>anuttamaṃ</span></span> <br> vanditvā sirasā buddhaṃ, dhammaṃ sādhugaṇam ’pi ca",
    "2-3. paṇḍukambalanāmāya, silāyātulavikkamo <br>nisinno devarājassa vimale sītale tale<br> yaṃ devadevo devānaṃ, devadevehi pūjito <br> desesi devalokasmiṃ, dhammaṃ devapurakkhato",
    "4. tatthāhaṃ pāṭavatthāya, bhikkhūnaṃ piṭakuttame <br>abhidhammāvatāran tu, madhuraṃ mativaḍḍhanaṃ",
    "5. tāḷaṃ mohakavāṭassa, vighāṭanam anuttaraṃ bhikkhūnaṃ <br>pavisantānaṃ, abhidhamma-mahāpuraṃ",
    "6. suduttaraṃ tarantānaṃ, abhidhammamahodadhiṃ <br>suduttaraṃ tarantānaṃ, taraṃ ’va makarākaraṃ",
    "7. ābhidhammikabhikkhūnaṃ, hatthasāram anuttaraṃ<br> pavakkhāmi samāsena, taṃ suṇātha samāhitā",
  ],
  [
    "8. cittaṃ cetasikaṃ rūpaṃ, nibbānan ti niruttaro<br>catudhā desayī dhamme, catusaccappakāsano",
    "tattha cittan ’ti visayavijānanaṃ cittaṃ, tassa pana ko vacanattho? vuccate: <a href='#notePali0' class='ref'>sabbasaṅgāhakavasena pana cintetī ti cittaṃ</a>, <a href='#notePali1' class='ref'>attasantānaṃ  vā cinotī ti pi cittaṃ.</a> [2]",
    "9. vicittakaraṇā cittaṃ attano cittatāya vā,<br>  paññattiyam pi viññāṇe, vicitte cittakammake,<br>  cittasammuti daṭṭhabbā viññāṇe idha viññunā",
    "taṃ pana sārammaṇato ekavidhaṃ, savipākāvipākato duvidhaṃ. tattha savipākaṃ nāma kusalākusalaṃ; avipākaṃ abyākataṃ. kusalākusalābyākatajātibhedato tividhaṃ. tattha kusalan ’ti pan’ etassa ko vacanattho?",
    "10. kucchitānaṃ salanato, kusānaṃ lavanena vā<br>  kusena lātabbattā vā, kusalan ’ti pavuccati",
    "11. cheke kusalasaddo ’yaṃ, ārogye anavajjake<br>  diṭṭho iṭṭhavipāke pi, anavajjādike idha",
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
