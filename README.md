# ljmanager
NPM package for sending commands to a LJ (LightJockey) Manager webserver.

## Usage
```ts
const ljm = new LJManager("myip:8080");
ljm.cue(42);
ljm.action(102);
```