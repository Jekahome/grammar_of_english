'use strict';
 
function normalizeWord(word) {
    return normalizeText(word).replace(/\s+/g, "");
}

function normalizeText(word) {
    return word
        .toLowerCase()
        .replaceAll("-->","")
        .replaceAll("’","'")
        .replaceAll("‑","-")
        .replaceAll("'s","")
        .replace(/'$/, '')
        .replaceAll(/[^a-z \'-]/gi, "");
}

function getWordLevels(text){

    const sentences = text.split(/\r?\n/);

    let result_a1 = [];// 1
    let result_a2 = [];// 2
    let result_b1 = [];// 3
    let result_b2 = [];// 4
    let result_c1 = [];// 5
    let result_c2 = [];// 6
    let result_other = [];// 7

    let show_a1 = [];
    let show_a2 = [];
    let show_b1 = [];
    let show_b2 = [];
    let show_c1 = [];
    let show_c2 = [];
    let show_other = [];
 
    let is_sort = false;
    sentences.forEach(sentence => {
        let wordsRaw = sentence.split(/\s+/).filter(Boolean);
        let word_calculate = [];
        wordsRaw.forEach(word => {

            let wordsNormalized = normalizeWord(word);

            if (wordsNormalized && wordsNormalized!="-"){
                if (words_common.includes(wordsNormalized)){
                    word_calculate.push([word,1]);
                }else if (words_a1.includes(wordsNormalized)){
                    word_calculate.push([word,1]);
                }else if (words_a2.includes(wordsNormalized)){
                    word_calculate.push([word,2]);
                }else if (words_b1.includes(wordsNormalized)){
                    word_calculate.push([word,3]);
                }else if (words_b2.includes(wordsNormalized)){
                    word_calculate.push([word,4]);
                }else if (words_c1.includes(wordsNormalized)){
                    word_calculate.push([word,5]);
                }else if (words_c2.includes(wordsNormalized)){
                    word_calculate.push([word,6]);
                }else {  
                    if (word.replace(/[^a-zA-Z]/g, "").length > 1){
                        word_calculate.push([word,7]);
                    }
                }                
            }
        });    
 
        if (word_calculate.length > 0){
 
            word_calculate.sort((a, b) => b[1] - a[1]);
            let prepare_sentence = sentence.replace(word_calculate[0][0],`<b>${word_calculate[0][0]}</b>`);
           
            switch (word_calculate[0][1]) {
                case 1: 
                    result_a1.push(prepare_sentence);
                    if (!show_a1.includes(word_calculate[0][0])){ show_a1.push(word_calculate[0][0]);} 
                    break;
                case 2:
                    result_a2.push(prepare_sentence);
                    if (!show_a2.includes(word_calculate[0][0])){ show_a2.push(word_calculate[0][0]);} 
                    break;
                case 3:
                    result_b1.push(prepare_sentence);
                    if (!show_b1.includes(word_calculate[0][0])){ show_b1.push(word_calculate[0][0]);} 
                    break;
                case 4:
                    result_b2.push(prepare_sentence);
                    if (!show_b2.includes(word_calculate[0][0])){ show_b2.push(word_calculate[0][0]);} 
                    break;
                case 5:
                    result_c1.push(prepare_sentence);
                    if (!show_c1.includes(word_calculate[0][0])){ show_c1.push(word_calculate[0][0]);} 
                    break;
                case 6:
                    result_c2.push(prepare_sentence);
                    if (!show_c2.includes(word_calculate[0][0])){ show_c2.push(word_calculate[0][0]);} 
                    break;
                case 7:
                    result_other.push(prepare_sentence);
                    if (!show_other.includes(word_calculate[0][0])){ show_other.push(word_calculate[0][0]);} 
                    break;
                default:
                    result_other.push(prepare_sentence);
                    if (!show_other.includes(word_calculate[0][0])){ show_other.push(word_calculate[0][0]);} 
            } 
        }
    }); 

    return {
        result: {
            result_a1: result_a1,
            result_a2: result_a2,
            result_b1: result_b1,
            result_b2: result_b2,
            result_c1: result_c1,
            result_c2: result_c2,
            result_other: result_other
        },
        show:{ 
            show_a1: show_a1,
            show_a2: show_a2,
            show_b1: show_b1,
            show_b2: show_b2,
            show_c1: show_c1,
            show_c2: show_c2,
            show_other: show_other
        }
    };

}


function getAllWordsLevels(text){

    const sentences = text.split(/\r?\n/);
 
    let show_a1 = [];
    let show_a2 = [];
    let show_b1 = [];
    let show_b2 = [];
    let show_c1 = [];
    let show_c2 = [];
    let show_other = [];
 
    sentences.forEach(sentence => {
        let wordsRaw = sentence.split(/\s+/).filter(Boolean);
        let word_calculate = [];
        wordsRaw.forEach(word => {

            let wordsNormalized = normalizeWord(word);

            if (wordsNormalized && wordsNormalized!="-"){
                if (words_common.includes(wordsNormalized)){
                    word_calculate.push([word,1]);
                }else if (words_a1.includes(wordsNormalized)){
                    word_calculate.push([word,1]);
                }else if (words_a2.includes(wordsNormalized)){
                    word_calculate.push([word,2]);
                }else if (words_b1.includes(wordsNormalized)){
                    word_calculate.push([word,3]);
                }else if (words_b2.includes(wordsNormalized)){
                    word_calculate.push([word,4]);
                }else if (words_c1.includes(wordsNormalized)){
                    word_calculate.push([word,5]);
                }else if (words_c2.includes(wordsNormalized)){
                    word_calculate.push([word,6]);
                }else {  
                    if (word.replace(/[^a-zA-Z]/g, "").length > 1){
                        word_calculate.push([word,7]);
                    }
                }                
            }
        });    
 
        if (word_calculate.length > 0){
            word_calculate.forEach(o => {

                if (o[1] == 1 && !show_a1.includes(o[0])){ show_a1.push(o[0]);} 
                
                if (o[1] == 2 && !show_a2.includes(o[0])){ show_a2.push(o[0]);} 
                    
                if (o[1] == 3 && !show_b1.includes(o[0])){ show_b1.push(o[0]);} 
                
                if (o[1] == 4 && !show_b2.includes(o[0])){ show_b2.push(o[0]);}              
                
                if (o[1] == 5 && !show_c1.includes(o[0])){ show_c1.push(o[0]);}                
                    
                if (o[1] == 6 && !show_c2.includes(o[0])){ show_c2.push(o[0]);}                
                    
                if (o[1] == 7 && !show_other.includes(o[0])){ show_other.push(o[0]);}                   
            });
        }
    }); 

    return {
        show_a1: show_a1,
        show_a2: show_a2,
        show_b1: show_b1,
        show_b2: show_b2,
        show_c1: show_c1,
        show_c2: show_c2,
        show_other: show_other
    };

}

// Возврашает все слова выбранного уровня
function words_get_level(level){

    let nouns = {};
    let verbs = {};
    let adverbs = {};
    let adjectives = {};
    let prepositions = {};
    let irregular_verbs = {}; 

    if (level == "A1" ){
        nouns=a1_words_nouns;
        verbs=a1_words_verbs;
        adverbs=a1_words_adverbs;
        adjectives=a1_words_adjective;
        prepositions=a1_words_preposition;
        irregular_verbs=a1_words_irregular_verbs;
        
    }else if (level == "A2"){
        nouns=a2_words_nouns;
        verbs=a2_words_verbs;
        adverbs=a2_words_adverbs;
        adjectives=a2_words_adjective;
        prepositions=a2_words_preposition;
        irregular_verbs=a2_words_irregular_verbs;

    }else if (level == "B1"){
        nouns=b1_words_nouns;
        verbs=b1_words_verbs;
        adverbs=b1_words_adverbs;
        adjectives=b1_words_adjective;
        prepositions=b1_words_preposition;
        irregular_verbs=b1_words_irregular_verbs;

    }else if (level == "B2"){
        nouns=b2_words_nouns;
        verbs=b2_words_verbs;
        adverbs=b2_words_adverbs;
        adjectives=b2_words_adjective;
        prepositions=b2_words_preposition;
        irregular_verbs=b2_words_irregular_verbs;

    }else if(level == "C1"){
         
        nouns=c1_words_nouns;
        verbs=c1_words_verbs;
        adverbs=c1_words_adverbs;
        adjectives=c1_words_adjective;
        prepositions=c1_words_preposition;
        irregular_verbs=c1_words_irregular_verbs;

    }else {
        console.error("нет уровня");
        alert("массивы слов по частям речи не готовы");
        return {};
    }

    return {
        nouns:nouns,
        verbs:verbs,
        adverbs:adverbs,
        adjectives:adjectives,
        prepositions:prepositions,
        irregular_verbs:irregular_verbs
    };
}
