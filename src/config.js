const layersOrder = [
    { name: 'Background',},
    { name: 'Face',},
    { name: 'Logo'},
];
  
const format = {
    width: 4000,
    height: 4000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 30;

module.exports = { layersOrder, format, rarity, defaultEdition };