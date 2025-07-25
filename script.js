document.getElementById("button").addEventListener("click", translateToEmoji);

function translateToEmoji() {
    const inputText = document.getElementById("input").value.toLowerCase();
    const outputDiv = document.getElementById("output");

const emojiMap = {
  love: "❤️", heart: "❤️", like: "👍",
  pizza: "🍕", burger: "🍔", fries: "🍟", taco: "🌮", salad: "🥗", sushi: "🍣", cake: "🍰", dessert: "🧁", chocolate: "🍫",
  dog: "🐶", dogs: "🐶", puppy: "🐶",
  cat: "🐱", cats: "🐱", kitten: "🐱",
  smile: "😄", happy: "😊", joy: "😂", laughing: "😆", grin: "😁",
  sad: "😢", cry: "😭", tears: "😭", disappointed: "😞",
  sun: "☀️", sunshine: "🌞", light: "💡",
  moon: "🌙", night: "🌃", sleep: "😴", sleepy: "🥱",
  star: "⭐", sparkle: "✨", magic: "🪄",
  fire: "🔥", hot: "🥵", lit: "🔥",
  cool: "😎", sunglasses: "🕶️",
  music: "🎵", song: "🎶", dance: "💃", guitar: "🎸", piano: "🎹",
  birthday: "🎂", cake: "🎂", party: "🎉", celebration: "🥳", gift: "🎁",
  car: "🚗", vehicle: "🚙", bike: "🚲", airplane: "✈️", rocket: "🚀", bus: "🚌",
  money: "💰", cash: "💵", coin: "🪙", bank: "🏦", shopping: "🛍️",
  phone: "📱", computer: "💻", laptop: "💻", camera: "📷", tv: "📺", video: "🎥",
  book: "📚", read: "📖", write: "✍️", pencil: "✏️", art: "🎨",
  angry: "😡", mad: "😠", rage: "😤",
  thinking: "🤔", confused: "😕", idea: "💡",
  hug: "🤗", kiss: "😘", love: "❤️",
  sick: "🤒", mask: "😷", doctor: "🧑‍⚕️", hospital: "🏥",
  shocked: "😱", scared: "😨", fear: "😰", nervous: "😬",
  ghost: "👻", halloween: "🎃", zombie: "🧟", vampire: "🧛",
  santa: "🎅", christmas: "🎄", snow: "❄️", cold: "🥶",
  beach: "🏖️", ocean: "🌊", wave: "🌊", island: "🏝️",
  tree: "🌳", flower: "🌸", plant: "🪴", nature: "🌿", forest: "🌲",
  clock: "⏰", time: "🕒", alarm: "⏱️",
  sky: "🌌", cloud: "☁️", rain: "🌧️", thunder: "⚡", rainbow: "🌈",
  food: "🍲", drink: "🥤", coffee: "☕", tea: "🫖", wine: "🍷", beer: "🍺",
  gym: "🏋️", run: "🏃", walk: "🚶", swim: "🏊",
  game: "🎮", trophy: "🏆", medal: "🥇", winner: "🥳",
  emoji: "😊", face: "🙂", expression: "😐",
  movie: "🎬", popcorn: "🍿", cinema: "🎥",
  student: "👨‍🎓", school: "🏫", teacher: "👩‍🏫",
  baby: "👶", child: "🧒", boy: "👦", girl: "👧",
  man: "👨", woman: "👩", people: "🧑‍🤝‍🧑",
  earth: "🌍", globe: "🌎", world: "🌐",
  flag: "🚩", india: "🇮🇳", usa: "🇺🇸", uk: "🇬🇧"
};
    // Replace words with emojis
    const words = inputText.split(" ");
    const translatedWords = words.map(word => emojiMap[word] || word);
    const translatedText = translatedWords.join(" ");

    // Display the result
    outputDiv.innerText = translatedText;
}
