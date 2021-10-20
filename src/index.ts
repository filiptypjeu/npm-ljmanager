import fetch, { Response } from "node-fetch";

export class LJManager {
    /**
     * @param url The URL of the LJ Manager webserver.
     */
    constructor(public readonly url: string) {}

    private _fetch(n: number, cue: boolean): Promise<Response> {
        return fetch(`${this.url}?LJM_${cue ? "CUE" : "ACT"}_${n}`);
    }

    /**
     * Activate a certain cue by sending a command to the LJ manager webserver.
     */
    public cue(n: number): Promise<Response> {
        return this._fetch(n, true);
    }

    /**
     * Activate a certain action by sending a command to the LJ manager webserver.
     */
    public action(n: number): Promise<Response> {
        return this._fetch(n, false);
    }
}
