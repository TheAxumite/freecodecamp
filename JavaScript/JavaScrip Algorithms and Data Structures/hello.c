#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define INITIAL_SIZE 16

typedef struct {
    char** words;
    size_t capacity;
    size_t size;
} Dictionary;

unsigned int hash(const char* word) {
    unsigned int hash = 0;
    for (; *word; ++word) {
        hash = hash * 31 + *word;
    }
    return hash;
}

void insertWord(Dictionary* dict, const char* word) {
    if (dict->size >= dict->capacity) {
        // Expand the dictionary
        size_t new_capacity = dict->capacity * 2;
        char** new_words = realloc(dict->words, new_capacity * sizeof(char*));
        if (new_words == NULL) {
            perror("Failed to expand dictionary");
            exit(EXIT_FAILURE);
        }
        dict->words = new_words;
        dict->capacity = new_capacity;
    }
    
    unsigned int index = hash(word) % dict->capacity;
    
    // Handle collisions with linear probing
    while (dict->words[index] != NULL) {
        index = (index + 1) % dict->capacity;
    }

    // Insert the new word
    dict->words[index] = strdup(word);
    if (dict->words[index] == NULL) {
        perror("Failed to insert word");
        exit(EXIT_FAILURE);
    }
    dict->size++;
}

void freeDictionary(Dictionary* dict) {
    for (size_t i = 0; i < dict->capacity; i++) {
        free(dict->words[i]);
    }
    free(dict->words);
}

int main() {
    Dictionary dict = {NULL, 0, 0};
    dict.words = calloc(INITIAL_SIZE, sizeof(char*));
    if (dict.words == NULL) {
        perror("Failed to allocate initial dictionary");
        return EXIT_FAILURE;
    }
    dict.capacity = INITIAL_SIZE;

    printf("Enter words to add to the dictionary (type 'exit' to finish):\n");
    char buffer[256];
    while (1) {
        scanf("%255s", buffer);
        if (strcmp(buffer, "exit") == 0) {
            break;
        }
        insertWord(&dict, buffer);
    }

    // Print the contents of the dictionary
    printf("Dictionary contents:\n");
    for (size_t i = 0; i < dict.capacity; i++) {
        if (dict.words[i] != NULL) {
            printf("%s\n", dict.words[i]);
        }
    }

    freeDictionary(&dict);
    return EXIT_SUCCESS;
}
