# Слова A1-C2 (5449 слов)

```sql
CREATE TABLE IF NOT EXISTS words(
    id INTEGER PRIMARY KEY,
    noun_singular_default TEXT NULL,
    noun_plural TEXT NULL,
    verb_1_he_she_it TEXT NULL,  
    verb_1_i_you_we_they TEXT NULL,  
    verb_present_participle TEXT NULL, 
    verb_2_past_tense TEXT NULL, 
    verb_3_past_participle TEXT NULL, 
    verb_irregular BOOLEAN NULL,
    add_adjectives TEXT NULL,
    form_adjective_comparative TEXT NULL, 
    form_adjective_superlative TEXT NULL, 
    word_type TEXT NOT NULL,
    translate_define TEXT NOT NULL,  
    frequency INTEGER NOT NULL,
    level_group TEXT NULL
);


-- A1
SELECT id,
    noun_singular_default,
    noun_plural,
    verb_1_he_she_it,  
    verb_1_i_you_we_they,  
    verb_present_participle, 
    verb_2_past_tense, 
    verb_3_past_participle, 
    verb_irregular,
    add_adjectives,
    form_adjective_comparative, 
    form_adjective_superlative, 
    word_type,
    translate_define,  
    frequency,
    level_group
FROM words WHERE level_group = 'A1'


-- Verbs A1 
SELECT w.verb_1_i_you_we_they, w.verb_1_he_she_it, w.verb_present_participle, w.verb_2_past_tense ,w.verb_3_past_participle,w.verb_irregular  
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Verb' ORDER By w.verb_1_i_you_we_they

-- Verbs modal level_group A1  
SELECT w.verb_1_i_you_we_they, w.verb_1_he_she_it, w.verb_present_participle, w.verb_2_past_tense ,w.verb_3_past_participle,w.verb_irregular,w.translate_define, w.frequency   
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Verb modal' ORDER By w.frequency  

-- Nouns level_group A1 
SELECT w.noun_singular_default , w.noun_plural,w.translate_define,  w.frequency  
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Noun' ORDER By w.frequency

-- Adverbs level_group A1 
SELECT w.noun_singular_default,w.translate_define, w.frequency
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Adverbs' ORDER By w.frequency

-- Adjective level_group A1 
SELECT w.noun_singular_default ,w.translate_define, w.frequency
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Adjective' ORDER By w.frequency

-- Other level_group A1 
SELECT w.noun_singular_default, w.word_type FROM words w 
WHERE w.level_group  = 'A1' AND w.word_type NOT IN ('Verb','Noun','Adverbs','Adjective')


```
