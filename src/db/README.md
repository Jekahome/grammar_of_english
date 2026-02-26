# Слова A1-C2 (5449 слов)

p.s. База данных слов ни как не задействована в сценариях.

[sqliteviewer](https://sqliteviewer.flowsoft7.com/)

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


-- Nouns level_group A1 
SELECT w.noun_singular_default , w.noun_plural,w.translate_define,  w.frequency  
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Noun' ORDER By w.frequency

-- Verbs A1 
SELECT w.verb_1_i_you_we_they, w.verb_1_he_she_it, w.verb_present_participle, w.verb_2_past_tense ,w.verb_3_past_participle,w.verb_irregular,w.translate_define, w.frequency  
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Verb' ORDER By w.frequency

-- Verb irregular
SELECT w.verb_1_i_you_we_they, w.verb_1_he_she_it, w.verb_present_participle, w.verb_2_past_tense ,w.verb_3_past_participle,w.translate_define, w.frequency  
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Verb' AND w.verb_irregular = 1 ORDER By w.frequency

-- Verbs modal level_group A1  
SELECT w.verb_1_i_you_we_they, w.verb_1_he_she_it, w.verb_present_participle, w.verb_2_past_tense ,w.verb_3_past_participle,w.verb_irregular,w.translate_define, w.frequency   
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Verb modal' ORDER By w.frequency  






-- Adverbs level_group A1 
SELECT w.noun_singular_default,w.translate_define, w.frequency
FROM words w WHERE w.level_group  = 'A1' AND w.word_type = 'Adverbs' ORDER By w.frequency

-- Adjective level_group A1 
SELECT 
    w.noun_singular_default,
    REPLACE(IFNULL(w.add_adjectives, ''), ' ', ',') AS add_adjectives,
    w.translate_define, 
    w.frequency
FROM words w 
WHERE w.level_group = 'A1' AND w.word_type = 'Adjective' 
ORDER BY w.frequency;

-- Other level_group A1 
SELECT w.noun_singular_default, w.word_type, w.translate_define, w.frequency FROM words w 
WHERE w.level_group  = 'A1' AND w.word_type NOT IN ('Verb','Noun','Adverbs','Adjective') ORDER By w.word_type, w.frequency

---

SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group = 'A1' AND w.word_type = 'Noun';--- 359 в js 368
SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group = 'A1' AND w.word_type = 'Verb';--- 107 в js 108

SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group = 'A2' AND w.word_type = 'Noun';--- 595 в js 595
SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group = 'A2' AND w.word_type = 'Verb';--- 179 в js 185

SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group = 'B1' AND w.word_type = 'Noun';--- 555 в js 591
SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group = 'B1' AND w.word_type = 'Verb';--- 236 в js 236

SELECT COUNT(*) AS total_count FROM words w WHERE w.level_group  = 'B1' AND w.word_type = 'Adjective';---216

--- 726
SELECT COUNT(id) FROM words WHERE level_group = 'A1' GROUP BY level_group

---1171
SELECT COUNT(id) FROM words WHERE level_group = 'A2' GROUP BY level_group

---1116
SELECT COUNT(id) FROM words WHERE level_group = 'B1' GROUP BY level_group

---1270
SELECT COUNT(id) FROM words WHERE level_group = 'B2' GROUP BY level_group

---937
SELECT COUNT(id) FROM words WHERE level_group = 'C1' GROUP BY level_group

---229
SELECT COUNT(id) FROM words WHERE level_group = 'C2' GROUP BY level_group

-- Выборка всех слов уровня
SELECT GROUP_CONCAT(
    TRIM(
        COALESCE(noun_singular_default, '') ||
        CASE WHEN noun_plural IS NOT NULL AND noun_plural != '' THEN ',' || noun_plural ELSE '' END ||
        CASE WHEN verb_1_he_she_it IS NOT NULL AND verb_1_he_she_it != '' THEN ',' || verb_1_he_she_it ELSE '' END ||
        CASE WHEN verb_1_i_you_we_they IS NOT NULL AND verb_1_i_you_we_they != '' THEN ',' || verb_1_i_you_we_they ELSE '' END ||
        CASE WHEN verb_present_participle IS NOT NULL AND verb_present_participle != '' THEN ',' || verb_present_participle ELSE '' END ||
        CASE WHEN verb_2_past_tense IS NOT NULL AND verb_2_past_tense != '' THEN ',' || verb_2_past_tense ELSE '' END ||
        CASE WHEN verb_3_past_participle IS NOT NULL AND verb_3_past_participle != '' THEN ',' || verb_3_past_participle ELSE '' END ||
        CASE WHEN add_adjectives IS NOT NULL AND add_adjectives != '' THEN ',' || add_adjectives ELSE '' END ||
        CASE WHEN form_adjective_comparative IS NOT NULL AND form_adjective_comparative != '' THEN ',' || form_adjective_comparative ELSE '' END ||
        CASE WHEN form_adjective_superlative IS NOT NULL AND form_adjective_superlative != '' THEN ',' || form_adjective_superlative ELSE '' END,
        ','
    ), ','
) AS all_words
FROM words 
WHERE level_group = 'A1';
```
