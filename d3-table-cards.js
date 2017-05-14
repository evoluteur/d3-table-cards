// https://github.com/evoluteur/d3-table-cards
// (c) 2017 Olivier Giulieri

var animTime = 750;
var curStyle = 'table'; // "table" or "card"
var cardsPerRow = 3;

var layoutInfo = {
	table: {
		// ---- row position & size
		top: function(d){return 40+d.idx*29+'px'},
		left: 0,
		height: 28,
		width: 590,
		// ---- row border-radius
		radius: 0,
		// ---- table header
		headerOpacity: 1,
		headerLeft: 0,
		// ---- column 1
		c1Top: 5,
		c1Left: 8,
		c1FontSize: 16,
		// ---- column 2
		c2Top: 5,
		c2Left: 200,
	},
	card: {
		// ---- card position & size
		top: function(d){return Math.floor(d.idx/cardsPerRow)*90+'px'},
		left: function(d){return (d.idx%cardsPerRow)*200+'px'},
		height: 80,
		width: 188,
		// ---- card border-radius
		radius: '5px',
		// ---- table header (hidden)
		headerOpacity: 0,
		headerLeft: -650,
		// ---- line 1
		c1Top: 10,
		c1Left: 10,
		c1FontSize: 18,
		// ---- line 2
		c2Top: 37,
		c2Left: 10,
	}
};

function getLayoutInfo(style){
	var width = window.innerWidth -20;
	cardsPerRow = Math.floor(width/200);
	return layoutInfo[style];
}

function render(){
	var l = getLayoutInfo(curStyle);
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
	var l = getLayoutInfo(curStyle);
	data.sort(key=='chakra' ? function (a, b) {
			return (a.chakra+a.name).localeCompare(b.chakra+b.name);
		} : function (a, b) {
		  return a.name.localeCompare(b.name);
		});
	data.forEach(function(d, idx){
		d.idx=idx;
	});
	layout(d3.select('.holder').selectAll('.item')
		.transition().duration(animTime));
}

function layout(sel){
	var l = getLayoutInfo(curStyle),
		t = d3.transition().duration(animTime);
	
	sel.style('left', l.left)
		.style('top', l.top)
		.style('height', l.height)
		.style('width', l.width)
		.style('border-radius', l.radius);

	d3.selectAll('.c1').transition(t)
		.style('top', l.c1Top)
		.style('left', l.c1Left)
		.style('font-size', l.c1FontSize);
	d3.selectAll('.c2').transition(t)
		.style('top', l.c2Top)
		.style('left', l.c2Left);

	d3.select('.header').transition(t)
		.style('opacity', l.headerOpacity)
		.style('left', l.headerLeft);

	var totalHeight = 20+(curStyle==='card' ?
			Math.ceil(data.length/cardsPerRow)*90
			 : 40+data.length*29);

	d3.select('.holder').transition(t)
		.style('height', totalHeight);
}
