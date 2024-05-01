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
```
