var editionIds = [
  "CS",
  "PTS",
  "G",
  "A",
  "B",
  "I",
  "C",
  "D",
  "E",
  "F",
  "H",
  "K",
];

var bibleEditions = [
  "CS",
  "PTS",
  "G",
  "A",
  "B",
  "I",
  "C",
  "D",
  "E",
  "F",
  "H",
  "K",
];

var verses = "21 - 24";

var bibleVerses = [
  [
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā cānumodo diṭṭhijjuttaṃ saṃsuti ccāpacāyo ñeyyo evaṃ puññavatthuppabhedo ",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā cānumodo diṭṭhijjuttaṃ saṃsuti cāpacāyo/diṭṭhujjukammaṃ suti ñeyyo evaṃ puññavatthuppabhedo ",
    "<21> dānaṃ sīlañ ca bhāvanā pattidānaṃ veyyāvaccaṃ desanā cānumodanā diṭṭhijuttaṃ saṃsuti vāpacāyo ca ñeyyo evaṃ puññavatthupabhedato",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā ānumodo diṭṭhijjukkammaṃ suti cāpacāyo ñeyyo evaṃ puññavatthuppabhedo ",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā cānumodana diṭṭhijjuttaṃ saṃsuti apacāyo ñeyyo evaṃ puññavatthuppabhedo ",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā ānumodo diṭṭhijjukammasuti avacāyo ñeyyo evaṃ puññavatthuppabhedo",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā anumodo diṭṭhijjukammaṃ saṃsuti apacāyo ñeyyo evaṃ puññavatthuppabhedo ",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā cānumodo diṭṭhijuttasaṃsuti cāpacāyo ñeyyo evaṃ puññavatthuppabhedo",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccadesanā anumodanā diṭṭhijjuttaṃ saṃsuti apacāyo ñeyyo evaṃ puññavatthuppabhedo",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanānumodo diṭṭhijutaṃ saṃsūti cāpacāyo ññeyyo evaṃ puññavatthuppabhedo",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanā cānumodo diṭṭhijjuttaṃ saṃsuti cāpacāyo ñeyyo evaṃ puññavatthuppabhedo ",
    "<21> dānaṃ sīlaṃ bhāvanā pattidānaṃ veyyāvaccaṃ desanānumodo diṭṭhivuttasaṃsuti cāpacāyo ñeyyo evaṃ puññavatthuppabhedo",
  ],
  [
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyino",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ thane pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvajjapacāyanā",
    "<22> gacchanti saṅgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccāpacāyanā",
    "<22> gacchanti saṃgahaṃ dāne pattidānānumodanā tathā sīlamaye puññe veyyāvaccapacāyanā",
  ],
  [
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanā diṭṭha-ujjukā bhāvanāmaye puna tiṇ eva sambhonti dasa puñña kriyā pi ca",
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanadiṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakiriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujutā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujutā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujukā bhāvanāmaye puna tīṇ eva sambhonti dasa puññakriyā pi ca ",
    "<23> desanā savanaṃ diṭṭhi-ujutā bhāvanāmaye puna tin eva sambhonti dasa puññakriyā pi ca ",
  ],
  [
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṃgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṃgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇattayaṃ yanti diṭṭhijukammasmiṃ saṅgahaṃ natthi saṃsayo ",
    "<24> sabbānussatipuññañ ca pasaṃsā saraṇatthaṃ yaṃ yanti diṭṭhijukammasmiṃ saṃgahaṃ natthi saṃsayo",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", "", ""],
];
