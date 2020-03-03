SOURCE_FILES=better-so.js manifest.json
TARGET=better-so.zip

.PHONY:all
all: build

.PHONY:build
build: ${TARGET}

${TARGET}: ${SOURCE_FILES}
	zip -r ${TARGET} ${SOURCE_FILES}

