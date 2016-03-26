var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
//    var json = [
///-------------------------- data
// this data is coming from jsondata.js
///--------------------------- data end    
//    ];
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            'strokeStyle': '#555',
            'shadowBlur': 50,
            'shadowColor': '#ccc'
          }
        },
        
        //Set polar interpolation.
        //Default's linear.        
        interpolation: 'polar',
        
        //Change the transition effect from linear
        //to elastic.
        //transition: $jit.Trans.Elastic.easeOut,
        //Change other animation parameters.
        duration:3500,
        fps: 30,
                
        //Change father-child distance.
        levelDistance: 200,
        
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 50
        },
        //Set Node and Edge styles.
        Node: {
           'overridable': true,
            'color': '#ffaf7f',
        },
        
        Edge: {
          'overridable': true,
          color: '#C17878',
          lineWidth:1
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
           
        },
        
        //This method is called right before plotting
        //an edge. This method is useful to change edge styles
        //individually.
        onBeforePlotLine: function(adj){
            
            var nodeFrom = adj.nodeFrom; 
            var nodeTo = adj.nodeTo; 
            if(nodeFrom._depth >=2) { 
                // adj.data.$color = "#772277";
                // adj.data.$alpha = "0.1";
                // adj.display = "none"
            } else { 
                //delete adj.data.$color; //fall back to default edge color. 
            } 
            
            //Add some random lineWidth to each edge.
            //if (!adj.data.$lineWidth) 
            //    adj.data.$lineWidth = Math.random() * 5 + 1;
            //if (adj.nodeFrom.data.gender == "female")
            //{
            //    adj.data.$color  = "#ff0000";
            //}
            //adj.data.$direction = [adj.nodeTo.id, adj.nodeFrom.id];
            //adj.data.$type = "arrow";
            //adj.data.$dim = 10;
        },
        
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = "<i>" + node.name + "</i>";
            //domElement.className += ' rcorners'
            
            domElement.onclick = function(){
                rgraph.onClick(node.id, {
                    onComplete: function() {
                        Log.write("done");
                    }
                });
            };
        },
        
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.color = "#ffff00";

            if (node._depth < 1) {
                style.fontSize = "2.5em";
                //style.color = "#ffff00";
                node.eachAdjacency(function(adj){   adj.data.$alpha = "1";});
            } else if(node._depth < 2){
                style.fontSize = "1em";
                //style.color = "#ffffff";
                node.eachAdjacency(function(adj){   adj.data.$alpha = "1";});
            } else if(node._depth < 3) {
                style.fontSize = "0.5em";
                node.eachAdjacency(function(adj){   adj.data.$alpha = "0.1";});
                //style.color = "#ffffff";
                      
            } else {
                node.eachAdjacency(function(adj){   adj.data.$alpha = "0.1";});
                style.fontSize = "0.2em";
                //style.color = "#7f7f7f";
                //style.display = 'none';
            }
            
            if (node.data.gender == "female")
            {
                style.color = "#7f7fff";                
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            var top = parseInt(style.top);
            var h = domElement.offsetHeight;
            
            style.left = (left - w / 2) + 'px';
            style.top = (top - h / 2) + 'px'
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
