const SauronJSONExample = {
    name: "Sauron",
    Aliases: [
        "Black One",
        "Dark Lord",
        "The Deceiver",
        "The Eye",
        "The Ring-maker",
        "The Necromancer",
        "The Lord of the Rings"
    ],
    Age: 54000,
    IsImmortal: true,
    Weapons: {
        Primary: "The One Ring",
        Secondary: ["Mace", "Sorcery"]
    },
    Minions: [
        {
            Name: "Witch-king of Angmar",
            Race: "Nazgûl",
        },
        {
            Name: "Mouth of Sauron",
            Race: "Black Númenórean",
        }
    ],
    // Function to retrieve a formatted list of aliases
    getAliases: function () {
        return `Sauron is also known as: ${this.Aliases.join(", ")}.`;
    }

};
console.log(SauronJSONExample);
console.log(SauronJSONExample.getAliases());
console.log(JSON.stringify(SauronJSONExample));
console.log(JSON.parse(JSON.stringify(SauronJSONExample)));