export type Region = {
  name: string
  airports: string[]
}

export type CountryData = {
  name: string
  flag: string
  pointsOfEntry: string[]
  airports: string[]
  regions?: Region[]
}

export const destinations: CountryData[] = [
  {
    name: "Kenya",
    flag: "🇰🇪",
    pointsOfEntry: [
      "Eldoret International",
      "Kisumu International",
      "Lokichoggio International",
      "Malindi International",
      "Mombasa International",
      "Nairobi Jomo Kenyatta International",
      "Nairobi Wilson International",
    ],
    airports: [
      "Airspray", "Alia Bay", "Amboseli", "Angama", "Arroket Sotik", "Aruba",
      "Bahasi", "Bamburi", "Barclays", "Baringo", "Bomet", "Borana", "Bungoma",
      "Campi-Ya-Kanzi", "Chaffa", "Chyulu-West", "Colcheccio Loisaba", "Congrieve",
      "Cottars Mara 1920's", "Crocodile Camp", "Dadaab", "Delamere-Camp", "Delemares",
      "DWA Kibwezi", "Eilye Springs", "El Wak", "Eldoret International", "Eldoret-Town",
      "Elementaita", "Eliye-Springs", "Elkarama-Ranch", "Elmentaita", "Embu",
      "Enasoit", "Engelesha", "Farmland", "Finch Hattons", "Finley Marinyn Kericho",
      "Flourspar", "Funzi", "Galdessa", "Garissa", "Garsen", "Gilgil - Barlows",
      "Gogar Farm", "Greenpark", "Habaswein", "Hola", "Homa Bay", "Ibis",
      "Ilangwesi", "Ileret-Main", "Isiolo", "Iskushuban", "Ithumba", "Kabarak",
      "Kabarnet", "Kakamega", "Kakuma", "Kalacha South", "Kalama", "Kaluku",
      "Kamanga", "Kamboyo", "Kamogi", "Kampi Ya Kanzi", "Kamwaki Ole Naishu", "Kapese",
      "Kapsabet", "Kapsambewea", "Keekerok", "Kericho Marinyn", "Khoraf Harar",
      "Kichwa Tembo", "Kifuku Estate", "Kijipwa", "Kilalinda", "Kilanguni",
      "Kili-Buffalo", "Kilifi-Mnarani", "Kimana", "Kimanju / Ole Lendille", "Kinna",
      "Kisii Suneka", "Kisima Timau", "Kisumu International", "Kitale",
      "Kithaysu Umani Springs", "Kitich Camp", "Kitui", "Kiwayu", "Komok",
      "Koobi Fora", "Kora", "Kowop", "Kulalu", "Kuti", "Laikipia Ranch", "Lake Jipe",
      "Lamu", "Lamu Manda Point", "Lanet-Prairies", "Lendille Kimanju", "Lewa Downs",
      "Liboi", "Lodwar", "Loisaba", "Loitokitok", "Loiyangalani", "Lokichar",
      "Lokichoggio International", "Lokitaung", "Loldia", "Lolomarik",
      "Lugards-Falls South", "Magadi", "Makindu", "Maktau Gate", "Malindi International",
      "Manda Point", "Mandera", "Manyani", "Mara North", "Mara Serena", "Mara Shikar",
      "Maralal Kisima", "Marania", "Marsabit", "Mbaruk", "Mbirikani", "Menengai",
      "Meru-Mulika Lodge", "Migori", "Milgis", "Milmet", "Mkowe Lamu Mainland",
      "Mogwooni", "Mombasa International", "Mount Kenya Safari Club", "Moyale Lower",
      "Mpala Farm", "Mt Elgon Orchard", "Mtito Andei", "Mugie", "Mugwangho Elsas Kopje",
      "Mukatan", "Mumias", "Mundui", "Muridjo Ol Malo", "Musiara", "Mwatate", "Mweiga",
      "Nairobi Jomo Kenyatta International", "Nairobi Wilson International", "Naishi",
      "Nakechickok", "Namanga", "Namunyak", "Nanyuki Civil", "Nariokotome",
      "Ngerende KE", "Ngorinit-South", "Ngulia", "North Mara", "North Horr",
      "Nyahururu", "Nyeri", "Ol Donyo Waus", "Ol Jogi", "Ol Kuruk", "Ol Maisor",
      "Ol Malo", "Ol Pejeta", "Ol Seki", "Olare Orok", "Ole Naishu", "Olkiombo",
      "ORLY Airpark", "Oryx Samburu", "Oserian", "Pai Pai", "Rangers", "Reteti",
      "Rhamu", "Rhino Base", "Richards Little Camp Mara", "Rocco Olerai", "Rukinga",
      "Rusinga Island", "Sala Gate", "Samburu Buffalo Springs", "Sangare", "Sarara",
      "Sasaab", "Satao", "Sedar", "Segel Marsabit", "Segera Ranch", "Sera Kauro",
      "Sera Lebi", "Serena Mara", "Shaba", "Shompole", "Siana Springs", "Sibiloi",
      "Simba Rumaruti", "Soitik", "Solio Ranch", "Sosian", "South Horr", "Soysambu HQ",
      "St. Andrews Turi", "Suiyan", "Taita-Hills Lodge", "Takabba",
      "Tana River Delta Shikiko", "Tassia", "Tatu", "Taveta-Sisal", "Tawi", "Thika",
      "Tinderet", "Tum", "Turi", "Turkwel Gorge", "Ukunda Diani", "Umani Springs",
      "Vipingo", "Voi Park", "Voi Town", "Wajir Military", "Wamba", "Webuye",
      "Yala Swamp", "Ziwani Sisal", "Ziwani-Lodge",
    ],
    regions: [
      {
        name: "Mara",
        airports: [
          "Angama", "Cottars Mara 1920's", "Farmland", "Keekerok", "Kichwa Tembo",
          "Mara North", "Mara Serena", "Mara Shikar", "Musiara", "Ngerende KE",
          "North Mara", "Ol Kuruk", "Ol Seki", "Olare Orok", "Olkiombo",
          "Richards Little Camp Mara", "Serena Mara", "Siana Springs",
        ],
      },
      {
        name: "Laikipia",
        airports: [
          "Borana", "Colcheccio Loisaba", "Elkarama-Ranch", "Enasoit", "Engelesha",
          "Ibis", "Kamogi", "Kamwaki Ole Naishu", "Kifuku Estate", "Kimanju / Ole Lendille",
          "Kisima Timau", "Komok", "Kuti", "Laikipia Ranch", "Lendille Kimanju",
          "Lewa Downs", "Loisaba", "Lolomarik", "Maralal Kisima", "Marania",
          "Mogwooni", "Mount Kenya Safari Club", "Mpala Farm", "Mugie", "Mukatan",
          "Muridjo Ol Malo", "Mweiga", "Namunyak", "Nanyuki Civil", "Ngorinit-South",
          "Nyahururu", "Nyeri", "Ol Jogi", "Ol Maisor", "Ol Malo", "Ol Pejeta",
          "Ole Naishu", "Oryx Samburu", "Reteti", "Sangare", "Sarara", "Sasaab",
          "Segera Ranch", "Simba Rumaruti", "Solio Ranch", "Sosian", "Suiyan", "Tassia",
        ],
      },
      {
        name: "Coast",
        airports: [
          "Bamburi", "Funzi", "Kijipwa", "Kilifi-Mnarani", "Kiwayu", "Lamu",
          "Lamu Manda Point", "Malindi International", "Manda Point",
          "Mkowe Lamu Mainland", "Mombasa", "Tana River Delta Shikiko", "Ukunda Diani",
          "Vipingo",
        ],
      },
      {
        name: "Western",
        airports: [
          "Arroket Sotik", "Bomet", "Bungoma", "Eldoret International", "Eldoret-Town",
          "Finley Marinyn Kericho", "Flourspar", "Homa Bay", "Kakamega", "Kapsabet",
          "Kapsambewea", "Kericho Marinyn", "Kisii Suneka", "Kisumu International",
          "Kitale", "Marinyn", "Migori", "Mt Elgon Orchard", "Mumias", "Rusinga Island",
          "Soitik", "Tinderet", "Webuye", "Yala Swamp",
        ],
      },
      {
        name: "Rift Valley",
        airports: [
          "Airspray", "Barclays", "Baringo", "Congrieve", "Delamere-Camp", "Delemares",
          "Elementaita", "Elmentaita", "Gilgil - Barlows", "Gogar Farm", "Greenpark",
          "Kabarak", "Kabarnet", "Kapese", "Lanet-Prairies", "Loldia", "Magadi",
          "Mbaruk", "Menengai", "Milmet", "Mundui", "Naishi", "Oserian", "Rangers",
          "Rocco Olerai", "Shompole", "Soysambu HQ", "St. Andrews Turi", "Turi",
          "Turkwel Gorge",
        ],
      },
      {
        name: "Tsavo East",
        airports: [
          "Aruba", "Crocodile Camp", "DWA Kibwezi", "Galdessa", "Iskushuban",
          "Ithumba", "Kaluku", "Kilalinda", "Kulalu", "Lugards-Falls South",
          "Mtito Andei", "Rhino Base", "Sala Gate", "Satao",
        ],
      },
      {
        name: "Tsavo West",
        airports: [
          "Campi-Ya-Kanzi", "Chyulu-West", "Finch Hattons", "Kamboyo", "Kampi Ya Kanzi",
          "Kilanguni", "Kili-Buffalo", "Kithaysu Umani Springs", "Lake Jipe",
          "Loitokitok", "Makindu", "Maktau Gate", "Manyani", "Mwatate", "Ngulia",
          "Ol Donyo Waus", "Rukinga", "Taita-Hills Lodge", "Taveta-Sisal",
          "Umani Springs", "Voi Park", "Voi Town", "Ziwani Sisal", "Ziwani-Lodge",
        ],
      },
      {
        name: "NFD",
        airports: [
          "Dadaab", "El Wak", "Garissa", "Garsen", "Habaswein", "Hola",
          "Khoraf Harar", "Kitui", "Liboi", "Mandera", "Moyale Lower", "Rhamu",
          "Takabba", "Wajir Military", "Wamba",
        ],
      },
      {
        name: "Turkana",
        airports: [
          "Alia Bay", "Bahasi", "Eilye Springs", "Eliye-Springs", "Ileret-Main",
          "Kakuma", "Kalacha South", "Koobi Fora", "Kowop", "Lodwar", "Loiyangalani",
          "Lokichar", "Lokichoggio International", "Lokitaung", "Nakechickok",
          "Nariokotome", "North Horr", "Pai Pai", "Sedar", "Sibiloi", "South Horr", "Tum",
        ],
      },
      {
        name: "Meru",
        airports: [
          "Embu", "Kinna", "Kora", "Meru-Mulika Lodge", "Mugwangho Elsas Kopje",
        ],
      },
      {
        name: "Samburu",
        airports: [
          "Chaffa", "Ilangwesi", "Isiolo", "Kalama", "Kamanga", "Kitich Camp",
          "Marsabit", "Milgis", "Samburu Buffalo Springs", "Segel Marsabit",
          "Sera Kauro", "Sera Lebi", "Shaba",
        ],
      },
      {
        name: "Amboseli",
        airports: ["Amboseli", "Kimana", "Mbirikani", "Namanga", "Tawi"],
      },
      {
        name: "Nairobi",
        airports: [
          "Nairobi Jomo Kenyatta International", "Nairobi Wilson International",
          "ORLY Airpark", "Tatu", "Thika",
        ],
      },
    ],
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    pointsOfEntry: [
      "Dar es Salaam International",
      "Dodoma International",
      "Kigoma International",
      "Kilimanjaro International",
      "Musoma International",
      "Mwanza International",
      "Tanga International",
      "Zanzibar International",
    ],
    airports: [
      "Aru", "Arua", "Arusha", "Boma", "Dar es Salaam International",
      "Dodoma International", "Dolly Estate", "Fort Ikoma", "Grumeti", "Iringa",
      "Kahama", "Kigoma International", "Kilimanjaro International", "Kogatende",
      "Lake Manyara", "Lamai", "Lobo", "Loliondo", "Mafia", "Mahale", "Mbeya",
      "Moshi", "Mtwara", "Musoma International", "Mwanza International", "Ndutu",
      "Ngerengere", "Ngorongoro Crater", "Njombe", "Olduvai", "Pemba",
      "Ruaha (Msembe)", "Sasakwa", "Seronera", "Shinyanga", "Singida", "Songea",
      "Sumbawanga", "Tabora", "Tanga International", "Tarangire", "Tarime",
      "TPC Arusha Chini", "West Kilimanjaro", "Zanzibar International",
    ],
  },
  {
    name: "Ethiopia",
    flag: "🇪🇹",
    pointsOfEntry: ["Addis Ababa International"],
    airports: ["Addis Ababa International", "Dire Dawa"],
  },
  {
    name: "DRC",
    flag: "🇨🇩",
    pointsOfEntry: ["Kisangani Bangoka International"],
    airports: [
      "Beni", "Bukavu", "Bunia", "Goma", "Kabalo", "Kalemie", "Kananga",
      "Kikondja", "Kikungwa", "Kindu", "Kisangani Bangoka International", "Kongolo",
      "Kongoussi", "Lodja", "Lulimba", "Malemba", "Manono", "Mitwaba", "Moba",
      "Namoya", "Nyunzu", "Pweto",
    ],
  },
  {
    name: "Somalia",
    flag: "🇸🇴",
    pointsOfEntry: ["Kismayo International"],
    airports: [
      "Abudwak", "Afmadow", "Baidoa", "Baledogle", "Barawe", "Bardera",
      "Beletuen", "Berbera", "Berdale", "Bosaso", "Bulo Burte", "Burao",
      "Buurdhuubo", "Conoco", "Dhobley", "Dhuusamarreeb", "Dinsoor", "Doolow",
      "El Berde", "Galkayo", "Galkayo South", "Garbahaarrey", "Garowe", "Hafun",
      "Hobyo", "Huddur", "Johwar", "Kismayo International", "Luuq", "Mogadishu",
      "Wajid",
    ],
  },
  {
    name: "Chad",
    flag: "🇹🇩",
    pointsOfEntry: ["N'Djamena International"],
    airports: ["N'Djamena International"],
  },
  {
    name: "Mali",
    flag: "🇲🇱",
    pointsOfEntry: ["Bamako International"],
    airports: [
      "Ansongo", "Bafoulabe", "Bamako International", "Bandiagara",
      "Bengassi Manantali", "Bourem", "Dori", "Douentza", "Gao", "Gorom",
      "Goundam", "Kayes", "Kenieba", "Kidal", "Kolokani", "Koutiala", "Menaka",
      "Mopti", "Nara Keibane", "Niafounke", "Nioro", "Sikasso", "Tessalit",
      "Tombouctou", "Yelimane",
    ],
  },
  {
    name: "Burkina Faso",
    flag: "🇧🇫",
    pointsOfEntry: ["Fada N'gourma International", "Ouagadougou International"],
    airports: [
      "Bobo-Dioulasso", "Boungou", "Essakane", "Fada N'gourma International",
      "Ouagadougou International", "Ouahigouya", "Wahgnion", "Yaramoko",
    ],
  },
  {
    name: "Zimbabwe",
    flag: "🇿🇼",
    pointsOfEntry: ["Harare International"],
    airports: ["Bulawayo", "Harare International"],
  },
  {
    name: "Zambia",
    flag: "🇿🇲",
    pointsOfEntry: ["Lusaka International"],
    airports: ["Lusaka International"],
  },
  {
    name: "Malawi",
    flag: "🇲🇼",
    pointsOfEntry: ["Lilongwe International"],
    airports: ["Karonga", "Lilongwe International"],
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    pointsOfEntry: ["Lanseria International"],
    airports: ["Lanseria International"],
  },
]
