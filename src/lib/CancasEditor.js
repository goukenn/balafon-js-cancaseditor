const SM_NORMAL = 1;
const SM_ZOOM = 2;
const SM_FIT = 3;
// define sieMode
const sizeMode = {};
Object.defineProperty(sizeMode, 'Normal', {get(){return SM_NORMAL;}})
Object.defineProperty(sizeMode, 'Zoom', {get(){return SM_ZOOM;}})
Object.defineProperty(sizeMode, 'Fit', {get(){return SM_FIT;}})
 

export class CancasEditor{
    #m_host;
    #m_canvas;
    #m_context; 
    #m_sizeMode;
    backgroundColor;

    constructor(host){ 
        this.#m_host = host
    }   
    get host(){
        return this.#m_host;
    }
    get canvas(){
        return this.#m_canvas;
    }
    init(){
        let q = this.host; 
        q.setHtml('');
        let canvas = document.createElement('canvas');  
        let context = canvas.getContext('2d', {antialias:true});
        q.o.appendChild(canvas);
        this.#m_canvas = $igk(canvas).setCss({ 
            backgroundColor: this.backgroundColor || '#040816'
        });

        this.#m_context = context; 
        // depend on click 
        (function(m){ 
            m.updateSize();
            var m_eventContext = igk.winui.RegEventContext(q, $igk(q));
            if (m_eventContext) {
                // console.log("register context....")
                m_eventContext.reg_window("resize", function() { 
                    m.updateSize(); 
                    m.drawScene();
                });
            } else{
                console.log("failed to register event context");
            }
            // init event
        })(this); 
        this.drawScene();
    }
    updateSize(){
        let c = this.#m_canvas.o;
        let w = window.screen.availWidth;
        let h = window.screen.availHeight;
        switch(this.#m_sizeMode){
            default:  
            break;
        }
        console.log("update size");
        c.width = w;
        c.height = h;
    }
    drawScene(){
        let context = this.#m_context;  
        const { width, height} = this.#m_canvas.o; //{width: g.getComputedStylePropertyValue('width'), height: g.getComputedStylePropertyValue('height')};
        context.fillStyle = 'transparent'; 
        context.clearRect(0,0, width, height)
        context.fillStyle = 'red';
        context.fillRect(0, 0, 10, 100);
    }

    /**
     * update scene for animation 
     */
    updateScene(){

    }
} 