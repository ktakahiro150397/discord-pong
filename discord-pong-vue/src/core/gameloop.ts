
export class DebugInfomation{
    elapsedFrame: number
    elapsedTime: number

    constructor(){
        this.elapsedFrame = 0
        this.elapsedTime = 0
    }
}


export function executeGameLoop(loopFunction: Function) {
  let lastTime = 0

  const fps = 60;
  const interval = 1000 / fps;

  const debugInfo = new DebugInfomation()
  const gameLoop = (currentTime:number) => {
    console.log("currentTime",currentTime)
    const timeElapsed = currentTime - lastTime;

    if(timeElapsed > interval){
        debugInfo.elapsedFrame += 1
        debugInfo.elapsedTime += timeElapsed
        loopFunction(debugInfo)
        lastTime = currentTime - (timeElapsed % interval);
        //lastTime = currentTime;
      }
    
      requestAnimationFrame(gameLoop)
  }
  
  requestAnimationFrame(gameLoop)
}


