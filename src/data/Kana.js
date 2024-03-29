const kanaArray = [
  {
    romaji: "a",
    hiragana: "あ",
    katakana: "ア",
  },
  {
    romaji: "i",
    hiragana: "い",
    katakana: "イ",
  },
  {
    romaji: "u",
    hiragana: "う",
    katakana: "ウ",
  },
  {
    romaji: "e",
    hiragana: "え",
    katakana: "エ",
  },
  {
    romaji: "o",
    hiragana: "お",
    katakana: "オ",
  },
  {
    romaji: "ka",
    hiragana: "か",
    katakana: "カ",
  },
  {
    romaji: "ki",
    hiragana: "き",
    katakana: "キ",
  },
  {
    romaji: "ku",
    hiragana: "く",
    katakana: "ク",
  },
  {
    romaji: "ke",
    hiragana: "け",
    katakana: "ケ",
  },
  {
    romaji: "ko",
    hiragana: "こ",
    katakana: "コ",
  },
  {
    romaji: "sa",
    hiragana: "さ",
    katakana: "サ",
  },
  {
    romaji: "shi",
    hiragana: "し",
    katakana: "シ",
  },
  {
    romaji: "su",
    hiragana: "す",
    katakana: "ス",
  },
  {
    romaji: "se",
    hiragana: "せ",
    katakana: "セ",
  },
  {
    romaji: "so",
    hiragana: "そ",
    katakana: "ソ",
  },
  {
    romaji: "ta",
    hiragana: "た",
    katakana: "タ",
  },
  {
    romaji: "chi",
    hiragana: "ち",
    katakana: "チ",
  },
  {
    romaji: "tsu",
    hiragana: "つ",
    katakana: "ツ",
  },
  {
    romaji: "te",
    hiragana: "て",
    katakana: "テ",
  },
  {
    romaji: "to",
    hiragana: "と",
    katakana: "ト",
  },
  {
    romaji: "na",
    hiragana: "な",
    katakana: "ナ",
  },
  {
    romaji: "ni",
    hiragana: "に",
    katakana: "ニ",
  },
  {
    romaji: "nu",
    hiragana: "ぬ",
    katakana: "ヌ",
  },
  {
    romaji: "ne",
    hiragana: "ね",
    katakana: "ネ",
  },
  {
    romaji: "no",
    hiragana: "の",
    katakana: "ノ",
  },
  {
    romaji: "ha",
    hiragana: "は",
    katakana: "ハ",
  },
  {
    romaji: "hi",
    hiragana: "ひ",
    katakana: "ヒ",
  },
  {
    romaji: "fu",
    hiragana: "ふ",
    katakana: "フ",
  },
  {
    romaji: "he",
    hiragana: "へ",
    katakana: "ヘ",
  },
  {
    romaji: "ho",
    hiragana: "ほ",
    katakana: "ホ",
  },
  {
    romaji: "ma",
    hiragana: "ま",
    katakana: "マ",
  },
  {
    romaji: "mi",
    hiragana: "み",
    katakana: "ミ",
  },
  {
    romaji: "mu",
    hiragana: "む",
    katakana: "ム",
  },
  {
    romaji: "me",
    hiragana: "め",
    katakana: "メ",
  },
  {
    romaji: "mo",
    hiragana: "も",
    katakana: "モ",
  },
  {
    romaji: "ya",
    hiragana: "や",
    katakana: "ヤ",
  },
  {
    romaji: "yu",
    hiragana: "ゆ",
    katakana: "ユ",
  },
  {
    romaji: "yo",
    hiragana: "よ",
    katakana: "ヨ",
  },

  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "ra",
    hiragana: "ら",
    katakana: "ラ",
  },
  {
    romaji: "ri",
    hiragana: "り",
    katakana: "リ",
  },
  {
    romaji: "ru",
    hiragana: "る",
    katakana: "ル",
  },
  {
    romaji: "re",
    hiragana: "れ",
    katakana: "レ",
  },
  {
    romaji: "ro",
    hiragana: "ろ",
    katakana: "ロ",
  },
  {
    romaji: "wa",
    hiragana: "わ",
    katakana: "ワ",
  },
  {
    romaji: "wo",
    hiragana: "を",
    katakana: "ヲ",
  },
  {
    romaji: "n",
    hiragana: "ん",
    katakana: "ン",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "ga",
    hiragana: "が",
    katakana: "ガ",
  },
  {
    romaji: "gi",
    hiragana: "ぎ",
    katakana: "ギ",
  },
  {
    romaji: "gu",
    hiragana: "ぐ",
    katakana: "グ",
  },
  {
    romaji: "ge",
    hiragana: "げ",
    katakana: "ゲ",
  },
  {
    romaji: "go",
    hiragana: "ご",
    katakana: "ゴ",
  },
  {
    romaji: "za",
    hiragana: "ざ",
    katakana: "ザ",
  },
  {
    romaji: "ji",
    hiragana: "じ",
    katakana: "ジ",
  },
  {
    romaji: "zu",
    hiragana: "ず",
    katakana: "ズ",
  },
  {
    romaji: "ze",
    hiragana: "ぜ",
    katakana: "ゼ",
  },
  {
    romaji: "zo",
    hiragana: "ぞ",
    katakana: "ゾ",
  },
  {
    romaji: "da",
    hiragana: "だ",
    katakana: "ダ",
  },
  {
    romaji: "ji",
    hiragana: "ぢ",
    katakana: "ヂ",
  },
  {
    romaji: "zu",
    hiragana: "づ",
    katakana: "ヅ",
  },
  {
    romaji: "de",
    hiragana: "で",
    katakana: "デ",
  },
  {
    romaji: "do",
    hiragana: "ど",
    katakana: "ド",
  },
  {
    romaji: "ba",
    hiragana: "ば",
    katakana: "バ",
  },
  {
    romaji: "bi",
    hiragana: "び",
    katakana: "ビ",
  },
  {
    romaji: "bu",
    hiragana: "ぶ",
    katakana: "ブ",
  },
  {
    romaji: "be",
    hiragana: "べ",
    katakana: "ベ",
  },
  {
    romaji: "bo",
    hiragana: "ぼ",
    katakana: "ボ",
  },
  {
    romaji: "pa",
    hiragana: "ぱ",
    katakana: "パ",
  },
  {
    romaji: "pi",
    hiragana: "ぴ",
    katakana: "ピ",
  },
  {
    romaji: "pu",
    hiragana: "ぷ",
    katakana: "プ",
  },
  {
    romaji: "pe",
    hiragana: "ぺ",
    katakana: "ペ",
  },
  {
    romaji: "po",
    hiragana: "ぽ",
    katakana: "ポ",
  },
];

module.exports = { kanaArray };
