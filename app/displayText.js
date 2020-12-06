function displayText() {
  $(".container").empty();
  let chapter = parseInt(document.getElementById("chapter-choice").value);
  let chapterName =
    `<h1> ${chapterNamePali[chapter]}</h1>` +
    `<h2> ${chapterNameEng[chapter]}</h2>`;
  $(".container").append(chapterName);
  for (let i = 0; i < pali[chapter].length; i++) {
    (textPali = `<p class="pali"> ${pali[chapter][i]}</p>`),
      (textLit = `<p class="lit"> ${lit[chapter][i]}</p>`),
      (textFree = `<p class="free"> ${free[chapter][i]}</p>`);
    $(".container").append(textPali + textLit + textFree);
  }
  if ($("#original").is(":checked") == false) {
    $(".pali").hide();
  }
  if ($("#literal").is(":checked") == false) {
    $(".lit").hide();
  }
  if ($("#free").is(":checked") == false) {
    $(".free").hide();
  }
}

const chapterNamePali = [
  "Ganthārambhakathā",
  "1. CITTANIDDESO",
  "2. Cetasikaniddeso",
  "3. Cetasikavibhāganiddeso",
];
const chapterNameEng = [
  "Introduction",
  "The Exposition Of Consciousness",
  "The Exposition Of Mental Factors",
  "The Exposition Of Classification of Mental Factors",
];
const pali = [
  [
    "1. anantakaruṇāpaññaṃ tathāgatam anuttaraṃ <br> vanditvā sirasā buddhaṃ, dhammaṃ sādhugaṇam ’pi ca",
    "2-3. paṇḍukambalanāmāya, silāyātulavikkamo <br>nisinno devarājassa vimale sītale tale<br> yaṃ devadevo devānaṃ, devadevehi pūjito <br> desesi devalokasmiṃ, dhammaṃ devapurakkhato",
    "4. tatthāhaṃ pāṭavatthāya, bhikkhūnaṃ piṭakuttame <br>abhidhammāvatāran tu, madhuraṃ mativaḍḍhanaṃ",
    "5. tāḷaṃ mohakavāṭassa, vighāṭanam anuttaraṃ bhikkhūnaṃ <br>pavisantānaṃ, abhidhamma-mahāpuraṃ",
    "6. suduttaraṃ tarantānaṃ, abhidhammamahodadhiṃ <br>suduttaraṃ tarantānaṃ, taraṃ 'va makarākaraṃ",
    "7. ābhidhammikabhikkhūnaṃ, hatthasāram anuttaraṃ<br> pavakkhāmi samāsena, taṃ suṇātha samāhitā",
  ],
  [
    "8. cittaṃ cetasikaṃ rūpaṃ, nibbānan ti niruttaro<br>catudhā desayī dhamme, catusaccappakāsano",
    "tattha cittan 'ti visayavijānanaṃ cittaṃ, tassa pana ko vacanattho? vuccate: sabbasaṅgāhakavasena pana cintetī ti cittaṃ, attasantānaṃ  vā cinotī ti pi cittaṃ. [2]",
    "9. vicittakaraṇā cittaṃ attano cittatāya vā,<br>  paññattiyam pi viññāṇe, vicitte cittakammake,<br>  cittasammuti daṭṭhabbā viññāṇe idha viññunā",
    "taṃ pana sārammaṇato ekavidhaṃ, savipākāvipākato duvidhaṃ. tattha savipākaṃ nāma kusalākusalaṃ; avipākaṃ abyākataṃ. kusalākusalābyākatajātibhedato tividhaṃ. tattha kusalan 'ti pan' etassa ko vacanattho?",
    "10. kucchitānaṃ salanato, kusānaṃ lavanena vā<br>  kusena lātabbattā vā, kusalan 'ti pavuccati",
    "11. cheke kusalasaddo 'yaṃ, ārogye anavajjake<br>  diṭṭho iṭṭhavipāke pi, anavajjādike idha",
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
    "8. The Unsurpassed One who made known the four noble truths taught four dhammas: consciousness, mental factors, matter and nibbāna.",
    "Herein, ‘consciousness’ means consciousness as cognizing an object. What does it mean? It is said, all-inclusively  it’s called ‘consciousness’ (citta) because it thinks (cinteti) ; or else it is called consciousness as that which accumulates (cinoti) the continuum of one-self. [2]",
    "9. It’s called ‘consciousness’ (citta) due to its making things variegated (vicitta/vicitra), or due to its own being variegated (cittatā/citratā). [It can mean] mind as concept , cognition (viññāṇa), variegated (vicitta), and painting-work (cittakammaka) . Here it should be understood by a wise person in the sense of cognition.",
    "It is of one kind as to having an object; it is of two kinds with regard to producing and not producing results. Herein, wholesome and unwholesome are productive of results; indeterminate ones are not productive of results. According to its classification as wholesome, unwholesome, or indeterminate, it is of three kinds. What is the meaning of this ‘wholesome’ (kusala) here?",
    "10. It’s called ‘wholesome’ because of its shaking (salana) contemptible (kucchita), or cutting (lavana) of blades of kusa grass (kusa) , or else because it is something that by knowledge (kusa)  should be acquired (lātabba).",
    "11. The word ‘wholesome’ is seen in the meanings: clever, health, faultless, and giving agreeable results. Herein, [it means] ‘blameless’, and ‘giving agreeable results’.",
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
    "8. The one who showed the four ennobling truths,  four dhammas taught the Unsurpassed One:  Citta or consciousness, cetasika – mental factors,  rūpa or matter, and nibbāna.",
    "Here, citta means consciousness as cognition of an object. What does it mean? Any citta is called so because it thinks (cinteti) [about an object], or, because the cittas [that constitute an action] also accumulate (cinoti) the continuum of one-self.",
    "9. It variegates or it is variegated-vicitta thus it’s citta.  It can denote a painting or simply a name, cognition or a thing variegated.  The meaning of cognition is the sense   That knowledgeable should understand here.",
    "",
    "10. Contemtible-ku it shakes-sala thus it’s called kusala.  Like blades of kusa grass it cuts thus it is kusala.  Or else by knowledge-kusa it’s to be acquired, so it’s named kusala.",
    "11. In many meanings kusala is seen:   Health, skilful, faultless, and agreeable results producing.  In here, the last two are the ones that we mean.",
  ],
];
