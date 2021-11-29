const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

for (const name of names) {
  console.log(name);
}

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
};

for (const symbol in symbols) {
  console.log(`Key is: ${symbol} and value is: ${symbols[symbol]}`);
}
