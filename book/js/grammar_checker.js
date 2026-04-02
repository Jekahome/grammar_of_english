import { binaryInlined, WorkerLinter } from './harper_v0.54.0.js'; 

class HarperChecker {
    constructor(lang = "AmericanEnglish") {
        this.linter = new WorkerLinter({ binary: binaryInlined, language: lang });
        this.settings = {
            ignored_words: ["mdBook"],
            source_kind: "PlainText",
            /* 
            TODO: use default rules
            linter_config: {
                rules: {
                    "PassiveVoice": true,
                    "SentenceCapitalization": true,
                    "LongSentences": false  
                }
            }*/
        };
    }
 
    isOnlyEnglish(text) {
        return !/[^a-zA-Z0-9\s.,!?;:'"()\-]/.test(text);
    }

    async checkGrammar(text) {
        if (text.trim().length == 0) return;
        let result = [];
         
        try {
            if (!this.isOnlyEnglish(text)) { 
                result.push({
                    err: true,
                    msg: 'Only English text is allowed!'
                });
            } else {
                const lints = await this.linter.lint(text, this.settings);
                if (lints.length !== 0) {
                    
                    lints.forEach(lint => {
                        //console.log(`text=${text}`,`message=${lint.message()}`);
                        result.push({
                            err: true,
                            msg: lint.message()
                        });
                    });
                }            
            }
        } catch (e) {
            result.push({
                err: true,
                msg: "❌ Error during check"
            });
            console.error(e);
        }  
        return result;
    }
}

window.grammarChecker = new HarperChecker();