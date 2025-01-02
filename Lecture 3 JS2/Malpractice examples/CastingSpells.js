function castSpell(spellName, spellRequirement) {
  // Check if the wizard has met the spell requirement
  if (spellRequirement) {
    console.log(`The spell ${spellName} is successfully cast!`);
  } else {
    console.log(`The wizard doesn't have enough mana to cast ${spellName}.`);
  }
}

// Test cases
castSpell("Fireball", true);
castSpell("Lightning Bolt", false);
castSpell("Leet Bolt", 1337);
castSpell("Sweedish kjøttBolt", [NaN]);
castSpell("Wat Bolt", Object);