'use strict';


function DoAction(destination) {
    document.getElementById("message").innerHTML =
        plot[destination].text;

    document.getElementById("options").innerHTML = WriteOptions(destination);
}

function WriteOptions(destination) {
    var t = "";
    var choises = (plot[destination].choises);
    var counter = 1;

    while (plot[destination].choises['c' + counter] != null && plot[destination].choises['c' + counter] !== "") {
        console.log(counter);
        t += "<input type='button' value='" + plot[destination].choises['c' + counter].text + "' onclick='DoAction(" + JSON.stringify(plot[destination].choises['c' + counter].destination) + ")'/>";
        counter++;
    }
    return t;
}

var plot = {
    "vagskal1": {
        "text": "Du vaknar upp vid ett vägskäl bredvid en flod. Du ser fyra vägskyltar som pekar åt varsitt håll. Vilken väg tar du?",
        "choises": {
            "c1": {
                "text": "Bärdalen (Norr över en bro)",
                "destination": "dalen1"
            },
            "c2": {
                "text": "Väldsträdet (Öster)",
                "destination": "tradet1"
            },
            "c3": {
                "text": "Collins Herrgård (Söder)",
                "destination": "herrgard1"
            },
            "c4": {
                "text": "Staden (Väster)",
                "destination": "staden1"
            }
        }
    },
    "vagskal2": {
        "text": "Du är tillbaka vid vägskälet. Vilken väg tar du?",
        "choises": {
            "c1": {
                "text": "Bärdalen (Norr över en bro)",
                "destination": "dalen1"
            },
            "c2": {
                "text": "Väldsträdet (Öster)",
                "destination": "tradet1"
            },
            "c3": {
                "text": "Collins Herrgård (Söder)",
                "destination": "herrgard1"
            },
            "c4": {
                "text": "Staden (Väster)",
                "destination": "staden1"
            }
        }
    },
    "vagskal3": {
        "text": "Du fortsätter springa tills du faller ihop av utmattning. Du svimmar på fläcken. När du vaknar till finner du dig vig vägskälet. Vart ska du gå nu?",
        "choises": {
            "c1": {
                "text": "Bärdalen (Norr över en bro)",
                "destination": "dalen1"
            },
            "c2": {
                "text": "Väldsträdet (Öster)",
                "destination": "tradet1"
            },
            "c3": {
                "text": "Collins Herrgård (Söder)",
                "destination": "herrgard1"
            },
            "c4": {
                "text": "Staden (Väster)",
                "destination": "staden1"
            }
        }
    },
    "vagskal4": {
        "text": "Allting är mörkt. Men plötsligt öppnar du ögonen och griper efter luft. Du finner dig helt oskad vid vägskälet. Vad hände precis?",
        "choises": {
            "c1": {
                "text": "Gå mot Bärdalen (Norr över en bro)",
                "destination": "dalen1"
            },
            "c2": {
                "text": "Gå mot Väldsträdet (Öster)",
                "destination": "tradet1"
            },
            "c3": {
                "text": "Gå mot Collins Herrgård (Söder)",
                "destination": "herrgard1"
            },
            "c4": {
                "text": "Gå mot Staden (Väster)",
                "destination": "staden1"
            }
        }
    },                        //dalen
    "dalen1": {
        "text": "Du kommer till dalen som är omringad av berg. Du ser en väg upp för berget som värkar leda öster ut. Det finns också massor med bärbuskar. Vad gör du?",
        "choises": {
            "c1": {
                "text": "Klättrar upp för berget.",
                "destination": "klattraBerg1"
            },
            "c2": {
                "text": "Tar stigen upp för berget.",
                "destination": "berget1"
            },
            "c3": {
                "text": "Plocka bär.",
                "destination": "dalen11"
            },
            "c4": {
                "text": "Gå tillbaka. till vägskälet.",
                "destination": "vagskal2"
            }
        }
    },
    "klattraBerg1": {
        "text": "Du börjar klättra upp för berget. Du kan nästan nå kanten men det finns inga bra klivstenar kvar. Vad gör du?",
        "choises": {
            "c1": {
                "text": "Hoppa upp för att nå kanten.",
                "destination": "klattraBerg11"
            },
            "c2": {
                "text": "Klättra ner en bit och ta en annan rutt upp.",
                "destination": "berget2"
            },
            "c3": {
                "text": "Klättra ner hela vägen.",
                "destination": "dalen2"
            },
            "c4": {
                "text": "Titta hur långt det är till marken",
                "destination": "klattraBerg14"
            }
        }
    },
    "klattraBerg11": {
        "text": "Du tar sats, hoppar, sträcker dig efter bergskanten. Men klivstenen går sönder när du trycker ifrån och du faller mot marken. När du träffar marken blir allt svart.",
        "choises": {
            "c1": {
                "text": "Nästa. (du dog)",
                "destination": "vagskal4"
            }
        }
    },
    "berget2": {
        "text": "Du klättrar ner halvvägs och klättrar mer åt sidan. Denna gång når du upp till kanten. När du kommer upp är det enda du ser en gammal kista och en underbar utsikt. Vad gör du?",
        "choises": {
            "c1": {
                "text": "Kolla på utsikten.",
                "destination": "bergetUtsikt"
            },
            "c2": {
                "text": "Försök öppna kistan.",
                "destination": "berget11"
            },
            "c3": {
                "text": "Klättra ner för berget.",
                "destination": "dalen2"
            },
            "c4": {
                "text": "Gå ner för berget.",
                "destination": "dalen3"
            }
        }
    },
    "bergetUtsikt": {
        "text": "Du ser för det mesta skog. Du ser vägskälet du vaknade vid. Öster om vägskälet ser du ån gå genom en dunge med ett gigantiskt träd. Längre åt öster fortsätter berget, där är det också ett vattenfall. I söder se då åkermark sprida ut sig över landskapet bortom det kan du tyda flera stort byggnader, väster om vägskälet ser du en liten stad innanför en liten mur, runt om dalen nedanför ser du bara skog och bärbuskar. Vad gör du nu?",
        "choises": {
            "c1": {
                "text": "Kolla på utsikten igen.",
                "destination": "bergetUtsikt"
            },
            "c2": {
                "text": "Försök öppna kistan.",
                "destination": "berget11"
            },
            "c3": {
                "text": "Klättra ner för berget.",
                "destination": "dalen2"
            },
            "c4": {
                "text": "Gå ner för berget.",
                "destination": "dalen3"
            }
        }
    },
    "dalen2": {
        "text": "Du klättrar ned den biten du kom. Nästan nere sätter du foten snett, du tappar grepp och ramlar ned. Du slår ryggen i backen. Som tur var det inte så långt, du fick bara mindre skador. Vad gör du nu?",
        "choises": {
            "c1": {
                "text": "Klättrar upp för berget.",
                "destination": "klattraBerg1"
            },
            "c2": {
                "text": "Tar stigen upp för berget.",
                "destination": "berget1"
            },
            "c3": {
                "text": "Plocka bär.",
                "destination": "dalen11"
            },
            "c4": {
                "text": "Gå tillbaka. till vägskälet.",
                "destination": "vagskal2"
            }
        }
    },
    "dalen11": {
        "text": "Du ser fina bär i flera olika färger. Du plockar flera stycken. Vad gör du nu?",
        "choises": {
            "c1": {
                "text": "Ät bären.",
                "destination": "barDod"
            },
            "c2": {
                "text": "Plocka fler bär.",
                "destination": "barBjorn"
            },
            "c3": {
                "text": "Klättrar upp för berget.",
                "destination": "klattraBerg1"
            },
            "c4": {
                "text": "Tar stigen upp för berget.",
                "destination": "berget1"
            },
            "c5": {
                "text": "Gå tillbaka. till vägskälet.",
                "destination": "vagskal2"
            }
        }
    },
    "barDod": {
        "text": "Du hinner äta många bär innan du plötsligt känner extrem smärta i magen. Några av bären måste varigt giftiga. Du hinner lagom inse att man inte borde äta främmande bär innan allt blir vart.",
        "choises": {
            "c1": {
                "text": "Nästa. (du dog)",
                "destination": "vagskal4"
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },
    "": {
        "text": "",
        "choises": {
            "c1": {
                "text": "",
                "destination": ""
            },
            "c2": {
                "text": "",
                "destination": ""
            },
            "c3": {
                "text": ".",
                "destination": ""
            },
            "c4": {
                "text": "",
                "destination": ""
            }
        }
    },             //tradet
    "tradet1": {
        "text": "Kommer snart!",
        "choises": {
            "c1": {
                "text": "Gå tillbaka!",
                "destination": "vagskalet2"
            }
        }
    },                //herrgard
    "herrgard1": {
        "text": "Kommer snart!",
        "choises": {
            "c1": {
                "text": "Gå tillbaka!",
                "destination": "vagskal2"
            }
        }
    },                //staden
    "staden1": {
        "text": "Kommer snart!",
        "choises": {
            "c1": {
                "text": "Gå tillbaka!",
                "destination": "vagskalet2"
            }
        }
    }
}

