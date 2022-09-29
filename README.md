# pwn-launcher

## Overview

pwn-launcher is essentially a script launcher. It's a hobby project and it's in the initial steps, so I've a lot of improvements to do and some bugfixing too.

The motivation for this project comes through a conversation I had with a colleague who works as a Pentester. He was complaining that he doesn't have any way to automatize his scripting.

## How to use it?

1. Install `docker` and `docker compose` 
2. In the `input` folder, located on root directory, create a new text file with the commands/scripts that you want to run. On this folder, there's an example file.
3. Run `docker compose up pwn-launcher` on your preferred terminal
4. Enjoy the outcome of the execution, placed on `output` folder located on root directory.
