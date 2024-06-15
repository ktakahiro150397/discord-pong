import { KeyPressState } from "./keyinput"

export class DebugInfomation {
  elapsedFrame: number
  elapsedTime: number

  constructor() {
    this.elapsedFrame = 0
    this.elapsedTime = 0
  }
}

type LoopFunction = (debugInfo: DebugInfomation, keyPressInfo: KeyPressState) => void


export class GameLoop {
  private static _singleton: GameLoop
  private static _pressState: KeyPressState
  private static _debugInfo: DebugInfomation

  static get instance(): GameLoop {
    if (!GameLoop._singleton) {
      GameLoop._singleton = new GameLoop()
      GameLoop._pressState = new KeyPressState()
      GameLoop._debugInfo = new DebugInfomation()

      // キー入力のイベントハンドラを追加
      // Add keydown event listener
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          GameLoop._pressState.up = true;
        }
        if (e.key === "ArrowDown") {
          GameLoop._pressState.down = true;
        }
      });

      window.addEventListener("keyup", (e) => {
        console.log("keyup", e.key);
        if (e.key === "ArrowUp") {
          GameLoop._pressState.up = false;
        }
        if (e.key === "ArrowDown") {
          GameLoop._pressState.down = false;
        }
      });

      console.log("GameLoop instance is created")
    }

    return GameLoop._singleton
  }

  public executeGameLoop(loopFunction: LoopFunction) {
    let lastTime = 0

    const fps = 60;
    const interval = 1000 / fps;

    const gameLoop = (currentTime: number) => {
      const timeElapsed = currentTime - lastTime;

      if (timeElapsed > interval) {
        GameLoop._debugInfo.elapsedFrame += 1
        GameLoop._debugInfo.elapsedTime += timeElapsed
        loopFunction(GameLoop._debugInfo, GameLoop._pressState)
        lastTime = currentTime - (timeElapsed % interval);
        requestAnimationFrame(gameLoop)
      }

      requestAnimationFrame(gameLoop)
    }

    requestAnimationFrame(gameLoop)
  }
}



