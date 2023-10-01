#include <stdio.h>
#include <ncurses.h>
#include <stdlib.h>
int i, j, height = 20, width = 20, gameover, score;
int x, y, fruitx, fruity, flag;

void draw()
{
  for (i = 0; i < height; i++)
  {
    for (j = 0; j < width; j++)
    {
      if (i == 0 || i == width - 1 || j == 0 || j == height - 1)
      {
        printf("#");
      }
      else
      {
        printf(" ");
      }
    }
    printf("\n");
  }
}

void setup()
{
  gameover = 0;
  x = height / 2;
  y = width / 2;
label1:
  fruitx = rand() % 20;
  if (fruitx == 0)
    goto label1;
label2:
  fruity = rand() % 20;
  if (fruity == 0)
    goto label2;
  score = 0;
}

void input()
{
  if (kbhit())
  {
    switch (getch())
    {
    case "a":
      flag = 1;
      break;
    case "s":
      flag = 2;
      break;
    case "d":
      flag = 3;
      break;
    case "w":
      flag = 4;
      break;
    case "x":
      gameover = 1;
      break;
    }
  }
}

void logic()
{
  // TODO: Implement Logic
  sleep(0.01);
}

int main()
{
  initscr();
  draw();
  return 0;
}