export class KeyPressState {
    private _up: boolean;
    private _down: boolean;

    constructor() {
        this._up = false;
        this._down = false;
    }

    get up(): boolean { return this._up; }
    get down(): boolean { return this._down; }

    set up(value: boolean) { this._up = value; }
    set down(value: boolean) { this._down = value; }
}

