// ID/name lookup only; provenance and refresh instructions: EVA1_IMPORT.md.
(function(root){
  const data={
  "nordic_warrior": {
    "name": "Brand",
    "baseDefinitionId": "nordic_warrior"
  },
  "royal_pikeman": {
    "name": "Olaf",
    "baseDefinitionId": "royal_pikeman"
  },
  "nordic_female_warrior": {
    "name": "Ragnhild",
    "baseDefinitionId": "nordic_female_warrior"
  },
  "dwarven_scout": {
    "name": "Toril",
    "baseDefinitionId": "dwarven_scout"
  },
  "astral_demon_agharoth": {
    "name": "Agharoth",
    "baseDefinitionId": "astral_demon_agharoth"
  },
  "magic_carpet_bertha": {
    "name": "Bertha",
    "baseDefinitionId": "magic_carpet_bertha"
  },
  "tales2_bryggvir": {
    "name": "Bryggvir",
    "baseDefinitionId": "tales2_bryggvir"
  },
  "vegetable_caleb": {
    "name": "Caleb",
    "baseDefinitionId": "vegetable_caleb"
  },
  "easter_chick_jr": {
    "name": "Chick Jr",
    "baseDefinitionId": "easter_chick_jr"
  },
  "monster_hunter_dawn": {
    "name": "Dawn",
    "baseDefinitionId": "monster_hunter_dawn"
  },
  "christmas_frosty": {
    "name": "Frosty",
    "baseDefinitionId": "christmas_frosty"
  },
  "s2_croc_man": {
    "name": "Gato",
    "baseDefinitionId": "s2_croc_man"
  },
  "nordic_chained_werewolf": {
    "name": "Graymane",
    "baseDefinitionId": "nordic_chained_werewolf"
  },
  "nordic_chained_werewolf_costume_raccoon": {
    "name": "Graymane (Garlic Thief)",
    "baseDefinitionId": "nordic_chained_werewolf"
  },
  "nordic_chained_werewolf_costume_cute": {
    "name": "Graymane (The Ferocious Toon)",
    "baseDefinitionId": "nordic_chained_werewolf"
  },
  "nordic_chained_werewolf_costume_glass": {
    "name": "Graymane (The Ferocious Glass)",
    "baseDefinitionId": "nordic_chained_werewolf"
  },
  "nordic_chained_werewolf_costume_stylish": {
    "name": "Graymane (Stylish Werewolf)",
    "baseDefinitionId": "nordic_chained_werewolf"
  },
  "guardian_lemur": {
    "name": "Guardian Lemur",
    "baseDefinitionId": "guardian_lemur"
  },
  "royal_knight": {
    "name": "Gunnar",
    "baseDefinitionId": "royal_knight"
  },
  "royal_knight_costume_blacksmith": {
    "name": "Gunnar (Brave Blacksmith)",
    "baseDefinitionId": "royal_knight"
  },
  "royal_knight_costume_cute": {
    "name": "Gunnar (Toon Knight)",
    "baseDefinitionId": "royal_knight"
  },
  "royal_knight_costume_glass": {
    "name": "Gunnar (Glass Knight)",
    "baseDefinitionId": "royal_knight"
  },
  "s4_helo": {
    "name": "Helo",
    "baseDefinitionId": "s4_helo"
  },
  "s4_helo_costume_baker": {
    "name": "Helo (Eloi Baker)",
    "baseDefinitionId": "s4_helo"
  },
  "s5_jarif": {
    "name": "Jarif",
    "baseDefinitionId": "s5_jarif"
  },
  "s5_jarif_costume_curator": {
    "name": "Jarif (Stressed-Out Curator)",
    "baseDefinitionId": "s5_jarif"
  },
  "s3_jarvur": {
    "name": "Jarvur",
    "baseDefinitionId": "s3_jarvur"
  },
  "kalevala_joukahainen": {
    "name": "Joukahainen",
    "baseDefinitionId": "kalevala_joukahainen"
  },
  "kalevala_joukahainen_costume_frozen": {
    "name": "Joukahainen (Frozen Hunter)",
    "baseDefinitionId": "kalevala_joukahainen"
  },
  "dwarven_smasher": {
    "name": "Karil",
    "baseDefinitionId": "dwarven_smasher"
  },
  "dwarven_smasher_costume_smith": {
    "name": "Karil (The Heated)",
    "baseDefinitionId": "dwarven_smasher"
  },
  "dwarven_smasher_costume_cute": {
    "name": "Karil (The Hotblooded Toon)",
    "baseDefinitionId": "dwarven_smasher"
  },
  "dwarven_smasher_costume_glass": {
    "name": "Karil (The Hotblooded Vitrail)",
    "baseDefinitionId": "dwarven_smasher"
  },
  "ghost_miao_yin": {
    "name": "Miao Yin",
    "baseDefinitionId": "ghost_miao_yin"
  },
  "s3_nordri": {
    "name": "Nordri",
    "baseDefinitionId": "s3_nordri"
  },
  "s3_nordri_costume_explorer": {
    "name": "Nordri (Explorer Dwarf of Jotunheim)",
    "baseDefinitionId": "s3_nordri"
  },
  "s3_nordri_costume_cute": {
    "name": "Nordri (Toon Dwarf of Jotunheim)",
    "baseDefinitionId": "s3_nordri"
  },
  "musketeer_planchet": {
    "name": "Planchet",
    "baseDefinitionId": "musketeer_planchet"
  },
  "musketeer_planchet_costume_adventurer": {
    "name": "Planchet (Valiant Adventurer)",
    "baseDefinitionId": "musketeer_planchet"
  },
  "gargoyle_soroca": {
    "name": "Soroca",
    "baseDefinitionId": "gargoyle_soroca"
  },
  "ballerina_swan_maiden": {
    "name": "Swan Maiden",
    "baseDefinitionId": "ballerina_swan_maiden"
  },
  "nordic_mage": {
    "name": "Ulmer",
    "baseDefinitionId": "nordic_mage"
  },
  "nordic_mage_costume_hermit": {
    "name": "Ulmer (Hermit of Glaceholm)",
    "baseDefinitionId": "nordic_mage"
  },
  "nordic_mage_costume_cute": {
    "name": "Ulmer (Toon of Glaceholm)",
    "baseDefinitionId": "nordic_mage"
  },
  "nordic_mage_costume_glass": {
    "name": "Ulmer (Vitrail of Glaceholm)",
    "baseDefinitionId": "nordic_mage"
  },
  "nordic_swordman": {
    "name": "Valen",
    "baseDefinitionId": "nordic_swordman"
  },
  "nordic_swordman_costume_climber": {
    "name": "Valen (Clean-Cut Climber)",
    "baseDefinitionId": "nordic_swordman"
  },
  "nordic_swordman_costume_cute": {
    "name": "Valen (Talented Toon)",
    "baseDefinitionId": "nordic_swordman"
  },
  "nordic_swordman_costume_glass": {
    "name": "Valen (Glass Duelist)",
    "baseDefinitionId": "nordic_swordman"
  },
  "styx_virgil": {
    "name": "Virgil",
    "baseDefinitionId": "styx_virgil"
  },
  "pirate_vodnik": {
    "name": "Vodnik",
    "baseDefinitionId": "pirate_vodnik"
  },
  "kingdom_yao": {
    "name": "Yao",
    "baseDefinitionId": "kingdom_yao"
  },
  "s2_chameleon_mage": {
    "name": "Agwe",
    "baseDefinitionId": "s2_chameleon_mage"
  },
  "s2_chameleon_mage_costume_alchemist": {
    "name": "Agwe (Chameleon Alchemist)",
    "baseDefinitionId": "s2_chameleon_mage"
  },
  "s2_chameleon_mage_costume_cute": {
    "name": "Agwe (Toon Chameleon Shaman)",
    "baseDefinitionId": "s2_chameleon_mage"
  },
  "tales1_aqualith": {
    "name": "Aqualith",
    "baseDefinitionId": "tales1_aqualith"
  },
  "tales1_aqualith_costume_purple": {
    "name": "Aqualith (Elemental Colossus)",
    "baseDefinitionId": "tales1_aqualith"
  },
  "s5_azmia": {
    "name": "Azmia",
    "baseDefinitionId": "s5_azmia"
  },
  "s5_azmia_costume_dancing": {
    "name": "Azmia (Dancing Tavern Keeper)",
    "baseDefinitionId": "s5_azmia"
  },
  "construct_bonechill": {
    "name": "Bonechill",
    "baseDefinitionId": "construct_bonechill"
  },
  "dwarven_guard": {
    "name": "Boril",
    "baseDefinitionId": "dwarven_guard"
  },
  "dwarven_guard_costume_ram": {
    "name": "Boril (Heavyweight Defender)",
    "baseDefinitionId": "dwarven_guard"
  },
  "dwarven_guard_costume_tavern": {
    "name": "Boril (Tavern Defender)",
    "baseDefinitionId": "dwarven_guard"
  },
  "dwarven_guard_costume_cute": {
    "name": "Boril (Toon Defender)",
    "baseDefinitionId": "dwarven_guard"
  },
  "dwarven_guard_costume_glass": {
    "name": "Boril (Glass Defender)",
    "baseDefinitionId": "dwarven_guard"
  },
  "beowulf_breca": {
    "name": "Breca",
    "baseDefinitionId": "beowulf_breca"
  },
  "wonderland_captain": {
    "name": "Captain of Diamonds",
    "baseDefinitionId": "wonderland_captain"
  },
  "slime_choozen": {
    "name": "Choozen",
    "baseDefinitionId": "slime_choozen"
  },
  "tales2_dain": {
    "name": "Dain",
    "baseDefinitionId": "tales2_dain"
  },
  "masquerade_fosco": {
    "name": "Fosco",
    "baseDefinitionId": "masquerade_fosco"
  },
  "halloween_frank": {
    "name": "Frank",
    "baseDefinitionId": "halloween_frank"
  },
  "halloween_frank_costume_mafia": {
    "name": "Frank (The Mobster)",
    "baseDefinitionId": "halloween_frank"
  },
  "bard_garyas": {
    "name": "Garyas",
    "baseDefinitionId": "bard_garyas"
  },
  "garrison_greg": {
    "name": "Greg",
    "baseDefinitionId": "garrison_greg"
  },
  "nordic_ancestral_warrior": {
    "name": "Grimm",
    "baseDefinitionId": "nordic_ancestral_warrior"
  },
  "nordic_ancestral_warrior_costume_corrupted": {
    "name": "Grimm (Heir of Evil)",
    "baseDefinitionId": "nordic_ancestral_warrior"
  },
  "nordic_ancestral_warrior_costume_messenger": {
    "name": "Grimm (Dark Messenger)",
    "baseDefinitionId": "nordic_ancestral_warrior"
  },
  "nordic_ancestral_warrior_costume_cute": {
    "name": "Grimm (Dark Toon)",
    "baseDefinitionId": "nordic_ancestral_warrior"
  },
  "nordic_ancestral_warrior_costume_glass": {
    "name": "Grimm (Dark Vitrail)",
    "baseDefinitionId": "nordic_ancestral_warrior"
  },
  "nordic_ancestral_warrior_costume_stylish": {
    "name": "Grimm (Heir of Evil Style)",
    "baseDefinitionId": "nordic_ancestral_warrior"
  },
  "gargoyle_grumbl": {
    "name": "Grumbl",
    "baseDefinitionId": "gargoyle_grumbl"
  },
  "s3_jott": {
    "name": "Jott",
    "baseDefinitionId": "s3_jott"
  },
  "dwarwen_brewmaster": {
    "name": "Kiril",
    "baseDefinitionId": "dwarwen_brewmaster"
  },
  "dwarwen_brewmaster_costume_guitarist": {
    "name": "Kiril (Master Shredder)",
    "baseDefinitionId": "dwarwen_brewmaster"
  },
  "dwarwen_brewmaster_costume_wood_carver": {
    "name": "Kiril (Master Wood Carver)",
    "baseDefinitionId": "dwarwen_brewmaster"
  },
  "dwarwen_brewmaster_costume_cute": {
    "name": "Kiril (Toon Brewer)",
    "baseDefinitionId": "dwarwen_brewmaster"
  },
  "dwarwen_brewmaster_costume_glass": {
    "name": "Kiril (Brewer Vitrail)",
    "baseDefinitionId": "dwarwen_brewmaster"
  },
  "dwarwen_brewmaster_costume_stylish": {
    "name": "Kiril (Stylish Taster)",
    "baseDefinitionId": "dwarwen_brewmaster"
  },
  "monster_hunter_knuckles": {
    "name": "Knuckles",
    "baseDefinitionId": "monster_hunter_knuckles"
  },
  "forsaken_lamentia": {
    "name": "Lamentia",
    "baseDefinitionId": "forsaken_lamentia"
  },
  "elemental_linus": {
    "name": "Linus",
    "baseDefinitionId": "elemental_linus"
  },
  "s3_mireweave": {
    "name": "Mireweave",
    "baseDefinitionId": "s3_mireweave"
  },
  "owl_olbec": {
    "name": "Olbec",
    "baseDefinitionId": "owl_olbec"
  },
  "ninja_osamu": {
    "name": "Osamu",
    "baseDefinitionId": "ninja_osamu"
  },
  "mahayoddha_rafeeq": {
    "name": "Rafeeq",
    "baseDefinitionId": "mahayoddha_rafeeq"
  },
  "villain_sanngrior": {
    "name": "Sanngrior",
    "baseDefinitionId": "villain_sanngrior"
  },
  "ninja_sapphire": {
    "name": "Sapphire",
    "baseDefinitionId": "ninja_sapphire"
  },
  "royal_female_knight": {
    "name": "Sonya",
    "baseDefinitionId": "royal_female_knight"
  },
  "royal_female_knight_costume_winter": {
    "name": "Sonya (Viking Champion)",
    "baseDefinitionId": "royal_female_knight"
  },
  "royal_female_knight_costume_prospector": {
    "name": "Sonya (Willful Prospector)",
    "baseDefinitionId": "royal_female_knight"
  },
  "royal_female_knight_costume_cute": {
    "name": "Sonya (Toon Champion)",
    "baseDefinitionId": "royal_female_knight"
  },
  "royal_female_knight_costume_glass": {
    "name": "Sonya (Glass Champion)",
    "baseDefinitionId": "royal_female_knight"
  },
  "s2_triton": {
    "name": "Triton",
    "baseDefinitionId": "s2_triton"
  },
  "s2_triton_costume_champion": {
    "name": "Triton (Champion of Atlantis)",
    "baseDefinitionId": "s2_triton"
  },
  "s2_triton_costume_cute": {
    "name": "Triton (Toon Captain of Atlantis)",
    "baseDefinitionId": "s2_triton"
  },
  "vampire_queen": {
    "name": "Valeria",
    "baseDefinitionId": "vampire_queen"
  },
  "kingdom_xiahou_dun": {
    "name": "Xiahou Dun",
    "baseDefinitionId": "kingdom_xiahou_dun"
  },
  "s4_zila_lei": {
    "name": "Zila Lei",
    "baseDefinitionId": "s4_zila_lei"
  },
  "s4_zila_lei_costume_dancer": {
    "name": "Zila Lei (Octopod Dancer)",
    "baseDefinitionId": "s4_zila_lei"
  },
  "monster_hunter_adalinda": {
    "name": "Adalinda",
    "baseDefinitionId": "monster_hunter_adalinda"
  },
  "ice_god_october": {
    "name": "Aegir",
    "baseDefinitionId": "ice_god_october"
  },
  "ice_god_october_costume_farmer": {
    "name": "Aegir (Frozen Farmer)",
    "baseDefinitionId": "ice_god_october"
  },
  "mimic_aether_blue": {
    "name": "Aether Mimic (Ice)",
    "baseDefinitionId": "mimic_aether_blue"
  },
  "kalevala_aino": {
    "name": "Aino",
    "baseDefinitionId": "kalevala_aino"
  },
  "kalevala_aino_costume_water_maiden": {
    "name": "Aino (Lake Maiden)",
    "baseDefinitionId": "kalevala_aino"
  },
  "ice_god_eskimo": {
    "name": "Alasie",
    "baseDefinitionId": "ice_god_eskimo"
  },
  "ice_god_eskimo_costume_champion": {
    "name": "Alasie (Iceberg Champion)",
    "baseDefinitionId": "ice_god_eskimo"
  },
  "ice_god_alexandrine": {
    "name": "Alexandrine",
    "baseDefinitionId": "ice_god_alexandrine"
  },
  "wonderland_alice": {
    "name": "Alice",
    "baseDefinitionId": "wonderland_alice"
  },
  "styx_amphitrite": {
    "name": "Amphitrite",
    "baseDefinitionId": "styx_amphitrite"
  },
  "astral_demon_anatemah": {
    "name": "Anatemah",
    "baseDefinitionId": "astral_demon_anatemah"
  },
  "tales2_andvari": {
    "name": "Andvari",
    "baseDefinitionId": "tales2_andvari"
  },
  "tales2_andvari_costume_c1": {
    "name": "Andvari (Dwarven Restorer)",
    "baseDefinitionId": "tales2_andvari"
  },
  "elemental_anzia": {
    "name": "Anzia",
    "baseDefinitionId": "elemental_anzia"
  },
  "elemental_anzia_costume_jailer": {
    "name": "Anzia (Galactic Jailer)",
    "baseDefinitionId": "elemental_anzia"
  },
  "ice_god_areax": {
    "name": "Areax",
    "baseDefinitionId": "ice_god_areax"
  },
  "s2_ariel": {
    "name": "Ariel",
    "baseDefinitionId": "s2_ariel"
  },
  "s2_ariel_costume_enchanter": {
    "name": "Ariel (Enchanter of Atlantis)",
    "baseDefinitionId": "s2_ariel"
  },
  "s2_ariel_costume_cute": {
    "name": "Ariel (Toon Princess of Atlantis)",
    "baseDefinitionId": "s2_ariel"
  },
  "castle_bear_armel": {
    "name": "Armel",
    "baseDefinitionId": "castle_bear_armel"
  },
  "mimic_ascension_item_blue": {
    "name": "Ascension Mimic (Ice)",
    "baseDefinitionId": "mimic_ascension_item_blue"
  },
  "faun_ascian": {
    "name": "Ascian",
    "baseDefinitionId": "faun_ascian"
  },
  "ice_god_athena": {
    "name": "Athena",
    "baseDefinitionId": "ice_god_athena"
  },
  "ice_god_athena_costume_wargoddess": {
    "name": "Athena (Goddess of War)",
    "baseDefinitionId": "ice_god_athena"
  },
  "ice_god_athena_costume_cute": {
    "name": "Athena (Toon Celestial of Ice)",
    "baseDefinitionId": "ice_god_athena"
  },
  "tales1_atlanteia": {
    "name": "Atlanteia",
    "baseDefinitionId": "tales1_atlanteia"
  },
  "tales1_atlanteia_costume_siren": {
    "name": "Atlanteia (Glacial Siren of the Deep)",
    "baseDefinitionId": "tales1_atlanteia"
  },
  "institute_azureus": {
    "name": "Azureus",
    "baseDefinitionId": "institute_azureus"
  },
  "ninja_azurite": {
    "name": "Azurite",
    "baseDefinitionId": "ninja_azurite"
  },
  "ice_god_balur": {
    "name": "Balur",
    "baseDefinitionId": "ice_god_balur"
  },
  "magic_carpet_bart": {
    "name": "Bart",
    "baseDefinitionId": "magic_carpet_bart"
  },
  "s5_bennu": {
    "name": "Bennu",
    "baseDefinitionId": "s5_bennu"
  },
  "s5_bennu_costume_heron": {
    "name": "Bennu (Heron of Creation)",
    "baseDefinitionId": "s5_bennu"
  },
  "mahayoddha_bhagirathi": {
    "name": "Bhagirathi",
    "baseDefinitionId": "mahayoddha_bhagirathi"
  },
  "mahayoddha_bhairavi_devi": {
    "name": "Bhairavi Devi",
    "baseDefinitionId": "mahayoddha_bhairavi_devi"
  },
  "bard_bhaltair": {
    "name": "Bhaltair",
    "baseDefinitionId": "bard_bhaltair"
  },
  "circus_bobo": {
    "name": "Bobo",
    "baseDefinitionId": "circus_bobo"
  },
  "slime_boboosang": {
    "name": "Boboo Sang",
    "baseDefinitionId": "slime_boboosang"
  },
  "mighty_pet_bubbles": {
    "name": "Bubbles",
    "baseDefinitionId": "mighty_pet_bubbles"
  },
  "shadow_burton": {
    "name": "Burton",
    "baseDefinitionId": "shadow_burton"
  },
  "garrison_caelen": {
    "name": "Caelen",
    "baseDefinitionId": "garrison_caelen"
  },
  "magic_camilla": {
    "name": "Camilla",
    "baseDefinitionId": "magic_camilla"
  },
  "magic_camilla_costume_flower": {
    "name": "Camilla (Floral Tinkerer)",
    "baseDefinitionId": "magic_camilla"
  },
  "kingdom_cao_cao": {
    "name": "Cao Cao",
    "baseDefinitionId": "kingdom_cao_cao"
  },
  "kingdom_cao_cao_costume_ice": {
    "name": "Cao Cao (Warlord of Ice)",
    "baseDefinitionId": "kingdom_cao_cao"
  },
  "forsaken_cassilda": {
    "name": "Cassilda",
    "baseDefinitionId": "forsaken_cassilda"
  },
  "slayer_cathal": {
    "name": "Cathal",
    "baseDefinitionId": "slayer_cathal"
  },
  "masquerade_cel": {
    "name": "Cel",
    "baseDefinitionId": "masquerade_cel"
  },
  "bard_celimene": {
    "name": "Celimene",
    "baseDefinitionId": "bard_celimene"
  },
  "tales1_ceto": {
    "name": "Ceto",
    "baseDefinitionId": "tales1_ceto"
  },
  "tales1_ceto_costume_queen": {
    "name": "Ceto (Primordial Queen of Sea Monsters)",
    "baseDefinitionId": "tales1_ceto"
  },
  "journey_change": {
    "name": "Chang'e",
    "baseDefinitionId": "journey_change"
  },
  "halloween_chester": {
    "name": "Chester",
    "baseDefinitionId": "halloween_chester"
  },
  "moth_chimister": {
    "name": "Chimister",
    "baseDefinitionId": "moth_chimister"
  },
  "mahayoddha_chitrangada": {
    "name": "Chitrangada",
    "baseDefinitionId": "mahayoddha_chitrangada"
  },
  "garrison_ciara": {
    "name": "Ciara",
    "baseDefinitionId": "garrison_ciara"
  },
  "mighty_pet_cinnamon": {
    "name": "Cinnamon",
    "baseDefinitionId": "mighty_pet_cinnamon"
  },
  "ice_god_claeg": {
    "name": "Claeg",
    "baseDefinitionId": "ice_god_claeg"
  },
  "ninja_cobalt": {
    "name": "Cobalt",
    "baseDefinitionId": "ninja_cobalt"
  },
  "astral_cosmicspeaker": {
    "name": "Cosmicspeaker",
    "baseDefinitionId": "astral_cosmicspeaker"
  },
  "villain_crystalis": {
    "name": "Crystalis",
    "baseDefinitionId": "villain_crystalis"
  },
  "beachparty_davey_wavey": {
    "name": "Davey Wavey",
    "baseDefinitionId": "beachparty_davey_wavey"
  },
  "beauty_beast_dominique": {
    "name": "Dominique",
    "baseDefinitionId": "beauty_beast_dominique"
  },
  "ice_god_dvalin": {
    "name": "Dvalin",
    "baseDefinitionId": "ice_god_dvalin"
  },
  "mimic_emblem_blue": {
    "name": "Emblem Mimic (Ice)",
    "baseDefinitionId": "mimic_emblem_blue"
  },
  "institute_emilie": {
    "name": "Emilie",
    "baseDefinitionId": "institute_emilie"
  },
  "castle_wolf_esme": {
    "name": "Esme",
    "baseDefinitionId": "castle_wolf_esme"
  },
  "s4_exeera": {
    "name": "Exeera",
    "baseDefinitionId": "s4_exeera"
  },
  "s4_exeera_costume_hierophant": {
    "name": "Exeera (Octopod Hierophant)",
    "baseDefinitionId": "s4_exeera"
  },
  "mimic_training_hero_blue": {
    "name": "Experience Mimic (Ice)",
    "baseDefinitionId": "mimic_training_hero_blue"
  },
  "construct_featherweight": {
    "name": "Featherweight",
    "baseDefinitionId": "construct_featherweight"
  },
  "s3_fenrir": {
    "name": "Fenrir",
    "baseDefinitionId": "s3_fenrir"
  },
  "s3_fenrir_costume_cute": {
    "name": "Fenrir (Toon Leader of Nilfheim)",
    "baseDefinitionId": "s3_fenrir"
  },
  "garrison_fergus": {
    "name": "Fergus",
    "baseDefinitionId": "garrison_fergus"
  },
  "pirate_commodore_finley": {
    "name": "Finley",
    "baseDefinitionId": "pirate_commodore_finley"
  },
  "pirate_commodore_finley_costume_bleak": {
    "name": "Finley (Bleak Commodore)",
    "baseDefinitionId": "pirate_commodore_finley"
  },
  "ballerina_firmin": {
    "name": "Firmin Richard",
    "baseDefinitionId": "ballerina_firmin"
  },
  "goblin_fizzcoil": {
    "name": "Fizzcoil",
    "baseDefinitionId": "goblin_fizzcoil"
  },
  "mimic_food_blue": {
    "name": "Food Mimic (Ice)",
    "baseDefinitionId": "mimic_food_blue"
  },
  "masquerade_fortuna": {
    "name": "Fortuna",
    "baseDefinitionId": "masquerade_fortuna"
  },
  "ice_god_frida": {
    "name": "Frida",
    "baseDefinitionId": "ice_god_frida"
  },
  "ice_god_frosth": {
    "name": "Frosth",
    "baseDefinitionId": "ice_god_frosth"
  },
  "garrison_frostsnout": {
    "name": "Frostsnout",
    "baseDefinitionId": "garrison_frostsnout"
  },
  "gargoyle_gaillard": {
    "name": "Gaillard",
    "baseDefinitionId": "gargoyle_gaillard"
  },
  "vegetable_garlacteus": {
    "name": "Garlacteus",
    "baseDefinitionId": "vegetable_garlacteus"
  },
  "construct_blue_mage": {
    "name": "Ghealach",
    "baseDefinitionId": "construct_blue_mage"
  },
  "wild_cat_gitnib": {
    "name": "Gitnib",
    "baseDefinitionId": "wild_cat_gitnib"
  },
  "construct_glacivolt": {
    "name": "Glacivolt",
    "baseDefinitionId": "construct_glacivolt"
  },
  "ice_god_callum": {
    "name": "Gladius",
    "baseDefinitionId": "ice_god_callum"
  },
  "beauty_beast_glamiera": {
    "name": "Glamiera",
    "baseDefinitionId": "beauty_beast_glamiera"
  },
  "ice_god_glenda": {
    "name": "Glenda",
    "baseDefinitionId": "ice_god_glenda"
  },
  "slime_gloozmer": {
    "name": "Gloozmer",
    "baseDefinitionId": "slime_gloozmer"
  },
  "goblin_grimsteel": {
    "name": "Grimsteel",
    "baseDefinitionId": "goblin_grimsteel"
  },
  "guardian_hippo": {
    "name": "Guardian Hippo",
    "baseDefinitionId": "guardian_hippo"
  },
  "shark_haikala": {
    "name": "Hai'Kala",
    "baseDefinitionId": "shark_haikala"
  },
  "construct_halwinter": {
    "name": "Halwinter",
    "baseDefinitionId": "construct_halwinter"
  },
  "ghost_he_gui": {
    "name": "He Gui",
    "baseDefinitionId": "ghost_he_gui"
  },
  "s5_hetepheres": {
    "name": "Hetepheres",
    "baseDefinitionId": "s5_hetepheres"
  },
  "s5_hetepheres_costume_spa": {
    "name": "Hetepheres (Sphinx at the Spa)",
    "baseDefinitionId": "s5_hetepheres"
  },
  "valentines_himeros": {
    "name": "Himeros",
    "baseDefinitionId": "valentines_himeros"
  },
  "tales2_hogne": {
    "name": "Högne",
    "baseDefinitionId": "tales2_hogne"
  },
  "tales2_hogne_costume_lunar": {
    "name": "Högne (Dwarven Moon Knight)",
    "baseDefinitionId": "tales2_hogne"
  },
  "beowulf_hrothgar": {
    "name": "Hrothgar",
    "baseDefinitionId": "beowulf_hrothgar"
  },
  "shadow_hysteria": {
    "name": "Hysteria",
    "baseDefinitionId": "shadow_hysteria"
  },
  "vegetable_indigon": {
    "name": "Indigon",
    "baseDefinitionId": "vegetable_indigon"
  },
  "ice_god_iris": {
    "name": "Iris",
    "baseDefinitionId": "ice_god_iris"
  },
  "mimic_iron_blue": {
    "name": "Iron Mimic (Ice)",
    "baseDefinitionId": "mimic_iron_blue"
  },
  "nordic_ice_enchantress": {
    "name": "Isarnia",
    "baseDefinitionId": "nordic_ice_enchantress"
  },
  "nordic_ice_enchantress_costume_aqua": {
    "name": "Isarnia (Ice Witch of Glaceholm)",
    "baseDefinitionId": "nordic_ice_enchantress"
  },
  "nordic_ice_enchantress_costume_ruler": {
    "name": "Isarnia (Ruler of Glaceholm)",
    "baseDefinitionId": "nordic_ice_enchantress"
  },
  "nordic_ice_enchantress_costume_cute": {
    "name": "Isarnia (Protector of Toons)",
    "baseDefinitionId": "nordic_ice_enchantress"
  },
  "nordic_ice_enchantress_costume_glass": {
    "name": "Isarnia (Vitrail of Glaceholm)",
    "baseDefinitionId": "nordic_ice_enchantress"
  },
  "nordic_ice_enchantress_costume_stylish": {
    "name": "Isarnia (Stylish Ice Wizard)",
    "baseDefinitionId": "nordic_ice_enchantress"
  },
  "ronin_ishida_aoga": {
    "name": "Ishida Aoga",
    "baseDefinitionId": "ronin_ishida_aoga"
  },
  "astral_dwarf_ixinn": {
    "name": "Ixinn",
    "baseDefinitionId": "astral_dwarf_ixinn"
  },
  "elemental_jolt": {
    "name": "Jolt",
    "baseDefinitionId": "elemental_jolt"
  },
  "faun_jolyon": {
    "name": "Jolyon",
    "baseDefinitionId": "faun_jolyon"
  },
  "valentines_kabeiroi": {
    "name": "Kabeiroi",
    "baseDefinitionId": "valentines_kabeiroi"
  },
  "magic_carpet_kesha": {
    "name": "Kesha",
    "baseDefinitionId": "magic_carpet_kesha"
  },
  "goblin_kettle": {
    "name": "Kettle",
    "baseDefinitionId": "goblin_kettle"
  },
  "knights_king_arthur": {
    "name": "King Arthur",
    "baseDefinitionId": "knights_king_arthur"
  },
  "ronin_kitou_sayomi": {
    "name": "Kitou Sayomi",
    "baseDefinitionId": "ronin_kitou_sayomi"
  },
  "ice_god_klaern": {
    "name": "Klaern",
    "baseDefinitionId": "ice_god_klaern"
  },
  "titan_hunter_konradus": {
    "name": "Konradus",
    "baseDefinitionId": "titan_hunter_konradus"
  },
  "christmas_krampus": {
    "name": "Krampus",
    "baseDefinitionId": "christmas_krampus"
  },
  "christmas_krampus_costume_eager_devil": {
    "name": "Krampus (Holiday Prankster)",
    "baseDefinitionId": "christmas_krampus"
  },
  "scoundrel_lane": {
    "name": "Lane",
    "baseDefinitionId": "scoundrel_lane"
  },
  "valentines_lempi": {
    "name": "Lempi",
    "baseDefinitionId": "valentines_lempi"
  },
  "wild_cat_lennart": {
    "name": "Lennart",
    "baseDefinitionId": "wild_cat_lennart"
  },
  "s3_loki_male": {
    "name": "Lord Loki",
    "baseDefinitionId": "s3_loki_male"
  },
  "s3_loki_male_costume_shapeshifter": {
    "name": "Lord Loki (Shapeshifter God)",
    "baseDefinitionId": "s3_loki_male"
  },
  "fleur_ludovico": {
    "name": "Ludovico",
    "baseDefinitionId": "fleur_ludovico"
  },
  "titan_hunter_lumi_and_taiga": {
    "name": "Lumi & Taiga",
    "baseDefinitionId": "titan_hunter_lumi_and_taiga"
  },
  "castle_stag_lysanor": {
    "name": "Lysanor",
    "baseDefinitionId": "castle_stag_lysanor"
  },
  "exalted_warrior": {
    "name": "Magni",
    "baseDefinitionId": "exalted_warrior"
  },
  "exalted_warrior_costume_ice": {
    "name": "Magni (Monolith of Ice)",
    "baseDefinitionId": "exalted_warrior"
  },
  "exalted_warrior_costume_cute": {
    "name": "Magni (Toon of Ice)",
    "baseDefinitionId": "exalted_warrior"
  },
  "exalted_warrior_costume_glass": {
    "name": "Magni (Vitrail of Ice)",
    "baseDefinitionId": "exalted_warrior"
  },
  "exalted_warrior_costume_stylish": {
    "name": "Magni (Stylish Ancient of Ice)",
    "baseDefinitionId": "exalted_warrior"
  },
  "owl_mariol": {
    "name": "Mariol",
    "baseDefinitionId": "owl_mariol"
  },
  "easter_marko": {
    "name": "Marko",
    "baseDefinitionId": "easter_marko"
  },
  "rabbit_blue": {
    "name": "Master Lepus",
    "baseDefinitionId": "rabbit_blue"
  },
  "rabbit_blue_costume_riftbreaker": {
    "name": "Master Lepus (Rift Breaker)",
    "baseDefinitionId": "rabbit_blue"
  },
  "gargoyle_matrera": {
    "name": "Matrera",
    "baseDefinitionId": "gargoyle_matrera"
  },
  "ice_god_mene": {
    "name": "Mene",
    "baseDefinitionId": "ice_god_mene"
  },
  "ice_god_miki": {
    "name": "Miki",
    "baseDefinitionId": "ice_god_miki"
  },
  "musketeer_milady_de_winter": {
    "name": "Milady de Winter",
    "baseDefinitionId": "musketeer_milady_de_winter"
  },
  "musketeer_milady_de_winter_costume_herbalist": {
    "name": "Milady de Winter (Machiavellian Herbalist)",
    "baseDefinitionId": "musketeer_milady_de_winter"
  },
  "magic_milena": {
    "name": "Milena",
    "baseDefinitionId": "magic_milena"
  },
  "magic_milena_costume_ice": {
    "name": "Milena (Teacher of Arctic Spells)",
    "baseDefinitionId": "magic_milena"
  },
  "halloween_miriam_and_midnight": {
    "name": "Miriam & Midnight",
    "baseDefinitionId": "halloween_miriam_and_midnight"
  },
  "s2_mercenary_woman": {
    "name": "Misandra",
    "baseDefinitionId": "s2_mercenary_woman"
  },
  "s2_mercenary_woman_costume_dancer": {
    "name": "Misandra (Magnificent Hula Dancer)",
    "baseDefinitionId": "s2_mercenary_woman"
  },
  "s2_mercenary_woman_costume_cute": {
    "name": "Misandra (Magnificent Toon)",
    "baseDefinitionId": "s2_mercenary_woman"
  },
  "easter_miss_ethel": {
    "name": "Miss Ethel",
    "baseDefinitionId": "easter_miss_ethel"
  },
  "champions_mistra": {
    "name": "Mistra",
    "baseDefinitionId": "champions_mistra"
  },
  "beachparty_misty": {
    "name": "Misty",
    "baseDefinitionId": "beachparty_misty"
  },
  "beachparty_misty_costume_rogue": {
    "name": "Misty (Stealthy Beach Gnome)",
    "baseDefinitionId": "beachparty_misty"
  },
  "beowulf_modthryth": {
    "name": "Modthryth",
    "baseDefinitionId": "beowulf_modthryth"
  },
  "astral_mooncure": {
    "name": "Mooncure",
    "baseDefinitionId": "astral_mooncure"
  },
  "s4_morel": {
    "name": "Morel",
    "baseDefinitionId": "s4_morel"
  },
  "s4_morel_costume_sage": {
    "name": "Morel (Eloi Sage)",
    "baseDefinitionId": "s4_morel"
  },
  "christmas_mr_pengi": {
    "name": "Mr. Pengi",
    "baseDefinitionId": "christmas_mr_pengi"
  },
  "christmas_mr_pengi_costume_snowboarder": {
    "name": "Mr. Pengi (Captain of Snowboard Team)",
    "baseDefinitionId": "christmas_mr_pengi"
  },
  "construct_nautica": {
    "name": "Nautica",
    "baseDefinitionId": "construct_nautica"
  },
  "ice_god_nerasis": {
    "name": "Nerasis",
    "baseDefinitionId": "ice_god_nerasis"
  },
  "journey_nineheaded_beast": {
    "name": "Nine-Headed Beast",
    "baseDefinitionId": "journey_nineheaded_beast"
  },
  "monster_hunter_njal": {
    "name": "Njal",
    "baseDefinitionId": "monster_hunter_njal"
  },
  "elemental_nylora": {
    "name": "Nylora",
    "baseDefinitionId": "elemental_nylora"
  },
  "ballerina_odette": {
    "name": "Odette",
    "baseDefinitionId": "ballerina_odette"
  },
  "ninja_oniwakamaru": {
    "name": "Oniwakamaru",
    "baseDefinitionId": "ninja_oniwakamaru"
  },
  "astral_dwarf_orcur": {
    "name": "Orcur",
    "baseDefinitionId": "astral_dwarf_orcur"
  },
  "kalevala_otso": {
    "name": "Otso",
    "baseDefinitionId": "kalevala_otso"
  },
  "s4_passepartout": {
    "name": "Passepartout",
    "baseDefinitionId": "s4_passepartout"
  },
  "s4_passepartout_costume_artist": {
    "name": "Passepartout (Elegant Artist)",
    "baseDefinitionId": "s4_passepartout"
  },
  "moth_pepperbleu": {
    "name": "Pepperbleu",
    "baseDefinitionId": "moth_pepperbleu"
  },
  "ice_god_perseus": {
    "name": "Perseus",
    "baseDefinitionId": "ice_god_perseus"
  },
  "ice_god_perseus_costume_frozen": {
    "name": "Perseus (Challenger of Boreas)",
    "baseDefinitionId": "ice_god_perseus"
  },
  "gargoyle_pophit": {
    "name": "Pophit",
    "baseDefinitionId": "gargoyle_pophit"
  },
  "musketeer_porthos": {
    "name": "Porthos",
    "baseDefinitionId": "musketeer_porthos"
  },
  "musketeer_porthos_costume_merchant": {
    "name": "Porthos (Merchant Musketeer)",
    "baseDefinitionId": "musketeer_porthos"
  },
  "astral_dwarf_quari": {
    "name": "Quari",
    "baseDefinitionId": "astral_dwarf_quari"
  },
  "elemental_quinn": {
    "name": "Quinn",
    "baseDefinitionId": "elemental_quinn"
  },
  "elemental_quinn_costume_alchemist": {
    "name": "Quinn (Cosmic Alchemist)",
    "baseDefinitionId": "elemental_quinn"
  },
  "castle_raven_quintin": {
    "name": "Quintin",
    "baseDefinitionId": "castle_raven_quintin"
  },
  "ice_god_raffaele": {
    "name": "Raffaele",
    "baseDefinitionId": "ice_god_raffaele"
  },
  "slayer_rian": {
    "name": "Rian",
    "baseDefinitionId": "slayer_rian"
  },
  "nordic_male_lord": {
    "name": "Richard",
    "baseDefinitionId": "nordic_male_lord"
  },
  "nordic_male_lord_costume_senior": {
    "name": "Richard (Axe of Justice)",
    "baseDefinitionId": "nordic_male_lord"
  },
  "nordic_male_lord_costume_injustice": {
    "name": "Richard (Hammer of Injustice)",
    "baseDefinitionId": "nordic_male_lord"
  },
  "nordic_male_lord_costume_cute": {
    "name": "Richard (Hammer of Toon Power)",
    "baseDefinitionId": "nordic_male_lord"
  },
  "nordic_male_lord_costume_glass": {
    "name": "Richard (Hammer of Glass)",
    "baseDefinitionId": "nordic_male_lord"
  },
  "nordic_male_lord_costume_stylish": {
    "name": "Richard (Paladin of Style)",
    "baseDefinitionId": "nordic_male_lord"
  },
  "fox_riverfang": {
    "name": "Riverfang",
    "baseDefinitionId": "fox_riverfang"
  },
  "fables_rumpelstiltskin": {
    "name": "Rumpelstiltskin",
    "baseDefinitionId": "fables_rumpelstiltskin"
  },
  "fables_rumpelstiltskin_costume_eternal": {
    "name": "Rumpelstiltskin (Eternal Trickster)",
    "baseDefinitionId": "fables_rumpelstiltskin"
  },
  "s4_russula": {
    "name": "Russula",
    "baseDefinitionId": "s4_russula"
  },
  "s4_russula_costume_painter": {
    "name": "Russula (Eloi Painter)",
    "baseDefinitionId": "s4_russula"
  },
  "fox_sable": {
    "name": "Sable",
    "baseDefinitionId": "fox_sable"
  },
  "shadow_salvatore": {
    "name": "Salvatore",
    "baseDefinitionId": "shadow_salvatore"
  },
  "champions_satori": {
    "name": "Satori",
    "baseDefinitionId": "champions_satori"
  },
  "ninja_sawano": {
    "name": "Sawano",
    "baseDefinitionId": "ninja_sawano"
  },
  "beauty_beast_seraphine": {
    "name": "Seraphine",
    "baseDefinitionId": "beauty_beast_seraphine"
  },
  "monster_hunter_sigyn": {
    "name": "Sigyn",
    "baseDefinitionId": "monster_hunter_sigyn"
  },
  "ice_god_sini": {
    "name": "Sini",
    "baseDefinitionId": "ice_god_sini"
  },
  "castle_stag_siofra": {
    "name": "Siofra",
    "baseDefinitionId": "castle_stag_siofra"
  },
  "s3_skadi": {
    "name": "Skadi",
    "baseDefinitionId": "s3_skadi"
  },
  "s3_skadi_costume_ravager": {
    "name": "Skadi (Guardian of Jotunheim)",
    "baseDefinitionId": "s3_skadi"
  },
  "construct_skarn": {
    "name": "Skarn",
    "baseDefinitionId": "construct_skarn"
  },
  "slime_slimgo": {
    "name": "Slimgo",
    "baseDefinitionId": "slime_slimgo"
  },
  "fables_snow_white": {
    "name": "Snow White",
    "baseDefinitionId": "fables_snow_white"
  },
  "fables_snow_white_costume_slayer": {
    "name": "Snow White (Slayer White)",
    "baseDefinitionId": "fables_snow_white"
  },
  "s5_sobek": {
    "name": "Sobek",
    "baseDefinitionId": "s5_sobek"
  },
  "s5_sobek_costume_guardian": {
    "name": "Sobek (Guardian of the River)",
    "baseDefinitionId": "s5_sobek"
  },
  "outlaw_song_jiang": {
    "name": "Song Jiang",
    "baseDefinitionId": "outlaw_song_jiang"
  },
  "monster_hunter_sorrow": {
    "name": "Sorrow",
    "baseDefinitionId": "monster_hunter_sorrow"
  },
  "astral_starwalker": {
    "name": "Starwalker",
    "baseDefinitionId": "astral_starwalker"
  },
  "ice_god_suzuna": {
    "name": "Suzuna",
    "baseDefinitionId": "ice_god_suzuna"
  },
  "tales2_svafa": {
    "name": "Sváfa",
    "baseDefinitionId": "tales2_svafa"
  },
  "moth_tealmoine": {
    "name": "Tealmoine",
    "baseDefinitionId": "moth_tealmoine"
  },
  "s2_tethys": {
    "name": "Tethys",
    "baseDefinitionId": "s2_tethys"
  },
  "s2_tethys_costume_steel": {
    "name": "Tethys (Avenger of All Rivers)",
    "baseDefinitionId": "s2_tethys"
  },
  "tales1_thalassa": {
    "name": "Thalassa",
    "baseDefinitionId": "tales1_thalassa"
  },
  "tales1_thalassa_costume_crystals": {
    "name": "Thalassa (Primordial Goddess of the Crystals)",
    "baseDefinitionId": "tales1_thalassa"
  },
  "styx_thanatos": {
    "name": "Thanatos",
    "baseDefinitionId": "styx_thanatos"
  },
  "circus_theobald": {
    "name": "Theobald",
    "baseDefinitionId": "circus_theobald"
  },
  "royal_knight_commander": {
    "name": "Thorne",
    "baseDefinitionId": "royal_knight_commander"
  },
  "royal_knight_commander_costume_king": {
    "name": "Thorne (King Frostmorrow)",
    "baseDefinitionId": "royal_knight_commander"
  },
  "royal_knight_commander_costume_gryphon": {
    "name": "Thorne (Commander Frostmorrow)",
    "baseDefinitionId": "royal_knight_commander"
  },
  "royal_knight_commander_costume_cute": {
    "name": "Thorne (Toon Frostmorrow)",
    "baseDefinitionId": "royal_knight_commander"
  },
  "royal_knight_commander_costume_glass": {
    "name": "Thorne (Vitrail of Frostmorrow)",
    "baseDefinitionId": "royal_knight_commander"
  },
  "owl_timius": {
    "name": "Timius",
    "baseDefinitionId": "owl_timius"
  },
  "christmas_tinsel": {
    "name": "Tinsel",
    "baseDefinitionId": "christmas_tinsel"
  },
  "monster_hunter_tremor": {
    "name": "Tremor",
    "baseDefinitionId": "monster_hunter_tremor"
  },
  "mimic_troop_blue": {
    "name": "Troop Mimic (Ice)",
    "baseDefinitionId": "mimic_troop_blue"
  },
  "ice_god_ulfhild": {
    "name": "Ulfhild",
    "baseDefinitionId": "ice_god_ulfhild"
  },
  "magic_ulius": {
    "name": "Ulius",
    "baseDefinitionId": "magic_ulius"
  },
  "magic_ulius_costume_buccaneer": {
    "name": "Ulius (Peculiar Arcane Buccaneer)",
    "baseDefinitionId": "magic_ulius"
  },
  "astral_demon_ushal": {
    "name": "Ushal",
    "baseDefinitionId": "astral_demon_ushal"
  },
  "ice_god_vela": {
    "name": "Vela",
    "baseDefinitionId": "ice_god_vela"
  },
  "faun_verity": {
    "name": "Verity",
    "baseDefinitionId": "faun_verity"
  },
  "wild_cat_vernix": {
    "name": "Vernix",
    "baseDefinitionId": "wild_cat_vernix"
  },
  "gargoyle_vincent": {
    "name": "Vincent",
    "baseDefinitionId": "gargoyle_vincent"
  },
  "wild_cat_vora": {
    "name": "Vora",
    "baseDefinitionId": "wild_cat_vora"
  },
  "monster_hunter_waterpipe": {
    "name": "Waterpipe",
    "baseDefinitionId": "monster_hunter_waterpipe"
  },
  "fox_whitefang": {
    "name": "Whitefang",
    "baseDefinitionId": "fox_whitefang"
  },
  "outlaw_wu_song": {
    "name": "Wu Song",
    "baseDefinitionId": "outlaw_wu_song"
  },
  "fortune_yan_qing": {
    "name": "Yan Qing",
    "baseDefinitionId": "fortune_yan_qing"
  },
  "christmas_zappa": {
    "name": "Zappa",
    "baseDefinitionId": "christmas_zappa"
  },
  "elemental_zengar": {
    "name": "Zengar",
    "baseDefinitionId": "elemental_zengar"
  },
  "elemental_zengar_costume_farmer": {
    "name": "Zengar (Cultivating Beast)",
    "baseDefinitionId": "elemental_zengar"
  },
  "outlaw_zheng_tianshou": {
    "name": "Zheng Tianshou",
    "baseDefinitionId": "outlaw_zheng_tianshou"
  },
  "ninja_zircon": {
    "name": "Zircon",
    "baseDefinitionId": "ninja_zircon"
  },
  "ninja_zircon_costume_iron": {
    "name": "Zircon (Ninja of Iron Waves)",
    "baseDefinitionId": "ninja_zircon"
  },
  "forest_female_warrior": {
    "name": "Aife",
    "baseDefinitionId": "forest_female_warrior"
  },
  "forest_woodsman": {
    "name": "Derric",
    "baseDefinitionId": "forest_woodsman"
  },
  "forest_thug": {
    "name": "Brogan",
    "baseDefinitionId": "forest_thug"
  },
  "forest_female_illusionist": {
    "name": "Jenneh",
    "baseDefinitionId": "forest_female_illusionist"
  },
  "goblin_archer": {
    "name": "Needler",
    "baseDefinitionId": "goblin_archer"
  },
  "masquerade_alessia": {
    "name": "Alessia",
    "baseDefinitionId": "masquerade_alessia"
  },
  "mahayoddha_ali": {
    "name": "Ali",
    "baseDefinitionId": "mahayoddha_ali"
  },
  "forest_female_spirit": {
    "name": "Belith",
    "baseDefinitionId": "forest_female_spirit"
  },
  "forest_female_spirit_costume_autumn": {
    "name": "Belith (Grove Spirit)",
    "baseDefinitionId": "forest_female_spirit"
  },
  "forest_female_spirit_costume_cute": {
    "name": "Belith (Toon Spirit)",
    "baseDefinitionId": "forest_female_spirit"
  },
  "forest_female_spirit_costume_glass": {
    "name": "Belith (Glass Spirit)",
    "baseDefinitionId": "forest_female_spirit"
  },
  "forest_female_spirit_costume_stylish": {
    "name": "Belith (Stylish Spirit)",
    "baseDefinitionId": "forest_female_spirit"
  },
  "forest_archer": {
    "name": "Berden",
    "baseDefinitionId": "forest_archer"
  },
  "forest_archer_costume_warrior": {
    "name": "Berden (Adroit Archer)",
    "baseDefinitionId": "forest_archer"
  },
  "forest_archer_costume_cute": {
    "name": "Berden (Toon Archer)",
    "baseDefinitionId": "forest_archer"
  },
  "forest_archer_costume_glass": {
    "name": "Berden (Glass Archer)",
    "baseDefinitionId": "forest_archer"
  },
  "forest_female_druid": {
    "name": "Brienne",
    "baseDefinitionId": "forest_female_druid"
  },
  "forest_female_druid_costume_native": {
    "name": "Brienne (Shaman of Concordia)",
    "baseDefinitionId": "forest_female_druid"
  },
  "forest_female_druid_costume_cute": {
    "name": "Brienne (Toon of Rathwood)",
    "baseDefinitionId": "forest_female_druid"
  },
  "forest_female_druid_costume_glass": {
    "name": "Brienne (Vitrail of Rathwood)",
    "baseDefinitionId": "forest_female_druid"
  },
  "s3_by_ulf": {
    "name": "By-Ulf",
    "baseDefinitionId": "s3_by_ulf"
  },
  "goblin_fighter": {
    "name": "Carver",
    "baseDefinitionId": "goblin_fighter"
  },
  "goblin_fighter_costume_evil": {
    "name": "Carver (The Cutthroat)",
    "baseDefinitionId": "goblin_fighter"
  },
  "goblin_fighter_costume_cute": {
    "name": "Carver (The Cutpurse Toon)",
    "baseDefinitionId": "goblin_fighter"
  },
  "goblin_fighter_costume_glass": {
    "name": "Carver (Glass Cutpurse)",
    "baseDefinitionId": "goblin_fighter"
  },
  "astral_dwarf_chires": {
    "name": "Chires",
    "baseDefinitionId": "astral_dwarf_chires"
  },
  "magic_dolgoon": {
    "name": "Dölgöön",
    "baseDefinitionId": "magic_dolgoon"
  },
  "fleur_eumachius": {
    "name": "Eumachius",
    "baseDefinitionId": "fleur_eumachius"
  },
  "s5_faiez": {
    "name": "Faiez",
    "baseDefinitionId": "s5_faiez"
  },
  "s5_faiez_costume_miner": {
    "name": "Faiez (Fortuitous Miner)",
    "baseDefinitionId": "s5_faiez"
  },
  "owl_featherino": {
    "name": "Featherino",
    "baseDefinitionId": "owl_featherino"
  },
  "wild_cat_ferni": {
    "name": "Ferni",
    "baseDefinitionId": "wild_cat_ferni"
  },
  "monster_hunter_fianna": {
    "name": "Fianna",
    "baseDefinitionId": "monster_hunter_fianna"
  },
  "forest_friar": {
    "name": "Friar Tuck",
    "baseDefinitionId": "forest_friar"
  },
  "forest_friar_costume_explorer": {
    "name": "Friar Tuck (Jovial Explorer)",
    "baseDefinitionId": "forest_friar"
  },
  "forest_friar_costume_cute": {
    "name": "Friar Tuck (Jovial Toon)",
    "baseDefinitionId": "forest_friar"
  },
  "forest_friar_costume_glass": {
    "name": "Friar Tuck (Jovial Vitrail)",
    "baseDefinitionId": "forest_friar"
  },
  "forest_friar_costume_stylish": {
    "name": "Friar Tuck (Jovial Disco Artist)",
    "baseDefinitionId": "forest_friar"
  },
  "journey_general_yin": {
    "name": "General Yin",
    "baseDefinitionId": "journey_general_yin"
  },
  "fables_gnomer": {
    "name": "Gnomer",
    "baseDefinitionId": "fables_gnomer"
  },
  "halloween_goopy": {
    "name": "Goopy",
    "baseDefinitionId": "halloween_goopy"
  },
  "s4_gramps": {
    "name": "Gramps",
    "baseDefinitionId": "s4_gramps"
  },
  "s4_gramps_costume_gardener": {
    "name": "Gramps (Halfling Gardener)",
    "baseDefinitionId": "s4_gramps"
  },
  "s3_grevle": {
    "name": "Grevle",
    "baseDefinitionId": "s3_grevle"
  },
  "sand_horse": {
    "name": "Hisan",
    "baseDefinitionId": "sand_horse"
  },
  "lizardman_warrior": {
    "name": "Isshtak",
    "baseDefinitionId": "lizardman_warrior"
  },
  "lizardman_warrior_costume_dinosaur": {
    "name": "Isshtak (Lizardfolk Ancestor)",
    "baseDefinitionId": "lizardman_warrior"
  },
  "lizardman_warrior_costume_cute": {
    "name": "Isshtak (Toon Fighter)",
    "baseDefinitionId": "lizardman_warrior"
  },
  "lizardman_warrior_costume_glass": {
    "name": "Isshtak (Glass Fighter)",
    "baseDefinitionId": "lizardman_warrior"
  },
  "forsaken_jax": {
    "name": "Jax",
    "baseDefinitionId": "forsaken_jax"
  },
  "kingdom_jing": {
    "name": "Jing",
    "baseDefinitionId": "kingdom_jing"
  },
  "beauty_beast_lucas": {
    "name": "Lucas",
    "baseDefinitionId": "beauty_beast_lucas"
  },
  "s2_merman": {
    "name": "Mnesseus",
    "baseDefinitionId": "s2_merman"
  },
  "s2_merman_costume_leutenant": {
    "name": "Mnesseus (Lieutenant of Atlantis)",
    "baseDefinitionId": "s2_merman"
  },
  "s2_merman_costume_cute": {
    "name": "Mnesseus (Toon Merman)",
    "baseDefinitionId": "s2_merman"
  },
  "s2_chameleon_bruiser": {
    "name": "Muggy",
    "baseDefinitionId": "s2_chameleon_bruiser"
  },
  "fox_nettletail": {
    "name": "Nettletail",
    "baseDefinitionId": "fox_nettletail"
  },
  "slayer_noril": {
    "name": "Noril",
    "baseDefinitionId": "slayer_noril"
  },
  "magic_roxia": {
    "name": "Roxia",
    "baseDefinitionId": "magic_roxia"
  },
  "wonderland_bear": {
    "name": "Shrubbear",
    "baseDefinitionId": "wonderland_bear"
  },
  "circus_whacker": {
    "name": "Whacker",
    "baseDefinitionId": "circus_whacker"
  },
  "garrison_william": {
    "name": "William",
    "baseDefinitionId": "garrison_william"
  },
  "castle_bear_yona": {
    "name": "Yona",
    "baseDefinitionId": "castle_bear_yona"
  },
  "bard_zarel": {
    "name": "Zarel",
    "baseDefinitionId": "bard_zarel"
  },
  "valentines_zarola": {
    "name": "Zarola",
    "baseDefinitionId": "valentines_zarola"
  },
  "valentines_zarola_costume_cowboy": {
    "name": "Zarola (Cupid of Lone Rangers)",
    "baseDefinitionId": "valentines_zarola"
  },
  "elemental_alfie": {
    "name": "Alfie",
    "baseDefinitionId": "elemental_alfie"
  },
  "s3_almur": {
    "name": "Almur",
    "baseDefinitionId": "s3_almur"
  },
  "s3_almur_costume_lord": {
    "name": "Almur (Lord of Svartalfheim)",
    "baseDefinitionId": "s3_almur"
  },
  "s3_almur_costume_cute": {
    "name": "Almur (Shadowtoon of Svartalfheim)",
    "baseDefinitionId": "s3_almur"
  },
  "magic_anton": {
    "name": "Anton",
    "baseDefinitionId": "magic_anton"
  },
  "styx_brontes": {
    "name": "Brontes",
    "baseDefinitionId": "styx_brontes"
  },
  "s3_brynhild": {
    "name": "Brynhild",
    "baseDefinitionId": "s3_brynhild"
  },
  "christmas_elf": {
    "name": "Buddy",
    "baseDefinitionId": "christmas_elf"
  },
  "christmas_elf_costume_gift_bookkeper": {
    "name": "Buddy (Santa’s Bookkeeper)",
    "baseDefinitionId": "christmas_elf"
  },
  "elven_captain": {
    "name": "Caedmon",
    "baseDefinitionId": "elven_captain"
  },
  "elven_captain_costume_mask": {
    "name": "Caedmon (Elven Avenger)",
    "baseDefinitionId": "elven_captain"
  },
  "elven_captain_costume_cavalier": {
    "name": "Caedmon (Elven Cavalier)",
    "baseDefinitionId": "elven_captain"
  },
  "elven_captain_costume_cute": {
    "name": "Caedmon (Elven Toon)",
    "baseDefinitionId": "elven_captain"
  },
  "elven_captain_costume_glass": {
    "name": "Caedmon (Elven Vitrail)",
    "baseDefinitionId": "elven_captain"
  },
  "elven_captain_costume_stylish": {
    "name": "Caedmon (Stylish Elf)",
    "baseDefinitionId": "elven_captain"
  },
  "castle_raven_franz": {
    "name": "Franz",
    "baseDefinitionId": "castle_raven_franz"
  },
  "slime_fruitio": {
    "name": "Fruitio",
    "baseDefinitionId": "slime_fruitio"
  },
  "s2_atlantean_robot": {
    "name": "Gadeirus",
    "baseDefinitionId": "s2_atlantean_robot"
  },
  "s2_atlantean_robot_costume_sentinel": {
    "name": "Gadeirus (Atlantean Sentinel)",
    "baseDefinitionId": "s2_atlantean_robot"
  },
  "s2_atlantean_robot_costume_cute": {
    "name": "Gadeirus (Atlantean Watcher Toon)",
    "baseDefinitionId": "s2_atlantean_robot"
  },
  "s2_chameleon_chief": {
    "name": "Gobbler",
    "baseDefinitionId": "s2_chameleon_chief"
  },
  "s2_chameleon_chief_costume_heavyweight": {
    "name": "Gobbler (World Heavyweight Champion)",
    "baseDefinitionId": "s2_chameleon_chief"
  },
  "s2_chameleon_chief_costume_cute": {
    "name": "Gobbler (Toon Chameleon General)",
    "baseDefinitionId": "s2_chameleon_chief"
  },
  "fables_hansel": {
    "name": "Hansel",
    "baseDefinitionId": "fables_hansel"
  },
  "fables_hansel_costume_vampire_hunter": {
    "name": "Hansel (Vampire Hunter of Grimforest)",
    "baseDefinitionId": "fables_hansel"
  },
  "rabbit_green": {
    "name": "Jack O'Hare",
    "baseDefinitionId": "rabbit_green"
  },
  "rabbit_green_costume_egg_hunter": {
    "name": "Jack O'Hare (Egg Hunter of Springvale)",
    "baseDefinitionId": "rabbit_green"
  },
  "moth_joyvert": {
    "name": "Joyvert",
    "baseDefinitionId": "moth_joyvert"
  },
  "lizardman_trapper": {
    "name": "Kashhrek",
    "baseDefinitionId": "lizardman_trapper"
  },
  "lizardman_trapper_costume_shaman": {
    "name": "Kashhrek (Lizardfolk Elder)",
    "baseDefinitionId": "lizardman_trapper"
  },
  "lizardman_trapper_costume_fisher": {
    "name": "Kashhrek (Lizardfolk Fisher)",
    "baseDefinitionId": "lizardman_trapper"
  },
  "lizardman_trapper_costume_cute": {
    "name": "Kashhrek (Toon Chieftain)",
    "baseDefinitionId": "lizardman_trapper"
  },
  "lizardman_trapper_costume_glass": {
    "name": "Kashhrek (Glass Chieftain)",
    "baseDefinitionId": "lizardman_trapper"
  },
  "lizardman_trapper_costume_stylish": {
    "name": "Kashhrek (Stylish Chieftain)",
    "baseDefinitionId": "lizardman_trapper"
  },
  "ghost_kuang_nao": {
    "name": "Kuang Nao",
    "baseDefinitionId": "ghost_kuang_nao"
  },
  "fortune_ling_long": {
    "name": "Ling Long",
    "baseDefinitionId": "fortune_ling_long"
  },
  "astral_lionstring": {
    "name": "Lionstring",
    "baseDefinitionId": "astral_lionstring"
  },
  "forest_woodsman_warrior": {
    "name": "Little John",
    "baseDefinitionId": "forest_woodsman_warrior"
  },
  "forest_woodsman_warrior_costume_camouflage": {
    "name": "Little John (Stealthy Brother)",
    "baseDefinitionId": "forest_woodsman_warrior"
  },
  "forest_woodsman_warrior_costume_highlander": {
    "name": "Little John (Mighty Highlander)",
    "baseDefinitionId": "forest_woodsman_warrior"
  },
  "forest_woodsman_warrior_costume_cute": {
    "name": "Little John (Mighty Toon)",
    "baseDefinitionId": "forest_woodsman_warrior"
  },
  "forest_woodsman_warrior_costume_glass": {
    "name": "Little John (Mighty Vitrail)",
    "baseDefinitionId": "forest_woodsman_warrior"
  },
  "forest_woodsman_warrior_costume_stylish": {
    "name": "Little John (Stylish Brother)",
    "baseDefinitionId": "forest_woodsman_warrior"
  },
  "circus_marcel": {
    "name": "Marcel",
    "baseDefinitionId": "circus_marcel"
  },
  "forest_mage": {
    "name": "Melendor",
    "baseDefinitionId": "forest_mage"
  },
  "forest_mage_costume_white": {
    "name": "Melendor (Mighty Wizard)",
    "baseDefinitionId": "forest_mage"
  },
  "forest_mage_costume_party": {
    "name": "Melendor (Party Wizard)",
    "baseDefinitionId": "forest_mage"
  },
  "forest_mage_costume_cute": {
    "name": "Melendor (Toon Wizard)",
    "baseDefinitionId": "forest_mage"
  },
  "forest_mage_costume_glass": {
    "name": "Melendor (Vitrail of the Forest)",
    "baseDefinitionId": "forest_mage"
  },
  "forest_mage_costume_stylish": {
    "name": "Melendor (Stylish Wizard)",
    "baseDefinitionId": "forest_mage"
  },
  "kalevala_mielikki": {
    "name": "Mielikki",
    "baseDefinitionId": "kalevala_mielikki"
  },
  "kalevala_mielikki_costume_bear_protector": {
    "name": "Mielikki (Protector of the Bears)",
    "baseDefinitionId": "kalevala_mielikki"
  },
  "tales1_mulgog": {
    "name": "Mulgog",
    "baseDefinitionId": "tales1_mulgog"
  },
  "tales1_mulgog_costume_bard": {
    "name": "Mulgog (Fishman Bard)",
    "baseDefinitionId": "tales1_mulgog"
  },
  "faun_myrtle": {
    "name": "Myrtle",
    "baseDefinitionId": "faun_myrtle"
  },
  "monster_hunter_numbskull": {
    "name": "Numbskull",
    "baseDefinitionId": "monster_hunter_numbskull"
  },
  "slayer_orla": {
    "name": "Orla",
    "baseDefinitionId": "slayer_orla"
  },
  "pirate_cabin_boy": {
    "name": "Peters",
    "baseDefinitionId": "pirate_cabin_boy"
  },
  "pirate_cabin_boy_costume_paper": {
    "name": "Peters (Paper Boy at Shore)",
    "baseDefinitionId": "pirate_cabin_boy"
  },
  "s5_ptolemy": {
    "name": "Ptolemy",
    "baseDefinitionId": "s5_ptolemy"
  },
  "s5_ptolemy_costume_log": {
    "name": "Ptolemy (Elder Log)",
    "baseDefinitionId": "s5_ptolemy"
  },
  "castle_stag_raleigh": {
    "name": "Raleigh",
    "baseDefinitionId": "castle_stag_raleigh"
  },
  "goblin_mage": {
    "name": "Skittleskull",
    "baseDefinitionId": "goblin_mage"
  },
  "goblin_mage_costume_candy": {
    "name": "Skittleskull (Candy Witch)",
    "baseDefinitionId": "goblin_mage"
  },
  "goblin_mage_costume_toad": {
    "name": "Skittleskull (Toad Witch)",
    "baseDefinitionId": "goblin_mage"
  },
  "goblin_mage_costume_cute": {
    "name": "Skittleskull (Toon Witch)",
    "baseDefinitionId": "goblin_mage"
  },
  "goblin_mage_costume_glass": {
    "name": "Skittleskull (Glass Witch)",
    "baseDefinitionId": "goblin_mage"
  },
  "goblin_mage_costume_stylish": {
    "name": "Skittleskull (Stylish Witch)",
    "baseDefinitionId": "goblin_mage"
  },
  "tales2_snorri": {
    "name": "Snorri",
    "baseDefinitionId": "tales2_snorri"
  },
  "s4_tettukh": {
    "name": "Tettukh",
    "baseDefinitionId": "s4_tettukh"
  },
  "musketeer_villiers": {
    "name": "Villiers",
    "baseDefinitionId": "musketeer_villiers"
  },
  "musketeer_villiers_costume_jester": {
    "name": "Villiers (Pompous Jester)",
    "baseDefinitionId": "musketeer_villiers"
  },
  "castle_raven_wren": {
    "name": "Wren",
    "baseDefinitionId": "castle_raven_wren"
  },
  "slime_achillea": {
    "name": "Achillea",
    "baseDefinitionId": "slime_achillea"
  },
  "mimic_aether_green": {
    "name": "Aether Mimic (Nature)",
    "baseDefinitionId": "mimic_aether_green"
  },
  "s5_ahmose": {
    "name": "Ahmose",
    "baseDefinitionId": "s5_ahmose"
  },
  "s5_ahmose_costume_reborn": {
    "name": "Ahmose (Pharaoh Reborn)",
    "baseDefinitionId": "s5_ahmose"
  },
  "forest_god_oberon": {
    "name": "Alberich",
    "baseDefinitionId": "forest_god_oberon"
  },
  "forest_god_oberon_costume_everoak": {
    "name": "Alberich (Everoak Knight)",
    "baseDefinitionId": "forest_god_oberon"
  },
  "forest_god_oberon_costume_cute": {
    "name": "Alberich (Seelie Toon)",
    "baseDefinitionId": "forest_god_oberon"
  },
  "garrison_archibald": {
    "name": "Archibald",
    "baseDefinitionId": "garrison_archibald"
  },
  "easter_archie": {
    "name": "Archie",
    "baseDefinitionId": "easter_archie"
  },
  "easter_archie_costume_gallant": {
    "name": "Archie (Gallant Llama Troubadour)",
    "baseDefinitionId": "easter_archie"
  },
  "gargoyle_arco": {
    "name": "Arco",
    "baseDefinitionId": "gargoyle_arco"
  },
  "ballerina_armand": {
    "name": "Armand Moncharmin",
    "baseDefinitionId": "ballerina_armand"
  },
  "mimic_ascension_item_green": {
    "name": "Ascension Mimic (Nature)",
    "baseDefinitionId": "mimic_ascension_item_green"
  },
  "musketeer_athos": {
    "name": "Athos",
    "baseDefinitionId": "musketeer_athos"
  },
  "musketeer_athos_costume_farrier": {
    "name": "Athos (Farrier Musketeer)",
    "baseDefinitionId": "musketeer_athos"
  },
  "s2_skyllaros": {
    "name": "Atomos",
    "baseDefinitionId": "s2_skyllaros"
  },
  "s2_skyllaros_costume_reef": {
    "name": "Atomos (Guardian of the Reef)",
    "baseDefinitionId": "s2_skyllaros"
  },
  "s2_skyllaros_costume_cute": {
    "name": "Atomos (Toon Guardian of Atlantis)",
    "baseDefinitionId": "s2_skyllaros"
  },
  "shadow_atwood": {
    "name": "Atwood",
    "baseDefinitionId": "shadow_atwood"
  },
  "christmas_augustus": {
    "name": "Augustus",
    "baseDefinitionId": "christmas_augustus"
  },
  "mahayoddha_avani": {
    "name": "Avani",
    "baseDefinitionId": "mahayoddha_avani"
  },
  "nature_god_balbar": {
    "name": "Balbar",
    "baseDefinitionId": "nature_god_balbar"
  },
  "monster_hunter_berit": {
    "name": "Berit",
    "baseDefinitionId": "monster_hunter_berit"
  },
  "nature_god_bertila": {
    "name": "Bertila",
    "baseDefinitionId": "nature_god_bertila"
  },
  "nature_god_bo_and_runt": {
    "name": "Bo & Runt",
    "baseDefinitionId": "nature_god_bo_and_runt"
  },
  "mahayoddha_bonga": {
    "name": "Bonga",
    "baseDefinitionId": "mahayoddha_bonga"
  },
  "bard_bonzo": {
    "name": "Bonzo",
    "baseDefinitionId": "bard_bonzo"
  },
  "goblin_boom_and_fang": {
    "name": "Boom & Fang",
    "baseDefinitionId": "goblin_boom_and_fang"
  },
  "goblin_boom_and_fang_costume_poisonous": {
    "name": "Boom & Fang (Duo of Furious Skulls)",
    "baseDefinitionId": "goblin_boom_and_fang"
  },
  "titan_hunter_borgholf": {
    "name": "Borgholf",
    "baseDefinitionId": "titan_hunter_borgholf"
  },
  "faun_bramble": {
    "name": "Bramble",
    "baseDefinitionId": "faun_bramble"
  },
  "vegetable_broseph": {
    "name": "Broseph",
    "baseDefinitionId": "vegetable_broseph"
  },
  "slime_bulklug": {
    "name": "Bulklug",
    "baseDefinitionId": "slime_bulklug"
  },
  "ninja_chikao": {
    "name": "Chikao",
    "baseDefinitionId": "ninja_chikao"
  },
  "nature_god_chloris": {
    "name": "Chloris",
    "baseDefinitionId": "nature_god_chloris"
  },
  "nature_god_cinisia": {
    "name": "Cinisia",
    "baseDefinitionId": "nature_god_cinisia"
  },
  "dryad_cloveria": {
    "name": "Cloveria",
    "baseDefinitionId": "dryad_cloveria"
  },
  "nature_god_coleston": {
    "name": "Coleston",
    "baseDefinitionId": "nature_god_coleston"
  },
  "s4_congalach": {
    "name": "Congalach",
    "baseDefinitionId": "s4_congalach"
  },
  "s4_congalach_costume_kelp": {
    "name": "Congalach (Warrior of Kelp)",
    "baseDefinitionId": "s4_congalach"
  },
  "elemental_craum": {
    "name": "Craum",
    "baseDefinitionId": "elemental_craum"
  },
  "magic_cristobal": {
    "name": "Cristóbal",
    "baseDefinitionId": "magic_cristobal"
  },
  "magic_cristobal_costume_emerald": {
    "name": "Cristóbal (Enchantments Professor)",
    "baseDefinitionId": "magic_cristobal"
  },
  "magic_carpet_crustee": {
    "name": "Crustee",
    "baseDefinitionId": "magic_carpet_crustee"
  },
  "tales2_dagr": {
    "name": "Dagr",
    "baseDefinitionId": "tales2_dagr"
  },
  "tales2_dagr_costume_plague_shaman": {
    "name": "Dagr (Dwarven Plague Shaman)",
    "baseDefinitionId": "tales2_dagr"
  },
  "construct_dancrag": {
    "name": "Dancrag",
    "baseDefinitionId": "construct_dancrag"
  },
  "ballerina_daroga": {
    "name": "Daroga",
    "baseDefinitionId": "ballerina_daroga"
  },
  "elemental_desmond": {
    "name": "Desmond",
    "baseDefinitionId": "elemental_desmond"
  },
  "valentines_matchmaker_dodgrom": {
    "name": "Dodgrom",
    "baseDefinitionId": "valentines_matchmaker_dodgrom"
  },
  "beowulf_ecgtheow": {
    "name": "Ecgtheow",
    "baseDefinitionId": "beowulf_ecgtheow"
  },
  "halloween_edwin": {
    "name": "Edwin",
    "baseDefinitionId": "halloween_edwin"
  },
  "halloween_edwin_costume_mafia": {
    "name": "Edwin (The Backstabbing Butler)",
    "baseDefinitionId": "halloween_edwin"
  },
  "circus_eiora_and_fluffy": {
    "name": "Eiora & Fluffy",
    "baseDefinitionId": "circus_eiora_and_fluffy"
  },
  "circus_eiora_and_fluffy_costume_dark": {
    "name": "Eiora & Fluffy (Dark Duo)",
    "baseDefinitionId": "circus_eiora_and_fluffy"
  },
  "ninja_ekanite": {
    "name": "Ekanite",
    "baseDefinitionId": "ninja_ekanite"
  },
  "s5_el_naddaha": {
    "name": "El Naddaha",
    "baseDefinitionId": "s5_el_naddaha"
  },
  "s5_el_naddaha_costume_sea": {
    "name": "El Naddaha (Siren of the Sea)",
    "baseDefinitionId": "s5_el_naddaha"
  },
  "forest_male_elf": {
    "name": "Elkanen",
    "baseDefinitionId": "forest_male_elf"
  },
  "forest_male_elf_costume_king": {
    "name": "Elkanen (Moonlit King)",
    "baseDefinitionId": "forest_male_elf"
  },
  "forest_male_elf_costume_cute": {
    "name": "Elkanen (Toon Spearmaster)",
    "baseDefinitionId": "forest_male_elf"
  },
  "forest_male_elf_costume_glass": {
    "name": "Elkanen (Glass Spearmaster)",
    "baseDefinitionId": "forest_male_elf"
  },
  "forest_male_elf_costume_stylish": {
    "name": "Elkanen (Stylish Spearmaster)",
    "baseDefinitionId": "forest_male_elf"
  },
  "institute_ellery": {
    "name": "Ellery",
    "baseDefinitionId": "institute_ellery"
  },
  "forest_god_elradir": {
    "name": "Elradir",
    "baseDefinitionId": "forest_god_elradir"
  },
  "magic_carpet_elyssa": {
    "name": "Elyssa",
    "baseDefinitionId": "magic_carpet_elyssa"
  },
  "mimic_emblem_green": {
    "name": "Emblem Mimic (Nature)",
    "baseDefinitionId": "mimic_emblem_green"
  },
  "mystery_enigmo": {
    "name": "Enigmo",
    "baseDefinitionId": "mystery_enigmo"
  },
  "forest_god_evelyn": {
    "name": "Evelyn",
    "baseDefinitionId": "forest_god_evelyn"
  },
  "forest_god_evelyn_costume_huntress": {
    "name": "Evelyn (Brave Huntress)",
    "baseDefinitionId": "forest_god_evelyn"
  },
  "mimic_training_hero_green": {
    "name": "Experience Mimic (Nature)",
    "baseDefinitionId": "mimic_training_hero_green"
  },
  "tales2_fafnir": {
    "name": "Fafnir",
    "baseDefinitionId": "tales2_fafnir"
  },
  "masquerade_februus": {
    "name": "Februus",
    "baseDefinitionId": "masquerade_februus"
  },
  "construct_ferrus": {
    "name": "Ferrus",
    "baseDefinitionId": "construct_ferrus"
  },
  "nature_god_florenna": {
    "name": "Florenna",
    "baseDefinitionId": "nature_god_florenna"
  },
  "mimic_food_green": {
    "name": "Food Mimic (Nature)",
    "baseDefinitionId": "mimic_food_green"
  },
  "fox_foxley": {
    "name": "Foxley",
    "baseDefinitionId": "fox_foxley"
  },
  "halloween_francine": {
    "name": "Francine",
    "baseDefinitionId": "halloween_francine"
  },
  "halloween_francine_costume_mafia": {
    "name": "Francine (The Mobstress)",
    "baseDefinitionId": "halloween_francine"
  },
  "beowulf_freawaru": {
    "name": "Freawaru",
    "baseDefinitionId": "beowulf_freawaru"
  },
  "s3_frigg": {
    "name": "Frigg",
    "baseDefinitionId": "s3_frigg"
  },
  "s3_frigg_costume_clairvoyance": {
    "name": "Frigg (Goddess of Clairvoyance)",
    "baseDefinitionId": "s3_frigg"
  },
  "fables_frog_prince": {
    "name": "Frog Prince",
    "baseDefinitionId": "fables_frog_prince"
  },
  "construct_frond": {
    "name": "Frond",
    "baseDefinitionId": "construct_frond"
  },
  "slime_fungustine": {
    "name": "Fungustine",
    "baseDefinitionId": "slime_fungustine"
  },
  "tales1_galapago": {
    "name": "Galapago",
    "baseDefinitionId": "tales1_galapago"
  },
  "tales1_galapago_costume_quarry": {
    "name": "Galapago (Wise Roller of the Quarry)",
    "baseDefinitionId": "tales1_galapago"
  },
  "s4_garjammal": {
    "name": "Garjammal",
    "baseDefinitionId": "s4_garjammal"
  },
  "s4_garjammal_costume_kite": {
    "name": "Garjammal (Morlock Kite Master)",
    "baseDefinitionId": "s4_garjammal"
  },
  "gargoyle_garten": {
    "name": "Garten",
    "baseDefinitionId": "gargoyle_garten"
  },
  "tales1_gelert": {
    "name": "Gelert",
    "baseDefinitionId": "tales1_gelert"
  },
  "tales1_gelert_costume_scavenger": {
    "name": "Gelert (Scavenger of the Deep)",
    "baseDefinitionId": "tales1_gelert"
  },
  "christmas_ginger": {
    "name": "Ginger",
    "baseDefinitionId": "christmas_ginger"
  },
  "christmas_ginger_costume_gift_wrapper": {
    "name": "Ginger (Gnome Master of Gifts)",
    "baseDefinitionId": "christmas_ginger"
  },
  "garrison_godfrey": {
    "name": "Godfrey",
    "baseDefinitionId": "garrison_godfrey"
  },
  "slime_goorian": {
    "name": "Goorian",
    "baseDefinitionId": "slime_goorian"
  },
  "forest_god_grace": {
    "name": "Grace",
    "baseDefinitionId": "forest_god_grace"
  },
  "knights_green_knight": {
    "name": "Green Knight",
    "baseDefinitionId": "knights_green_knight"
  },
  "forest_god_gregorion": {
    "name": "Gregorion",
    "baseDefinitionId": "forest_god_gregorion"
  },
  "forest_god_gregorion_costume_alchemist": {
    "name": "Gregorion (The Hermit Alchemist)",
    "baseDefinitionId": "forest_god_gregorion"
  },
  "beowulf_grendel": {
    "name": "Grendel",
    "baseDefinitionId": "beowulf_grendel"
  },
  "moth_grovevert": {
    "name": "Grovevert",
    "baseDefinitionId": "moth_grovevert"
  },
  "kingdom_guan_yu": {
    "name": "Guan Yu",
    "baseDefinitionId": "kingdom_guan_yu"
  },
  "kingdom_guan_yu_costume_dragon": {
    "name": "Guan Yu (Inferno General)",
    "baseDefinitionId": "kingdom_guan_yu"
  },
  "guardian_chameleon": {
    "name": "Guardian Chameleon",
    "baseDefinitionId": "guardian_chameleon"
  },
  "monster_hunter_hammertusk": {
    "name": "Hammertusk",
    "baseDefinitionId": "monster_hunter_hammertusk"
  },
  "construct_haulstone": {
    "name": "Haulstone",
    "baseDefinitionId": "construct_haulstone"
  },
  "ghost_hei_wu_chang": {
    "name": "Hei Wu Chang",
    "baseDefinitionId": "ghost_hei_wu_chang"
  },
  "s3_heimdall": {
    "name": "Heimdall",
    "baseDefinitionId": "s3_heimdall"
  },
  "s3_heimdall_costume_dreaded": {
    "name": "Heimdall (Dreaded Watchman)",
    "baseDefinitionId": "s3_heimdall"
  },
  "forest_titan": {
    "name": "Horghall",
    "baseDefinitionId": "forest_titan"
  },
  "forest_titan_costume_jester": {
    "name": "Horghall (Wooden Jester)",
    "baseDefinitionId": "forest_titan"
  },
  "forest_titan_costume_nightmare": {
    "name": "Horghall (Nightmare of the Woods)",
    "baseDefinitionId": "forest_titan"
  },
  "forest_titan_costume_glass": {
    "name": "Horghall (Vitrail of the Woods)",
    "baseDefinitionId": "forest_titan"
  },
  "halloween_hortensia": {
    "name": "Hortensia",
    "baseDefinitionId": "halloween_hortensia"
  },
  "castle_bear_humbert": {
    "name": "Humbert",
    "baseDefinitionId": "castle_bear_humbert"
  },
  "astral_dwarf_hygil": {
    "name": "Hygil",
    "baseDefinitionId": "astral_dwarf_hygil"
  },
  "kalevala_iku_turso": {
    "name": "Iku-Turso",
    "baseDefinitionId": "kalevala_iku_turso"
  },
  "kalevala_iku_turso_costume_crown": {
    "name": "Iku-Turso (Jarl of the Depths)",
    "baseDefinitionId": "kalevala_iku_turso"
  },
  "mimic_iron_green": {
    "name": "Iron Mimic (Nature)",
    "baseDefinitionId": "mimic_iron_green"
  },
  "ninja_ito": {
    "name": "Ito",
    "baseDefinitionId": "ninja_ito"
  },
  "beauty_beast_jacquespierre": {
    "name": "Jacques-Pierre",
    "baseDefinitionId": "beauty_beast_jacquespierre"
  },
  "ninja_jade": {
    "name": "Jade",
    "baseDefinitionId": "ninja_jade"
  },
  "forest_female_elf": {
    "name": "Kadilen",
    "baseDefinitionId": "forest_female_elf"
  },
  "forest_female_elf_costume_mage": {
    "name": "Kadilen (Priestess of Moonlight)",
    "baseDefinitionId": "forest_female_elf"
  },
  "forest_female_elf_costume_fairy": {
    "name": "Kadilen (Moonlit Fairy)",
    "baseDefinitionId": "forest_female_elf"
  },
  "forest_female_elf_costume_cute": {
    "name": "Kadilen (Toon Shieldmaster)",
    "baseDefinitionId": "forest_female_elf"
  },
  "forest_female_elf_costume_glass": {
    "name": "Kadilen (Shieldmaster of Glass)",
    "baseDefinitionId": "forest_female_elf"
  },
  "ronin_kageyama_nagato": {
    "name": "Kageyama Nagato",
    "baseDefinitionId": "ronin_kageyama_nagato"
  },
  "monster_hunter_kai": {
    "name": "Kai",
    "baseDefinitionId": "monster_hunter_kai"
  },
  "forsaken_khatrox": {
    "name": "Khatrox",
    "baseDefinitionId": "forsaken_khatrox"
  },
  "forest_god_kingston": {
    "name": "Kingston",
    "baseDefinitionId": "forest_god_kingston"
  },
  "garrison_kolya": {
    "name": "Kolya",
    "baseDefinitionId": "garrison_kolya"
  },
  "pirate_lady": {
    "name": "Lady Locke",
    "baseDefinitionId": "pirate_lady"
  },
  "pirate_lady_costume_queen": {
    "name": "Lady Locke (Rebel Queen)",
    "baseDefinitionId": "pirate_lady"
  },
  "knights_lady_of_the_lake": {
    "name": "Lady of the Lake",
    "baseDefinitionId": "knights_lady_of_the_lake"
  },
  "knights_lady_of_the_lake_costume_blades": {
    "name": "Lady of the Lake (Lady of Blades)",
    "baseDefinitionId": "knights_lady_of_the_lake"
  },
  "beauty_beast_laurent": {
    "name": "Laurent",
    "baseDefinitionId": "beauty_beast_laurent"
  },
  "nature_god_leadria": {
    "name": "Leadria",
    "baseDefinitionId": "nature_god_leadria"
  },
  "goblin_leafwizzle": {
    "name": "Leafwhisk",
    "baseDefinitionId": "goblin_leafwizzle"
  },
  "wild_cat_leonie": {
    "name": "Leonie",
    "baseDefinitionId": "wild_cat_leonie"
  },
  "elven_archer": {
    "name": "Lianna",
    "baseDefinitionId": "elven_archer"
  },
  "elven_archer_costume_moon": {
    "name": "Lianna (The Noble Guardian)",
    "baseDefinitionId": "elven_archer"
  },
  "elven_archer_costume_raven": {
    "name": "Lianna (The Noble Raven)",
    "baseDefinitionId": "elven_archer"
  },
  "elven_archer_costume_cute": {
    "name": "Lianna (The Noble Toon)",
    "baseDefinitionId": "elven_archer"
  },
  "elven_archer_costume_glass": {
    "name": "Lianna (The Noble Vitrail)",
    "baseDefinitionId": "elven_archer"
  },
  "elven_archer_costume_stylish": {
    "name": "Lianna (Stylish Archer)",
    "baseDefinitionId": "elven_archer"
  },
  "moth_limeboire": {
    "name": "Limeboire",
    "baseDefinitionId": "moth_limeboire"
  },
  "outlaw_lin_chong": {
    "name": "Lin Chong",
    "baseDefinitionId": "outlaw_lin_chong"
  },
  "nature_god_liora": {
    "name": "Liora",
    "baseDefinitionId": "nature_god_liora"
  },
  "kingdom_liu_bei": {
    "name": "Liu Bei",
    "baseDefinitionId": "kingdom_liu_bei"
  },
  "kingdom_liu_bei_costume_nature": {
    "name": "Liu Bei (Warlord of Forest)",
    "baseDefinitionId": "kingdom_liu_bei"
  },
  "s4_lughaidh": {
    "name": "Lughaidh",
    "baseDefinitionId": "s4_lughaidh"
  },
  "s4_lughaidh_costume_deathless": {
    "name": "Lughaidh (The Deathless King)",
    "baseDefinitionId": "s4_lughaidh"
  },
  "s5_maat": {
    "name": "Ma'at",
    "baseDefinitionId": "s5_maat"
  },
  "s5_maat_costume_river": {
    "name": "Ma'at (Lady of the Iteru)",
    "baseDefinitionId": "s5_maat"
  },
  "astral_dwarf_maegwyn": {
    "name": "Maegwyn",
    "baseDefinitionId": "astral_dwarf_maegwyn"
  },
  "forest_god_elinor": {
    "name": "Margaret",
    "baseDefinitionId": "forest_god_elinor"
  },
  "mighty_pet_toto": {
    "name": "Max",
    "baseDefinitionId": "mighty_pet_toto"
  },
  "beachparty_mazoga": {
    "name": "Mazoga",
    "baseDefinitionId": "beachparty_mazoga"
  },
  "mahayoddha_meenakshi": {
    "name": "Meenakshi",
    "baseDefinitionId": "mahayoddha_meenakshi"
  },
  "vegetable_melonius": {
    "name": "Melonius",
    "baseDefinitionId": "vegetable_melonius"
  },
  "gargoyle_mena": {
    "name": "Mena",
    "baseDefinitionId": "gargoyle_mena"
  },
  "bard_merith": {
    "name": "Merith",
    "baseDefinitionId": "bard_merith"
  },
  "monster_hunter_mistweaver": {
    "name": "Mistweaver",
    "baseDefinitionId": "monster_hunter_mistweaver"
  },
  "ronin_mizuno_seiko": {
    "name": "Mizuno Seiko",
    "baseDefinitionId": "ronin_mizuno_seiko"
  },
  "astral_moonflower": {
    "name": "Moonflower",
    "baseDefinitionId": "astral_moonflower"
  },
  "knights_morgan_le_fay": {
    "name": "Morgan Le Fay",
    "baseDefinitionId": "knights_morgan_le_fay"
  },
  "christmas_mrs_claus": {
    "name": "Mother North",
    "baseDefinitionId": "christmas_mrs_claus"
  },
  "christmas_mrs_claus_costume_fangirl": {
    "name": "Mother North (Holiday Sweater Enthusiast)",
    "baseDefinitionId": "christmas_mrs_claus"
  },
  "slime_mucktus": {
    "name": "Mucktus",
    "baseDefinitionId": "slime_mucktus"
  },
  "ninja_myoinni": {
    "name": "Myoin-ni",
    "baseDefinitionId": "ninja_myoinni"
  },
  "nature_god_mystia": {
    "name": "Mystia",
    "baseDefinitionId": "nature_god_mystia"
  },
  "construct_nepant": {
    "name": "Nepant",
    "baseDefinitionId": "construct_nepant"
  },
  "champions_nogu": {
    "name": "Nogu",
    "baseDefinitionId": "champions_nogu"
  },
  "titan_hunter_orson": {
    "name": "Orson",
    "baseDefinitionId": "titan_hunter_orson"
  },
  "tales2_ott": {
    "name": "Ott",
    "baseDefinitionId": "tales2_ott"
  },
  "shadow_penelope": {
    "name": "Penelope",
    "baseDefinitionId": "shadow_penelope"
  },
  "faun_peregrine": {
    "name": "Peregrine",
    "baseDefinitionId": "faun_peregrine"
  },
  "ninja_peridot": {
    "name": "Peridot",
    "baseDefinitionId": "ninja_peridot"
  },
  "s4_phileas_fogg": {
    "name": "Phileas Fogg",
    "baseDefinitionId": "s4_phileas_fogg"
  },
  "s4_phileas_fogg_costume_engineer": {
    "name": "Phileas Fogg (Exquisite Engineer)",
    "baseDefinitionId": "s4_phileas_fogg"
  },
  "garrison_pip": {
    "name": "Pip",
    "baseDefinitionId": "garrison_pip"
  },
  "ballerina_prince_siegfried": {
    "name": "Prince Siegfried",
    "baseDefinitionId": "ballerina_prince_siegfried"
  },
  "lunar_new_year_qinglong": {
    "name": "Qinglong",
    "baseDefinitionId": "lunar_new_year_qinglong"
  },
  "musketeer_queen_anne": {
    "name": "Queen Anne",
    "baseDefinitionId": "musketeer_queen_anne"
  },
  "castle_wolf_quenell": {
    "name": "Quenell",
    "baseDefinitionId": "castle_wolf_quenell"
  },
  "castle_wolf_quenell_costume_wood": {
    "name": "Quenell (Champion of the Wolves)",
    "baseDefinitionId": "castle_wolf_quenell"
  },
  "magic_carpet_ragrim": {
    "name": "Ragrim",
    "baseDefinitionId": "magic_carpet_ragrim"
  },
  "s3_ratatoskr": {
    "name": "Ratatoskr",
    "baseDefinitionId": "s3_ratatoskr"
  },
  "s3_ratatoskr_costume_architect": {
    "name": "Ratatoskr (Architect of Yggdrasil)",
    "baseDefinitionId": "s3_ratatoskr"
  },
  "owl_relius": {
    "name": "Relius",
    "baseDefinitionId": "owl_relius"
  },
  "construct_rhineglow": {
    "name": "Rhineglow",
    "baseDefinitionId": "construct_rhineglow"
  },
  "elemental_roz": {
    "name": "Roz",
    "baseDefinitionId": "elemental_roz"
  },
  "elemental_roz_costume_disco": {
    "name": "Roz (Disco Sharpshooter)",
    "baseDefinitionId": "elemental_roz"
  },
  "easter_sadie": {
    "name": "Sadie",
    "baseDefinitionId": "easter_sadie"
  },
  "journey_sha_wujing": {
    "name": "Sha Wujing",
    "baseDefinitionId": "journey_sha_wujing"
  },
  "shark_sharpoon": {
    "name": "Sha-Arr",
    "baseDefinitionId": "shark_sharpoon"
  },
  "nature_god_silvaria": {
    "name": "Silvaria",
    "baseDefinitionId": "nature_god_silvaria"
  },
  "goblin_smarttongue": {
    "name": "Smarttongue",
    "baseDefinitionId": "goblin_smarttongue"
  },
  "mighty_pet_snowball": {
    "name": "Snowball",
    "baseDefinitionId": "mighty_pet_snowball"
  },
  "goblin_soursting": {
    "name": "Soursting",
    "baseDefinitionId": "goblin_soursting"
  },
  "tales1_spartoi": {
    "name": "Spartoi",
    "baseDefinitionId": "tales1_spartoi"
  },
  "tales1_spartoi_costume_guard": {
    "name": "Spartoi (Naga Guard)",
    "baseDefinitionId": "tales1_spartoi"
  },
  "fox_spiff": {
    "name": "Spiff",
    "baseDefinitionId": "fox_spiff"
  },
  "rodent_sproutwhisker": {
    "name": "Sproutwhisker",
    "baseDefinitionId": "rodent_sproutwhisker"
  },
  "monster_hunter_staintongue": {
    "name": "Staintongue",
    "baseDefinitionId": "monster_hunter_staintongue"
  },
  "astral_starlass": {
    "name": "Starlass",
    "baseDefinitionId": "astral_starlass"
  },
  "outlaw_sun_erniang": {
    "name": "Sun Erniang",
    "baseDefinitionId": "outlaw_sun_erniang"
  },
  "monster_hunter_sune": {
    "name": "Sune",
    "baseDefinitionId": "monster_hunter_sune"
  },
  "kalevala_suomuhauki": {
    "name": "Suomuhauki",
    "baseDefinitionId": "kalevala_suomuhauki"
  },
  "construct_sylosis": {
    "name": "Sylosis",
    "baseDefinitionId": "construct_sylosis"
  },
  "ninja_tametomo": {
    "name": "Tametomo",
    "baseDefinitionId": "ninja_tametomo"
  },
  "s2_junglehunter": {
    "name": "Tarlak",
    "baseDefinitionId": "s2_junglehunter"
  },
  "s2_junglehunter_costume_party": {
    "name": "Tarlak (Prince of the Lu’au)",
    "baseDefinitionId": "s2_junglehunter"
  },
  "s2_junglehunter_costume_cute": {
    "name": "Tarlak (Toon of the Jungle)",
    "baseDefinitionId": "s2_junglehunter"
  },
  "castle_bear_teddy": {
    "name": "Teddy",
    "baseDefinitionId": "castle_bear_teddy"
  },
  "forest_god_telluria": {
    "name": "Telluria",
    "baseDefinitionId": "forest_god_telluria"
  },
  "magic_telonius": {
    "name": "Telonius",
    "baseDefinitionId": "magic_telonius"
  },
  "magic_telonius_costume_brew": {
    "name": "Telonius (Centaur of the Taproom)",
    "baseDefinitionId": "magic_telonius"
  },
  "wild_cat_thaffer": {
    "name": "Thaffer",
    "baseDefinitionId": "wild_cat_thaffer"
  },
  "wonderland_hatter": {
    "name": "The Hatter",
    "baseDefinitionId": "wonderland_hatter"
  },
  "garrison_theodosius": {
    "name": "Theodosius",
    "baseDefinitionId": "garrison_theodosius"
  },
  "scoundrel_tofana": {
    "name": "Tofana",
    "baseDefinitionId": "scoundrel_tofana"
  },
  "villain_toxicandra": {
    "name": "Toxicandra",
    "baseDefinitionId": "villain_toxicandra"
  },
  "villain_toxicandra_costume_rose": {
    "name": "Toxicandra (Sovereign of Flora)",
    "baseDefinitionId": "villain_toxicandra"
  },
  "mimic_troop_green": {
    "name": "Troop Mimic (Nature)",
    "baseDefinitionId": "mimic_troop_green"
  },
  "astral_demon_turundh": {
    "name": "Turundh",
    "baseDefinitionId": "astral_demon_turundh"
  },
  "kalevala_vainamoinen": {
    "name": "Väinämöinen",
    "baseDefinitionId": "kalevala_vainamoinen"
  },
  "kalevala_vainamoinen_costume_vainamoinen_sage": {
    "name": "Väinämöinen (Eternal Sage)",
    "baseDefinitionId": "kalevala_vainamoinen"
  },
  "slime_verdigoo": {
    "name": "Verdigoo",
    "baseDefinitionId": "slime_verdigoo"
  },
  "valentines_vernon": {
    "name": "Vernon",
    "baseDefinitionId": "valentines_vernon"
  },
  "owl_verus": {
    "name": "Verus",
    "baseDefinitionId": "owl_verus"
  },
  "nature_god_viselus": {
    "name": "Viselus",
    "baseDefinitionId": "nature_god_viselus"
  },
  "fortune_wei_qi": {
    "name": "Wei Qi",
    "baseDefinitionId": "fortune_wei_qi"
  },
  "bard_winifred": {
    "name": "Winifred",
    "baseDefinitionId": "bard_winifred"
  },
  "elemental_xandrella": {
    "name": "Xandrella",
    "baseDefinitionId": "elemental_xandrella"
  },
  "elemental_xandrella_costume_idol": {
    "name": "Xandrella (Idol of Elemental Creations)",
    "baseDefinitionId": "elemental_xandrella"
  },
  "castle_stag_xiamara": {
    "name": "Xiamara",
    "baseDefinitionId": "castle_stag_xiamara"
  },
  "outlaw_xiang_chong": {
    "name": "Xiang Chong",
    "baseDefinitionId": "outlaw_xiang_chong"
  },
  "lunar_new_year_xiaoqing": {
    "name": "Xiaoqing",
    "baseDefinitionId": "lunar_new_year_xiaoqing"
  },
  "astral_demon_xshahr": {
    "name": "Xshahr",
    "baseDefinitionId": "astral_demon_xshahr"
  },
  "sand_king": {
    "name": "Yunan",
    "baseDefinitionId": "sand_king"
  },
  "sand_king_costume_lifeguard": {
    "name": "Yunan (King of Lifeguards)",
    "baseDefinitionId": "sand_king"
  },
  "wild_cat_zarek": {
    "name": "Zarek",
    "baseDefinitionId": "wild_cat_zarek"
  },
  "shadow_zavinia": {
    "name": "Zavinia",
    "baseDefinitionId": "shadow_zavinia"
  },
  "forest_god_zeline": {
    "name": "Zeline",
    "baseDefinitionId": "forest_god_zeline"
  },
  "forest_god_zeline_costume_avian": {
    "name": "Zeline (Avian Celestial)",
    "baseDefinitionId": "forest_god_zeline"
  },
  "institute_zenas": {
    "name": "Zenas",
    "baseDefinitionId": "institute_zenas"
  },
  "forest_god_zocc": {
    "name": "Zocc",
    "baseDefinitionId": "forest_god_zocc"
  },
  "elemental_zuni": {
    "name": "Zuni",
    "baseDefinitionId": "elemental_zuni"
  },
  "astral_demon_zurrumurgh": {
    "name": "Zurrumurgh",
    "baseDefinitionId": "astral_demon_zurrumurgh"
  },
  "cultist_thief": {
    "name": "Fletcher",
    "baseDefinitionId": "cultist_thief"
  },
  "blackguard_female_archer": {
    "name": "Nightshade",
    "baseDefinitionId": "blackguard_female_archer"
  },
  "blackguard_scout": {
    "name": "Julius",
    "baseDefinitionId": "blackguard_scout"
  },
  "cultist_female_poisoner": {
    "name": "Layla",
    "baseDefinitionId": "cultist_female_poisoner"
  },
  "undead_screaming_zombie": {
    "name": "Silthus",
    "baseDefinitionId": "undead_screaming_zombie"
  },
  "castle_raven_aderyn": {
    "name": "Aderyn",
    "baseDefinitionId": "castle_raven_aderyn"
  },
  "s3_anwindr": {
    "name": "An-Windr",
    "baseDefinitionId": "s3_anwindr"
  },
  "s5_aqeela": {
    "name": "Aqeela",
    "baseDefinitionId": "s5_aqeela"
  },
  "s5_aqeela_costume_sorcerer": {
    "name": "Aqeela (Street-Smart Sorcerer)",
    "baseDefinitionId": "s5_aqeela"
  },
  "cultist_mage": {
    "name": "Balthazar",
    "baseDefinitionId": "cultist_mage"
  },
  "cultist_mage_costume_voodoo": {
    "name": "Balthazar (Undead Magician)",
    "baseDefinitionId": "cultist_mage"
  },
  "cultist_mage_costume_cute": {
    "name": "Balthazar (Toon Magician)",
    "baseDefinitionId": "cultist_mage"
  },
  "cultist_mage_costume_glass": {
    "name": "Balthazar (Glass Magician)",
    "baseDefinitionId": "cultist_mage"
  },
  "cultist_mage_costume_stylish": {
    "name": "Balthazar (Stylish Magician)",
    "baseDefinitionId": "cultist_mage"
  },
  "gargoyle_betty": {
    "name": "Betty",
    "baseDefinitionId": "gargoyle_betty"
  },
  "s3_bjorn": {
    "name": "Bjorn",
    "baseDefinitionId": "s3_bjorn"
  },
  "s3_bjorn_costume_viking": {
    "name": "Bjorn (Brave Soldier)",
    "baseDefinitionId": "s3_bjorn"
  },
  "s3_bjorn_costume_cute": {
    "name": "Bjorn (Brave Toon)",
    "baseDefinitionId": "s3_bjorn"
  },
  "gargoyle_budatin": {
    "name": "Budatín",
    "baseDefinitionId": "gargoyle_budatin"
  },
  "s2_lantern_ghost": {
    "name": "Chochin",
    "baseDefinitionId": "s2_lantern_ghost"
  },
  "villain_edd": {
    "name": "Edd",
    "baseDefinitionId": "villain_edd"
  },
  "s2_fiji_mermaid": {
    "name": "Gill-Ra",
    "baseDefinitionId": "s2_fiji_mermaid"
  },
  "s2_fiji_mermaid_costume_hunter": {
    "name": "Gill-Ra (Shallows Pursuer)",
    "baseDefinitionId": "s2_fiji_mermaid"
  },
  "s2_fiji_mermaid_costume_cute": {
    "name": "Gill-Ra (Toon Hunter)",
    "baseDefinitionId": "s2_fiji_mermaid"
  },
  "monster_hunter_greel": {
    "name": "Greel",
    "baseDefinitionId": "monster_hunter_greel"
  },
  "guardian_bat": {
    "name": "Guardian Bat",
    "baseDefinitionId": "guardian_bat"
  },
  "shark_haamuhai": {
    "name": "Haa'Muhai",
    "baseDefinitionId": "shark_haamuhai"
  },
  "halloween_jack": {
    "name": "Jack",
    "baseDefinitionId": "halloween_jack"
  },
  "scoundrel_ketch": {
    "name": "Ketch",
    "baseDefinitionId": "scoundrel_ketch"
  },
  "slayer_maeve": {
    "name": "Maeve",
    "baseDefinitionId": "slayer_maeve"
  },
  "ninja_morganite": {
    "name": "Morganite",
    "baseDefinitionId": "ninja_morganite"
  },
  "s4_morris": {
    "name": "Morris",
    "baseDefinitionId": "s4_morris"
  },
  "s4_morris_costume_potter": {
    "name": "Morris (Moleman Potter)",
    "baseDefinitionId": "s4_morris"
  },
  "undead_horned_skeleton": {
    "name": "Oberon",
    "baseDefinitionId": "undead_horned_skeleton"
  },
  "undead_horned_skeleton_costume_fool": {
    "name": "Oberon (Jester Remnant)",
    "baseDefinitionId": "undead_horned_skeleton"
  },
  "undead_horned_skeleton_costume_cute": {
    "name": "Oberon (Relentless Toon)",
    "baseDefinitionId": "undead_horned_skeleton"
  },
  "undead_horned_skeleton_costume_glass": {
    "name": "Oberon (Relentless Vitrail)",
    "baseDefinitionId": "undead_horned_skeleton"
  },
  "kalevala_para": {
    "name": "Para",
    "baseDefinitionId": "kalevala_para"
  },
  "kalevala_para_costume_sword": {
    "name": "Para (Chantry Familiar)",
    "baseDefinitionId": "kalevala_para"
  },
  "blackguard_female_captain": {
    "name": "Prisca",
    "baseDefinitionId": "blackguard_female_captain"
  },
  "blackguard_female_captain_costume_musketeer": {
    "name": "Prisca (Resolute Overseer)",
    "baseDefinitionId": "blackguard_female_captain"
  },
  "blackguard_female_captain_costume_cute": {
    "name": "Prisca (Resolute Toon)",
    "baseDefinitionId": "blackguard_female_captain"
  },
  "blackguard_female_captain_costume_glass": {
    "name": "Prisca (Resolute Vitrail)",
    "baseDefinitionId": "blackguard_female_captain"
  },
  "blackguard_female_captain_costume_stylish": {
    "name": "Prisca (Stylish Warden)",
    "baseDefinitionId": "blackguard_female_captain"
  },
  "blackguard_skulker": {
    "name": "Renfeld",
    "baseDefinitionId": "blackguard_skulker"
  },
  "blackguard_skulker_costume_doctor": {
    "name": "Renfeld (Unhinged Surgeon)",
    "baseDefinitionId": "blackguard_skulker"
  },
  "blackguard_skulker_costume_cute": {
    "name": "Renfeld (Unhinged Toon)",
    "baseDefinitionId": "blackguard_skulker"
  },
  "blackguard_skulker_costume_glass": {
    "name": "Renfeld (Glass Assassin)",
    "baseDefinitionId": "blackguard_skulker"
  },
  "knights_treevil": {
    "name": "Treevil",
    "baseDefinitionId": "knights_treevil"
  },
  "undead_running_skeleton": {
    "name": "Tyrum",
    "baseDefinitionId": "undead_running_skeleton"
  },
  "undead_running_skeleton_costume_roman": {
    "name": "Tyrum (Roman Remnant)",
    "baseDefinitionId": "undead_running_skeleton"
  },
  "undead_running_skeleton_costume_cute": {
    "name": "Tyrum (Solemn Toon)",
    "baseDefinitionId": "undead_running_skeleton"
  },
  "undead_running_skeleton_costume_glass": {
    "name": "Tyrum (Glass Remnant)",
    "baseDefinitionId": "undead_running_skeleton"
  },
  "beowulf_unferth": {
    "name": "Unferth",
    "baseDefinitionId": "beowulf_unferth"
  },
  "vampire_lord": {
    "name": "Vlad",
    "baseDefinitionId": "vampire_lord"
  },
  "s5_ahhotep": {
    "name": "Ahhotep",
    "baseDefinitionId": "s5_ahhotep"
  },
  "s5_ahhotep_costume_champion": {
    "name": "Ahhotep (Mummy Champion)",
    "baseDefinitionId": "s5_ahhotep"
  },
  "s2_ghost_woman": {
    "name": "Ameonna",
    "baseDefinitionId": "s2_ghost_woman"
  },
  "s2_ghost_woman_costume_yurei": {
    "name": "Ameonna (Lonesome Yurei)",
    "baseDefinitionId": "s2_ghost_woman"
  },
  "s2_ghost_woman_costume_cute": {
    "name": "Ameonna (Lone Toon Ghost)",
    "baseDefinitionId": "s2_ghost_woman"
  },
  "ninja_ametrine": {
    "name": "Ametrine",
    "baseDefinitionId": "ninja_ametrine"
  },
  "halloween_ana_belle": {
    "name": "Ana-Belle",
    "baseDefinitionId": "halloween_ana_belle"
  },
  "halloween_ana_belle_costume_mafia": {
    "name": "Ana-Belle (Baroness of Dust)",
    "baseDefinitionId": "halloween_ana_belle"
  },
  "styx_arges": {
    "name": "Arges",
    "baseDefinitionId": "styx_arges"
  },
  "pirate_first_mate": {
    "name": "Boomer",
    "baseDefinitionId": "pirate_first_mate"
  },
  "wonderland_cheshire_cat": {
    "name": "Cheshire Cat",
    "baseDefinitionId": "wonderland_cheshire_cat"
  },
  "wonderland_cheshire_cat_costume_malicious": {
    "name": "Cheshire Cat (Malicious Kitty Cat)",
    "baseDefinitionId": "wonderland_cheshire_cat"
  },
  "mighty_pet_cupcake": {
    "name": "Cupcake",
    "baseDefinitionId": "mighty_pet_cupcake"
  },
  "undead_captain_warrior": {
    "name": "Cyprian",
    "baseDefinitionId": "undead_captain_warrior"
  },
  "undead_captain_warrior_costume_prince": {
    "name": "Cyprian (Deathless Prince)",
    "baseDefinitionId": "undead_captain_warrior"
  },
  "undead_captain_warrior_costume_reveller": {
    "name": "Cyprian (Deathbound Reveller)",
    "baseDefinitionId": "undead_captain_warrior"
  },
  "undead_captain_warrior_costume_cute": {
    "name": "Cyprian (Deathbound Toon)",
    "baseDefinitionId": "undead_captain_warrior"
  },
  "undead_captain_warrior_costume_glass": {
    "name": "Cyprian (Deathbound Vitrail)",
    "baseDefinitionId": "undead_captain_warrior"
  },
  "undead_captain_warrior_costume_stylish": {
    "name": "Cyprian (Stylish Deathbound Lord)",
    "baseDefinitionId": "undead_captain_warrior"
  },
  "christmas_dizzy": {
    "name": "Dizzy",
    "baseDefinitionId": "christmas_dizzy"
  },
  "fox_foxglove": {
    "name": "Foxglove",
    "baseDefinitionId": "fox_foxglove"
  },
  "s3_fura": {
    "name": "Fura",
    "baseDefinitionId": "s3_fura"
  },
  "s3_fura_costume_herbalist": {
    "name": "Fura (Herbalist of Svartalfheim)",
    "baseDefinitionId": "s3_fura"
  },
  "s3_fura_costume_cute": {
    "name": "Fura (Poisoner Toon of Svartalfheim)",
    "baseDefinitionId": "s3_fura"
  },
  "sand_vizier": {
    "name": "Gafar",
    "baseDefinitionId": "sand_vizier"
  },
  "journey_heifeng_guai": {
    "name": "Heifeng Guai",
    "baseDefinitionId": "journey_heifeng_guai"
  },
  "villain_ingolf": {
    "name": "Ingolf",
    "baseDefinitionId": "villain_ingolf"
  },
  "sand_tower": {
    "name": "Jabbar",
    "baseDefinitionId": "sand_tower"
  },
  "owl_juliani": {
    "name": "Juliani",
    "baseDefinitionId": "owl_juliani"
  },
  "musketeer_kitty": {
    "name": "Kitty",
    "baseDefinitionId": "musketeer_kitty"
  },
  "musketeer_kitty_costume_harvester": {
    "name": "Kitty (Friendly Fruit Harvester)",
    "baseDefinitionId": "musketeer_kitty"
  },
  "castle_bear_koda": {
    "name": "Koda",
    "baseDefinitionId": "castle_bear_koda"
  },
  "elemental_lexi": {
    "name": "Lexi",
    "baseDefinitionId": "elemental_lexi"
  },
  "monster_hunter_meadow": {
    "name": "Meadow",
    "baseDefinitionId": "monster_hunter_meadow"
  },
  "knights_merlin": {
    "name": "Merlin",
    "baseDefinitionId": "knights_merlin"
  },
  "knights_merlin_costume_astrology": {
    "name": "Merlin (Astromancer of Avalon)",
    "baseDefinitionId": "knights_merlin"
  },
  "s2_proteus": {
    "name": "Proteus",
    "baseDefinitionId": "s2_proteus"
  },
  "s2_proteus_costume_farseer": {
    "name": "Proteus (Farseer of Atlantis)",
    "baseDefinitionId": "s2_proteus"
  },
  "s2_proteus_costume_cute": {
    "name": "Proteus (Toon Mage of Atlantis)",
    "baseDefinitionId": "s2_proteus"
  },
  "blackguard_knight": {
    "name": "Rigard",
    "baseDefinitionId": "blackguard_knight"
  },
  "blackguard_knight_costume_elegant": {
    "name": "Rigard (Dapper Noble)",
    "baseDefinitionId": "blackguard_knight"
  },
  "blackguard_knight_costume_healer": {
    "name": "Rigard (Noble Healer)",
    "baseDefinitionId": "blackguard_knight"
  },
  "blackguard_knight_costume_cute": {
    "name": "Rigard (Toon Cavalier)",
    "baseDefinitionId": "blackguard_knight"
  },
  "blackguard_knight_costume_glass": {
    "name": "Rigard (Glass Cavalier)",
    "baseDefinitionId": "blackguard_knight"
  },
  "institute_ryleh": {
    "name": "Ryleh",
    "baseDefinitionId": "institute_ryleh"
  },
  "undead_female_warrior": {
    "name": "Sabina",
    "baseDefinitionId": "undead_female_warrior"
  },
  "undead_female_warrior_costume_princess": {
    "name": "Sabina (Deathless Princess)",
    "baseDefinitionId": "undead_female_warrior"
  },
  "undead_female_warrior_costume_rococo": {
    "name": "Sabina (Deathbound Princess)",
    "baseDefinitionId": "undead_female_warrior"
  },
  "undead_female_warrior_costume_cute": {
    "name": "Sabina (Deathless Toon)",
    "baseDefinitionId": "undead_female_warrior"
  },
  "undead_female_warrior_costume_glass": {
    "name": "Sabina (Deathbound Vitrail)",
    "baseDefinitionId": "undead_female_warrior"
  },
  "magic_sergei": {
    "name": "Sergei",
    "baseDefinitionId": "magic_sergei"
  },
  "tales1_sharkhai": {
    "name": "Shar'Khai",
    "baseDefinitionId": "tales1_sharkhai"
  },
  "tales1_sharkhai_costume_butcher": {
    "name": "Shar'Khai (Jagged Butcher)",
    "baseDefinitionId": "tales1_sharkhai"
  },
  "shadow_shoggo": {
    "name": "Shoggo",
    "baseDefinitionId": "shadow_shoggo"
  },
  "moth_shyombre": {
    "name": "Shyombre",
    "baseDefinitionId": "moth_shyombre"
  },
  "s3_stonecleave": {
    "name": "Stonecleave",
    "baseDefinitionId": "s3_stonecleave"
  },
  "fleur_talesie": {
    "name": "Talésie",
    "baseDefinitionId": "fleur_talesie"
  },
  "blackguard_commander": {
    "name": "Tiburtus",
    "baseDefinitionId": "blackguard_commander"
  },
  "blackguard_commander_costume_metal": {
    "name": "Tiburtus (Duke of Rock)",
    "baseDefinitionId": "blackguard_commander"
  },
  "blackguard_commander_costume_feather": {
    "name": "Tiburtus (Lamenting Duke)",
    "baseDefinitionId": "blackguard_commander"
  },
  "blackguard_commander_costume_cute": {
    "name": "Tiburtus (Mournful Toon)",
    "baseDefinitionId": "blackguard_commander"
  },
  "blackguard_commander_costume_glass": {
    "name": "Tiburtus (Mournful Vitrail)",
    "baseDefinitionId": "blackguard_commander"
  },
  "ronin_tokage_daigo": {
    "name": "Tokage Daigo",
    "baseDefinitionId": "ronin_tokage_daigo"
  },
  "goblin_acidfire": {
    "name": "Acidfire",
    "baseDefinitionId": "goblin_acidfire"
  },
  "elemental_aconia": {
    "name": "Aconia",
    "baseDefinitionId": "elemental_aconia"
  },
  "elemental_aconia_costume_courier": {
    "name": "Aconia (Cyber Courier)",
    "baseDefinitionId": "elemental_aconia"
  },
  "dark_god_aeron": {
    "name": "Aeron",
    "baseDefinitionId": "dark_god_aeron"
  },
  "dark_god_aeron_costume_periwig": {
    "name": "Aeron (Periwig Judge)",
    "baseDefinitionId": "dark_god_aeron"
  },
  "mimic_aether_purple": {
    "name": "Aether Mimic (Dark)",
    "baseDefinitionId": "mimic_aether_purple"
  },
  "magic_carpet_agadh": {
    "name": "Agadh",
    "baseDefinitionId": "magic_carpet_agadh"
  },
  "magic_agrafena": {
    "name": "Agrafena",
    "baseDefinitionId": "magic_agrafena"
  },
  "magic_agrafena_costume_dark": {
    "name": "Agrafena (Supreme Dark Sorceress)",
    "baseDefinitionId": "magic_agrafena"
  },
  "kalevala_ajatar": {
    "name": "Ajatar",
    "baseDefinitionId": "kalevala_ajatar"
  },
  "dark_god_akilius": {
    "name": "Akilius",
    "baseDefinitionId": "dark_god_akilius"
  },
  "s3_alfrike": {
    "name": "Alfrike",
    "baseDefinitionId": "s3_alfrike"
  },
  "s3_alfrike_costume_hatter": {
    "name": "Alfrike (Hatter of Svartalfheim)",
    "baseDefinitionId": "s3_alfrike"
  },
  "magic_carpet_amelia": {
    "name": "Amelia",
    "baseDefinitionId": "magic_carpet_amelia"
  },
  "ninja_amethyst": {
    "name": "Amethyst",
    "baseDefinitionId": "ninja_amethyst"
  },
  "dark_god_anoushka": {
    "name": "Anoushka",
    "baseDefinitionId": "dark_god_anoushka"
  },
  "s5_anubis": {
    "name": "Anubis",
    "baseDefinitionId": "s5_anubis"
  },
  "s5_anubis_costume_dancefloor": {
    "name": "Anubis (Arbiter of the Dancefloor)",
    "baseDefinitionId": "s5_anubis"
  },
  "musketeer_aramis": {
    "name": "Aramis",
    "baseDefinitionId": "musketeer_aramis"
  },
  "musketeer_aramis_costume_boulanger": {
    "name": "Aramis (Boulanger Musketeer)",
    "baseDefinitionId": "musketeer_aramis"
  },
  "dark_god_arfanias": {
    "name": "Arfanias",
    "baseDefinitionId": "dark_god_arfanias"
  },
  "construct_arzen": {
    "name": "Arzen",
    "baseDefinitionId": "construct_arzen"
  },
  "mimic_ascension_item_purple": {
    "name": "Ascension Mimic (Dark)",
    "baseDefinitionId": "mimic_ascension_item_purple"
  },
  "shadow_asketel": {
    "name": "Asketel",
    "baseDefinitionId": "shadow_asketel"
  },
  "vegetable_auberguy": {
    "name": "Auberguy",
    "baseDefinitionId": "vegetable_auberguy"
  },
  "mahayoddha_baji": {
    "name": "Baji",
    "baseDefinitionId": "mahayoddha_baji"
  },
  "s5_bastet": {
    "name": "Bastet",
    "baseDefinitionId": "s5_bastet"
  },
  "s5_bastet_costume_forest": {
    "name": "Bastet (Eye of the Forest)",
    "baseDefinitionId": "s5_bastet"
  },
  "magic_becky": {
    "name": "Becky",
    "baseDefinitionId": "magic_becky"
  },
  "magic_becky_costume_gothic": {
    "name": "Becky (Twilight Conjurer)",
    "baseDefinitionId": "magic_becky"
  },
  "bard_belladonna": {
    "name": "Belladonna",
    "baseDefinitionId": "bard_belladonna"
  },
  "s3_bera": {
    "name": "Bera",
    "baseDefinitionId": "s3_bera"
  },
  "s3_bera_costume_conjurer": {
    "name": "Bera (Conjurer of the Disir)",
    "baseDefinitionId": "s3_bera"
  },
  "fables_boss_wolf": {
    "name": "Boss Wolf",
    "baseDefinitionId": "fables_boss_wolf"
  },
  "titan_hunter_brachynd": {
    "name": "Brachynd",
    "baseDefinitionId": "titan_hunter_brachynd"
  },
  "dark_god_caravita": {
    "name": "Caravita",
    "baseDefinitionId": "dark_god_caravita"
  },
  "construct_carta": {
    "name": "Carta",
    "baseDefinitionId": "construct_carta"
  },
  "castle_stag_cecilia": {
    "name": "Cecilia",
    "baseDefinitionId": "castle_stag_cecilia"
  },
  "owl_cennius": {
    "name": "Cennius",
    "baseDefinitionId": "owl_cennius"
  },
  "dark_god_chakkoszrot": {
    "name": "Chakkoszrot",
    "baseDefinitionId": "dark_god_chakkoszrot"
  },
  "outlaw_chao_gai": {
    "name": "Chao Gai",
    "baseDefinitionId": "outlaw_chao_gai"
  },
  "styx_charon": {
    "name": "Charon",
    "baseDefinitionId": "styx_charon"
  },
  "dark_god_clarissa": {
    "name": "Clarissa",
    "baseDefinitionId": "dark_god_clarissa"
  },
  "dark_god_cordelia": {
    "name": "Cordelia",
    "baseDefinitionId": "dark_god_cordelia"
  },
  "villain_dark_lord": {
    "name": "Dark Lord",
    "baseDefinitionId": "villain_dark_lord"
  },
  "villain_dark_lord_costume_astronomer": {
    "name": "Dark Lord (Astronomer of Karemdol)",
    "baseDefinitionId": "villain_dark_lord"
  },
  "bard_darkbeat": {
    "name": "Darkbeat",
    "baseDefinitionId": "bard_darkbeat"
  },
  "goblin_darkfeather": {
    "name": "Darkfeather",
    "baseDefinitionId": "goblin_darkfeather"
  },
  "goblin_darkfeather_costume_glowing": {
    "name": "Darkfeather (Adept Eagle Enchanter)",
    "baseDefinitionId": "goblin_darkfeather"
  },
  "goblin_deadboot": {
    "name": "Deadboot",
    "baseDefinitionId": "goblin_deadboot"
  },
  "astral_demilune": {
    "name": "Demilune",
    "baseDefinitionId": "astral_demilune"
  },
  "mahayoddha_devyani": {
    "name": "Devyani",
    "baseDefinitionId": "mahayoddha_devyani"
  },
  "kingdom_diaochan": {
    "name": "Diaochan",
    "baseDefinitionId": "kingdom_diaochan"
  },
  "kingdom_diaochan_costume_flowers": {
    "name": "Diaochan (Flower Beauty)",
    "baseDefinitionId": "kingdom_diaochan"
  },
  "magitech_sniper": {
    "name": "Domitia",
    "baseDefinitionId": "magitech_sniper"
  },
  "magitech_sniper_costume_steampunk": {
    "name": "Domitia (Steampunk Sniper)",
    "baseDefinitionId": "magitech_sniper"
  },
  "magitech_sniper_costume_undead": {
    "name": "Domitia (Undead Sniper)",
    "baseDefinitionId": "magitech_sniper"
  },
  "magitech_sniper_costume_cute": {
    "name": "Domitia (Toon Sniper)",
    "baseDefinitionId": "magitech_sniper"
  },
  "magitech_sniper_costume_glass": {
    "name": "Domitia (Glass Sniper)",
    "baseDefinitionId": "magitech_sniper"
  },
  "magitech_sniper_costume_stylish": {
    "name": "Domitia (Stylish Sniper)",
    "baseDefinitionId": "magitech_sniper"
  },
  "s4_doctor_moreau": {
    "name": "Dr. Moreau",
    "baseDefinitionId": "s4_doctor_moreau"
  },
  "s4_doctor_moreau_costume_scribe": {
    "name": "Dr. Moreau (Devious Scribe)",
    "baseDefinitionId": "s4_doctor_moreau"
  },
  "astral_dreadstar": {
    "name": "Dreadstar",
    "baseDefinitionId": "astral_dreadstar"
  },
  "monster_hunter_dubhain": {
    "name": "Dubhán",
    "baseDefinitionId": "monster_hunter_dubhain"
  },
  "tales2_dularfulr": {
    "name": "Dularfulr",
    "baseDefinitionId": "tales2_dularfulr"
  },
  "tales2_dularfulr_costume_engineer": {
    "name": "Dularfulr (Dwarven Dark Engineer)",
    "baseDefinitionId": "tales2_dularfulr"
  },
  "scoundrel_duval": {
    "name": "Duval",
    "baseDefinitionId": "scoundrel_duval"
  },
  "dark_god_eldwren": {
    "name": "Eldwren",
    "baseDefinitionId": "dark_god_eldwren"
  },
  "vegetable_elsbeth": {
    "name": "Elsbeth",
    "baseDefinitionId": "vegetable_elsbeth"
  },
  "mimic_emblem_purple": {
    "name": "Emblem Mimic (Dark)",
    "baseDefinitionId": "mimic_emblem_purple"
  },
  "valentines_eros": {
    "name": "Eros",
    "baseDefinitionId": "valentines_eros"
  },
  "mimic_training_hero_purple": {
    "name": "Experience Mimic (Dark)",
    "baseDefinitionId": "mimic_training_hero_purple"
  },
  "elemental_farrah": {
    "name": "Farrah",
    "baseDefinitionId": "elemental_farrah"
  },
  "elemental_farrah_costume_cyber": {
    "name": "Farrah (Cyber Blade Master)",
    "baseDefinitionId": "elemental_farrah"
  },
  "mimic_food_purple": {
    "name": "Food Mimic (Dark)",
    "baseDefinitionId": "mimic_food_purple"
  },
  "s3_freya": {
    "name": "Freya",
    "baseDefinitionId": "s3_freya"
  },
  "s3_freya_costume_witch": {
    "name": "Freya (Witch of the Fallen)",
    "baseDefinitionId": "s3_freya"
  },
  "elemental_gastille": {
    "name": "Gastille",
    "baseDefinitionId": "elemental_gastille"
  },
  "astral_dwarf_gongoth": {
    "name": "Gongoth",
    "baseDefinitionId": "astral_dwarf_gongoth"
  },
  "slime_gooldron": {
    "name": "Gooldron",
    "baseDefinitionId": "slime_gooldron"
  },
  "monster_hunter_goretooth": {
    "name": "Goretooth",
    "baseDefinitionId": "monster_hunter_goretooth"
  },
  "gargoyle_goseck": {
    "name": "Goseck",
    "baseDefinitionId": "gargoyle_goseck"
  },
  "beowulf_grendels_mother": {
    "name": "Grendel's Mother",
    "baseDefinitionId": "beowulf_grendels_mother"
  },
  "elemental_griffex": {
    "name": "Griffex",
    "baseDefinitionId": "elemental_griffex"
  },
  "elemental_griffex_costume_camera": {
    "name": "Griffex (Modifier of Obscura)",
    "baseDefinitionId": "elemental_griffex"
  },
  "dark_god_grimble": {
    "name": "Grimble",
    "baseDefinitionId": "dark_god_grimble"
  },
  "guardian_cat_warrior": {
    "name": "Guardian Panther",
    "baseDefinitionId": "guardian_cat_warrior"
  },
  "guardian_cat_warrior_costume_fierce": {
    "name": "Guardian Panther (Fierce Panther)",
    "baseDefinitionId": "guardian_cat_warrior"
  },
  "slime_gunktus": {
    "name": "Gunktus",
    "baseDefinitionId": "slime_gunktus"
  },
  "s4_hannah": {
    "name": "Hannah",
    "baseDefinitionId": "s4_hannah"
  },
  "s4_hannah_costume_drover": {
    "name": "Hannah (Adventurous Drover)",
    "baseDefinitionId": "s4_hannah"
  },
  "astral_demon_haradea": {
    "name": "Haradea",
    "baseDefinitionId": "astral_demon_haradea"
  },
  "monster_hunter_hawthorn": {
    "name": "Hawthorn",
    "baseDefinitionId": "monster_hunter_hawthorn"
  },
  "dark_god_hel": {
    "name": "Hel",
    "baseDefinitionId": "dark_god_hel"
  },
  "dark_god_hel_costume_cute": {
    "name": "Hel (Toon Celestial of Darkness)",
    "baseDefinitionId": "dark_god_hel"
  },
  "tales2_hreidmarr": {
    "name": "Hreidmarr",
    "baseDefinitionId": "tales2_hreidmarr"
  },
  "tales2_hreidmarr_costume_trader": {
    "name": "Hreidmarr (Royal Dwarven Trader)",
    "baseDefinitionId": "tales2_hreidmarr"
  },
  "outlaw_hu_sanniang": {
    "name": "Hu Sanniang",
    "baseDefinitionId": "outlaw_hu_sanniang"
  },
  "s4_hulda": {
    "name": "Hulda",
    "baseDefinitionId": "s4_hulda"
  },
  "s4_hulda_costume_nurse": {
    "name": "Hulda (Head Nurse)",
    "baseDefinitionId": "s4_hulda"
  },
  "shadow_hunter": {
    "name": "Hunter",
    "baseDefinitionId": "shadow_hunter"
  },
  "monster_hunter_hurricane": {
    "name": "Hurricane",
    "baseDefinitionId": "monster_hunter_hurricane"
  },
  "beowulf_hygd": {
    "name": "Hygd",
    "baseDefinitionId": "beowulf_hygd"
  },
  "wild_cat_imagus": {
    "name": "Imagus",
    "baseDefinitionId": "wild_cat_imagus"
  },
  "mimic_iron_purple": {
    "name": "Iron Mimic (Dark)",
    "baseDefinitionId": "mimic_iron_purple"
  },
  "beauty_beast_ivete": {
    "name": "Ivete",
    "baseDefinitionId": "beauty_beast_ivete"
  },
  "wonderland_jabberwocky": {
    "name": "Jabberwock",
    "baseDefinitionId": "wonderland_jabberwocky"
  },
  "wonderland_jabberwocky_costume_moth": {
    "name": "Jabberwock (Jabbermoth)",
    "baseDefinitionId": "wonderland_jabberwocky"
  },
  "magic_jett": {
    "name": "Jett",
    "baseDefinitionId": "magic_jett"
  },
  "magic_jett_costume_eyes": {
    "name": "Jett (Herald of Judgment)",
    "baseDefinitionId": "magic_jett"
  },
  "forsaken_kadath": {
    "name": "Kadath",
    "baseDefinitionId": "forsaken_kadath"
  },
  "s2_cursed_samurai": {
    "name": "Kageburado",
    "baseDefinitionId": "s2_cursed_samurai"
  },
  "s2_cursed_samurai_costume_beetle": {
    "name": "Kageburado (Beetle Samurai)",
    "baseDefinitionId": "s2_cursed_samurai"
  },
  "s2_cursed_samurai_costume_cute": {
    "name": "Kageburado (Cursed Toonlord)",
    "baseDefinitionId": "s2_cursed_samurai"
  },
  "villain_karnov": {
    "name": "Karnov",
    "baseDefinitionId": "villain_karnov"
  },
  "villain_karnov_costume_jammies": {
    "name": "Karnov (Bedtime Bruiser)",
    "baseDefinitionId": "villain_karnov"
  },
  "gargoyle_kemeny": {
    "name": "Kemény",
    "baseDefinitionId": "gargoyle_kemeny"
  },
  "s5_khepri": {
    "name": "Khepri",
    "baseDefinitionId": "s5_khepri"
  },
  "s5_khepri_costume_overlord": {
    "name": "Khepri (Scarab Overlord)",
    "baseDefinitionId": "s5_khepri"
  },
  "dark_god_september": {
    "name": "Khiona",
    "baseDefinitionId": "dark_god_september"
  },
  "dark_god_september_costume_engineer": {
    "name": "Khiona (Mirage Engineer)",
    "baseDefinitionId": "dark_god_september"
  },
  "s5_khonshu": {
    "name": "Khonshu",
    "baseDefinitionId": "s5_khonshu"
  },
  "s5_khonshu_costume_knight": {
    "name": "Khonshu (Knight of the Moon)",
    "baseDefinitionId": "s5_khonshu"
  },
  "easter_killhare": {
    "name": "Killhare",
    "baseDefinitionId": "easter_killhare"
  },
  "easter_killhare_costume_farmer": {
    "name": "Killhare (Ultimate Farmer)",
    "baseDefinitionId": "easter_killhare"
  },
  "wonderland_knave_of_hearts": {
    "name": "Knave of Hearts",
    "baseDefinitionId": "wonderland_knave_of_hearts"
  },
  "slime_knightus": {
    "name": "Knightus",
    "baseDefinitionId": "slime_knightus"
  },
  "dark_god_kunchen": {
    "name": "Kunchen",
    "baseDefinitionId": "dark_god_kunchen"
  },
  "astral_dwarf_lemniss": {
    "name": "Lemniss",
    "baseDefinitionId": "astral_dwarf_lemniss"
  },
  "s4_lepiota": {
    "name": "Lepiota",
    "baseDefinitionId": "s4_lepiota"
  },
  "s4_lepiota_costume_undying": {
    "name": "Lepiota (Leader of the Undying)",
    "baseDefinitionId": "s4_lepiota"
  },
  "moth_lilareine": {
    "name": "Lilareine",
    "baseDefinitionId": "moth_lilareine"
  },
  "magic_carpet_lilli": {
    "name": "Lilli",
    "baseDefinitionId": "magic_carpet_lilli"
  },
  "kalevala_louhi": {
    "name": "Louhi",
    "baseDefinitionId": "kalevala_louhi"
  },
  "kalevala_louhi_costume_mistress": {
    "name": "Louhi (Mistress of the North)",
    "baseDefinitionId": "kalevala_louhi"
  },
  "kingdom_lu_bu": {
    "name": "Lu Bu",
    "baseDefinitionId": "kingdom_lu_bu"
  },
  "kingdom_lu_bu_costume_tiger_lord": {
    "name": "Lu Bu (Wrathful Tiger Warlord)",
    "baseDefinitionId": "kingdom_lu_bu"
  },
  "halloween_lucinda": {
    "name": "Lucinda",
    "baseDefinitionId": "halloween_lucinda"
  },
  "castle_wolf_ludwig": {
    "name": "Ludwig",
    "baseDefinitionId": "castle_wolf_ludwig"
  },
  "mighty_pet_luna": {
    "name": "Luna",
    "baseDefinitionId": "mighty_pet_luna"
  },
  "ballerina_madame_giry": {
    "name": "Madame Giry",
    "baseDefinitionId": "ballerina_madame_giry"
  },
  "astral_demon_madarika": {
    "name": "Madarika",
    "baseDefinitionId": "astral_demon_madarika"
  },
  "garrison_maisie": {
    "name": "Maisie",
    "baseDefinitionId": "garrison_maisie"
  },
  "dark_god_malicna": {
    "name": "Malicna",
    "baseDefinitionId": "dark_god_malicna"
  },
  "pirate_marie_therese": {
    "name": "Marie-Thérèse",
    "baseDefinitionId": "pirate_marie_therese"
  },
  "pirate_marie_therese_costume_priestess": {
    "name": "Marie-Thérèse (Soul-Stealing Priestess)",
    "baseDefinitionId": "pirate_marie_therese"
  },
  "wild_cat_marnes": {
    "name": "Marnes",
    "baseDefinitionId": "wild_cat_marnes"
  },
  "faun_maud": {
    "name": "Maud",
    "baseDefinitionId": "faun_maud"
  },
  "tales1_medea": {
    "name": "Medea",
    "baseDefinitionId": "tales1_medea"
  },
  "tales1_medea_costume_goddess": {
    "name": "Medea (Naga Goddess of the Deep)",
    "baseDefinitionId": "tales1_medea"
  },
  "shadow_melancholia": {
    "name": "Melancholia",
    "baseDefinitionId": "shadow_melancholia"
  },
  "ronin_mikanagi_miran": {
    "name": "Mikanagi Miran",
    "baseDefinitionId": "ronin_mikanagi_miran"
  },
  "wild_cat_mina": {
    "name": "Mina",
    "baseDefinitionId": "wild_cat_mina"
  },
  "s2_hammerhead_hulk": {
    "name": "Mok-Arr",
    "baseDefinitionId": "s2_hammerhead_hulk"
  },
  "s2_hammerhead_hulk_costume_emerald": {
    "name": "Mok-Arr (Savage Blademaster)",
    "baseDefinitionId": "s2_hammerhead_hulk"
  },
  "s2_hammerhead_hulk_costume_cute": {
    "name": "Mok-Arr (Savage Toon)",
    "baseDefinitionId": "s2_hammerhead_hulk"
  },
  "dark_god_morax": {
    "name": "Morax",
    "baseDefinitionId": "dark_god_morax"
  },
  "moth_mortewitch": {
    "name": "Mortewitch",
    "baseDefinitionId": "moth_mortewitch"
  },
  "beachparty_mortimer": {
    "name": "Mortimer",
    "baseDefinitionId": "beachparty_mortimer"
  },
  "hidden_dark_god_myztero": {
    "name": "Myztero",
    "baseDefinitionId": "hidden_dark_god_myztero"
  },
  "bard_narcisa": {
    "name": "Narcisa",
    "baseDefinitionId": "bard_narcisa"
  },
  "construct_niso": {
    "name": "Niso",
    "baseDefinitionId": "construct_niso"
  },
  "christmas_noel": {
    "name": "Noel",
    "baseDefinitionId": "christmas_noel"
  },
  "forsaken_nyctalos": {
    "name": "Nyctalos",
    "baseDefinitionId": "forsaken_nyctalos"
  },
  "styx_nyx": {
    "name": "Nyx",
    "baseDefinitionId": "styx_nyx"
  },
  "underworld_champion": {
    "name": "Obakan",
    "baseDefinitionId": "underworld_champion"
  },
  "underworld_champion_costume_champion": {
    "name": "Obakan (Praetorian Gladiator)",
    "baseDefinitionId": "underworld_champion"
  },
  "underworld_champion_costume_vampire": {
    "name": "Obakan (Praetorian Vampire)",
    "baseDefinitionId": "underworld_champion"
  },
  "underworld_champion_costume_glass": {
    "name": "Obakan (Praetorian Vitrail)",
    "baseDefinitionId": "underworld_champion"
  },
  "underworld_champion_costume_stylish": {
    "name": "Obakan (Stylish Bodyguard)",
    "baseDefinitionId": "underworld_champion"
  },
  "ballerina_odile": {
    "name": "Odile",
    "baseDefinitionId": "ballerina_odile"
  },
  "owl_ommodus": {
    "name": "Ommodus",
    "baseDefinitionId": "owl_ommodus"
  },
  "ninja_onyx": {
    "name": "Onyx",
    "baseDefinitionId": "ninja_onyx"
  },
  "astral_demon_paimon": {
    "name": "Paimon",
    "baseDefinitionId": "astral_demon_paimon"
  },
  "dryad_pansius": {
    "name": "Pansius",
    "baseDefinitionId": "dryad_pansius"
  },
  "christmas_peppermint": {
    "name": "Peppermint",
    "baseDefinitionId": "christmas_peppermint"
  },
  "ballerina_phantom_of_the_opera": {
    "name": "Phantom of the Opera",
    "baseDefinitionId": "ballerina_phantom_of_the_opera"
  },
  "tales1_phorcys": {
    "name": "Phorcys",
    "baseDefinitionId": "tales1_phorcys"
  },
  "tales1_phorcys_costume_warrior_god": {
    "name": "Phorcys (Warrior God of the Depths)",
    "baseDefinitionId": "tales1_phorcys"
  },
  "valentines_phthonus": {
    "name": "Phthonus",
    "baseDefinitionId": "valentines_phthonus"
  },
  "institute_professor_morryster": {
    "name": "Prof. Morryster",
    "baseDefinitionId": "institute_professor_morryster"
  },
  "ninja_quartz": {
    "name": "Quartz",
    "baseDefinitionId": "ninja_quartz"
  },
  "ninja_quartz_costume_investigate": {
    "name": "Quartz (Ninja of Ancient Graves)",
    "baseDefinitionId": "ninja_quartz"
  },
  "cultist_inventor": {
    "name": "Quintus",
    "baseDefinitionId": "cultist_inventor"
  },
  "cultist_inventor_costume_steam": {
    "name": "Quintus (Electro Scientist)",
    "baseDefinitionId": "cultist_inventor"
  },
  "cultist_inventor_costume_love_doctor": {
    "name": "Quintus (Love Doctor)",
    "baseDefinitionId": "cultist_inventor"
  },
  "cultist_inventor_costume_cute": {
    "name": "Quintus (Toon Scientist)",
    "baseDefinitionId": "cultist_inventor"
  },
  "cultist_inventor_costume_glass": {
    "name": "Quintus (Glass Scientist)",
    "baseDefinitionId": "cultist_inventor"
  },
  "champions_ramona": {
    "name": "Ramona",
    "baseDefinitionId": "champions_ramona"
  },
  "wild_cat_rawn": {
    "name": "Rawn",
    "baseDefinitionId": "wild_cat_rawn"
  },
  "castle_raven_rayne": {
    "name": "Rayne",
    "baseDefinitionId": "castle_raven_rayne"
  },
  "musketeer_rochefort": {
    "name": "Rochefort",
    "baseDefinitionId": "musketeer_rochefort"
  },
  "musketeer_rochefort_costume_ratcatcher": {
    "name": "Rochefort (Ruthless Rat-Catcher)",
    "baseDefinitionId": "musketeer_rochefort"
  },
  "s3_loki_fish": {
    "name": "Salmon Loki",
    "baseDefinitionId": "s3_loki_fish"
  },
  "s3_loki_fish_costume_dapper": {
    "name": "Salmon Loki (Dapper Fish)",
    "baseDefinitionId": "s3_loki_fish"
  },
  "pirate_dread_captain": {
    "name": "Sargasso",
    "baseDefinitionId": "pirate_dread_captain"
  },
  "pirate_dread_captain_costume_rotten": {
    "name": "Sargasso (Rotten Captain of Corellia)",
    "baseDefinitionId": "pirate_dread_captain"
  },
  "cultist_sorceress": {
    "name": "Sartana",
    "baseDefinitionId": "cultist_sorceress"
  },
  "cultist_sorceress_costume_shaman": {
    "name": "Sartana (Monstress of Descenthia)",
    "baseDefinitionId": "cultist_sorceress"
  },
  "cultist_sorceress_costume_snake": {
    "name": "Sartana (Snake of Descenthia)",
    "baseDefinitionId": "cultist_sorceress"
  },
  "cultist_sorceress_costume_cute": {
    "name": "Sartana (Toon Executioner)",
    "baseDefinitionId": "cultist_sorceress"
  },
  "cultist_sorceress_costume_glass": {
    "name": "Sartana (Vitrail from Descenthia)",
    "baseDefinitionId": "cultist_sorceress"
  },
  "cultist_sorceress_costume_stylish": {
    "name": "Sartana (Stylish Executioner)",
    "baseDefinitionId": "cultist_sorceress"
  },
  "ninja_satsui": {
    "name": "Satsui",
    "baseDefinitionId": "ninja_satsui"
  },
  "construct_nocturne": {
    "name": "Scath",
    "baseDefinitionId": "construct_nocturne"
  },
  "slayer_senan": {
    "name": "Senan",
    "baseDefinitionId": "slayer_senan"
  },
  "slayer_senan_costume_tentacles": {
    "name": "Senan (The Cephaloid Servant)",
    "baseDefinitionId": "slayer_senan"
  },
  "beachparty_serena": {
    "name": "Serena",
    "baseDefinitionId": "beachparty_serena"
  },
  "dark_god_seshat": {
    "name": "Seshat",
    "baseDefinitionId": "dark_god_seshat"
  },
  "dark_god_seshat_costume_revenant": {
    "name": "Seshat (High Revenant Archer)",
    "baseDefinitionId": "dark_god_seshat"
  },
  "s5_set": {
    "name": "Set",
    "baseDefinitionId": "s5_set"
  },
  "s5_set_costume_tyrant": {
    "name": "Set (Dark Tyrant)",
    "baseDefinitionId": "s5_set"
  },
  "construct_shacklebolt": {
    "name": "Shacklebolt",
    "baseDefinitionId": "construct_shacklebolt"
  },
  "fox_shadowfang": {
    "name": "Shadowfang",
    "baseDefinitionId": "fox_shadowfang"
  },
  "outlaw_shi_jin": {
    "name": "Shi Jin",
    "baseDefinitionId": "outlaw_shi_jin"
  },
  "ghost_shu_jing": {
    "name": "Shu Jing",
    "baseDefinitionId": "ghost_shu_jing"
  },
  "dark_god_sir_casmir": {
    "name": "Sir Casmir",
    "baseDefinitionId": "dark_god_sir_casmir"
  },
  "beachparty_skiff": {
    "name": "Skiff",
    "baseDefinitionId": "beachparty_skiff"
  },
  "slime_slaymire": {
    "name": "Slaymire",
    "baseDefinitionId": "slime_slaymire"
  },
  "slime_sliposi": {
    "name": "Sliposi",
    "baseDefinitionId": "slime_sliposi"
  },
  "s5_sneferu": {
    "name": "Sneferu",
    "baseDefinitionId": "s5_sneferu"
  },
  "s5_sneferu_costume_vanquisher": {
    "name": "Sneferu (Vanquisher of the Moon)",
    "baseDefinitionId": "s5_sneferu"
  },
  "monster_hunter_sorcha": {
    "name": "Sorcha",
    "baseDefinitionId": "monster_hunter_sorcha"
  },
  "fox_swiftpaw": {
    "name": "Swiftpaw",
    "baseDefinitionId": "fox_swiftpaw"
  },
  "faun_tamlin": {
    "name": "Tamlin",
    "baseDefinitionId": "faun_tamlin"
  },
  "construct_tenebrae": {
    "name": "Tenebrae",
    "baseDefinitionId": "construct_tenebrae"
  },
  "beauty_beast_the_beast": {
    "name": "The Beast",
    "baseDefinitionId": "beauty_beast_the_beast"
  },
  "witch_king": {
    "name": "Thoth-Amun",
    "baseDefinitionId": "witch_king"
  },
  "witch_king_costume_cosmic": {
    "name": "Thoth-Amun (Cosmic Conjurer)",
    "baseDefinitionId": "witch_king"
  },
  "witch_king_costume_cute": {
    "name": "Thoth-Amun (Master of Toon Crypts)",
    "baseDefinitionId": "witch_king"
  },
  "tales2_thrivaldi": {
    "name": "Thrivaldi",
    "baseDefinitionId": "tales2_thrivaldi"
  },
  "ninja_tora": {
    "name": "Tora",
    "baseDefinitionId": "ninja_tora"
  },
  "mimic_troop_purple": {
    "name": "Troop Mimic (Dark)",
    "baseDefinitionId": "mimic_troop_purple"
  },
  "dark_god_turgruk": {
    "name": "Turgruk",
    "baseDefinitionId": "dark_god_turgruk"
  },
  "wonderland_tweedles": {
    "name": "Tweedles",
    "baseDefinitionId": "wonderland_tweedles"
  },
  "tales1_ultrox": {
    "name": "Ultrox",
    "baseDefinitionId": "tales1_ultrox"
  },
  "tales1_ultrox_costume_ethereal": {
    "name": "Ultrox (Siphoner of the Deep)",
    "baseDefinitionId": "tales1_ultrox"
  },
  "masquerade_umbria": {
    "name": "Umbria",
    "baseDefinitionId": "masquerade_umbria"
  },
  "ninja_umeko": {
    "name": "Umeko",
    "baseDefinitionId": "ninja_umeko"
  },
  "s2_ursena": {
    "name": "Ursena",
    "baseDefinitionId": "s2_ursena"
  },
  "s2_ursena_costume_reef": {
    "name": "Ursena (Deadly Reef Queen)",
    "baseDefinitionId": "s2_ursena"
  },
  "s2_ursena_costume_cute": {
    "name": "Ursena (Toon of the Depths)",
    "baseDefinitionId": "s2_ursena"
  },
  "dark_god_uthragan": {
    "name": "Uthragan",
    "baseDefinitionId": "dark_god_uthragan"
  },
  "gargoyle_uwe": {
    "name": "Uwe",
    "baseDefinitionId": "gargoyle_uwe"
  },
  "elemental_vander": {
    "name": "Vander",
    "baseDefinitionId": "elemental_vander"
  },
  "astral_dwarf_vard": {
    "name": "Vard",
    "baseDefinitionId": "astral_dwarf_vard"
  },
  "mahayoddha_veer": {
    "name": "Veer",
    "baseDefinitionId": "mahayoddha_veer"
  },
  "titan_hunter_vendela": {
    "name": "Vendela",
    "baseDefinitionId": "titan_hunter_vendela"
  },
  "vampire_king": {
    "name": "Victor",
    "baseDefinitionId": "vampire_king"
  },
  "vampire_king_costume_mafia": {
    "name": "Victor (King of Crime)",
    "baseDefinitionId": "vampire_king"
  },
  "garrison_violet_potts": {
    "name": "Violet Potts",
    "baseDefinitionId": "garrison_violet_potts"
  },
  "dark_god_viscaro": {
    "name": "Viscaro",
    "baseDefinitionId": "dark_god_viscaro"
  },
  "easter_viscount_cluckwood": {
    "name": "Viscount Cluckwood",
    "baseDefinitionId": "easter_viscount_cluckwood"
  },
  "astral_voidstar": {
    "name": "Voidstar",
    "baseDefinitionId": "astral_voidstar"
  },
  "ballerina_von_rothbart": {
    "name": "Von Rothbart",
    "baseDefinitionId": "ballerina_von_rothbart"
  },
  "journey_xie_zi_jing": {
    "name": "Xie Zi Jing",
    "baseDefinitionId": "journey_xie_zi_jing"
  },
  "journey_xiong_shanjun": {
    "name": "Xiong Shanjun",
    "baseDefinitionId": "journey_xiong_shanjun"
  },
  "s4_xnolphod": {
    "name": "Xnolphod",
    "baseDefinitionId": "s4_xnolphod"
  },
  "s4_xnolphod_costume_jailer": {
    "name": "Xnolphod (Octopod Jailer)",
    "baseDefinitionId": "s4_xnolphod"
  },
  "faun_ysabel": {
    "name": "Ysabel",
    "baseDefinitionId": "faun_ysabel"
  },
  "construct_zavok": {
    "name": "Zavolt",
    "baseDefinitionId": "construct_zavok"
  },
  "dark_god_zed": {
    "name": "Zed",
    "baseDefinitionId": "dark_god_zed"
  },
  "dark_god_zulag": {
    "name": "Zulag",
    "baseDefinitionId": "dark_god_zulag"
  },
  "nomad_female_archer": {
    "name": "Sharan",
    "baseDefinitionId": "nomad_female_archer"
  },
  "nomad_scout": {
    "name": "Tudan",
    "baseDefinitionId": "nomad_scout"
  },
  "nomad_fighter": {
    "name": "Farid",
    "baseDefinitionId": "nomad_fighter"
  },
  "nomad_female_thief": {
    "name": "Jill",
    "baseDefinitionId": "nomad_female_thief"
  },
  "nomad_shaman": {
    "name": "Shaarkot",
    "baseDefinitionId": "nomad_shaman"
  },
  "orc_skirmisher": {
    "name": "Zudak",
    "baseDefinitionId": "orc_skirmisher"
  },
  "nomad_female_swordmaster": {
    "name": "Azar",
    "baseDefinitionId": "nomad_female_swordmaster"
  },
  "nomad_female_swordmaster_costume_native": {
    "name": "Azar (Seeker of Gods)",
    "baseDefinitionId": "nomad_female_swordmaster"
  },
  "nomad_female_swordmaster_costume_cute": {
    "name": "Azar (Seeker of Toons)",
    "baseDefinitionId": "nomad_female_swordmaster"
  },
  "nomad_female_swordmaster_costume_glass": {
    "name": "Azar (Seeker of Glass)",
    "baseDefinitionId": "nomad_female_swordmaster"
  },
  "nomad_female_swordmaster_costume_stylish": {
    "name": "Azar (Seeker of Style)",
    "baseDefinitionId": "nomad_female_swordmaster"
  },
  "tales1_bagreg": {
    "name": "Bagreg",
    "baseDefinitionId": "tales1_bagreg"
  },
  "tales1_bagreg_costume_scout": {
    "name": "Bagreg (Fishboy Scout)",
    "baseDefinitionId": "tales1_bagreg"
  },
  "monster_hunter_basil": {
    "name": "Basil",
    "baseDefinitionId": "monster_hunter_basil"
  },
  "knights_bauchan": {
    "name": "Bauchan",
    "baseDefinitionId": "knights_bauchan"
  },
  "goblin_boots": {
    "name": "Boots",
    "baseDefinitionId": "goblin_boots"
  },
  "goblin_boots_costume_candle": {
    "name": "Boots (Oblivious Explorer)",
    "baseDefinitionId": "goblin_boots"
  },
  "christmas_buster": {
    "name": "Buster",
    "baseDefinitionId": "christmas_buster"
  },
  "styx_dante": {
    "name": "Dante",
    "baseDefinitionId": "styx_dante"
  },
  "fortune_dragon_kids": {
    "name": "Dragon Kids",
    "baseDefinitionId": "fortune_dragon_kids"
  },
  "s3_ei_dunn": {
    "name": "Ei-Dunn",
    "baseDefinitionId": "s3_ei_dunn"
  },
  "s3_ei_dunn_costume_shield": {
    "name": "Ei-Dunn (Ferocious Viking Battler)",
    "baseDefinitionId": "s3_ei_dunn"
  },
  "s3_ei_dunn_costume_cute": {
    "name": "Ei-Dunn (Cursed Viking Toon)",
    "baseDefinitionId": "s3_ei_dunn"
  },
  "castle_stag_fawn": {
    "name": "Fawn",
    "baseDefinitionId": "castle_stag_fawn"
  },
  "nomad_female_shaman": {
    "name": "Hawkmoon",
    "baseDefinitionId": "nomad_female_shaman"
  },
  "nomad_female_shaman_costume_native": {
    "name": "Hawkmoon (Ascendant Mender)",
    "baseDefinitionId": "nomad_female_shaman"
  },
  "nomad_female_shaman_costume_cute": {
    "name": "Hawkmoon (Ascendant Toon)",
    "baseDefinitionId": "nomad_female_shaman"
  },
  "nomad_female_shaman_costume_glass": {
    "name": "Hawkmoon (Ascendant Vitrail)",
    "baseDefinitionId": "nomad_female_shaman"
  },
  "tales2_helgi": {
    "name": "Helgi",
    "baseDefinitionId": "tales2_helgi"
  },
  "tales2_helgi_costume_combatant": {
    "name": "Helgi (Dwarven Replenisher)",
    "baseDefinitionId": "tales2_helgi"
  },
  "nomad_mage": {
    "name": "Jahangir",
    "baseDefinitionId": "nomad_mage"
  },
  "nomad_mage_costume_goggles": {
    "name": "Jahangir (Wizard from the Sandsea)",
    "baseDefinitionId": "nomad_mage"
  },
  "nomad_mage_costume_cute": {
    "name": "Jahangir (Mage from the Toon Sea)",
    "baseDefinitionId": "nomad_mage"
  },
  "nomad_mage_costume_glass": {
    "name": "Jahangir (Nomad from the Glass Sea)",
    "baseDefinitionId": "nomad_mage"
  },
  "nomad_mage_costume_stylish": {
    "name": "Jahangir (Stylish Mage)",
    "baseDefinitionId": "nomad_mage"
  },
  "magic_kornel": {
    "name": "Kornel",
    "baseDefinitionId": "magic_kornel"
  },
  "kingdom_li": {
    "name": "Li",
    "baseDefinitionId": "kingdom_li"
  },
  "outlaw_liu_tang": {
    "name": "Liu Tang",
    "baseDefinitionId": "outlaw_liu_tang"
  },
  "s2_straw_demon": {
    "name": "Namahage",
    "baseDefinitionId": "s2_straw_demon"
  },
  "orc_warrior": {
    "name": "Nashgar",
    "baseDefinitionId": "orc_warrior"
  },
  "orc_warrior_costume_urukhai": {
    "name": "Nashgar (Last to Retreat)",
    "baseDefinitionId": "orc_warrior"
  },
  "orc_warrior_costume_cute": {
    "name": "Nashgar (First Toon in Battle)",
    "baseDefinitionId": "orc_warrior"
  },
  "orc_warrior_costume_glass": {
    "name": "Nashgar (Last to Shatter)",
    "baseDefinitionId": "orc_warrior"
  },
  "wonderland_phoenicus": {
    "name": "Phoenicus",
    "baseDefinitionId": "wonderland_phoenicus"
  },
  "institute_piper": {
    "name": "Piper",
    "baseDefinitionId": "institute_piper"
  },
  "moth_rosepetite": {
    "name": "Rosepetite",
    "baseDefinitionId": "moth_rosepetite"
  },
  "christmas_reindeer": {
    "name": "Rudolph",
    "baseDefinitionId": "christmas_reindeer"
  },
  "christmas_reindeer_costume_knightly_steed": {
    "name": "Rudolph (Santa’s Knightly Steed)",
    "baseDefinitionId": "christmas_reindeer"
  },
  "mighty_pet_rufus": {
    "name": "Rufus",
    "baseDefinitionId": "mighty_pet_rufus"
  },
  "villain_skrekok": {
    "name": "Skrekok",
    "baseDefinitionId": "villain_skrekok"
  },
  "rabbit_red": {
    "name": "Squire Wabbit",
    "baseDefinitionId": "rabbit_red"
  },
  "rabbit_red_costume_knight": {
    "name": "Squire Wabbit (Junior Knight of Springvale)",
    "baseDefinitionId": "rabbit_red"
  },
  "astral_starswift": {
    "name": "Starswift",
    "baseDefinitionId": "astral_starswift"
  },
  "s3_sudri": {
    "name": "Sudri",
    "baseDefinitionId": "s3_sudri"
  },
  "s4_vollermork": {
    "name": "Vollermork",
    "baseDefinitionId": "s4_vollermork"
  },
  "s4_vollermork_costume_bartender": {
    "name": "Vollermork (Morlock Bartender)",
    "baseDefinitionId": "s4_vollermork"
  },
  "s5_waqas": {
    "name": "Waqas",
    "baseDefinitionId": "s5_waqas"
  },
  "s5_waqas_costume_blade": {
    "name": "Waqas (Pharaoh’s Blade)",
    "baseDefinitionId": "s5_waqas"
  },
  "ronin_yamada_jingasa": {
    "name": "Yamada Jingasa",
    "baseDefinitionId": "ronin_yamada_jingasa"
  },
  "slayer_aodhan": {
    "name": "Aodhan",
    "baseDefinitionId": "slayer_aodhan"
  },
  "orc_gladiator": {
    "name": "Boldtusk",
    "baseDefinitionId": "orc_gladiator"
  },
  "orc_gladiator_costume_chef": {
    "name": "Boldtusk (Cast Iron Chef)",
    "baseDefinitionId": "orc_gladiator"
  },
  "orc_gladiator_costume_sage": {
    "name": "Boldtusk (The Feral Sage)",
    "baseDefinitionId": "orc_gladiator"
  },
  "orc_gladiator_costume_cute": {
    "name": "Boldtusk (The Unwavering Toon)",
    "baseDefinitionId": "orc_gladiator"
  },
  "orc_gladiator_costume_glass": {
    "name": "Boldtusk (The Reflecting)",
    "baseDefinitionId": "orc_gladiator"
  },
  "orc_gladiator_costume_stylish": {
    "name": "Boldtusk (The Fancy)",
    "baseDefinitionId": "orc_gladiator"
  },
  "scoundrel_cade": {
    "name": "Cade",
    "baseDefinitionId": "scoundrel_cade"
  },
  "christmas_carol": {
    "name": "Carol",
    "baseDefinitionId": "christmas_carol"
  },
  "slayer_cillian": {
    "name": "Cillian",
    "baseDefinitionId": "slayer_cillian"
  },
  "nomad_axe_adventurer": {
    "name": "Colen",
    "baseDefinitionId": "nomad_axe_adventurer"
  },
  "nomad_axe_adventurer_costume_magma": {
    "name": "Colen (Fiery Bounty Hunter)",
    "baseDefinitionId": "nomad_axe_adventurer"
  },
  "nomad_axe_adventurer_costume_tracker": {
    "name": "Colen (Brave Tracker)",
    "baseDefinitionId": "nomad_axe_adventurer"
  },
  "nomad_axe_adventurer_costume_cute": {
    "name": "Colen (Toon Bounty Hunter)",
    "baseDefinitionId": "nomad_axe_adventurer"
  },
  "nomad_axe_adventurer_costume_glass": {
    "name": "Colen (Glass Bounty hunter)",
    "baseDefinitionId": "nomad_axe_adventurer"
  },
  "nomad_axe_adventurer_costume_stylish": {
    "name": "Colen (Stylish Bounty Hunter)",
    "baseDefinitionId": "nomad_axe_adventurer"
  },
  "circus_eichbelborg": {
    "name": "Eichbelborg",
    "baseDefinitionId": "circus_eichbelborg"
  },
  "castle_wolf_ferant": {
    "name": "Ferant",
    "baseDefinitionId": "castle_wolf_ferant"
  },
  "castle_wolf_ferant_costume_fire": {
    "name": "Ferant (Warden of the Wolves)",
    "baseDefinitionId": "castle_wolf_ferant"
  },
  "orc_troopmaster": {
    "name": "Gormek",
    "baseDefinitionId": "orc_troopmaster"
  },
  "orc_troopmaster_costume_merchant": {
    "name": "Gormek (The Coveteus)",
    "baseDefinitionId": "orc_troopmaster"
  },
  "orc_troopmaster_costume_gourmet": {
    "name": "Gormek (The Epicurean)",
    "baseDefinitionId": "orc_troopmaster"
  },
  "orc_troopmaster_costume_cute": {
    "name": "Gormek (The Hungry Toon)",
    "baseDefinitionId": "orc_troopmaster"
  },
  "orc_troopmaster_costume_glass": {
    "name": "Gormek (The Hungry Vitrail)",
    "baseDefinitionId": "orc_troopmaster"
  },
  "orc_troopmaster_costume_stylish": {
    "name": "Gormek (Stylish Connoisseur)",
    "baseDefinitionId": "orc_troopmaster"
  },
  "guardian_falcon_priest": {
    "name": "Guardian Falcon",
    "baseDefinitionId": "guardian_falcon_priest"
  },
  "construct_hotspin": {
    "name": "Hotspin",
    "baseDefinitionId": "construct_hotspin"
  },
  "beachparty_itham": {
    "name": "Itham",
    "baseDefinitionId": "beachparty_itham"
  },
  "beachparty_itham_costume_skateboard": {
    "name": "Itham (Rookie Skateboarder Elf)",
    "baseDefinitionId": "beachparty_itham"
  },
  "s5_junaid": {
    "name": "Junaid",
    "baseDefinitionId": "s5_junaid"
  },
  "s5_junaid_costume_champion": {
    "name": "Junaid (Sworn Champion)",
    "baseDefinitionId": "s5_junaid"
  },
  "nomad_female_berserker": {
    "name": "Kelile",
    "baseDefinitionId": "nomad_female_berserker"
  },
  "nomad_female_berserker_costume_shaman": {
    "name": "Kelile (Shaman of Dragonia)",
    "baseDefinitionId": "nomad_female_berserker"
  },
  "nomad_female_berserker_costume_sorceress": {
    "name": "Kelile (Sorceress of Dragonia)",
    "baseDefinitionId": "nomad_female_berserker"
  },
  "nomad_female_berserker_costume_cute": {
    "name": "Kelile (Toon of Dragonia)",
    "baseDefinitionId": "nomad_female_berserker"
  },
  "nomad_female_berserker_costume_glass": {
    "name": "Kelile (Vitrail of Dragonia)",
    "baseDefinitionId": "nomad_female_berserker"
  },
  "nomad_female_berserker_costume_stylish": {
    "name": "Kelile (Stylish Priestess)",
    "baseDefinitionId": "nomad_female_berserker"
  },
  "kalevala_lemminkainen": {
    "name": "Lemminkäinen",
    "baseDefinitionId": "kalevala_lemminkainen"
  },
  "kalevala_lemminkainen_costume_swan": {
    "name": "Lemminkäinen (Fading Champion)",
    "baseDefinitionId": "kalevala_lemminkainen"
  },
  "magic_lucy": {
    "name": "Lucy",
    "baseDefinitionId": "magic_lucy"
  },
  "s4_mack": {
    "name": "Mack",
    "baseDefinitionId": "s4_mack"
  },
  "s4_mack_costume_novelist": {
    "name": "Mack (Halfling Novelist)",
    "baseDefinitionId": "s4_mack"
  },
  "astral_demon_mael": {
    "name": "Mael",
    "baseDefinitionId": "astral_demon_mael"
  },
  "monster_hunter_maheegan": {
    "name": "Maheegan",
    "baseDefinitionId": "monster_hunter_maheegan"
  },
  "magic_carpet_manpip": {
    "name": "Manpip",
    "baseDefinitionId": "magic_carpet_manpip"
  },
  "elemental_nova": {
    "name": "Nova",
    "baseDefinitionId": "elemental_nova"
  },
  "ballerina_raul": {
    "name": "Raul",
    "baseDefinitionId": "ballerina_raul"
  },
  "s4_rokkamush": {
    "name": "Rokkamush",
    "baseDefinitionId": "s4_rokkamush"
  },
  "s4_rokkamush_costume_mason": {
    "name": "Rokkamush (Ettin Mason)",
    "baseDefinitionId": "s4_rokkamush"
  },
  "nomad_female_assassin": {
    "name": "Scarlett",
    "baseDefinitionId": "nomad_female_assassin"
  },
  "nomad_female_assassin_costume_dancer": {
    "name": "Scarlett (Dancer from the Sandsea)",
    "baseDefinitionId": "nomad_female_assassin"
  },
  "nomad_female_assassin_costume_cute": {
    "name": "Scarlett (Raider from the Toon Sea)",
    "baseDefinitionId": "nomad_female_assassin"
  },
  "nomad_female_assassin_costume_glass": {
    "name": "Scarlett (Raider from the Glass Sea)",
    "baseDefinitionId": "nomad_female_assassin"
  },
  "s3_shadereave": {
    "name": "Shadereave",
    "baseDefinitionId": "s3_shadereave"
  },
  "ninja_shale": {
    "name": "Shale",
    "baseDefinitionId": "ninja_shale"
  },
  "shark_sharby": {
    "name": "Shar'By",
    "baseDefinitionId": "shark_sharby"
  },
  "knights_sir_lancelot": {
    "name": "Sir Lancelot",
    "baseDefinitionId": "knights_sir_lancelot"
  },
  "s2_demon_master": {
    "name": "Sumitomo",
    "baseDefinitionId": "s2_demon_master"
  },
  "s2_demon_master_costume_steppe": {
    "name": "Sumitomo (Khevtuul of Guile)",
    "baseDefinitionId": "s2_demon_master"
  },
  "s2_demon_master_costume_cute": {
    "name": "Sumitomo (Toon of Deceit)",
    "baseDefinitionId": "s2_demon_master"
  },
  "s3_sumle": {
    "name": "Sumle",
    "baseDefinitionId": "s3_sumle"
  },
  "s3_sumle_costume_unhallowed": {
    "name": "Sumle (Unhallowed Fire Giant)",
    "baseDefinitionId": "s3_sumle"
  },
  "s3_sumle_costume_cute": {
    "name": "Sumle (Toon Fire Giant)",
    "baseDefinitionId": "s3_sumle"
  },
  "kingdom_sun_shangxiang": {
    "name": "Sun Shangxiang",
    "baseDefinitionId": "kingdom_sun_shangxiang"
  },
  "gargoyle_vonreine": {
    "name": "Vonreine",
    "baseDefinitionId": "gargoyle_vonreine"
  },
  "s2_rugged_fisherman": {
    "name": "Wilbur",
    "baseDefinitionId": "s2_rugged_fisherman"
  },
  "bard_zhabog": {
    "name": "Zhabog",
    "baseDefinitionId": "bard_zhabog"
  },
  "kingdom_zhou_yu": {
    "name": "Zhou Yu",
    "baseDefinitionId": "kingdom_zhou_yu"
  },
  "kingdom_zhou_yu_costume_white_raven": {
    "name": "Zhou Yu (Raven Commander)",
    "baseDefinitionId": "kingdom_zhou_yu"
  },
  "shadow_abigail": {
    "name": "Abigail",
    "baseDefinitionId": "shadow_abigail"
  },
  "titan_hunter_adelitza": {
    "name": "Adelitza",
    "baseDefinitionId": "titan_hunter_adelitza"
  },
  "mimic_aether_red": {
    "name": "Aether Mimic (Fire)",
    "baseDefinitionId": "mimic_aether_red"
  },
  "tales2_aethslegaur": {
    "name": "Aethslegaur",
    "baseDefinitionId": "tales2_aethslegaur"
  },
  "tales2_aethslegaur_costume_soul_seeker": {
    "name": "Aethslegaur (Dwarven Soul Seeker)",
    "baseDefinitionId": "tales2_aethslegaur"
  },
  "halloween_alucard": {
    "name": "Alucard",
    "baseDefinitionId": "halloween_alucard"
  },
  "halloween_alucard_costume_mafia": {
    "name": "Alucard (Vampire Kingpin)",
    "baseDefinitionId": "halloween_alucard"
  },
  "forsaken_amarosa": {
    "name": "Amarosa",
    "baseDefinitionId": "forsaken_amarosa"
  },
  "halloween_amber": {
    "name": "Amber",
    "baseDefinitionId": "halloween_amber"
  },
  "fire_god_andre": {
    "name": "Andre de Clermont",
    "baseDefinitionId": "fire_god_andre"
  },
  "beachparty_andy_jay": {
    "name": "Andy Jay",
    "baseDefinitionId": "beachparty_andy_jay"
  },
  "fire_god_anzogh": {
    "name": "Anzogh",
    "baseDefinitionId": "fire_god_anzogh"
  },
  "masquerade_aradia": {
    "name": "Aradia",
    "baseDefinitionId": "masquerade_aradia"
  },
  "faun_araminta": {
    "name": "Araminta",
    "baseDefinitionId": "faun_araminta"
  },
  "fire_god_ares": {
    "name": "Ares",
    "baseDefinitionId": "fire_god_ares"
  },
  "fire_god_ares_costume_keymaster": {
    "name": "Ares (Keymaster of War)",
    "baseDefinitionId": "fire_god_ares"
  },
  "fire_god_ares_costume_cute": {
    "name": "Ares (Toon of War)",
    "baseDefinitionId": "fire_god_ares"
  },
  "ronin_asakura_masao": {
    "name": "Asakura Masao",
    "baseDefinitionId": "ronin_asakura_masao"
  },
  "mimic_ascension_item_red": {
    "name": "Ascension Mimic (Fire)",
    "baseDefinitionId": "mimic_ascension_item_red"
  },
  "elemental_ash": {
    "name": "Ash",
    "baseDefinitionId": "elemental_ash"
  },
  "villain_asterius": {
    "name": "Asterius",
    "baseDefinitionId": "villain_asterius"
  },
  "ninja_aurum": {
    "name": "Aurum",
    "baseDefinitionId": "ninja_aurum"
  },
  "titan_hunter_avestalon": {
    "name": "Avestalon",
    "baseDefinitionId": "titan_hunter_avestalon"
  },
  "lionman_barbarian": {
    "name": "Azlar",
    "baseDefinitionId": "lionman_barbarian"
  },
  "lionman_barbarian_costume_armor": {
    "name": "Azlar (King of the Leors)",
    "baseDefinitionId": "lionman_barbarian"
  },
  "lionman_barbarian_costume_babysitter": {
    "name": "Azlar (Leor Babysitter)",
    "baseDefinitionId": "lionman_barbarian"
  },
  "lionman_barbarian_costume_cute": {
    "name": "Azlar (Toon Leor)",
    "baseDefinitionId": "lionman_barbarian"
  },
  "lionman_barbarian_costume_glass": {
    "name": "Azlar (Glass Leor)",
    "baseDefinitionId": "lionman_barbarian"
  },
  "lionman_barbarian_costume_stylish": {
    "name": "Azlar (Stylish Leor)",
    "baseDefinitionId": "lionman_barbarian"
  },
  "ghost_bai_wu_chang": {
    "name": "Bai Wu Chang",
    "baseDefinitionId": "ghost_bai_wu_chang"
  },
  "fortune_bai_yan": {
    "name": "Bai Yan",
    "baseDefinitionId": "fortune_bai_yan"
  },
  "s3_baldur": {
    "name": "Baldur",
    "baseDefinitionId": "s3_baldur"
  },
  "s3_baldur_costume_fiery": {
    "name": "Baldur (Fiery God)",
    "baseDefinitionId": "s3_baldur"
  },
  "mighty_pet_barkley": {
    "name": "Barkley",
    "baseDefinitionId": "mighty_pet_barkley"
  },
  "vegetable_bartholomew": {
    "name": "Bartholomew",
    "baseDefinitionId": "vegetable_bartholomew"
  },
  "castle_bear_bearnadette": {
    "name": "Bearnadette",
    "baseDefinitionId": "castle_bear_bearnadette"
  },
  "beowulf_beowulf": {
    "name": "Beowulf",
    "baseDefinitionId": "beowulf_beowulf"
  },
  "mahayoddha_bhima": {
    "name": "Bhima",
    "baseDefinitionId": "mahayoddha_bhima"
  },
  "vegetable_big_barry": {
    "name": "Big Barry",
    "baseDefinitionId": "vegetable_big_barry"
  },
  "pirate_boatswain": {
    "name": "Black Caesar",
    "baseDefinitionId": "pirate_boatswain"
  },
  "knights_black_knight": {
    "name": "Black Knight",
    "baseDefinitionId": "knights_black_knight"
  },
  "knights_black_knight_costume_negative": {
    "name": "Black Knight (Negative Knight)",
    "baseDefinitionId": "knights_black_knight"
  },
  "construct_japanese_doll": {
    "name": "Blossom",
    "baseDefinitionId": "construct_japanese_doll"
  },
  "monster_hunter_bonecrusher": {
    "name": "Bonecrusher",
    "baseDefinitionId": "monster_hunter_bonecrusher"
  },
  "construct_brimstone": {
    "name": "Brimstone",
    "baseDefinitionId": "construct_brimstone"
  },
  "scoundrel_brin": {
    "name": "Brin",
    "baseDefinitionId": "scoundrel_brin"
  },
  "shark_brokhai": {
    "name": "Bro'Khai",
    "baseDefinitionId": "shark_brokhai"
  },
  "pirate_swashbuckler": {
    "name": "Captain Kestrel",
    "baseDefinitionId": "pirate_swashbuckler"
  },
  "s4_captain_nemo": {
    "name": "Captain Nemo",
    "baseDefinitionId": "s4_captain_nemo"
  },
  "s4_captain_nemo_costume_machinist": {
    "name": "Captain Nemo (Enigmatic Machinist)",
    "baseDefinitionId": "s4_captain_nemo"
  },
  "musketeer_cardinal_richelieu": {
    "name": "Cardinal Richelieu",
    "baseDefinitionId": "musketeer_cardinal_richelieu"
  },
  "musketeer_cardinal_richelieu_costume_ambassador": {
    "name": "Cardinal Richelieu (Duplicitous Ambassador)",
    "baseDefinitionId": "musketeer_cardinal_richelieu"
  },
  "masquerade_carmenta": {
    "name": "Carmenta",
    "baseDefinitionId": "masquerade_carmenta"
  },
  "astral_demon_carthizux": {
    "name": "Carthizux",
    "baseDefinitionId": "astral_demon_carthizux"
  },
  "wild_cat_catalina": {
    "name": "Catalina",
    "baseDefinitionId": "wild_cat_catalina"
  },
  "astral_dwarf_ceris": {
    "name": "Ceris",
    "baseDefinitionId": "astral_dwarf_ceris"
  },
  "ballerina_charlotta": {
    "name": "Charlotta",
    "baseDefinitionId": "ballerina_charlotta"
  },
  "slime_charmione": {
    "name": "Charmione",
    "baseDefinitionId": "slime_charmione"
  },
  "vegetable_chilazar": {
    "name": "Chilazar",
    "baseDefinitionId": "vegetable_chilazar"
  },
  "slime_chingiriko": {
    "name": "Chingiriko",
    "baseDefinitionId": "slime_chingiriko"
  },
  "mighty_pet_chomper": {
    "name": "Chomper",
    "baseDefinitionId": "mighty_pet_chomper"
  },
  "moth_chunkyroi": {
    "name": "Chunkyroi",
    "baseDefinitionId": "moth_chunkyroi"
  },
  "fables_cinderella": {
    "name": "Cinderella",
    "baseDefinitionId": "fables_cinderella"
  },
  "monster_hunter_cleaver": {
    "name": "Cleaver",
    "baseDefinitionId": "monster_hunter_cleaver"
  },
  "christmas_cookie": {
    "name": "Cookie",
    "baseDefinitionId": "christmas_cookie"
  },
  "valentines_cupido": {
    "name": "Cupido",
    "baseDefinitionId": "valentines_cupido"
  },
  "valentines_cupido_costume_flame": {
    "name": "Cupido (Cupid of Fiery Passion)",
    "baseDefinitionId": "valentines_cupido"
  },
  "musketeer_dartagnan": {
    "name": "D'Artagnan",
    "baseDefinitionId": "musketeer_dartagnan"
  },
  "musketeer_dartagnan_costume_chimney_sweeper": {
    "name": "D'Artagnan (Ardent Chimney-Sweeper)",
    "baseDefinitionId": "musketeer_dartagnan"
  },
  "castle_stag_daemon": {
    "name": "Daemon",
    "baseDefinitionId": "castle_stag_daemon"
  },
  "forsaken_demhalar": {
    "name": "Demhalar",
    "baseDefinitionId": "forsaken_demhalar"
  },
  "garrison_dima": {
    "name": "Dima",
    "baseDefinitionId": "garrison_dima"
  },
  "tales1_domiventus": {
    "name": "Domiventus",
    "baseDefinitionId": "tales1_domiventus"
  },
  "tales1_domiventus_costume_supreme": {
    "name": "Domiventus (The Supreme Hadal Being)",
    "baseDefinitionId": "tales1_domiventus"
  },
  "elemental_doxan": {
    "name": "Doxan",
    "baseDefinitionId": "elemental_doxan"
  },
  "elemental_doxan_costume_hacker": {
    "name": "Doxan (Exiled Plasma Hacker)",
    "baseDefinitionId": "elemental_doxan"
  },
  "easter_duke_whitley": {
    "name": "Duke Whitley",
    "baseDefinitionId": "easter_duke_whitley"
  },
  "monster_hunter_ebba": {
    "name": "Ebba",
    "baseDefinitionId": "monster_hunter_ebba"
  },
  "gargoyle_el_duque": {
    "name": "El Duque",
    "baseDefinitionId": "gargoyle_el_duque"
  },
  "valentines_elba": {
    "name": "Elba",
    "baseDefinitionId": "valentines_elba"
  },
  "nomad_female_lord": {
    "name": "Elena",
    "baseDefinitionId": "nomad_female_lord"
  },
  "nomad_female_lord_costume_flame": {
    "name": "Elena (Captain of Fire)",
    "baseDefinitionId": "nomad_female_lord"
  },
  "nomad_female_lord_costume_wicked": {
    "name": "Elena (Captain of the Wicked)",
    "baseDefinitionId": "nomad_female_lord"
  },
  "nomad_female_lord_costume_cute": {
    "name": "Elena (Captain of the Royal Toons)",
    "baseDefinitionId": "nomad_female_lord"
  },
  "nomad_female_lord_costume_glass": {
    "name": "Elena (Captain of the Glass Guard)",
    "baseDefinitionId": "nomad_female_lord"
  },
  "fire_god_eliane": {
    "name": "Eliane",
    "baseDefinitionId": "fire_god_eliane"
  },
  "s4_elizabeth": {
    "name": "Elizabeth",
    "baseDefinitionId": "s4_elizabeth"
  },
  "s4_elizabeth_costume_bride": {
    "name": "Elizabeth (Bridal Aristocrat)",
    "baseDefinitionId": "s4_elizabeth"
  },
  "construct_elx": {
    "name": "Elx",
    "baseDefinitionId": "construct_elx"
  },
  "fleur_elyzabel": {
    "name": "Elyzabel de Tuillières",
    "baseDefinitionId": "fleur_elyzabel"
  },
  "fox_ember": {
    "name": "Ember",
    "baseDefinitionId": "fox_ember"
  },
  "rodent_embertail": {
    "name": "Embertail",
    "baseDefinitionId": "rodent_embertail"
  },
  "circus_emilio": {
    "name": "Emilio",
    "baseDefinitionId": "circus_emilio"
  },
  "circus_emilio_costume_frog": {
    "name": "Emilio (The Great Frog Tamer)",
    "baseDefinitionId": "circus_emilio"
  },
  "styx_erebus": {
    "name": "Erebus",
    "baseDefinitionId": "styx_erebus"
  },
  "owl_eron": {
    "name": "Eron",
    "baseDefinitionId": "owl_eron"
  },
  "mimic_training_hero_red": {
    "name": "Experience Mimic (Fire)",
    "baseDefinitionId": "mimic_training_hero_red"
  },
  "tales2_fimafeng": {
    "name": "Fimafeng",
    "baseDefinitionId": "tales2_fimafeng"
  },
  "garrison_flamehide": {
    "name": "Flamehide",
    "baseDefinitionId": "garrison_flamehide"
  },
  "beachparty_flip": {
    "name": "Flip",
    "baseDefinitionId": "beachparty_flip"
  },
  "beachparty_flip_costume_donut": {
    "name": "Flip (Seal Donut Vendor)",
    "baseDefinitionId": "beachparty_flip"
  },
  "mimic_food_red": {
    "name": "Food Mimic (Fire)",
    "baseDefinitionId": "mimic_food_red"
  },
  "owl_fulvia": {
    "name": "Fulvia",
    "baseDefinitionId": "owl_fulvia"
  },
  "moth_gardered": {
    "name": "Gardered",
    "baseDefinitionId": "moth_gardered"
  },
  "ninja_garnet": {
    "name": "Garnet",
    "baseDefinitionId": "ninja_garnet"
  },
  "ninja_garnet_costume_flame": {
    "name": "Garnet (Ninja of Flaming Vigor)",
    "baseDefinitionId": "ninja_garnet"
  },
  "s3_gefjon": {
    "name": "Gefjon",
    "baseDefinitionId": "s3_gefjon"
  },
  "s3_gefjon_costume_wilderness": {
    "name": "Gefjon (Goddess of the Wild)",
    "baseDefinitionId": "s3_gefjon"
  },
  "tales1_gestalt": {
    "name": "Gestalt",
    "baseDefinitionId": "tales1_gestalt"
  },
  "tales1_gestalt_costume_pearls": {
    "name": "Gestalt (Prince of the Eternal Pearls)",
    "baseDefinitionId": "tales1_gestalt"
  },
  "slime_gooze": {
    "name": "Gooze",
    "baseDefinitionId": "slime_gooze"
  },
  "fire_god_doom": {
    "name": "Gravemaker",
    "baseDefinitionId": "fire_god_doom"
  },
  "fire_god_doom_costume_avenger": {
    "name": "Gravemaker (Burning Avenger)",
    "baseDefinitionId": "fire_god_doom"
  },
  "fire_god_nadnog": {
    "name": "Grazul",
    "baseDefinitionId": "fire_god_nadnog"
  },
  "guardian_gorilla_chieftain": {
    "name": "Guardian Kong",
    "baseDefinitionId": "guardian_gorilla_chieftain"
  },
  "guardian_gorilla_chieftain_costume_conqueror": {
    "name": "Guardian Kong (Conqueror Kong)",
    "baseDefinitionId": "guardian_gorilla_chieftain"
  },
  "gargoyle_guffa": {
    "name": "Guffa",
    "baseDefinitionId": "gargoyle_guffa"
  },
  "astral_hammerclang": {
    "name": "Hammerclang",
    "baseDefinitionId": "astral_hammerclang"
  },
  "s5_hathor": {
    "name": "Hathor",
    "baseDefinitionId": "s5_hathor"
  },
  "s5_hathor_costume_starlit": {
    "name": "Hathor (Starlit Mother)",
    "baseDefinitionId": "s5_hathor"
  },
  "gargoyle_hohenwerf": {
    "name": "Hohenwerf",
    "baseDefinitionId": "gargoyle_hohenwerf"
  },
  "lunar_new_year_hongyunxing": {
    "name": "Hongyunxing",
    "baseDefinitionId": "lunar_new_year_hongyunxing"
  },
  "construct_hornfel": {
    "name": "Hornfel",
    "baseDefinitionId": "construct_hornfel"
  },
  "styx_hypnos": {
    "name": "Hypnos",
    "baseDefinitionId": "styx_hypnos"
  },
  "garrison_iarlaith": {
    "name": "Iarlaith",
    "baseDefinitionId": "garrison_iarlaith"
  },
  "elemental_ignazio": {
    "name": "Ignazio",
    "baseDefinitionId": "elemental_ignazio"
  },
  "elemental_ignazio_costume_medic": {
    "name": "Ignazio (Flame Surgeon)",
    "baseDefinitionId": "elemental_ignazio"
  },
  "kalevala_ilmarinen": {
    "name": "Ilmarinen",
    "baseDefinitionId": "kalevala_ilmarinen"
  },
  "kalevala_ilmarinen_costume_gold": {
    "name": "Ilmarinen (Expert Artificer)",
    "baseDefinitionId": "kalevala_ilmarinen"
  },
  "garrison_iocantha": {
    "name": "Iocantha",
    "baseDefinitionId": "garrison_iocantha"
  },
  "wild_cat_irme": {
    "name": "Irme",
    "baseDefinitionId": "wild_cat_irme"
  },
  "mimic_iron_red": {
    "name": "Iron Mimic (Fire)",
    "baseDefinitionId": "mimic_iron_red"
  },
  "faun_isidore": {
    "name": "Isidore",
    "baseDefinitionId": "faun_isidore"
  },
  "villain_isrod": {
    "name": "Isrod",
    "baseDefinitionId": "villain_isrod"
  },
  "fire_god_jean_francois": {
    "name": "Jean-François",
    "baseDefinitionId": "fire_god_jean_francois"
  },
  "magic_carpet_jwala": {
    "name": "Jwala",
    "baseDefinitionId": "magic_carpet_jwala"
  },
  "mahayoddha_jyoti": {
    "name": "Jyoti",
    "baseDefinitionId": "mahayoddha_jyoti"
  },
  "kalevala_kaski": {
    "name": "Kaski",
    "baseDefinitionId": "kalevala_kaski"
  },
  "tribal_chief": {
    "name": "Khagan",
    "baseDefinitionId": "tribal_chief"
  },
  "tribal_chief_costume_conqueror": {
    "name": "Khagan (Avenger of Tribes)",
    "baseDefinitionId": "tribal_chief"
  },
  "tribal_chief_costume_leopard": {
    "name": "Khagan (Chief of Leopards)",
    "baseDefinitionId": "tribal_chief"
  },
  "tribal_chief_costume_cute": {
    "name": "Khagan (Chief of Toons)",
    "baseDefinitionId": "tribal_chief"
  },
  "tribal_chief_costume_glass": {
    "name": "Khagan (Chief of Vitrails)",
    "baseDefinitionId": "tribal_chief"
  },
  "tribal_chief_costume_stylish": {
    "name": "Khagan (Chief of Style)",
    "baseDefinitionId": "tribal_chief"
  },
  "s5_khafre": {
    "name": "Khufu",
    "baseDefinitionId": "s5_khafre"
  },
  "s5_khafre_costume_aquatic": {
    "name": "Khufu (Aquatic Androsphinx)",
    "baseDefinitionId": "s5_khafre"
  },
  "s4_kravekrush": {
    "name": "Kravekrush",
    "baseDefinitionId": "s4_kravekrush"
  },
  "s4_kravekrush_costume_grillmaster": {
    "name": "Kravekrush (Ettin Grillmaster)",
    "baseDefinitionId": "s4_kravekrush"
  },
  "s3_loki_female": {
    "name": "Lady Loki",
    "baseDefinitionId": "s3_loki_female"
  },
  "s3_loki_female_costume_mother": {
    "name": "Lady Loki (Trickster Mother)",
    "baseDefinitionId": "s3_loki_female"
  },
  "tales1_lasalle": {
    "name": "Lasalle",
    "baseDefinitionId": "tales1_lasalle"
  },
  "tales1_lasalle_costume_jockey": {
    "name": "Lasalle (Flamboyant Jockey of Atlantis)",
    "baseDefinitionId": "tales1_lasalle"
  },
  "castle_raven_lewena": {
    "name": "Lewena",
    "baseDefinitionId": "castle_raven_lewena"
  },
  "outlaw_li_kui": {
    "name": "Li Kui",
    "baseDefinitionId": "outlaw_li_kui"
  },
  "owl_lodius": {
    "name": "Lodius",
    "baseDefinitionId": "owl_lodius"
  },
  "outlaw_lu_zhishen": {
    "name": "Lu Zhishen",
    "baseDefinitionId": "outlaw_lu_zhishen"
  },
  "goblin_madhammer": {
    "name": "Madhammer",
    "baseDefinitionId": "goblin_madhammer"
  },
  "ninja_malum": {
    "name": "Malum",
    "baseDefinitionId": "ninja_malum"
  },
  "fire_god_maple": {
    "name": "Maple",
    "baseDefinitionId": "fire_god_maple"
  },
  "nomad_female_captain": {
    "name": "Marjana",
    "baseDefinitionId": "nomad_female_captain"
  },
  "nomad_female_captain_costume_pirate": {
    "name": "Marjana (Terror of Windemer)",
    "baseDefinitionId": "nomad_female_captain"
  },
  "nomad_female_captain_costume_thief": {
    "name": "Marjana (Master Thief of Windemer)",
    "baseDefinitionId": "nomad_female_captain"
  },
  "nomad_female_captain_costume_cute": {
    "name": "Marjana (Toon of Windemer)",
    "baseDefinitionId": "nomad_female_captain"
  },
  "nomad_female_captain_costume_glass": {
    "name": "Marjana (Vitrail of Windemer)",
    "baseDefinitionId": "nomad_female_captain"
  },
  "nomad_female_captain_costume_stylish": {
    "name": "Marjana (Stylish Lady of Windemer)",
    "baseDefinitionId": "nomad_female_captain"
  },
  "s2_noble_lady": {
    "name": "Mitsuko",
    "baseDefinitionId": "s2_noble_lady"
  },
  "s2_noble_lady_costume_warrior": {
    "name": "Mitsuko (Blazing Beauty)",
    "baseDefinitionId": "s2_noble_lady"
  },
  "s2_noble_lady_costume_cute": {
    "name": "Mitsuko (Toon Beauty)",
    "baseDefinitionId": "s2_noble_lady"
  },
  "magic_nadezhda": {
    "name": "Nadezhda",
    "baseDefinitionId": "magic_nadezhda"
  },
  "magic_nadezhda_costume_postmaster": {
    "name": "Nadezhda (Tower Postmaster)",
    "baseDefinitionId": "magic_nadezhda"
  },
  "magic_carpet_naeem": {
    "name": "Naeem",
    "baseDefinitionId": "magic_carpet_naeem"
  },
  "fire_god_natalya": {
    "name": "Natalya",
    "baseDefinitionId": "fire_god_natalya"
  },
  "fire_god_natalya_costume_seamstress": {
    "name": "Natalya (Fireborn Seamstress)",
    "baseDefinitionId": "fire_god_natalya"
  },
  "fire_god_neema": {
    "name": "Neema",
    "baseDefinitionId": "fire_god_neema"
  },
  "fox_nibbles": {
    "name": "Nibbles",
    "baseDefinitionId": "fox_nibbles"
  },
  "elemental_niki": {
    "name": "Niki",
    "baseDefinitionId": "elemental_niki"
  },
  "ninja_nomad": {
    "name": "Nomad",
    "baseDefinitionId": "ninja_nomad"
  },
  "fire_god_noor": {
    "name": "Noor",
    "baseDefinitionId": "fire_god_noor"
  },
  "champions_norman": {
    "name": "Norman",
    "baseDefinitionId": "champions_norman"
  },
  "s2_oceanus": {
    "name": "Oceanus",
    "baseDefinitionId": "s2_oceanus"
  },
  "s2_oceanus_costume_volcano": {
    "name": "Oceanus (Titan of Magma)",
    "baseDefinitionId": "s2_oceanus"
  },
  "s4_octros": {
    "name": "Octros",
    "baseDefinitionId": "s4_octros"
  },
  "s4_octros_costume_suitor": {
    "name": "Octros (Molluscan Suitor)",
    "baseDefinitionId": "s4_octros"
  },
  "shadow_omen": {
    "name": "Omen",
    "baseDefinitionId": "shadow_omen"
  },
  "monster_hunter_otis": {
    "name": "Otis",
    "baseDefinitionId": "monster_hunter_otis"
  },
  "christmas_ottilia": {
    "name": "Ottilia",
    "baseDefinitionId": "christmas_ottilia"
  },
  "goblin_pepperflame": {
    "name": "Pepperflame",
    "baseDefinitionId": "goblin_pepperflame"
  },
  "bard_phenexa": {
    "name": "Phenexa",
    "baseDefinitionId": "bard_phenexa"
  },
  "astral_dwarf_pluth": {
    "name": "Pluth",
    "baseDefinitionId": "astral_dwarf_pluth"
  },
  "fables_puss_in_boots": {
    "name": "Puss in Boots",
    "baseDefinitionId": "fables_puss_in_boots"
  },
  "fables_puss_in_boots_costume_highwaycat": {
    "name": "Puss in Boots (Masked Highwaycat)",
    "baseDefinitionId": "fables_puss_in_boots"
  },
  "wonderland_queen": {
    "name": "Queen of Hearts",
    "baseDefinitionId": "wonderland_queen"
  },
  "wonderland_queen_costume_benefactor": {
    "name": "Queen of Hearts (Benefactor of Wonderland)",
    "baseDefinitionId": "wonderland_queen"
  },
  "wild_cat_rajesh": {
    "name": "Rajesh",
    "baseDefinitionId": "wild_cat_rajesh"
  },
  "shadow_rashan": {
    "name": "Rashan",
    "baseDefinitionId": "shadow_rashan"
  },
  "magic_ray": {
    "name": "Ray",
    "baseDefinitionId": "magic_ray"
  },
  "magic_ray_costume_spiky": {
    "name": "Ray (Champion of the Bramble)",
    "baseDefinitionId": "magic_ray"
  },
  "fables_red_hood": {
    "name": "Red Hood",
    "baseDefinitionId": "fables_red_hood"
  },
  "tales2_regin": {
    "name": "Regin",
    "baseDefinitionId": "tales2_regin"
  },
  "tales2_regin_costume_omen": {
    "name": "Regin (Dwarven Fallen Prince)",
    "baseDefinitionId": "tales2_regin"
  },
  "monster_hunter_revna": {
    "name": "Revna",
    "baseDefinitionId": "monster_hunter_revna"
  },
  "goblin_rocket": {
    "name": "Rocket",
    "baseDefinitionId": "goblin_rocket"
  },
  "shadow_rosanna": {
    "name": "Rosanna",
    "baseDefinitionId": "shadow_rosanna"
  },
  "beauty_beast_rose_de_flo": {
    "name": "Rose de Flo",
    "baseDefinitionId": "beauty_beast_rose_de_flo"
  },
  "fire_god_roughian_and_nurgib": {
    "name": "Roughian & Nurgib",
    "baseDefinitionId": "fire_god_roughian_and_nurgib"
  },
  "monster_hunter_ruadh": {
    "name": "Ruadh",
    "baseDefinitionId": "monster_hunter_ruadh"
  },
  "ninja_ruby": {
    "name": "Ruby",
    "baseDefinitionId": "ninja_ruby"
  },
  "mahayoddha_rudraditya": {
    "name": "Rudraditya",
    "baseDefinitionId": "mahayoddha_rudraditya"
  },
  "fire_god_russell": {
    "name": "Russell",
    "baseDefinitionId": "fire_god_russell"
  },
  "fox_rust": {
    "name": "Rust",
    "baseDefinitionId": "fox_rust"
  },
  "bard_balafon": {
    "name": "Salimata",
    "baseDefinitionId": "bard_balafon"
  },
  "astral_demon_salome": {
    "name": "Salome",
    "baseDefinitionId": "astral_demon_salome"
  },
  "christmas_santa": {
    "name": "Santa Claus",
    "baseDefinitionId": "christmas_santa"
  },
  "christmas_santa_costume_metal": {
    "name": "Santa Claus (Hard Rock Santa)",
    "baseDefinitionId": "christmas_santa"
  },
  "slayer_saoirse": {
    "name": "Saoirse",
    "baseDefinitionId": "slayer_saoirse"
  },
  "slayer_saoirse_costume_knight": {
    "name": "Saoirse (The Vanquisher)",
    "baseDefinitionId": "slayer_saoirse"
  },
  "construct_scoria": {
    "name": "Scoria",
    "baseDefinitionId": "construct_scoria"
  },
  "astral_dwarf_sedille": {
    "name": "Sedille",
    "baseDefinitionId": "astral_dwarf_sedille"
  },
  "s5_sekhmet": {
    "name": "Sekhmet",
    "baseDefinitionId": "s5_sekhmet"
  },
  "s5_sekhmet_costume_warden": {
    "name": "Sekhmet (Warden of the Sun)",
    "baseDefinitionId": "s5_sekhmet"
  },
  "ninja_serandite": {
    "name": "Serandite",
    "baseDefinitionId": "ninja_serandite"
  },
  "wild_cat_sharalen": {
    "name": "Shar-alen",
    "baseDefinitionId": "wild_cat_sharalen"
  },
  "construct_sizzleomatic": {
    "name": "Sizzleomatic",
    "baseDefinitionId": "construct_sizzleomatic"
  },
  "fire_god_skargremar": {
    "name": "Skargremar",
    "baseDefinitionId": "fire_god_skargremar"
  },
  "astral_sparklight": {
    "name": "Sparklight",
    "baseDefinitionId": "astral_sparklight"
  },
  "kingdom_sun_quan": {
    "name": "Sun Quan",
    "baseDefinitionId": "kingdom_sun_quan"
  },
  "kingdom_sun_quan_costume_fire_bat": {
    "name": "Sun Quan (Warlord of Fortune)",
    "baseDefinitionId": "kingdom_sun_quan"
  },
  "fire_god_tahir": {
    "name": "Tahir",
    "baseDefinitionId": "fire_god_tahir"
  },
  "ronin_tenzin_kiba": {
    "name": "Tenzin Kiba",
    "baseDefinitionId": "ronin_tenzin_kiba"
  },
  "s5_tetisheri": {
    "name": "Tetisheri",
    "baseDefinitionId": "s5_tetisheri"
  },
  "s5_tetisheri_costume_molten": {
    "name": "Tetisheri (Molten Queen)",
    "baseDefinitionId": "s5_tetisheri"
  },
  "easter_timothy": {
    "name": "Timothy",
    "baseDefinitionId": "easter_timothy"
  },
  "castle_bear_torben": {
    "name": "Torben",
    "baseDefinitionId": "castle_bear_torben"
  },
  "mimic_troop_red": {
    "name": "Troop Mimic (Fire)",
    "baseDefinitionId": "mimic_troop_red"
  },
  "s3_tyr": {
    "name": "Tyr",
    "baseDefinitionId": "s3_tyr"
  },
  "s3_tyr_costume_savage": {
    "name": "Tyr (Savage Justice)",
    "baseDefinitionId": "s3_tyr"
  },
  "kalevala_ukkonen": {
    "name": "Ukkonen",
    "baseDefinitionId": "kalevala_ukkonen"
  },
  "kalevala_ukkonen_costume_ukkonen_infernal": {
    "name": "Ukkonen (Infernal Kin of Väinämöinen)",
    "baseDefinitionId": "kalevala_ukkonen"
  },
  "halloween_vanda": {
    "name": "Vanda",
    "baseDefinitionId": "halloween_vanda"
  },
  "halloween_vanda_costume_mafia": {
    "name": "Vanda (Queen of Crime)",
    "baseDefinitionId": "halloween_vanda"
  },
  "garrison_vanya": {
    "name": "Vanya",
    "baseDefinitionId": "garrison_vanya"
  },
  "beowulf_wiglaf": {
    "name": "Wiglaf",
    "baseDefinitionId": "beowulf_wiglaf"
  },
  "institute_wilcox": {
    "name": "Wilcox",
    "baseDefinitionId": "institute_wilcox"
  },
  "s4_xenda": {
    "name": "Xenda",
    "baseDefinitionId": "s4_xenda"
  },
  "s4_xenda_costume_flame": {
    "name": "Xenda (Heiress to the Flame)",
    "baseDefinitionId": "s4_xenda"
  },
  "lunar_new_year_xiaotu": {
    "name": "Xiaotu",
    "baseDefinitionId": "lunar_new_year_xiaotu"
  },
  "lunar_new_year_xiaotu_costume_golden": {
    "name": "Xiaotu (Lunar Lantern Rabbit)",
    "baseDefinitionId": "lunar_new_year_xiaotu"
  },
  "journey_xiwangmu": {
    "name": "Xiwangmu",
    "baseDefinitionId": "journey_xiwangmu"
  },
  "fire_god_yang_mai": {
    "name": "Yang Mai",
    "baseDefinitionId": "fire_god_yang_mai"
  },
  "faun_yolanda": {
    "name": "Yolanda",
    "baseDefinitionId": "faun_yolanda"
  },
  "fire_god_zagrog": {
    "name": "Zagrog",
    "baseDefinitionId": "fire_god_zagrog"
  },
  "fire_god_zarga": {
    "name": "Zarga",
    "baseDefinitionId": "fire_god_zarga"
  },
  "elemental_zaria": {
    "name": "Zaria",
    "baseDefinitionId": "elemental_zaria"
  },
  "elemental_zaria_costume_enchanter": {
    "name": "Zaria (Three-Eyed Enchanter)",
    "baseDefinitionId": "elemental_zaria"
  },
  "s4_zenobia": {
    "name": "Zenobia",
    "baseDefinitionId": "s4_zenobia"
  },
  "s4_zenobia_costume_floral": {
    "name": "Zenobia (Apocynacid Queen)",
    "baseDefinitionId": "s4_zenobia"
  },
  "fire_god_zerfain": {
    "name": "Zerfain",
    "baseDefinitionId": "fire_god_zerfain"
  },
  "slime_zestique": {
    "name": "Zestique",
    "baseDefinitionId": "slime_zestique"
  },
  "fire_god_zidane": {
    "name": "Zidane",
    "baseDefinitionId": "fire_god_zidane"
  },
  "fire_god_zimkitha": {
    "name": "Zimkitha",
    "baseDefinitionId": "fire_god_zimkitha"
  },
  "fire_god_zimkitha_costume_adventurer": {
    "name": "Zimkitha (Long-Lost Adventurer)",
    "baseDefinitionId": "fire_god_zimkitha"
  },
  "oriental_female_ninja": {
    "name": "Hikaru",
    "baseDefinitionId": "oriental_female_ninja"
  },
  "oriental_warrior": {
    "name": "Kenjiro",
    "baseDefinitionId": "oriental_warrior"
  },
  "oriental_monkey_warrior": {
    "name": "Hou",
    "baseDefinitionId": "oriental_monkey_warrior"
  },
  "oriental_squire": {
    "name": "Nash",
    "baseDefinitionId": "oriental_squire"
  },
  "oriental_panda_scout": {
    "name": "Sha Ji",
    "baseDefinitionId": "oriental_panda_scout"
  },
  "sand_soldier": {
    "name": "Arman",
    "baseDefinitionId": "sand_soldier"
  },
  "oriental_brawler": {
    "name": "Bane",
    "baseDefinitionId": "oriental_brawler"
  },
  "oriental_brawler_costume_egypt": {
    "name": "Bane (Noble Brawler)",
    "baseDefinitionId": "oriental_brawler"
  },
  "oriental_brawler_costume_cute": {
    "name": "Bane (Toon Brawler)",
    "baseDefinitionId": "oriental_brawler"
  },
  "oriental_brawler_costume_glass": {
    "name": "Bane (Glass Brawler)",
    "baseDefinitionId": "oriental_brawler"
  },
  "oriental_brawler_costume_stylish": {
    "name": "Bane (Stylish Brawler)",
    "baseDefinitionId": "oriental_brawler"
  },
  "castle_wolf_bertulf": {
    "name": "Bertulf",
    "baseDefinitionId": "castle_wolf_bertulf"
  },
  "circus_candy": {
    "name": "Candy",
    "baseDefinitionId": "circus_candy"
  },
  "monster_hunter_cedar": {
    "name": "Cedar",
    "baseDefinitionId": "monster_hunter_cedar"
  },
  "shadow_cthuwu": {
    "name": "Cthuwu",
    "baseDefinitionId": "shadow_cthuwu"
  },
  "oriental_female_guard": {
    "name": "Dawa",
    "baseDefinitionId": "oriental_female_guard"
  },
  "oriental_female_guard_costume_soldier": {
    "name": "Dawa (Shaguadian Guardian)",
    "baseDefinitionId": "oriental_female_guard"
  },
  "oriental_female_guard_costume_cute": {
    "name": "Dawa (Toon of Shaguad)",
    "baseDefinitionId": "oriental_female_guard"
  },
  "oriental_female_guard_costume_glass": {
    "name": "Dawa (Vitrail of Shaguad)",
    "baseDefinitionId": "oriental_female_guard"
  },
  "beachparty_dolrak": {
    "name": "Dolrak",
    "baseDefinitionId": "beachparty_dolrak"
  },
  "beachparty_dolrak_costume_tattoo": {
    "name": "Dolrak (Overly Tattooed Dwarf)",
    "baseDefinitionId": "beachparty_dolrak"
  },
  "monster_hunter_edelaide": {
    "name": "Edelaide",
    "baseDefinitionId": "monster_hunter_edelaide"
  },
  "musketeer_felton": {
    "name": "Felton",
    "baseDefinitionId": "musketeer_felton"
  },
  "musketeer_felton_costume_pirate": {
    "name": "Felton (Callous Pirate)",
    "baseDefinitionId": "musketeer_felton"
  },
  "oriental_panda_berserker": {
    "name": "Gan Ju",
    "baseDefinitionId": "oriental_panda_berserker"
  },
  "oriental_panda_berserker_costume_farmer": {
    "name": "Gan Ju (Root of Bamboo)",
    "baseDefinitionId": "oriental_panda_berserker"
  },
  "oriental_panda_berserker_costume_cute": {
    "name": "Gan Ju (Branch of Toons)",
    "baseDefinitionId": "oriental_panda_berserker"
  },
  "oriental_panda_berserker_costume_glass": {
    "name": "Gan Ju (Branch of Glass)",
    "baseDefinitionId": "oriental_panda_berserker"
  },
  "oriental_panda_berserker_costume_stylish": {
    "name": "Gan Ju (Vibrant Bamboo)",
    "baseDefinitionId": "oriental_panda_berserker"
  },
  "slime_harubo": {
    "name": "Harubo",
    "baseDefinitionId": "slime_harubo"
  },
  "construct_ironvein": {
    "name": "Ironvein",
    "baseDefinitionId": "construct_ironvein"
  },
  "tales1_jaco": {
    "name": "Jaco",
    "baseDefinitionId": "tales1_jaco"
  },
  "tales1_jaco_costume_alchemist": {
    "name": "Jaco (Dodgy Alchemist of the Deep)",
    "baseDefinitionId": "tales1_jaco"
  },
  "christmas_jolly": {
    "name": "Jolly",
    "baseDefinitionId": "christmas_jolly"
  },
  "oriental_female_mage": {
    "name": "Kailani",
    "baseDefinitionId": "oriental_female_mage"
  },
  "oriental_female_mage_costume_mender": {
    "name": "Kailani (Magnanimous Mender)",
    "baseDefinitionId": "oriental_female_mage"
  },
  "oriental_female_mage_costume_cute": {
    "name": "Kailani (Toon Healer)",
    "baseDefinitionId": "oriental_female_mage"
  },
  "oriental_female_mage_costume_glass": {
    "name": "Kailani (Glass Healer)",
    "baseDefinitionId": "oriental_female_mage"
  },
  "oriental_female_mage_costume_stylish": {
    "name": "Kailani (Stylish Healer)",
    "baseDefinitionId": "oriental_female_mage"
  },
  "ninja_kinsaishi": {
    "name": "Kinsaishi",
    "baseDefinitionId": "ninja_kinsaishi"
  },
  "s3_kvasir": {
    "name": "Kvasir",
    "baseDefinitionId": "s3_kvasir"
  },
  "s3_kvasir_costume_captain": {
    "name": "Kvasir (Bee Captain of Alfheim)",
    "baseDefinitionId": "s3_kvasir"
  },
  "s3_kvasir_costume_cute": {
    "name": "Kvasir (Toon Beekeeper)",
    "baseDefinitionId": "s3_kvasir"
  },
  "s2_merwoman": {
    "name": "Melia",
    "baseDefinitionId": "s2_merwoman"
  },
  "s2_merwoman_costume_emissary": {
    "name": "Melia (Emissary of Atlantis)",
    "baseDefinitionId": "s2_merwoman"
  },
  "s2_merwoman_costume_cute": {
    "name": "Melia (Toon Mermaid)",
    "baseDefinitionId": "s2_merwoman"
  },
  "owl_paeia": {
    "name": "Paeia",
    "baseDefinitionId": "owl_paeia"
  },
  "fables_pixie": {
    "name": "Pixie",
    "baseDefinitionId": "fables_pixie"
  },
  "s4_poppy": {
    "name": "Poppy",
    "baseDefinitionId": "s4_poppy"
  },
  "s4_poppy_costume_lodger": {
    "name": "Poppy (Halfling Lodger)",
    "baseDefinitionId": "s4_poppy"
  },
  "s5_rekhetre": {
    "name": "Rekhetre",
    "baseDefinitionId": "s5_rekhetre"
  },
  "s5_rekhetre_costume_artist": {
    "name": "Rekhetre (Young Artist)",
    "baseDefinitionId": "s5_rekhetre"
  },
  "mighty_pet_ribbit": {
    "name": "Ribbit",
    "baseDefinitionId": "mighty_pet_ribbit"
  },
  "construct_rustbeak": {
    "name": "Rustbeak",
    "baseDefinitionId": "construct_rustbeak"
  },
  "pirate_sally": {
    "name": "Sally",
    "baseDefinitionId": "pirate_sally"
  },
  "faun_saskia": {
    "name": "Saskia",
    "baseDefinitionId": "faun_saskia"
  },
  "beowulf_aeschere": {
    "name": "Aeschere",
    "baseDefinitionId": "beowulf_aeschere"
  },
  "magic_anastasia": {
    "name": "Anastasia",
    "baseDefinitionId": "magic_anastasia"
  },
  "gargoyle_bellerive": {
    "name": "Bellerive",
    "baseDefinitionId": "gargoyle_bellerive"
  },
  "monster_hunter_bogart": {
    "name": "Bogart",
    "baseDefinitionId": "monster_hunter_bogart"
  },
  "beauty_beast_chandel": {
    "name": "Chandel",
    "baseDefinitionId": "beauty_beast_chandel"
  },
  "oriental_falconer": {
    "name": "Chao",
    "baseDefinitionId": "oriental_falconer"
  },
  "oriental_falconer_costume_dodo": {
    "name": "Chao (Master Conservator)",
    "baseDefinitionId": "oriental_falconer"
  },
  "oriental_falconer_costume_cub": {
    "name": "Chao (Tiger Master)",
    "baseDefinitionId": "oriental_falconer"
  },
  "oriental_falconer_costume_cute": {
    "name": "Chao (Toon Tactician)",
    "baseDefinitionId": "oriental_falconer"
  },
  "oriental_falconer_costume_glass": {
    "name": "Chao (Glass Tactician)",
    "baseDefinitionId": "oriental_falconer"
  },
  "circus_dandre": {
    "name": "D'Andre",
    "baseDefinitionId": "circus_dandre"
  },
  "s2_tanuki_raccoon": {
    "name": "Danzaburo",
    "baseDefinitionId": "s2_tanuki_raccoon"
  },
  "astral_dwarf_errin": {
    "name": "Errin",
    "baseDefinitionId": "astral_dwarf_errin"
  },
  "tales2_fjalar": {
    "name": "Fjalar",
    "baseDefinitionId": "tales2_fjalar"
  },
  "tales2_fjalar_costume_undead": {
    "name": "Fjalar (Dwarven Ghostly Skald)",
    "baseDefinitionId": "tales2_fjalar"
  },
  "goblin_goldie": {
    "name": "Goldie",
    "baseDefinitionId": "goblin_goldie"
  },
  "goblin_goldie_costume_perfume": {
    "name": "Goldie (Goblin Perfumer)",
    "baseDefinitionId": "goblin_goldie"
  },
  "fables_gretel": {
    "name": "Gretel",
    "baseDefinitionId": "fables_gretel"
  },
  "s4_griffin": {
    "name": "Griffin",
    "baseDefinitionId": "s4_griffin"
  },
  "s4_griffin_costume_priest": {
    "name": "Griffin (Invisible Priest)",
    "baseDefinitionId": "s4_griffin"
  },
  "outlaw_gu_dasao": {
    "name": "Gu Dasao",
    "baseDefinitionId": "outlaw_gu_dasao"
  },
  "guardian_jackal_assassin": {
    "name": "Guardian Jackal",
    "baseDefinitionId": "guardian_jackal_assassin"
  },
  "guardian_jackal_assassin_costume_bones": {
    "name": "Guardian Jackal (Bone Collector of Teltoc)",
    "baseDefinitionId": "guardian_jackal_assassin"
  },
  "s3_gullinbursti": {
    "name": "Gullinbursti",
    "baseDefinitionId": "s3_gullinbursti"
  },
  "s3_gullinbursti_costume_toxic": {
    "name": "Gullinbursti (Unchained Boar)",
    "baseDefinitionId": "s3_gullinbursti"
  },
  "christmas_holly": {
    "name": "Holly",
    "baseDefinitionId": "christmas_holly"
  },
  "oriental_panda_warrior": {
    "name": "Hu Tao",
    "baseDefinitionId": "oriental_panda_warrior"
  },
  "oriental_panda_warrior_costume_armor": {
    "name": "Hu Tao (Bark of Bamboo)",
    "baseDefinitionId": "oriental_panda_warrior"
  },
  "oriental_panda_warrior_costume_dueller": {
    "name": "Hu Tao (Bamboo Dueller)",
    "baseDefinitionId": "oriental_panda_warrior"
  },
  "oriental_panda_warrior_costume_cute": {
    "name": "Hu Tao (Toon of Bamboo)",
    "baseDefinitionId": "oriental_panda_warrior"
  },
  "oriental_panda_warrior_costume_glass": {
    "name": "Hu Tao (Blade of Glass)",
    "baseDefinitionId": "oriental_panda_warrior"
  },
  "oriental_panda_warrior_costume_stylish": {
    "name": "Hu Tao (Gilded Bamboo)",
    "baseDefinitionId": "oriental_panda_warrior"
  },
  "easter_lady_woolerton": {
    "name": "Lady Woolerton",
    "baseDefinitionId": "easter_lady_woolerton"
  },
  "easter_lady_woolerton_costume_coiffeuse": {
    "name": "Lady Woolerton (Coiffeuse of Springvale)",
    "baseDefinitionId": "easter_lady_woolerton"
  },
  "oriental_female_templar": {
    "name": "Li Xiu",
    "baseDefinitionId": "oriental_female_templar"
  },
  "oriental_female_templar_costume_kimono": {
    "name": "Li Xiu (Ceremonial Assassin)",
    "baseDefinitionId": "oriental_female_templar"
  },
  "oriental_female_templar_costume_fireworks": {
    "name": "Li Xiu (Fireworks General)",
    "baseDefinitionId": "oriental_female_templar"
  },
  "oriental_female_templar_costume_cute": {
    "name": "Li Xiu (Toon General)",
    "baseDefinitionId": "oriental_female_templar"
  },
  "oriental_female_templar_costume_glass": {
    "name": "Li Xiu (Glass General)",
    "baseDefinitionId": "oriental_female_templar"
  },
  "oriental_female_templar_costume_stylish": {
    "name": "Li Xiu (Stylish General)",
    "baseDefinitionId": "oriental_female_templar"
  },
  "s3_mist": {
    "name": "Mist",
    "baseDefinitionId": "s3_mist"
  },
  "vegetable_pineon": {
    "name": "Pineon",
    "baseDefinitionId": "vegetable_pineon"
  },
  "s5_scoratek": {
    "name": "Scoratek",
    "baseDefinitionId": "s5_scoratek"
  },
  "s5_scoratek_costume_sentinel": {
    "name": "Scoratek (Scarab Sentinel)",
    "baseDefinitionId": "s5_scoratek"
  },
  "styx_steropes": {
    "name": "Steropes",
    "baseDefinitionId": "styx_steropes"
  },
  "wild_cat_tunes": {
    "name": "Tunes",
    "baseDefinitionId": "wild_cat_tunes"
  },
  "valentines_voluptas": {
    "name": "Voluptas",
    "baseDefinitionId": "valentines_voluptas"
  },
  "valentines_voluptas_costume_paint": {
    "name": "Voluptas (Cupid of Painters)",
    "baseDefinitionId": "valentines_voluptas"
  },
  "mighty_pet_waddles": {
    "name": "Waddles",
    "baseDefinitionId": "mighty_pet_waddles"
  },
  "kingdom_wang_yuanji": {
    "name": "Wang Yuanji",
    "baseDefinitionId": "kingdom_wang_yuanji"
  },
  "kingdom_wang_yuanji_costume_artisan": {
    "name": "Wang Yuanji (Gentle Calligrapher)",
    "baseDefinitionId": "kingdom_wang_yuanji"
  },
  "oriental_monkey_captain": {
    "name": "Wu Kong",
    "baseDefinitionId": "oriental_monkey_captain"
  },
  "oriental_monkey_captain_costume_warrior": {
    "name": "Wu Kong (Monkey Ronin)",
    "baseDefinitionId": "oriental_monkey_captain"
  },
  "oriental_monkey_captain_costume_reveller": {
    "name": "Wu Kong (Monkey Reveller)",
    "baseDefinitionId": "oriental_monkey_captain"
  },
  "oriental_monkey_captain_costume_cute": {
    "name": "Wu Kong (Monkey Toon)",
    "baseDefinitionId": "oriental_monkey_captain"
  },
  "elemental_zione": {
    "name": "Zione",
    "baseDefinitionId": "elemental_zione"
  },
  "mimic_aether_yellow": {
    "name": "Aether Mimic (Holy)",
    "baseDefinitionId": "mimic_aether_yellow"
  },
  "mahayoddha_ajay": {
    "name": "Ajay",
    "baseDefinitionId": "mahayoddha_ajay"
  },
  "s4_akkorog": {
    "name": "Akkorog",
    "baseDefinitionId": "s4_akkorog"
  },
  "s4_akkorog_costume_football": {
    "name": "Akkorog (Morlock Running Back)",
    "baseDefinitionId": "s4_akkorog"
  },
  "christmas_albin": {
    "name": "Albin",
    "baseDefinitionId": "christmas_albin"
  },
  "castle_stag_alvar": {
    "name": "Alvar",
    "baseDefinitionId": "castle_stag_alvar"
  },
  "monster_hunter_amund": {
    "name": "Amund",
    "baseDefinitionId": "monster_hunter_amund"
  },
  "pirate_anne": {
    "name": "Anne",
    "baseDefinitionId": "pirate_anne"
  },
  "valentines_anteros": {
    "name": "Anteros",
    "baseDefinitionId": "valentines_anteros"
  },
  "s4_aouda": {
    "name": "Aouda",
    "baseDefinitionId": "s4_aouda"
  },
  "s4_aouda_costume_lotus": {
    "name": "Aouda (Lotus Princess)",
    "baseDefinitionId": "s4_aouda"
  },
  "mimic_ascension_item_yellow": {
    "name": "Ascension Mimic (Holy)",
    "baseDefinitionId": "mimic_ascension_item_yellow"
  },
  "fox_ashen": {
    "name": "Ashen",
    "baseDefinitionId": "fox_ashen"
  },
  "bard_astrid": {
    "name": "Astrid",
    "baseDefinitionId": "bard_astrid"
  },
  "moth_auricarc": {
    "name": "Auricarc",
    "baseDefinitionId": "moth_auricarc"
  },
  "holy_god_aurox": {
    "name": "Aurox",
    "baseDefinitionId": "holy_god_aurox"
  },
  "holy_god_aviana": {
    "name": "Aviana",
    "baseDefinitionId": "holy_god_aviana"
  },
  "institute_axioma": {
    "name": "Axioma",
    "baseDefinitionId": "institute_axioma"
  },
  "holy_god_bai_yeong": {
    "name": "Bai Yeong",
    "baseDefinitionId": "holy_god_bai_yeong"
  },
  "lunar_new_year_baishu": {
    "name": "Baishu",
    "baseDefinitionId": "lunar_new_year_baishu"
  },
  "beauty_beast_beauty": {
    "name": "Beauty",
    "baseDefinitionId": "beauty_beast_beauty"
  },
  "tales2_bragi": {
    "name": "Bragi",
    "baseDefinitionId": "tales2_bragi"
  },
  "beachparty_bubo": {
    "name": "Bubo",
    "baseDefinitionId": "beachparty_bubo"
  },
  "slayer_caitlin": {
    "name": "Caitlin",
    "baseDefinitionId": "slayer_caitlin"
  },
  "slayer_caitlin_costume_crusader": {
    "name": "Caitlin (The Justicar Crusader)",
    "baseDefinitionId": "slayer_caitlin"
  },
  "holy_god_celidana": {
    "name": "Celidana",
    "baseDefinitionId": "holy_god_celidana"
  },
  "beauty_beast_cerissa": {
    "name": "Cerissa",
    "baseDefinitionId": "beauty_beast_cerissa"
  },
  "ballerina_christine_daae": {
    "name": "Christine Daae",
    "baseDefinitionId": "ballerina_christine_daae"
  },
  "s5_cleopatra": {
    "name": "Cleopatra",
    "baseDefinitionId": "s5_cleopatra"
  },
  "s5_cleopatra_costume_feline": {
    "name": "Cleopatra (Feline Pharaoh)",
    "baseDefinitionId": "s5_cleopatra"
  },
  "holy_god_colt": {
    "name": "Colt",
    "baseDefinitionId": "holy_god_colt"
  },
  "musketeer_constance": {
    "name": "Constance",
    "baseDefinitionId": "musketeer_constance"
  },
  "musketeer_constance_costume_fusilier": {
    "name": "Constance (Courageous Fusilier)",
    "baseDefinitionId": "musketeer_constance"
  },
  "monster_hunter_dabria": {
    "name": "Dabria",
    "baseDefinitionId": "monster_hunter_dabria"
  },
  "titan_hunter_savanna": {
    "name": "Dagny",
    "baseDefinitionId": "titan_hunter_savanna"
  },
  "holy_god_delilah": {
    "name": "Delilah",
    "baseDefinitionId": "holy_god_delilah"
  },
  "holy_god_delilah_costume_guardian": {
    "name": "Delilah (Guardian of the Celestial Temple)",
    "baseDefinitionId": "holy_god_delilah"
  },
  "holy_god_devana": {
    "name": "Devana",
    "baseDefinitionId": "holy_god_devana"
  },
  "circus_director_zuri": {
    "name": "Director Zuri",
    "baseDefinitionId": "circus_director_zuri"
  },
  "circus_director_zuri_costume_clown": {
    "name": "Director Zuri (Master of Clowns)",
    "baseDefinitionId": "circus_director_zuri"
  },
  "shadow_dolores": {
    "name": "Dolores",
    "baseDefinitionId": "shadow_dolores"
  },
  "holy_god_drake_lee": {
    "name": "Drake Fong",
    "baseDefinitionId": "holy_god_drake_lee"
  },
  "holy_god_drake_lee_costume_serene": {
    "name": "Drake Fong (Serene Fighter)",
    "baseDefinitionId": "holy_god_drake_lee"
  },
  "castle_raven_eloise": {
    "name": "Eloise",
    "baseDefinitionId": "castle_raven_eloise"
  },
  "mimic_emblem_yellow": {
    "name": "Emblem Mimic (Holy)",
    "baseDefinitionId": "mimic_emblem_yellow"
  },
  "tales1_ephyra": {
    "name": "Ephyra",
    "baseDefinitionId": "tales1_ephyra"
  },
  "tales1_ephyra_costume_reef": {
    "name": "Ephyra (Princess of the Reef)",
    "baseDefinitionId": "tales1_ephyra"
  },
  "journey_erlang_shen": {
    "name": "Erlang Shen",
    "baseDefinitionId": "journey_erlang_shen"
  },
  "s5_eset": {
    "name": "Eset",
    "baseDefinitionId": "s5_eset"
  },
  "s5_eset_costume_goldensun": {
    "name": "Eset (Lady of the Golden Sun)",
    "baseDefinitionId": "s5_eset"
  },
  "mimic_training_hero_yellow": {
    "name": "Experience Mimic (Holy)",
    "baseDefinitionId": "mimic_training_hero_yellow"
  },
  "holy_god_faeona": {
    "name": "Faeona",
    "baseDefinitionId": "holy_god_faeona"
  },
  "circus_faline": {
    "name": "Faline",
    "baseDefinitionId": "circus_faline"
  },
  "christmas_florencia": {
    "name": "Florencia",
    "baseDefinitionId": "christmas_florencia"
  },
  "mimic_food_yellow": {
    "name": "Food Mimic (Holy)",
    "baseDefinitionId": "mimic_food_yellow"
  },
  "garrison_frank_fangs_brimwell": {
    "name": "Frank 'Fangs' Brimwell",
    "baseDefinitionId": "garrison_frank_fangs_brimwell"
  },
  "mighty_pet_furdinand": {
    "name": "Furdinand",
    "baseDefinitionId": "mighty_pet_furdinand"
  },
  "moth_furgeant": {
    "name": "Furgeant",
    "baseDefinitionId": "moth_furgeant"
  },
  "tales2_gandr": {
    "name": "Gandr",
    "baseDefinitionId": "tales2_gandr"
  },
  "tales2_gandr_costume_guardian": {
    "name": "Gandr (Dwarven Regal Soldier)",
    "baseDefinitionId": "tales2_gandr"
  },
  "faun_gideon": {
    "name": "Gideon",
    "baseDefinitionId": "faun_gideon"
  },
  "holy_god_gilda": {
    "name": "Gilda",
    "baseDefinitionId": "holy_god_gilda"
  },
  "holy_god_gilligan": {
    "name": "Gilligan",
    "baseDefinitionId": "holy_god_gilligan"
  },
  "slime_goldrip": {
    "name": "Goldrip",
    "baseDefinitionId": "slime_goldrip"
  },
  "lunar_new_year_gongniu": {
    "name": "Gongniu",
    "baseDefinitionId": "lunar_new_year_gongniu"
  },
  "slime_gooric": {
    "name": "Gooric",
    "baseDefinitionId": "slime_gooric"
  },
  "elemental_grilka": {
    "name": "Grilka",
    "baseDefinitionId": "elemental_grilka"
  },
  "guardian_elephant": {
    "name": "Guardian Elephant",
    "baseDefinitionId": "guardian_elephant"
  },
  "guardian_gazelle": {
    "name": "Guardian Gazelle",
    "baseDefinitionId": "guardian_gazelle"
  },
  "guardian_gazelle_costume_bandalore": {
    "name": "Guardian Gazelle (Swift Striker of Teltoc)",
    "baseDefinitionId": "guardian_gazelle"
  },
  "guardian_owl_gentleman": {
    "name": "Guardian Owl",
    "baseDefinitionId": "guardian_owl_gentleman"
  },
  "fleur_guillemette": {
    "name": "Guillemette",
    "baseDefinitionId": "fleur_guillemette"
  },
  "knights_guinevere": {
    "name": "Guinevere",
    "baseDefinitionId": "knights_guinevere"
  },
  "knights_guinevere_costume_rider": {
    "name": "Guinevere (Dragonrider of Avalon)",
    "baseDefinitionId": "knights_guinevere"
  },
  "shadow_gwendoline": {
    "name": "Gwendoline",
    "baseDefinitionId": "shadow_gwendoline"
  },
  "construct_gwynn": {
    "name": "Gwynn",
    "baseDefinitionId": "construct_gwynn"
  },
  "mighty_pet_hachiko": {
    "name": "Hachiko",
    "baseDefinitionId": "mighty_pet_hachiko"
  },
  "fox_halcyon": {
    "name": "Halcyon",
    "baseDefinitionId": "fox_halcyon"
  },
  "holy_god_hanitra": {
    "name": "Hanitra",
    "baseDefinitionId": "holy_god_hanitra"
  },
  "astral_dwarf_haumri": {
    "name": "Haumri",
    "baseDefinitionId": "astral_dwarf_haumri"
  },
  "gargoyle_hilda": {
    "name": "Hilda",
    "baseDefinitionId": "gargoyle_hilda"
  },
  "ronin_hiyori": {
    "name": "Hiyori",
    "baseDefinitionId": "ronin_hiyori"
  },
  "s5_horus": {
    "name": "Horus",
    "baseDefinitionId": "s5_horus"
  },
  "s5_horus_costume_golden": {
    "name": "Horus (Golden Hunter)",
    "baseDefinitionId": "s5_horus"
  },
  "ghost_hua_pi_gui": {
    "name": "Hua Pi Gui",
    "baseDefinitionId": "ghost_hua_pi_gui"
  },
  "astral_demon_ibelis": {
    "name": "Ibelis",
    "baseDefinitionId": "astral_demon_ibelis"
  },
  "ninja_iga": {
    "name": "Iga",
    "baseDefinitionId": "ninja_iga"
  },
  "forsaken_inanis": {
    "name": "Inanis",
    "baseDefinitionId": "forsaken_inanis"
  },
  "s2_fox_girl": {
    "name": "Inari",
    "baseDefinitionId": "s2_fox_girl"
  },
  "s2_fox_girl_costume_white_kitsune": {
    "name": "Inari (White Kitsune Spirit)",
    "baseDefinitionId": "s2_fox_girl"
  },
  "s2_fox_girl_costume_cute": {
    "name": "Inari (Nine-tailed Toon)",
    "baseDefinitionId": "s2_fox_girl"
  },
  "mimic_iron_yellow": {
    "name": "Iron Mimic (Holy)",
    "baseDefinitionId": "mimic_iron_yellow"
  },
  "construct_ironheart": {
    "name": "Iron-Heart",
    "baseDefinitionId": "construct_ironheart"
  },
  "elemental_ironmaw": {
    "name": "Ironmaw",
    "baseDefinitionId": "elemental_ironmaw"
  },
  "holy_god_ithar": {
    "name": "Ithar",
    "baseDefinitionId": "holy_god_ithar"
  },
  "masquerade_jana": {
    "name": "Jana",
    "baseDefinitionId": "masquerade_jana"
  },
  "easter_jasper": {
    "name": "Jasper",
    "baseDefinitionId": "easter_jasper"
  },
  "easter_jasper_costume_fisherman": {
    "name": "Jasper (Fisherman Bull)",
    "baseDefinitionId": "easter_jasper"
  },
  "elemental_jequn": {
    "name": "Jequn",
    "baseDefinitionId": "elemental_jequn"
  },
  "elemental_jequn_costume_gilded": {
    "name": "Jequn (The Gilded Enigma)",
    "baseDefinitionId": "elemental_jequn"
  },
  "oriental_enchanted_monk": {
    "name": "Joon",
    "baseDefinitionId": "oriental_enchanted_monk"
  },
  "oriental_enchanted_monk_costume_tiger": {
    "name": "Joon (Fury of the Sun)",
    "baseDefinitionId": "oriental_enchanted_monk"
  },
  "oriental_enchanted_monk_costume_cute": {
    "name": "Joon (Toon of the Sun)",
    "baseDefinitionId": "oriental_enchanted_monk"
  },
  "oriental_enchanted_monk_costume_glass": {
    "name": "Joon (Vitrail of the Sun)",
    "baseDefinitionId": "oriental_enchanted_monk"
  },
  "oriental_enchanted_monk_costume_stylish": {
    "name": "Joon (Stylish Sun Monk)",
    "baseDefinitionId": "oriental_enchanted_monk"
  },
  "masquerade_jove": {
    "name": "Jove",
    "baseDefinitionId": "masquerade_jove"
  },
  "exalted_female_statue": {
    "name": "Justice",
    "baseDefinitionId": "exalted_female_statue"
  },
  "exalted_female_statue_costume_sungoddess": {
    "name": "Justice (Ancient of the Sun)",
    "baseDefinitionId": "exalted_female_statue"
  },
  "exalted_female_statue_costume_thorns": {
    "name": "Justice (Ancient of Thorns)",
    "baseDefinitionId": "exalted_female_statue"
  },
  "exalted_female_statue_costume_cute": {
    "name": "Justice (Toon of Stone)",
    "baseDefinitionId": "exalted_female_statue"
  },
  "exalted_female_statue_costume_glass": {
    "name": "Justice (Vitrail of Stone)",
    "baseDefinitionId": "exalted_female_statue"
  },
  "slime_justico": {
    "name": "Justico",
    "baseDefinitionId": "slime_justico"
  },
  "holy_god_kara": {
    "name": "Kara",
    "baseDefinitionId": "holy_god_kara"
  },
  "kalevala_kullervo": {
    "name": "Kullervo",
    "baseDefinitionId": "kalevala_kullervo"
  },
  "kalevala_kullervo_costume_battle_scarred": {
    "name": "Kullervo (Battle-Scarred Son)",
    "baseDefinitionId": "kalevala_kullervo"
  },
  "ninja_kushanku": {
    "name": "Kushanku",
    "baseDefinitionId": "ninja_kushanku"
  },
  "slime_labblub": {
    "name": "Labblub",
    "baseDefinitionId": "slime_labblub"
  },
  "magic_carpet_lando": {
    "name": "Lando",
    "baseDefinitionId": "magic_carpet_lando"
  },
  "lunar_new_year_laohu": {
    "name": "Laohu",
    "baseDefinitionId": "lunar_new_year_laohu"
  },
  "lunar_new_year_laohu_costume_golden": {
    "name": "Laohu (Lunar Lucky Tiger)",
    "baseDefinitionId": "lunar_new_year_laohu"
  },
  "champions_lazara": {
    "name": "Lazara",
    "baseDefinitionId": "champions_lazara"
  },
  "astral_lemonwood": {
    "name": "Lemonwood",
    "baseDefinitionId": "astral_lemonwood"
  },
  "oriental_warrior_king": {
    "name": "Leonidas",
    "baseDefinitionId": "oriental_warrior_king"
  },
  "oriental_warrior_king_costume_roman": {
    "name": "Leonidas (King of Sparta)",
    "baseDefinitionId": "oriental_warrior_king"
  },
  "oriental_warrior_king_costume_mage": {
    "name": "Leonidas (Unyielding Mage)",
    "baseDefinitionId": "oriental_warrior_king"
  },
  "oriental_warrior_king_costume_cute": {
    "name": "Leonidas (Unyielding Toon)",
    "baseDefinitionId": "oriental_warrior_king"
  },
  "oriental_warrior_king_costume_glass": {
    "name": "Leonidas (Unyielding Vitrail)",
    "baseDefinitionId": "oriental_warrior_king"
  },
  "oriental_warrior_king_costume_stylish": {
    "name": "Leonidas (King of Style)",
    "baseDefinitionId": "oriental_warrior_king"
  },
  "owl_livia": {
    "name": "Livia",
    "baseDefinitionId": "owl_livia"
  },
  "bard_lyria": {
    "name": "Lyria",
    "baseDefinitionId": "bard_lyria"
  },
  "monster_hunter_malin": {
    "name": "Malin",
    "baseDefinitionId": "monster_hunter_malin"
  },
  "holy_god_malosi": {
    "name": "Malosi",
    "baseDefinitionId": "holy_god_malosi"
  },
  "halloween_matilda": {
    "name": "Matilda",
    "baseDefinitionId": "halloween_matilda"
  },
  "holy_god_may": {
    "name": "May",
    "baseDefinitionId": "holy_god_may"
  },
  "ballerina_meg_giry": {
    "name": "Meg Giry",
    "baseDefinitionId": "ballerina_meg_giry"
  },
  "astral_melodymuse": {
    "name": "Melodymuse",
    "baseDefinitionId": "astral_melodymuse"
  },
  "s5_meresankh": {
    "name": "Meresankh",
    "baseDefinitionId": "s5_meresankh"
  },
  "s5_meresankh_costume_disco": {
    "name": "Meresankh (Sphinx of the Disco)",
    "baseDefinitionId": "s5_meresankh"
  },
  "ninja_mica": {
    "name": "Mica",
    "baseDefinitionId": "ninja_mica"
  },
  "astral_moonbell": {
    "name": "Moonbell",
    "baseDefinitionId": "astral_moonbell"
  },
  "magic_motega": {
    "name": "Motega",
    "baseDefinitionId": "magic_motega"
  },
  "kalevala_mother_lemminkainen": {
    "name": "Mother Lemminkäinen",
    "baseDefinitionId": "kalevala_mother_lemminkainen"
  },
  "tales2_motsognir": {
    "name": "Motsognir",
    "baseDefinitionId": "tales2_motsognir"
  },
  "holy_god_musashi": {
    "name": "Musashi",
    "baseDefinitionId": "holy_god_musashi"
  },
  "holy_god_musashi_costume_prisoner": {
    "name": "Musashi (Escape Artist)",
    "baseDefinitionId": "holy_god_musashi"
  },
  "holy_god_musashi_costume_cute": {
    "name": "Musashi (Toon Ronin)",
    "baseDefinitionId": "holy_god_musashi"
  },
  "holy_god_neith": {
    "name": "Neith",
    "baseDefinitionId": "holy_god_neith"
  },
  "styx_nemesis": {
    "name": "Nemesis",
    "baseDefinitionId": "styx_nemesis"
  },
  "beowulf_nithgaest": {
    "name": "Nithgaest",
    "baseDefinitionId": "beowulf_nithgaest"
  },
  "s3_norns": {
    "name": "Norns",
    "baseDefinitionId": "s3_norns"
  },
  "s3_norns_costume_puppeteers": {
    "name": "Norns (Puppeteers of Destiny)",
    "baseDefinitionId": "s3_norns"
  },
  "s3_norns_costume_cute": {
    "name": "Norns (Weavers of Toon Destiny)",
    "baseDefinitionId": "s3_norns"
  },
  "s3_odin": {
    "name": "Odin",
    "baseDefinitionId": "s3_odin"
  },
  "bard_ogima": {
    "name": "Ogima",
    "baseDefinitionId": "bard_ogima"
  },
  "holy_god_onatel": {
    "name": "Onatel",
    "baseDefinitionId": "holy_god_onatel"
  },
  "vegetable_onwyn": {
    "name": "Onwyn",
    "baseDefinitionId": "vegetable_onwyn"
  },
  "s5_papyros": {
    "name": "Papyros",
    "baseDefinitionId": "s5_papyros"
  },
  "s5_papyros_costume_colossus": {
    "name": "Papyros (Colossus of Paper and Sand)",
    "baseDefinitionId": "s5_papyros"
  },
  "gargoyle_penolite": {
    "name": "Peñolite",
    "baseDefinitionId": "gargoyle_penolite"
  },
  "vegetable_pepo": {
    "name": "Pepo",
    "baseDefinitionId": "vegetable_pepo"
  },
  "tales1_persa": {
    "name": "Persa",
    "baseDefinitionId": "tales1_persa"
  },
  "tales1_persa_costume_jellyfish_noble": {
    "name": "Persa (Jellyfish Noble)",
    "baseDefinitionId": "tales1_persa"
  },
  "owl_pertinax": {
    "name": "Pertinax",
    "baseDefinitionId": "owl_pertinax"
  },
  "faun_philomena": {
    "name": "Philomena",
    "baseDefinitionId": "faun_philomena"
  },
  "s2_poseidon": {
    "name": "Poseidon",
    "baseDefinitionId": "s2_poseidon"
  },
  "s2_poseidon_costume_slayer": {
    "name": "Poseidon (Slayer of Atlantis)",
    "baseDefinitionId": "s2_poseidon"
  },
  "s2_poseidon_costume_cute": {
    "name": "Poseidon (Toon Ruler of Atlantis)",
    "baseDefinitionId": "s2_poseidon"
  },
  "institute_professor_ambrose": {
    "name": "Prof. Ambrose",
    "baseDefinitionId": "institute_professor_ambrose"
  },
  "s4_professor_lidenbrock": {
    "name": "Prof. Lidenbrock",
    "baseDefinitionId": "s4_professor_lidenbrock"
  },
  "s4_professor_lidenbrock_costume_jeweler": {
    "name": "Prof. Lidenbrock (Sagacious Jeweler)",
    "baseDefinitionId": "s4_professor_lidenbrock"
  },
  "journey_queen_guowang": {
    "name": "Queen Guowang",
    "baseDefinitionId": "journey_queen_guowang"
  },
  "sand_queen": {
    "name": "Rana",
    "baseDefinitionId": "sand_queen"
  },
  "sand_queen_costume_surfer": {
    "name": "Rana (Surfer Queen)",
    "baseDefinitionId": "sand_queen"
  },
  "holy_god_ranvir": {
    "name": "Ranvir",
    "baseDefinitionId": "holy_god_ranvir"
  },
  "goblin_ratgrub": {
    "name": "Ratgrub",
    "baseDefinitionId": "goblin_ratgrub"
  },
  "bard_rhys": {
    "name": "Rhys",
    "baseDefinitionId": "bard_rhys"
  },
  "sand_roc": {
    "name": "Roc",
    "baseDefinitionId": "sand_roc"
  },
  "sand_roc_costume_juice": {
    "name": "Roc (Protector of the Beach)",
    "baseDefinitionId": "sand_roc"
  },
  "garrison_rosalind": {
    "name": "Rosalind",
    "baseDefinitionId": "garrison_rosalind"
  },
  "outlaw_ruan_xiaoqi": {
    "name": "Ruan Xiaoqi",
    "baseDefinitionId": "outlaw_ruan_xiaoqi"
  },
  "astral_dwarf_salniss": {
    "name": "Salniss",
    "baseDefinitionId": "astral_dwarf_salniss"
  },
  "moth_satinpimenter": {
    "name": "Satinpimenter",
    "baseDefinitionId": "moth_satinpimenter"
  },
  "wild_cat_savann": {
    "name": "Savann",
    "baseDefinitionId": "wild_cat_savann"
  },
  "goblin_scrollbeast": {
    "name": "Scrollbeast",
    "baseDefinitionId": "goblin_scrollbeast"
  },
  "construct_shaal": {
    "name": "Shaal",
    "baseDefinitionId": "construct_shaal"
  },
  "magic_carpet_shareef": {
    "name": "Shareef",
    "baseDefinitionId": "magic_carpet_shareef"
  },
  "mahayoddha_shaurya": {
    "name": "Shaurya",
    "baseDefinitionId": "mahayoddha_shaurya"
  },
  "scoundrel_sheppard": {
    "name": "Sheppard",
    "baseDefinitionId": "scoundrel_sheppard"
  },
  "garrison_shimmerscale": {
    "name": "Shimmerscale",
    "baseDefinitionId": "garrison_shimmerscale"
  },
  "s3_sif": {
    "name": "Sif",
    "baseDefinitionId": "s3_sif"
  },
  "s3_sif_costume_golden": {
    "name": "Sif (Golden Deity)",
    "baseDefinitionId": "s3_sif"
  },
  "fox_silverpaw": {
    "name": "Silverpaw",
    "baseDefinitionId": "fox_silverpaw"
  },
  "easter_sir_roostley": {
    "name": "Sir Roostley",
    "baseDefinitionId": "easter_sir_roostley"
  },
  "easter_sir_roostley_costume_alchemist": {
    "name": "Sir Roostley (Mighty Alchemist of Springvale)",
    "baseDefinitionId": "easter_sir_roostley"
  },
  "slime_sludgus": {
    "name": "Sludgus",
    "baseDefinitionId": "slime_sludgus"
  },
  "wild_cat_stravia": {
    "name": "Stravia",
    "baseDefinitionId": "wild_cat_stravia"
  },
  "ronin_tanaka_isako": {
    "name": "Tanaka Isako",
    "baseDefinitionId": "ronin_tanaka_isako"
  },
  "journey_tang_sanzang": {
    "name": "Tang Sanzang",
    "baseDefinitionId": "journey_tang_sanzang"
  },
  "construct_tengo": {
    "name": "Tengo",
    "baseDefinitionId": "construct_tengo"
  },
  "s3_thor": {
    "name": "Thor",
    "baseDefinitionId": "s3_thor"
  },
  "s3_thor_costume_conduit": {
    "name": "Thor (Conduit of Thunder)",
    "baseDefinitionId": "s3_thor"
  },
  "monster_hunter_thunderclap": {
    "name": "Thunderclap",
    "baseDefinitionId": "monster_hunter_thunderclap"
  },
  "monster_hunter_thura": {
    "name": "Thura",
    "baseDefinitionId": "monster_hunter_thura"
  },
  "ninja_topaz": {
    "name": "Topaz",
    "baseDefinitionId": "ninja_topaz"
  },
  "mimic_troop_yellow": {
    "name": "Troop Mimic (Holy)",
    "baseDefinitionId": "mimic_troop_yellow"
  },
  "wild_cat_tyrix": {
    "name": "Tyrix",
    "baseDefinitionId": "wild_cat_tyrix"
  },
  "holy_god_uraeus": {
    "name": "Uraeus",
    "baseDefinitionId": "holy_god_uraeus"
  },
  "mahayoddha_ustad_anand": {
    "name": "Ustad Anand",
    "baseDefinitionId": "mahayoddha_ustad_anand"
  },
  "magic_vaishali": {
    "name": "Vaishali",
    "baseDefinitionId": "magic_vaishali"
  },
  "magic_vaishali_costume_chef": {
    "name": "Vaishali (Mystic Pie Master)",
    "baseDefinitionId": "magic_vaishali"
  },
  "titan_hunter_veldt": {
    "name": "Veldt",
    "baseDefinitionId": "titan_hunter_veldt"
  },
  "forsaken_vermis": {
    "name": "Vermis",
    "baseDefinitionId": "forsaken_vermis"
  },
  "oriental_female_mystic": {
    "name": "Vivica",
    "baseDefinitionId": "oriental_female_mystic"
  },
  "oriental_female_mystic_costume_magician": {
    "name": "Vivica (Magician Supreme)",
    "baseDefinitionId": "oriental_female_mystic"
  },
  "oriental_female_mystic_costume_scribe": {
    "name": "Vivica (Scribe Supreme)",
    "baseDefinitionId": "oriental_female_mystic"
  },
  "oriental_female_mystic_costume_cute": {
    "name": "Vivica (Toon Scholar)",
    "baseDefinitionId": "oriental_female_mystic"
  },
  "oriental_female_mystic_costume_glass": {
    "name": "Vivica (Glass Scholar)",
    "baseDefinitionId": "oriental_female_mystic"
  },
  "oriental_female_mystic_costume_stylish": {
    "name": "Vivica (Stylish Scholar)",
    "baseDefinitionId": "oriental_female_mystic"
  },
  "halloween_wayne": {
    "name": "Wayne",
    "baseDefinitionId": "halloween_wayne"
  },
  "beowulf_wealhtheow": {
    "name": "Wealhtheow",
    "baseDefinitionId": "beowulf_wealhtheow"
  },
  "beowulf_weland": {
    "name": "Weland",
    "baseDefinitionId": "beowulf_weland"
  },
  "wonderland_white_rabbit": {
    "name": "White Rabbit",
    "baseDefinitionId": "wonderland_white_rabbit"
  },
  "wonderland_white_rabbit_costume_mask": {
    "name": "White Rabbit (Mask of Madness)",
    "baseDefinitionId": "wonderland_white_rabbit"
  },
  "magic_willow": {
    "name": "Willow",
    "baseDefinitionId": "magic_willow"
  },
  "castle_bear_winnie": {
    "name": "Winnie",
    "baseDefinitionId": "castle_bear_winnie"
  },
  "castle_wolf_wolfgang": {
    "name": "Wolfgang",
    "baseDefinitionId": "castle_wolf_wolfgang"
  },
  "castle_wolf_wolfgang_costume_treasure": {
    "name": "Wolfgang (Commander of the Wolves)",
    "baseDefinitionId": "castle_wolf_wolfgang"
  },
  "outlaw_wu_yong": {
    "name": "Wu Yong",
    "baseDefinitionId": "outlaw_wu_yong"
  },
  "shadow_wulfstan": {
    "name": "Wulfstan",
    "baseDefinitionId": "shadow_wulfstan"
  },
  "elemental_xavier": {
    "name": "Xavier",
    "baseDefinitionId": "elemental_xavier"
  },
  "elemental_xavier_costume_arthropod": {
    "name": "Xavier (Dual Blade Arthropod)",
    "baseDefinitionId": "elemental_xavier"
  },
  "elemental_zandria": {
    "name": "Zandria",
    "baseDefinitionId": "elemental_zandria"
  },
  "elemental_zandria_costume_planet": {
    "name": "Zandria (Defender of Galaxies)",
    "baseDefinitionId": "elemental_zandria"
  },
  "magic_carpet_zazha": {
    "name": "Zazha",
    "baseDefinitionId": "magic_carpet_zazha"
  },
  "s4_zekena": {
    "name": "Zekena",
    "baseDefinitionId": "s4_zekena"
  },
  "s4_zekena_costume_vines": {
    "name": "Zekena (Apocynacid Prince)",
    "baseDefinitionId": "s4_zekena"
  },
  "beachparty_zenukwa": {
    "name": "Zenuk’wa",
    "baseDefinitionId": "beachparty_zenukwa"
  },
  "astral_demon_zhakiturion": {
    "name": "Zhakiturion",
    "baseDefinitionId": "astral_demon_zhakiturion"
  },
  "kingdom_zhang_fei": {
    "name": "Zhang Fei",
    "baseDefinitionId": "kingdom_zhang_fei"
  },
  "kingdom_zhang_fei_costume_bear_slayer": {
    "name": "Zhang Fei (Merciless Bear General)",
    "baseDefinitionId": "kingdom_zhang_fei"
  },
  "kingdom_zhuge_liang": {
    "name": "Zhuge Liang",
    "baseDefinitionId": "kingdom_zhuge_liang"
  },
  "kingdom_zhuge_liang_costume_crane": {
    "name": "Zhuge Liang (Strategist Supreme)",
    "baseDefinitionId": "kingdom_zhuge_liang"
  },
  "astral_demon_zondalath": {
    "name": "Zondalath",
    "baseDefinitionId": "astral_demon_zondalath"
  },
  "holy_god_zora": {
    "name": "Zora",
    "baseDefinitionId": "holy_god_zora"
  },
  "bard_dunnar_hart": {
    "name": "Dunner Hart",
    "baseDefinitionId": "bard_dunnar_hart"
  }
};
  if(typeof module==="object"&&module.exports)module.exports=data;else root.EVA1_HERO_IDS=data;
})(typeof globalThis!=="undefined"?globalThis:this);
