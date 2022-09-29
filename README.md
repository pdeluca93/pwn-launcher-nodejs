# pwn-launcher

## Overview

pwn-launcher is essentially a script launcher. It's a hobby project and it's in the initial steps, so I've a lot of improvements to do and some bugfixing too.

The motivation for this project comes through a conversation I had with a colleague (and friend) who works as a Pentester. He was complaining that he doesn't have any way to automatize his scripting.

## How to use it?
As I said before, the project is in the initial steps. For now the easiest way to use it, is the following:

1. Clone the repo or download the zip file from the `develop` branch
2. Install `docker` and `docker compose` 
3. On the `input` folder, located on root directory, create a new text file with the commands/scripts you want to run. On this folder, there's an example file.
4. Run `docker compose up pwn-launcher` on your preferred terminal
5. Enjoy the outcome of the execution, placed on `output` folder located on root directory.

In a near future, I'll create a more user-friendly way to use it.
## How to add support for more commands?

At the moment the only way is to add the installation of the command you want in the `Dockerfile` placed on the `app` directory. 

Keep in mind that the Dockerfile is using the Alpine Linux distribution, so you'll need to find out the name of the package that contains the command you want. You can search it 	[here](https://pkgs.alpinelinux.org/).

After adding the installation of the package(s) to the Dockerfile, run `docker compose build pwn-launcher` before executing it again, to build a new Docker image which will contain the installed package(s).
