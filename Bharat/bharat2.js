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

$(document).on('pagebeforecreate', '[data-role="page"]', function(){     
    setTimeout(function(){
        $.mobile.loading('show');
    },1);    
});

$(document).on('pageshow', '[data-role="page"]', function(){  
    setTimeout(function(){
        $.mobile.loading('hide');
    },300);      
});

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
    
    var allNames = [];
    var search_init = false;
    var nameIdMap = new Object();
    var centerNode;
    var current_son = [];
    var current_daughter = [];
    
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
        //interpolation: 'polar',
        
        //Change the transition effect from linear
        //to elastic.
        //transition: $jit.Trans.Elastic.easeOut,
        //Change other animation parameters.
        duration:3500,
        fps: 30,
                
        //Change father-child distance.
        levelDistance: 400,
        
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: false,
          //panning: 'avoid nodes', 
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
           'overridable': true,
            'color': '#ffaf7f',
            'dim' : 5,
            //height: 20,
            //width: 60,  
            //type: 'rectangle',
        },
        
        Edge: {
          'overridable': true,
          color: '#C17878',
          lineWidth:1,
          'dim' : 10,
          //type: 'bezier',
        },

        //Add events for Dragging and dropping nodes  
        Events: {  
            enable: true,  
            type: 'Native',  
            onMouseEnter: function(node, eventInfo, e){  
                rgraph.canvas.getElement().style.cursor = 'move';  
            },  
            onMouseLeave: function(node, eventInfo, e){  
                rgraph.canvas.getElement().style.cursor = '';  
            },  
            onDragMove: function(node, eventInfo, e){  
                var pos = eventInfo.getPos();  
                node.pos.setc(pos.x, pos.y);  
                rgraph.plot();  
            },  
            onDragEnd: function(node, eventInfo, e){  
                //rgraph.compute('end');  
                //rgraph.fx.animate( {  
                //    modes: [  
                //    'linear'  
                //    ],  
                //    duration: 700,  
                //    transition: $jit.Trans.Elastic.easeOut  
                //});  
            },  
            //touch events  
            onTouchStart: function(node, eventInfo, e) {  
            //stop the default event  
            $jit.util.event.stop(e);  
            },  
            onTouchMove: function(node, eventInfo, e){  
            //stop the default event  
            $jit.util.event.stop(e);  
            var pos = eventInfo.getPos();  
            node.pos.setc(pos.x, pos.y);  
            rgraph.plot();  
            },  
            onTouchEnd: function(node, eventInfo, e){  
            //stop the default event  
            
            $jit.util.event.stop(e);  
            /*
            rgraph.compute('end');  
            rgraph.fx.animate( {  
                modes: [  
                'linear'  
                ],  
                duration: 700,  
                transition: $jit.Trans.Elastic.easeOut  
            });
             */
            }  
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
            if(nodeFrom._depth > 1 || nodeTo._depth > 1) { 
                // adj.data.$color = "#772277";
                 //adj.data.$alpha = "0.1";
            }  
            
            if (nodeFrom._depth == 2) { 
                
                //adj.data.$alpha = "0.5";
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
            
            if (node.data.title)
                domElement.innerHTML = "<b>" + node.name + "</b></br><small><i>"+node.data.title+"</i></small>";
            else
                domElement.innerHTML = "<b>" + node.name + "</b>";
                
             // Add son/daughter/wife tag
             {
                domElement.innerHTML += '</br>';
                
                var individual_group = ["son","daughter","wife"];
                var i;
                var gp;
                gp = '<div id="node_son_'+node.id+'">';
                gp += '<div class="style_relation"><span class="circle"></span><a href="#">'+'son'+'</a></div>';
                gp += '</div>';
                domElement.innerHTML += gp;
                
                gp = '<div id="node_daughter_'+node.id+'">';
                gp += '<div class="style_relation"><span class="circle"></span><a href="#">'+'daughter'+'</a></div>';
                gp += '</div>';
                domElement.innerHTML += gp;
                
                gp = '<div id="node_wife_'+node.id+'">';
                gp += '<div class="style_relation"><span class="circle"></span><a href="#">'+'wife'+'</a></div>';
                gp += '</div>';
                domElement.innerHTML += gp;
                
                gp = '<div id="node_husband_'+node.id+'">';
                gp += '<div class="style_relation"><span class="circle"></span><a href="#">'+'husband'+'</a></div>';
                gp += '</div>';
                domElement.innerHTML += gp;
                
                gp = '<div id="node_father_'+node.id+'">';
                gp += '<div class="style_relation"><span class="circle"></span><a href="#">'+'father'+'</a></div>';
                gp += '</div>';
                domElement.innerHTML += gp;
                
                gp = '<div id="node_mother_'+node.id+'">';
                gp += '<div class="style_relation"><span class="circle"></span><a href="#">'+'mother'+'</a></div>';
                gp += '</div>';
                domElement.innerHTML += gp;
             }
             
                
             if (node.data.groups)
             {
                domElement.innerHTML += '</br>';
                var individual_group = node.data.groups.split(',');
                var i;
                var gp = '<div id="node_'+node.id+'">';
                for (i = 0; i < individual_group.length; ++i) {
                  gp += '<div class="ticket"><span class="circle"></span><a href="#">'+individual_group[i]+'</a></div></br>';
                }
                gp += '</div>';
                
                domElement.innerHTML += gp;
             }
             
            //domElement.className += ' rcorners'
            allNames.push(node.name);
            nameIdMap[node.name] = node.id;
            
             //set label styles  
            //var style = domElement.style; 
            //style.width = 60 + 'px';  
            //style.height = 17 + 'px';
            

            

            domElement.onclick = function(){
                centerNode = node.id;
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
            style.color = "#1976D2"; // Blue 700
            
            if (search_init == false)
            {
                search_init = true;
                $( "#searchtag" ).autocomplete({
                    source: allNames,
                    select: function (a, b) {
                                //$(this).val(b.item.value);
                                var id = nameIdMap[b.item.value];
                                centerNode = id;
                                rgraph.onClick(id, {
                                    onComplete: function() {
                                        Log.write("done");
                                    }
                                });
                            }
                });
                
                $('.ui-autocomplete').addClass('style_search_box');
                //$('.ui-autocomplete').css({ 'text-align': 'left' });
            }
            if (node.data.gender == "female")
            {
                style.color = "#C2185B";   // Pink 700             
            }
            
            var node_g_id = $('#node_'+node.id);
            node_g_id.hide();
            
            var node_son_id = $('#node_son_'+node.id);
            var node_daughter_id = $('#node_daughter_'+node.id);
            var node_wife_id = $('#node_wife_'+node.id);
            var node_husband_id = $('#node_husband_'+node.id);
            var node_father_id = $('#node_father_'+node.id);
            var node_mother_id = $('#node_mother_'+node.id);
            
            node_son_id.hide();
            node_daughter_id.hide();
            node_wife_id.hide();
            node_husband_id.hide();
            node_father_id.hide();
            node_mother_id.hide();
            
            if (node._depth < 1) {
                style.fontSize = "2.5em";
                centerNode = node.id;
                node_g_id.show();
                node.eachAdjacency(function(adj){  
                    adj.data.$alpha = "1";
                });
                

            } else if(node._depth < 2){
                style.fontSize = "1.5em";
                node_g_id.show();
                
                node.eachAdjacency(function(adj){   
                    adj.data.$alpha = "0.7";
                    if (adj.nodeTo.id == centerNode)
                    {
                           if (adj.data.relation == "son" || adj.data.relation == "daughter")
                           {
                              if (node.data.gender == "male")
                              { // this node is father
                                  node_father_id.show();
                              }
                              else if (node.data.gender == "female")
                              { // this node is mother
                                  node_mother_id.show();
                              }
                           }
                           else if (adj.data.relation == "wife" || adj.data.relation == "husband")
                           {
                              if (node.data.gender == "male")
                              {   // this node is husband
                                 style.color = "#FFC107"; // Amber 500
                                 node_husband_id.show();
                              }
                              else if (node.data.gender == "female")
                              {  // this node is wife
                                 style.color = "#4CAF50"; // green 500
                                 node_wife_id.show();
                              }

                           }
                    }
 
                });
                
                if ((node.data.father && node.data.father == centerNode) || (node.data.mother && node.data.mother == centerNode)) {
                    if (node.data.gender == "female")
                    { // daughter in second ring
                        style.color = "#F06292"; // pink 300
                        node_daughter_id.show();
                        node_wife_id.hide();
                        node_husband_id.hide();
                        node_father_id.hide();
                        node_mother_id.hide();
                    }
                    else if (node.data.gender == "male")
                    {// son in second ring
                        style.color = "#42A5F5"; // blue 400
                        node_son_id.show();
                        node_wife_id.hide();
                        node_husband_id.hide();
                        node_father_id.hide();
                        node_mother_id.hide();
                    }
                }
                
            } else if(node._depth < 3) {
                style.fontSize = "1em";
                node.eachAdjacency(function(adj){   adj.data.$alpha = "0.05";});
                //style.color = "#ffffff";
                      
            } else {
                node.eachAdjacency(function(adj){   adj.data.$alpha = "0.05";});
                style.fontSize = "1em";
                //style.color = "#7f7f7f";
                //style.display = 'none';
            }
            
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            var top = parseInt(style.top);
            var h = domElement.offsetHeight;
            
            style.left = (left - w / 2) + 'px';
            style.top = (top + h / 4) + 'px'
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
      duration: 1500
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}


