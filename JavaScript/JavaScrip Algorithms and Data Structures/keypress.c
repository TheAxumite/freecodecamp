#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
    int ch;

    printf("Press an arrow key...\n");

    while (1)
    {
        // Initialize random seed
        srand(time(NULL));

        // Generate random number
        int randomNumber = rand() * 0.05;
     
            // Print the grid
            for (int y = 0; y < randomNumber; y++)
        {
            for (int x = 0; x < randomNumber; x++)
            {
                printf("#");
                 
            }
            printf("\n");
        }

        //     // Wait for key press
        //     ch = _getch();

        //     // Handle special keys (like arrow keys)
        //     if (ch == 0 || ch == 224)
        //     {
        //         switch (_getch()) // Get the actual key code
        //         {
        //         case 75: // Left arrow key code
        //             printf("Left arrow key pressed!\n");
        //             break;
        //         case 77: // Right arrow key code
        //             printf("Right arrow key pressed!\n");
        //             break;
        //         }
        //     }
        //     else if (ch == 'q' || ch == 'Q')
        //     {
        //         // Exit the loop if 'Q' or 'q' is pressed
        //         break;
        //     }

        //     // Additional logic to handle other keys can be added here
        // }

        // printf("Program terminated.\n");
        // return 0;
    }
}