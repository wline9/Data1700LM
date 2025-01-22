function CastRandomSpell(){
    const adjectives = [
        "Mystic","Enchanted","Arcane","Divine","Shadow",
        "Infernal","Celestial","Ethereal","Luminous","Runic"
    ]

    const nouns = [
        "Flame","Frost","Storm","Whisper","Blade",
        "Phoenix","Dragon","Orb","Crown","Warden"
    ];

    const magicalTerms = [
        "of Power","of Eternity","of the Ancients",
        "of Shadows","of Light","of the Void",
        "of Time","of the Elements","of Chaos","of Harmony"
    ];

    function generateSpellName() {
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const magicalTerm = magicalTerms[Math.floor(Math.random() * magicalTerms.length)];

        return `${adjective} ${noun} ${magicalTerm}`;
    }
    const output = document.getElementById("output");
    const li = document.createElement("li")
    li.innerText = generateSpellName();
    output.append(li)

}
document.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("castSpellButton");
    button.addEventListener("click", CastRandomSpell);
})
