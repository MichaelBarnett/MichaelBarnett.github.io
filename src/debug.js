export default class DebugUI {
    constructor(bIsActivated)
    {
        if (bIsActivated)
        {
            this._UpperLeftInfo = document.createElement('div');
            this._UpperLeftInfo.style.position = 'absolute';
            this._UpperLeftInfo.style.color= "white";
            this._UpperLeftInfo.style.backgroundColor = 0x000000;
            //this._UpperLeftInfo.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
            this._UpperLeftInfo.style.width = 100;
            this._UpperLeftInfo.style.height = 100;
            this._UpperLeftInfo.style.backgroundColor = "black";
            this._UpperLeftInfo.innerHTML = "hi there!";
            this._UpperLeftInfo.style.top = 10 + 'px';
            this._UpperLeftInfo.style.left = 10 + 'px';
            this._UpperLeftInfo.style.font = "console";
            document.body.appendChild(this._UpperLeftInfo);
        }
    }

    update(FramesPerSecond, DeltaSeconds)
    {
        this._UpperLeftInfo.innerHTML = 
        "fps: " + (FramesPerSecond).toFixed(0) + " <br>" +
        " ms: " + (1000.0*DeltaSeconds).toFixed(2) + " <br>";
    }

    update(FramesPerSecond, DeltaSeconds)
    {
        this._UpperLeftInfo.innerHTML = 
        "fps: " + (FramesPerSecond).toFixed(0) + " <br>" +
        " ms: " + (1000.0*DeltaSeconds).toFixed(2) + " <br>";
    }
}