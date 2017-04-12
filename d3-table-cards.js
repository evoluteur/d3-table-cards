// https://github.com/evoluteur/d3-table-cards
// (c) 2017 Olivier Giulieri

var animTime = 750;
var curStyle = 'table'; // "table" or "card"
var cardsPerRow = 3;

var layoutInfo = {
	table: {
		height: 28,
		width: 590,
		radius: 0,
		top: function(d){return 40+d.idx*29+'px'},
		left: 0,
		headerOpacity: 1,
		headerLeft: 0,
		c1Top: 5,
		c1Left: 8,
		c2Top: 5,
		c2Left: 200,
	},
	card: {
		height: 80,
		width: 188,
		radius: '5px',
		top: function(d){return Math.floor(d.idx/cardsPerRow)*90+'px'},
		left: function(d){return (d.idx%cardsPerRow)*200+'px'},
		headerOpacity: 0,
		headerLeft: '-650px',
		c1Top: 10,
		c1Left: 10,
		c2Top: 37,
		c2Left: 10,
	}
};

function getLayoutInfo(style){
	var w = window.innerWidth -20;
	cardsPerRow = Math.floor(w/200);
	return layoutInfo[style];
}

function render(){
	var l=getLayoutInfo(curStyle);
	var sel = d3.select('.holder').selectAll('.item')
		.data(data)
		.enter()
		.append('div').attr('class', function(d){return 'item chakra'+d.chakra});

	sel.insert('div').attr('class', 'c1').html(function(d){return d.name})
		.style('top', l.c1Top);
	sel.insert('div').attr('class', 'c2').html(function(d){return d.spirit})
		.style('top', l.c2Top);

	layout(sel);
}

function redraw(style){
	curStyle = style || curStyle;
	layout(d3.select('.holder').selectAll('.item')
		.transition().duration(animTime));
}
function sort(key){
	var l=getLayoutInfo(curStyle);
	var data2 = data.sort(key=='chakra' ? function (a, b) {
			return (a.chakra+a.name).localeCompare(b.chakra+b.name);
		} : function (a, b) {
		  return a.name.localeCompare(b.name);
		});
	data2.forEach(function(d,idx){
		d.idx=idx;
	});
	layout(d3.select('.holder').selectAll('.item')
		.transition().duration(animTime));
}

function layout(sel){
	var l=getLayoutInfo(curStyle);
	
	sel.style('left', l.left)
		.style('top', l.top)
		.style('height', l.height)
		.style('width', l.width)
		.style('border-radius', l.radius);

	d3.selectAll('.c1').transition().duration(animTime)
		.style('top', l.c1Top)
		.style('left', l.c1Left);
	d3.selectAll('.c2').transition().duration(animTime)
		.style('top', l.c2Top)
		.style('left', l.c2Left);

	d3.select('.header').transition().duration(animTime)
		.style('opacity', l.headerOpacity)
		.style('left', l.headerLeft);

	var totalHeight = (curStyle==='card' ?
			Math.ceil(data.length/cardsPerRow)*90
			 : 40+data.length*29)+20;
	d3.select('.holder').transition().duration(animTime)
		.style('height', totalHeight);
}
