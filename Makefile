.PHONY: all

all: commit

pull:
	git pull origin main

commit:  pull
	git add . && \
	DATE_STR="`date '+%Y-%m-%d %H:%M:%S'`"; \
	git diff --cached --exit-code || git commit -m "$$DATE_STR"
	git push


# Use pull + commit + push:
# make
