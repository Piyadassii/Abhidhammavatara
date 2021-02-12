const readings = [
  // intro
  [
    {
      chapter: 0,
      lemma: "anuttaraṃ",
      positiveWitnesses: ["A", "E", "G", "H", "I", "PTS", "CS"],
      readings: [{ reading: "anuttamaṃ", wit: ["B", "D", "F", "H", "K"] }],
    },
    {
      chapter: 0,
      lemma: "tatthāhaṃ",
      positiveWitnesses: ["D", "F", "G", "H", "I", "K", "PTS", "CS"],
      readings: [{ reading: "tatthā taṃ", wit: ["B"] }],
    },
  ],
  // chapter 1
  [
    {
      chapter: 1,
      lemma: "pi",
      positiveWitnesses: ["A", "B", "E", "H", "I", "CS"],
      readings: [{ reading: "ca", wit: ["D", "F", "G", "K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "-ppayogabhedato",
      positiveWitnesses: ["A", "D", "E", "H", "K", "CS"],
      readings: [
        {
          reading: "saṅkhāra-sampayoga-vippayogabhedato",
          wit: ["B", "F", "I", "PTS"],
        },
        {
          reading:
            "somanassu …pe… bhedato 'ti bheda-saddo paccekaṃ sambandhitabbo ‘somanassupekkhābhedato ñāṇabhedato payogabhedato ’ti",
          wit: ["Ṭ<sup>Ab</sup>"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "klesavatthuvasā",
      positiveWitnesses: ["A", "D", "F", "G", "CS", "PTS"],
      readings: [{ reading: "kilesavatthuvasā", wit: ["B", "E", "I", "K"] }],
    },
    {
      chapter: 1,
      lemma: "vasenāvacaratī",
      positiveWitnesses: ["A", "B", "D", "E", "G", "H", "I", "CS", "PTS"],
      readings: [{ reading: "vasen' eva caratī", wit: ["F", "K"] }],
    },
    {
      chapter: 1,
      lemma: "sīlaṃ",
      positiveWitnesses: ["A", "B", "I", "D", "E", "F", "H", "K", "CS", "PTS"],
      readings: [{ reading: "sīlañ ca", wit: ["G"] }],
    },
    {
      chapter: 1,
      lemma: "cānumodo",
      positiveWitnesses: ["D", "H", "CS", "PTS"],
      readings: [
        { reading: "cānumodanā", wit: ["B", "G"] },
        { reading: "ānumodo", wit: ["A", "I"] },
      ],
    },
    {
      chapter: 1,
      lemma: "diṭṭhijuttaṃ saṃsuti",
      positiveWitnesses: ["B", "D", "E", "F", "G", "H", "CS", "PTS"],
      readings: [{ reading: "diṭṭhijjukammasuti", wit: ["A", "I"] }],
    },
    {
      chapter: 1,
      lemma: "honti",
      positiveWitnesses: ["B", "I", "K", "PTS"],
      readings: [
        {
          reading: "hoti",
          wit: ["A", "D", "E", "F", "G", "H", "CS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "assa",
      positiveWitnesses: ["A", "D", "E", "F", "G", "H", "K", "CS"],
      readings: [
        { reading: "ayaṃ", wit: ["B", "I"] },
        { reading: "om.", wit: ["PTS"] },
      ],
    },
    {
      chapter: 1,
      lemma: "hi",
      positiveWitnesses: ["A", "B", "D", "G", "H", "CS"],
      readings: [{ reading: "hi pana", wit: ["E", "F", "I", "K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "bāladārakā",
      positiveWitnesses: ["A", "B", "I", "E", "F", "K", "PTS"],
      readings: [
        {
          reading: "bālakā",
          wit: ["G", "H", "CS", "Ṭ<sup>A</sup>"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "bhikkhū",
      positiveWitnesses: ["A", "B", "G", "I", "H", "K", "PTS"],
      readings: [{ reading: "bhikkhuṃ", wit: ["E", "F"] }],
    },
    {
      chapter: 1,
      lemma: "pi",
      positiveWitnesses: ["A", "B", "G", "I", "CS"],
      readings: [{ reading: "om.", wit: ["D", "E", "F", "H", "K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "-payogabhedato",
      positiveWitnesses: ["A", "E", "H", "K", "CS"],
      readings: [
        { reading: "-sampayogabhedato", wit: ["B", "D", "I", "F"] },
        { reading: "-ppayogavippayogādibhedato", wit: ["G"] },
        { reading: "saṅkhārabhedato", wit: ["PTS"] },
      ],
    },
    {
      chapter: 1,
      lemma: "pakāsaye",
      positiveWitnesses: ["all"],
      readings: [
        {
          reading:
            "dasapuññakriyāvatthu, chadvārādhipatīhi ca | kāyādīhi ca tīh' eva, hīnādīhi ca tīhi tu (Abhidh-av-pṭ I 6)",
          wit: ["G", "adds"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "jhānaṅgayogabhedato",
      positiveWitnesses: ["A", "B", "I", "D", "E", "F", "G", "H", "CS"],
      readings: [{ reading: "jhānaṅgabhedato", wit: ["PTS"] }],
    },
    {
      chapter: 1,
      lemma: "rūpāvacarakusalaṃ",
      positiveWitnesses: ["A", "B", "I", "D", "E", "F", "H", "K", "CS", "PTS"],
      readings: [{ reading: "rūpāvacarakusalacittaṃ", wit: ["G"] }],
    },
    {
      chapter: 1,
      lemma: "nevasaññānāsaññāyatana-saññāsahagatan",
      positiveWitnesses: ["B", "I", "D", "E", "F", "H", "CS"],
      readings: [
        {
          reading: "nevasaññānāsaññāyatana-sahagatan",
          wit: ["A", "K", "PTS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "hoti",
      positiveWitnesses: ["H", "CS", "PTS"],
      readings: [
        { reading: "ti", wit: ["A", "B", "D", "E", "F", "G", "I", "K"] },
      ],
    },
    {
      chapter: 1,
      lemma: "evaṃ",
      positiveWitnesses: ["all"],
      readings: [{ reading: "tāva", wit: ["PTS", "adds"] }],
    },
    {
      chapter: 1,
      lemma: "tanuttakaraṃ",
      positiveWitnesses: ["A", "B", "I", "D", "E", "CS", "PTS"],
      readings: [{ reading: "tanukaraṃ", wit: ["F", "K"] }],
    },
    {
      chapter: 1,
      lemma: "cattāri ’rūpisu",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "cattārarūpisu", wit: ["PTS", "(em?)"] }],
    },
    {
      chapter: 1,
      lemma: "cattārānuttarān",
      positiveWitnesses: ["A", "B", "G", "CS"],
      readings: [
        {
          reading: "cattāronuttarān",
          wit: ["D", "F", "I", "H", "K", "PTS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "satā",
      positiveWitnesses: ["A", "D", "F", "G", "H", "I", "K", "CS", "PTS"],
      readings: [{ reading: "sadā", wit: ["B", "E"] }],
    },
    {
      chapter: 1,
      lemma: "ca yaṃ",
      positiveWitnesses: ["A", "D", "F", "G", "H", "K", "CS", "PTS"],
      readings: [{ reading: "vasaṃ", wit: ["B", "E", "I"] }],
    },
    {
      chapter: 1,
      lemma: "-janakājanakavasena",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "I", "K", "CS", "PTS"],
      readings: [{ reading: "-janakājanakato", wit: ["H"] }],
    },
    {
      chapter: 1,
      lemma: "pi",
      positiveWitnesses: ["B", "D", "E", "F", "G", "H", "I", "K", "PTS"],
      readings: [{ reading: "ca", wit: ["A", "CS"] }],
    },
    {
      chapter: 1,
      lemma: "-ppayogabhedato",
      positiveWitnesses: ["A", "B", "E", "H", "I", "K", "CS", "PTS"],
      readings: [
        { reading: "-sampayogādibhedato", wit: ["G"] },
        { reading: "-sampayogabhedato", wit: ["D", "F"] },
        { reading: "-diṭṭhigatasaṅkhārabhedato", wit: ["Vism"] },
      ],
    },
    {
      chapter: 1,
      lemma: "'ssa",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "CS"],
      readings: [{ reading: "om.", wit: ["K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "-tikkhena",
      positiveWitnesses: ["B", "D", "E", "I", "K", "PTS"],
      readings: [
        {
          reading: "-tikkhen' eva",
          wit: ["A", "F", "G", "H", "CS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "yadā",
      positiveWitnesses: ["all"],
      readings: [{ reading: "pada", wit: ["PTS adds"] }],
    },
    {
      chapter: 1,
      lemma: "catūsu",
      positiveWitnesses: ["B", "E", "F", "G", "H", "I", "K", "PTS"],
      readings: [{ reading: "catūsu pi", wit: ["A", "D", "CS"] }],
    },
    {
      chapter: 1,
      lemma: "-ppayogabhedato",
      positiveWitnesses: ["A", "B", "D", "E", "H", "CS"],
      readings: [
        { reading: "-sampayogābhedato", wit: ["F", "I"] },
        { reading: "-sampayogavippayogādibhedato", wit: ["G"] },
        { reading: "-yogabhedato", wit: ["K", "PTS"] },
      ],
    },
    {
      chapter: 1,
      lemma: "-sasaṅkhārabhedato",
      positiveWitnesses: ["A", "B", "D", "F", "G", "I", "K", "CS", "PTS"],
      readings: [{ reading: "-saṅkhārabhedato", wit: ["E", "H"] }],
    },
    {
      chapter: 1,
      lemma: "veditabban 'ti",
      positiveWitnesses: ["B", "E", "F", "G", "I", "K"],
      readings: [
        {
          reading: "veditabbaṃ",
          wit: ["A", "D", "H", "CS", "PTS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "sahetukavipākaṃ",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "sahetukavipākacittaṃ", wit: ["PTS"] }],
    },
    {
      chapter: 1,
      lemma: "-ppayogabhedato",
      positiveWitnesses: ["A", "D", "E", "H", "CS", "PTS"],
      readings: [
        { reading: "-sampayogabhedato", wit: ["B", "F", "K"] },
        { reading: "-sampayogavippayoggādibhedato", wit: ["G"] },
      ],
    },
    {
      chapter: 1,
      lemma: "c' eva",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "CS"],
      readings: [{ reading: "c' evaṃ", wit: ["K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "tattha",
      positiveWitnesses: ["B", "G", "I", "K"],
      readings: [
        {
          reading: "om.",
          wit: ["A", "D", "E", "F", "H", "CS", "PTS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "kāyavatthu",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "kāyavatthūni", wit: ["PTS", "(em?)"] }],
    },
    {
      chapter: 1,
      lemma: "kathaṃ",
      positiveWitnesses: ["A", "D", "E", "F", "G", "H", "K", "CS", "PTS"],
      readings: [{ reading: "om.", wit: ["B", "I"] }],
    },
    {
      chapter: 1,
      lemma: "paṭipadākkamo",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "paṭipadākkamā", wit: ["PTS"] }],
    },
    {
      chapter: 1,
      lemma: "veditabbo",
      positiveWitnesses: ["A", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "veditabbā", wit: ["B", "D", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "visesako",
      positiveWitnesses: ["A", "F", "I", "CS"],
      readings: [
        { reading: "visesato", wit: ["B", "D", "E", "H", "G"] },
        { reading: "visesatā", wit: ["PTS"] },
      ],
    },
    {
      chapter: 1,
      lemma: "c’ asesena",
      positiveWitnesses: ["A", "F", "H", "I", "CS", "PTS"],
      readings: [
        { reading: "visesena", wit: ["B", "D", "E"] },
        { reading: "asesena", wit: ["G"] },
      ],
    },
    {
      chapter: 1,
      lemma: "-vipākā",
      positiveWitnesses: ["A", "B", "D", "E", "F", "H", "I", "K", "CS"],
      readings: [{ reading: "-vipākacittāni", wit: ["G", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "-yutta-",
      positiveWitnesses: ["A", "B", "E", "H", "I", "K", "CS"],
      readings: [{ reading: "-sampayutta-", wit: ["D", "F", "G", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "kathaṃ",
      positiveWitnesses: ["A", "D", "E", "F", "G", "H", "K", "CS", "PTS"],
      readings: [{ reading: "om.", wit: ["B", "I"] }],
    },
    {
      chapter: 1,
      lemma: "maggavīthiphalasamāpattivasena duvidhaṃ",
      positiveWitnesses: [""],
      readings: [
        { reading: "phalavīthiphalasamāpattito duvidhaṃ", wit: ["F"] },
        { reading: "phalasamāpattimaggato navavidhaṃ", wit: ["PTS"] },
        {
          reading: "maggavīthiphalasamāpattivasena pavattanato duvidhaṃ",
          wit: ["Ṭ<sup>Ab</sup>", "Ṭ<sup>Am</sup>"],
        },
        {
          reading: "maggaphalasamāpattivasena pavattanato duvidhaṃ",
          wit: ["Ṭ<sup>Ac</sup>"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "ti",
      positiveWitnesses: ["F", "H", "K", "CS"],
      readings: [{ reading: "ca", wit: ["F", "H", "K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "valañjanaphalesu na",
      positiveWitnesses: ["PTS"],
      readings: [
        {
          reading: "valañjanaphalesu na",
          wit: ["A", "D", "E", "F", "H", "K", "CS", "Ṭ<sup>A</sup>"],
        },
        { reading: "vaḷañjanaphale puna", wit: ["B", "I"] },
      ],
    },
    {
      chapter: 1,
      lemma: "tato",
      positiveWitnesses: ["A", "B", "D", "E", "F", "H", "I", "K", "CS", "PTS"],
      readings: [{ reading: "dutiyavārato", wit: ["G"] }],
    },
    {
      chapter: 1,
      lemma: "-ppayoga-",
      positiveWitnesses: ["A", "H", "CS"],
      readings: [
        {
          reading: "-sampayoga-",
          wit: ["B", "D", "E", "F", "I", "K", "PTS"],
        },
        { reading: "-sampayogavipayogādi-", wit: ["G"] },
      ],
    },
    {
      chapter: 1,
      lemma: "asaṅkhārikaṃ, sasaṅkhārikaṃ",
      positiveWitnesses: ["A", "B", "D", "E", "F", "H", "I", "K", "CS", "PTS"],
      readings: [
        {
          reading: "asaṃkhārikaṃ ekaṃ, sasaṃkhārikaṃ ekaṃ",
          wit: ["G", "throughout"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "sādhāraṇāsādhāraṇā",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "asādhāraṇā sādhāraṇā", wit: ["PTS"] }],
    },
    {
      chapter: 1,
      lemma: "anuḷāresu",
      positiveWitnesses: ["A", "B", "D", "E", "F", "I", "K", "CS", "PTS"],
      readings: [{ reading: "anoḷārikesu", wit: ["G", "H"] }],
    },
    {
      chapter: 1,
      lemma: "chaḷārammaṇavijānana-lakkhaṇā",
      positiveWitnesses: ["all"],
      readings: [{ reading: "tathārūpamattavijananarasā", wit: ["G", "adds"] }],
    },
    {
      chapter: 1,
      lemma: "pana",
      positiveWitnesses: ["A", "B", "E", "H", "I", "CS"],
      readings: [{ reading: "om.", wit: ["D", "F", "G", "K", "PTS"] }],
    },
    {
      chapter: 1,
      lemma: "evaṃ",
      positiveWitnesses: ["A", "G", "H", "CS"],
      readings: [
        {
          reading: "eva",
          wit: ["B", "D", "E", "F", "I", "K", "PTS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "sekhaputhujjanānaṃ",
      positiveWitnesses: ["all"],
      readings: [{ reading: "uppajjanti", wit: ["PTS adds"] }],
    },
    {
      chapter: 1,
      lemma: "imāni",
      positiveWitnesses: ["D", "F", "I", "CS"],
      readings: [
        {
          reading: "imāni ca",
          wit: ["A", "B", "E", "H", "K", "PTS"],
        },
        { reading: "imāni pana", wit: ["G"] },
      ],
    },
    {
      chapter: 1,
      lemma: "pana",
      positiveWitnesses: ["A", "D", "E", "F", "H", "I", "K", "CS", "PTS"],
      readings: [{ reading: "om.", wit: ["B", "G"] }],
    },
    {
      chapter: 1,
      lemma: "-vasappavattānīti",
      positiveWitnesses: ["A", "E", "H", "I", "CS"],
      readings: [
        {
          reading: "-vasappavattāni",
          wit: ["B", "D", "F", "G", "K", "PTS"],
        },
      ],
    },
    {
      chapter: 1,
      lemma: "na samāpajjat’ eva naṃ",
      positiveWitnesses: ["A", "B", "D", "E", "G", "H", "I", "CS"],
      readings: [
        { reading: "samāpajjate pana", wit: ["F", "K", "PTS"] },
        { reading: "naṃ... na samāpajjate", wit: ["Ṭ<sup>P</sup>"] },
      ],
    },
    {
      chapter: 1,
      lemma: "niddiṭṭhā hi",
      positiveWitnesses: ["A", "F", "G", "I", "K", "CS", "PTS"],
      readings: [{ reading: "niddiṭṭhāni", wit: ["B", "D", "E", "H"] }],
    },
  ],
  //chapter 2
  [{
    chapter: 2,
    lemma: "",
    positiveWitnesses: [""],
    readings: [{ reading: "", wit: [""] }],
  },
  {
    chapter: 2,
    lemma: "",
    positiveWitnesses: [""],
    readings: [{ reading: "", wit: [""] }],
  },
  {
    chapter: 2,
    lemma: "",
    positiveWitnesses: [""],
    readings: [{ reading: "", wit: [""] }],
  }],
  //chapter 3
  [

  ],
  //chapter 4
  [

  ],
  //chapter 5
  [

  ],
  //chapter 6
  [

  ],
  //chapter 7
  [

  ],
  //chapter 8
  [

  ],
  //chapter 9
  [

  ],
  //chapter 10
  [

  ],
  //chapter 11
  [

  ],
  //chapter 12
  [

  ],
  //chapter 13
  [

  ],
  //chapter 14
  [

  ],
  //chapter 15
  [

  ],
  //chapter 16
  [

  ],
  //chapter 17
  [

  ],
  //chapter 18
  [

  ],
  //chapter 19
  [

  ],
  //chapter 20
  [

  ],
  //chapter 21
  [

  ],
  //chapter 22
  [

  ],
  //chapter 23
  [

  ],
  //chapter 24
  [

  ],
  //chapter 25
  [
    {
      chapter: 25,
      lemma: "-nāso",
      positiveWitnesses: ["A","B","E","H","I","CS", "Ṭ<sup>P</sup>"],
      readings: [{ reading: "-haro", wit: ["D","G","F","K", "PTS"] }],
    },
    {
      chapter: 25,
      lemma: "sumatinā mato",
      positiveWitnesses: ["A", "D", "F", "G", "H", "K", "CS", "PTS"],
      readings: [{ reading: "sumati nāmako", wit: ["B","E","I", "Ṭ<sup>P</sup>"] }],
    },
    {
      chapter: 25,
      lemma: "nāmato",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "CS", "PTS"],
      readings: [{ reading: "om.", wit: ["I", "K"] }],
    },
    {
      chapter: 25,
      lemma: "sammānato",
      positiveWitnesses: ["all"],
      readings: [{ reading: "asamānato", wit: ["Ṭ<sup>P</sup>"] }],
    },
    {
      chapter: 25,
      lemma: "mānato",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "CS", "PTS"],
      readings: [{ reading: "om.", wit: ["I", "K"] }],
    },
    {
      chapter: 25,
      lemma: "hi racito",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "viracito", wit: ["PTS"] }],
    },
    {
      chapter: 25,
      lemma: "padāto padā",
      positiveWitnesses: ["A", "B", "I", "PTS", "Ṭ<sup>P</sup>"],
      readings: [{ reading: "sadāto sadāto", wit: ["D", "F", "K"] }, { reading: "sadā tosadā", wit: ["E", "H", "CS", "Ṭ<sup>A</sup>"] }],
    },
    {
      chapter: 25,
      lemma: "cāpi",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "I", "CS"],
      readings: [{ reading: "vāpi", wit: ["H", "K", "PTS"] }],
    },
    {
      chapter: 25,
      lemma: "vāpi",
      positiveWitnesses: ["B", "D", "E", "F", "H", "I", "K", "PTS"],
      readings: [{ reading: "cāpi", wit: ["A", "G", "CS"] }],
    },
    {
      chapter: 25,
      lemma: "taṃ gahetabbaṃ",
      positiveWitnesses: ["D", "F", "G", "H", "K", "PTS"],
      readings: [{ reading: "saṅgahetabbaṃ", wit: ["A","B","I","E","CS"] }],
    },
    {
      chapter: 25,
      lemma: "dubbidhāpi",
      positiveWitnesses: ["A", "B",  "E",  "G", "H", "I",  "CS"],
      readings: [{ reading: "dullabhāpi ca", wit: ["D", "F", "K", "PTS"] }],
    },
    {
      chapter: 25,
      lemma: "supasannasitodake",
      positiveWitnesses: ["A", "CS", "Ṭ<sup>A</sup>"],
      readings: [{ reading: "susampannasitodake", wit: ["B","E","H"] }, { reading: "pasannasaritūdake", wit: ["D", "K", "PTS"] }, { reading: "sampannasarikūdake", wit: ["G"] },{ reading: "suppasannasaritudake", wit: ["F"] }],
    },
    {
      chapter: 25,
      lemma: "sadā",
      positiveWitnesses: ["A", "B", "E", "G", "H", "CS"],
      readings: [{ reading: "satā", wit: ["D","F","I","K","PTS"] }],
    },
    {
      chapter: 25,
      lemma: "rammasallekhasākhalye",
      positiveWitnesses: ["em."],
      readings: [{ reading: "asallekhamasākhalye", wit: ["A","E","I","CS"] }, { reading: "rammasallekhasākhalya", wit: ["D","F","K","PTS"] }, { reading: "sākhalye", wit: ["Ṭ<sup>P</sup>"] }],
    },
    {
      chapter: 25,
      lemma: "nāma",
      positiveWitnesses: ["A", "B", "D", "E", "F", "G", "H", "I", "K", "CS"],
      readings: [{ reading: "nāma gantho", wit: ["PTS"] }],
    },
    {
      chapter: 25,
      lemma: "uragapura-nivāsanena",
      positiveWitnesses: ["D", "F", "I", "K", "CS", "PTS"],
      readings: [{ reading: "uragapurake", wit: ["G"] }, { reading: "utusubha-", wit: ["A", "B", "E", "H"] }],
    },



  ]
];

const footnotes = [
  {
    page: "index",
    id: 1,
    note:
      "Karunadasa (1989, 2014), for example, often cites the text, and Gethin (2001) uses one chapter of the text along with the <i>Dhammasaṅgaṇi</i> and the <i>Atthasālinī</i> to establish commentarial treatment of <i>indriyas</i>, <i>balas</i>, <i>jhānaṅgas</i> and <i>maggaṅgas</i>.",
  },
  {
    page: "about",
    id: 1,
    note:
      "For example, for Nabokov 'The term “free translation” smacks of knavery and tyranny... The clumsiest literal translation is a thousand times more useful than the prettiest paraphrase.' <span data-tippy-content = 'Nabokov, Vladimir (2012). Problems of Translation: Onegin in English. In: <i>The Translation Studies Reader.</i> Ed. by Lawrence Venuti. 3rd ed. Oxon; New York: Routledge, pp. 113–126.'>(Nabokov 2012, p. 113)</span>",
  },
  {
    page: "translation",
    id: 1,
    note:
      "Abhi-āv-pt I 1: When consciousness is defined as that which knows, thinks about an object, all consciousness is meant (<i>ārammaṇaṃ cinteti jānātīti cittaṃ, tadā sabbaṃ cittaṃ adhippetaṃ</i>).",
  },
  {
    page: "translation",
    id: 2,
    note:
      "Abhi-āv-pt I 1: When consciousness is defined as that which accumulates the continuum of one-self, only wholesome, unwholesome and great functional consciousness is meant (<i>javanavīthivasena attasantānaṃ cinotī ti cittaṃ, tadā kusalākusalamahākiriyācittaṃ adhippetaṃ</i>).",
  },
  { page: "about", id: 2, note: "Second about note" },
];

const notesPali = [
  [],
  [
    "Abhi-āv-pt I 1: <i>Ārammaṇaṃ cinteti jānātīti cittaṃ, tadā sabbaṃ cittaṃ adhippetaṃ.</i>",
    "Abhi-āv-pt I 1: <i>Javanavīthivasena attasantānaṃ cinotī ti cittaṃ, tadā kusalākusalamahākiriyācittaṃ adhippetaṃ</i>.",
  ],
];

const notesLit = [
  [],
  [
    "Abhi-āv-pt I 1: When consciousness is defined as that which knows, thinks about an object, all consciousness is meant.",
    "Abhi-āv-pt I 1: When consciousness is defined as that which accumulates the continuum of one-self, only wholesome, unwholesome and great functional consciousness is meant.",
  ],
];

notesToTrans = [
  {
    text: "english",
    chapter: 1,
    id: 1,
    note:
      "Abhi-āv-pt I 1: When consciousness is defined as that which knows, thinks about an object, all consciousness is meant (<i>ārammaṇaṃ cinteti jānātīti cittaṃ, tadā sabbaṃ cittaṃ adhippetaṃ</i>).",
  },
  {
    text: "english",
    chapter: 1,
    id: 2,
    note:
      "Abhi-āv-pt I 1: When consciousness is defined as that which accumulates the continuum of one-self, only wholesome, unwholesome and great functional consciousness is meant (<i>javanavīthivasena attasantānaṃ cinotī ti cittaṃ, tadā kusalākusalamahākiriyācittaṃ adhippetaṃ</i>).",
  },
];
