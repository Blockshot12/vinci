
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["een", "de", "en", "woord", "weer", "tegen", "alles", "is", "zijn", "wij", "alle", "het", "niet", "over", "bij", "omdat", "zodat", "voor", "beide", "geen", "naast", "dus", "onzin", "maar"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tipua', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Internal strings

var tipuesearch_string_1 = 'Geen titel';
var tipuesearch_string_2 = 'Zoekresultaten voor';
var tipuesearch_string_3 = 'Zoek inplaats voor';
var tipuesearch_string_4 = '1 resultaat';
var tipuesearch_string_5 = 'resultaten';
var tipuesearch_string_6 = 'Vorige';
var tipuesearch_string_7 = 'Volgende';
var tipuesearch_string_8 = 'Geen resultaat gevonden';
var tipuesearch_string_9 = 'Veel voorkomende woorden worden genegeerd';
var tipuesearch_string_10 = 'Je zoekterm is te kort';
var tipuesearch_string_11 = 'Minimaal 1 karakter of meer';
var tipuesearch_string_12 = 'Zou moeten zijn';
var tipuesearch_string_13 = 'karakter of meer';
