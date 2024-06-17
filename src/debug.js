export default class DebugUI {
    constructor(bIsActivated)
    {
        if (bIsActivated)
        {
            this.UpperLeftInfo = document.createElement('div');
            this.UpperLeftInfo.style.position = 'absolute';
            this.UpperLeftInfo.style.color= "white";
            this.UpperLeftInfo.style.backgroundColor = 0x000000;
            //DEBUGUI.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
            this.UpperLeftInfo.style.width = 100;
            this.UpperLeftInfo.style.height = 100;
            this.UpperLeftInfo.style.backgroundColor = "black";
            this.UpperLeftInfo.innerHTML = "hi there!";
            this.UpperLeftInfo.style.top = 10 + 'px';
            this.UpperLeftInfo.style.left = 10 + 'px';
            this.UpperLeftInfo.style.font = "console";
            document.body.appendChild(this.UpperLeftInfo);
        }
    }

    update(FramesPerSecond, DeltaSeconds)
    {
        this.UpperLeftInfo.innerHTML = 
        "fps: " + (FramesPerSecond).toFixed(0) + " <br>" +
        " ms: " + (1000.0*DeltaSeconds).toFixed(2) + " <br>";
    }
}