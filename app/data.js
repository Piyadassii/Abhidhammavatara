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
      "This Burmese script palm-leaf manuscript is the oldest dated manuscript that I was able to obtain.  It is held at the Universities' Central Library in Yangon, Myanmar under accession number 3738. The library digitalised this and other manuscripts from their collection on my request and provided me with good quality images. The text comes in a bundle together with its newer commentary, the <em>Abhidhammatthavikāsinī</em>. The leaves are 51*6.5 cm in size and usually have ten lines of rather clear writing. The title in the upper right corner of recto sides is Abhidhammāvatārajāko. A total of 51 leaves are numbered in the upper left corner of recto sides beginning with <em>ka</em> and ending with <em>ñe</em>. Even though being the oldest among available to me manuscripts it is abundant with mistakes, most frequent being <em>i</em> for <em>ī</em>, <em>ā</em> for <em>o</em>, <em>a</em> for <em>ā</em>, omission of syllables and <em>niggahīta</em>, <em>ṭ</em> for <em>ṭṭh</em>, sometimes <em>di</em> for <em>ti</em>, <em>tta</em> for <em>ttha</em>, and <em>ttha</em> for <em>tta</em>. Immediately after the text come first ten verses of the <em>Namakkārapāḷi</em>, which are followed by a colophon in Burmese stating that the copying of the commentary on abhidhamma was completed on the 1st day after the full moon of the tenth month in 1185 <em>Sakkarāja</em> year (1804).",
  },
  {
    witness: "I",
    description:
      "This Burmese script palm-leaf manuscript is the second oldest dated manuscript that I was able to obtain. It is held at the Universities' Central Library in Yangon, Myanmar under accession number 3922. The text comes in a bundle together with its two commentaries. The leaves are 48*6 cm in size and usually have ten lines of clear round writing. The title in the upper right corner of recto sides is Abhidhammāvatāra. A total of 46 leaves are numbered in the upper left corner of recto sides beginning with <em>ka</em> and ending with <em>ghau</em>. Mistakes are few, common ones being <em>i</em> for <em>ī</em>, the omission of <em>niggahīta</em>, and sometimes mu for pu. The colophon does not come immediately after the text but after the old commentary declaring the sacredness of letters with a common formula `<em>akkharaṃ ekamekañ ca buddharūpasamaṃ siyā</em>' and aspiration for the attainment of threefold wisdom, and after the new commentary stating the date of completion of copying being 2nd day in the half-month of the waxing moon of the fourth month in 1207 <em>Sakkarāja</em> year (1845), and expressing an aspiration for the attainment of <em>nibbāna</em>.",
  },
  {
    witness: "E",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL3771 and downloaded from <a href='http://purl.bdrc.io/resource/MW1FPL3771' target='_blank'>tbrs.org</a>. The images are of average quality. The text is bundled with three other texts: the <em>Samohavinodanī</em>, the <em>Nāmarūpapariccheda</em>, and the <em>Khemāpakaraṇa</em>. A total of 46 leaves are numbered in the upper left corner of recto sides beginning with <em>da</em> and ending with <em>pā:</em> and usually have 10 lines of somewhat crammed handwriting with frequent corrections. It does not distinguish between <em>i</em> and <em>ī</em> or <em>tta</em> and <em>ṭṭa</em>. The colophon does not come immediately after the text, but rather after the last text of the bundle stating that the copying was completed on the 6th day in the half-month of the waxing moon of the eighth month in 1226 <em>Sakkarāja</em> year (1864).",
  },
  {
    witness: "B",
    description:
      "Burmese script digitalized palm-leaf manuscript from U Pho Ti Library in Thaton, Mon State, Myanmar,  with identification number 761. It has been well described in <span data-tippy-content='Prutt, W., Y. Ousaka, and S. Kasamatsu (2019). Bristol: Pali Text Society.'>Prutt, Ousaka, and Kasamatsu (2019, p. 363).</span> Most frequent mistakes are <em>ya</em> for <em>ra</em>, <em>bba</em> for <em>ppa</em> and <em>ppha</em>, the omission of <em>niggahita</em> and sometimes entire words. The text is followed by an unusual verse in Pāḷī `<em>vamitabbaṃ vamittayaṃ ramitabbañ ca taṃ buddhaṃ dhammamaggaṃ namāmataṃ mahitabbaṃ gaṇaṅ guruṃ</em>' followed by its <em>nissaya</em>, lengthy aspirations and the date of completing copying, which was the 4th day in the half-month of the waxing moon of the first month in 1224 <em>Sakkarāja</em> year (1862) (<span data-tippy-content='Prutt, W., Y. Ousaka, and S. Kasamatsu (2019). Bristol: Pali Text Society.'>Prutt, Ousaka, and Kasamatsu (2019, ibid.).</span>, however, records the date as 1242).",
  },
  {
    witness: "D",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL2036 <a href='http://purl.bdrc.io/resource/MW1FPL2036' target='_blank'>tbrs.org</a>. The text is bundled with its new <em>nissaya</em>. A total of 52 leaves are numbered in the upper left corner of recto sides beginning with <em>ka</em> and ending with <em>ñū</em> and usually have 9 lines of mostly clear handwriting. The title in the upper right corner of recto sides is Abhidhammāvatārapāḷi. Apart from such common mistakes as writing <em>i</em> for <em>ī</em>, <em>ta</em> for <em>ṭa</em>, or omitting <em>niggahīta</em>, it sometimes confuses <em>ya</em> and <em>ra</em>. Immediately after the text follow lengthy colophon that starts with the common Pāḷi formula declaring the sacredness of letters: `<em>akkharaṃ ekamekañ ca buddharūpasamaṃ siyā tasmā hi paṇḍito paso likheyya piṭakattayaṃ ahaṃ vandāmi sabbadā</em>'. Then the scribe first dedicates the merit acquired in Burmese. After, in a form of Pāli <em>nissaya</em>, he expresses an aspiration for the attainment of nibbāna and acquiring various qualities of the great disciples of the Buddha. The date of completion of copying the manuscript, which comes in a colophon after the <em>Abhidhammāvatāranissaya</em>, is the 10th day in the half-month of the waxing moon of the tenth month in 1240 <em>Sakkarāja</em> year (1879).",
  },
  {
    witness: "F",
    description:
      "Burmese script digitalized palm-leaf manuscript from <a href='kelasa.org' target='_blank'>kelasa.org</a> collection with identification number 1918. The quality of the pictures is not uniform, some are of higher resolution than others. The text is bundled with ten other abhidhamma texts: the <em>Paramatthavinicchaya</em>, the <em>Khemāpakaraṇa</em>, the <em>Nāmācāradīpaka</em>, the <em>Saccasaṅkhepa</em>, the <em>Rūpavibhāga</em>, the <em>Rūpārūpavibhāga</em>, the <em>Nāmarūpapariccheda</em>, the <em>Abhidhammatthasaṅgaha</em>, the <em>Saṅkhepa</em>, and the <em>Apheggusāradīpani</em>. A total of 43 leaves are numbered in the upper left corner of recto sides beginning with <em>ka</em> and ending with <em>ghè</em>. They usually have 12 lines of mostly clear handwriting. The title in the upper right corner of recto sides is <em>Abhidhammāvatārapāḷi</em>. Mistakes are not too many, among them short for long vowels, occasional omission of <em>niggahita</em>, and <em>ba</em> for <em>pha</em>. Throughout the first chapter, it spells <em>kriya</em> as <em>kiriya</em>, even in verses where the additional vowel breaks the meter. According to the colophon, which comes immediately after the text, the copying completion date is the 1st day in the half-month of the waning moon of the fourth month in 1277 <em>Sakkarāja</em> year (1915). On the right margin of the last leaf of the bundle are stated donors' names and the town where the copying was done, Dedaye (De:daè).",
  },
  {
    witness: "A",
    description:
      "Burmese script digitalized palm-leaf manuscript from U Pho Ti Library in Thaton, Mon State, Myanmar,  with identification number 589. It has been described in <span data-tippy-content='Prutt, W., Y. Ousaka, and S. Kasamatsu (2019). Bristol: Pali Text Society.'>Prutt, Ousaka, and Kasamatsu (2019, p. 264).</span> Mistakes are only occasional. The title in the upper right corner of recto sides is <em>Abhidhammāvatārapāḷi</em>. Immediately after the text follows the colophon stating that the copying of the manuscript was completed on the 1st day after the full moon of the ninth month in 1290 <em>Sakkarāja</em> year (1928). On the left margin of the first and the last leaves of the text are stated donor's name and the town where the copying was done, Thaton (Sathuṃ).",
  },
  {
    witness: "G",
    description:
      "Kham script palm-leaf manuscript from Pāli Manuscript Collection in the Royal Asiatic Society with identification number Ras 34, the digital copy of which available for download from <a href='https://archive.org/details/rasburmese34' target='_blank'>archive.org</a>. It has been described in <span data-tippy-content='Filliozat, Jacqueline (1999). “Survey of the Pāli Manuscript Collection in the Royal Asiatic Society”. In: Journal of the Royal Asiatic Society 9, pp. 35–76.'>Filliozat (1999, p.46)</span>. Copying date is not stated, but Filliozat (1999, ibid.) conjectures that it might have been the manuscript that was presented to the Society in 1858 by King Mongkut (Rama IV). Six bundles of 183 leaves of text in total usually have five lines of clear writing, and a page number on the left of recto sides beginning with <em>ka</em> and ending with <em>ttaḥ</em>. The title written on the 1st leaf of each bundle is <em>braḥ pāṭha abhidhammavatāra phuk</em>. Mistakes are rare. Free space of the last leaf is filled with the `<em>Iti pi so</em>' formula up to <em>akāliko</em>. No colophon.",
  },
  {
    witness: "H",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL527 <a href='http://purl.bdrc.io/resource/MW1FPL527' target='_blank'>tbrs.org</a>). The text comes in a bundle together with its two commentaries. A total of 43 leaves are numbered in the upper left corner of recto sides beginning with <em>ka</em> and ending with <em>gho</em> and usually have 11 lines of clear handwriting. The title in the upper right corner of recto sides is <em>Abhidhammāvatārapāḷi</em>. Mistakes are only occasional. One colophon in Burmese at the end of the bundle. It only dedicates the merits and does not indicate any date.",
  },
  {
    witness: "PTS",
    description:
      "This Roman script printed edition of the <em>Abhidhammāvatāra</em> published in 1915 was prepared by A. P. Buddhadatta. It is the first text of the first volume of `<em>The Buddhadatta's Manuals</em>' and occupies 138 pages. Buddhadatta does not describe his sources but does mention that by the end of his work he got hold of a Burmese manuscript and has supplied variant readings from it. The text is accompanied by a thin critical apparatus. Being Sinhalese, the editor most likely used a Sinhalese manuscript or manuscripts. After the text, is attached the appendix with references to the <em>Nikāyas</em> that Mrs. Rhys Davids was able to trace, and some parallel passages supplied by A. P. Buddhadatta.",
  },
  {
    witness: "CS",
    description:
      "This Burmese script printed edition of the <em>Abhidhammāvatāra</em> published in 1962 represents the text recited at the sixth Buddhist council. The text occupies the first 186 pages of the book and is followed by three other works on abhidhamma: the <em>Nāmarūpapariccheda</em>, the <em>Paramatthavinicchaya</em>, and the <em>Saccasaṅkhepa</em>. In footnotes alternative Burmese and Sinhalese variants, and, on very rare occasions, references to <em>Tipiṭaka</em> are provided. The romanized version of the text is available at <a href='tipitaka.org' target='_blank'>tipitaka.org</a>, however, it is stripped off variants and references.",
  },
  {
    witness: "C",
    description:
      "Burmese script digitalized palm-leaf manuscript from Fragile Palm Leaves Project Works collection provided by Buddhist Digital Resource Center with identification number W1FPL640 <a href='http://purl.bdrc.io/resource/MW1FPL640' target='_blank'>tbrs.org</a>). Copied in 1905, it has share mistakes with <em>I</em> and adds more. Thus it must be either a descendant or a lower quality sibling of <em>I</em>. This was the reason for excluding it from the edition.",
  },
  {
    witness: "J",
    description:
      "Burmese script palm-leaf manuscript from the Universities' Central Library in Yangon, Myanmar under the accession number 3922, which was copied in 1913. It contains a large number of mistakes, mostly omitting syllables, words, and phrases. Handwriting is unclear. These were the main reason for excluding it from the edition.",
  },
  {
    witness: "L",
    description:
      "Burmese script palm-leaf manuscript from the Universities' Central Library in Yangon, Myanmar under the accession number 9714, which was copied in 1869. The main reason for excluding it from the edition was an overwhelmingly large amount of mistakes and its apparent relationship with <em>K</em>.",
  },
];
