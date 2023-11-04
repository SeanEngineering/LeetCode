#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define HASH_TABLE_SIZE 10;

int main()
{
  printf("test");
  return 0;
}

bool containsDuplicate(int *nums, int numsSize)
{
  struct KeyValue
  {
    char *key;
    int value;
    struct KeyValue *next;
  };
  struct HashMap
  {
    struct KeyValue *buckets[HASH_TABLE_SIZE];
  };

  struct HashMap *createHashMap()
  {
  }
}