.PHONY: all

all: commit

pull:
	git pull origin main

commit:  pull
	git add .  
	@git diff --cached --exit-code || git commit --allow-empty-message -m "" 
	git push


# Use pull + commit + push:
# make
