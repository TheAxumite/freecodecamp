


int main(int argc, char* argv[]) {
    SDL_Window* window = NULL;
    SDL_Renderer* renderer = NULL;
    SDL_Init(SDL_INIT_VIDEO); // Initialize SDL2

    // Create an application window with the following settings:
    window = SDL_CreateWindow(
        "An SDL2 window",          // window title
           // initial y position
        640,                       // width, in pixels
        480,                       // height, in pixels
        SDL_WINDOW_OPENGL          // flags - see below
    );

    // Check that the window was successfully created
    if (window == NULL) {
        // In the case that the window could not be made...
        SDL_Log("Could not create window: %s\n", SDL_GetError());
        return 1;
    }

    // Create renderer for window
    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
    if (renderer == NULL) {
        SDL_Log("Renderer could not be created: %s\n", SDL_GetError());
        return 1;
    }

    // Set render color to blue (RGBA)
    SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);

    // Clear the window
    SDL_RenderClear(renderer);

    // Draw a white line from the top left to the bottom right of the window
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255); // White color
    SDL_RenderDrawLine(renderer, 0, 0, 640, 480);

    // Update the screen with any rendering performed since the previous update
    SDL_RenderPresent(renderer);

    // Wait for 5 seconds to see the window
    SDL_Delay(5000);

    // Close and destroy the window
    SDL_DestroyWindow(window);
    SDL_DestroyRenderer(renderer);

    // Clean up
    SDL_Quit();
    return 0;
}
