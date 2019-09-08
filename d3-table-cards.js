// https://github.com/evoluteur/d3-table-cards
// (c) 2018 Olivier Giulieri

var layoutInfo = {
	table: {
		// ---- row position & size
		top: function(d, i){return 40+i*31+'px'},
		left: 0,
		height: 30,
		width: 594,
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
	cards: {
		// ---- card position & size
		top: function(d, i){return Math.floor(i/cardsPerRow)*94+'px'},
		left: function(d, i){return (i%cardsPerRow)*210+'px'},
		height: 84,
		width: 200,
		// ---- card border-radius
		radius: '4px',
		// ---- table header (hidden)
		headerOpacity: 0,
		headerLeft: -650,
		// ---- line 1
		c1Top: 10,
		c1Left: 10,
		c1FontSize: 18,
		// ---- line 2
		c2Top: 38,
		c2Left: 10,
	}
};

var selector = '.holder';
var curStyle = 'cards'; // "table" or "cards"
var animTime = 600;

var holder;
var cardsPerRow = 3;

function getLayoutInfo(style){
	var width = window.innerWidth -40;
	cardsPerRow = Math.floor(width/210);
	return layoutInfo[style];
}

function render(){
	var l = getLayoutInfo(curStyle);
	holder = d3.select(selector);
	var sel = holder.selectAll('.item')
		.data(data, function(d){return d.name})
		.enter()
		.append('div').attr('class', function(d){return 'item chakra'+d.chakra});

	sel.insert('div').attr('class', 'c1').style('top', l.c1Top)
		.html(function(d){return d.name});
	sel.insert('div').attr('class', 'c2').style('top', l.c2Top)
		.html(function(d){return d.spirit});

	layout(true, false);
}

function redraw(style){
	curStyle = style || curStyle;
	layout();
}

curSortField='chakra';
curSortDirection=1;
function sort(key){
	if(key===curSortField){
		curSortDirection = -curSortDirection;
	}else{
		curSortDirection = 1;
	}
	var l = getLayoutInfo(curStyle);
	if(key=='chakra'){
		data.sort(curSortDirection>0 ? function (a, b) {
				return (a.chakra+a.name).localeCompare(b.chakra+b.name);
			} : function (a, b) {
				return ((8-a.chakra)+a.name).localeCompare((8-b.chakra)+b.name);
			});
	}else{
		data.sort(function (a, b) {
			  return curSortDirection*a.name.localeCompare(b.name);
			});
	}
	curSortField=key;
	layout(false, true);
}

function layout(skipAnim, skipChildren){
	var l = getLayoutInfo(curStyle),
		t = d3.transition().duration(skipAnim ? 0 : animTime);

	holder.selectAll('.item')
		.data(data, function(d){return d.name})
		.transition(t)
		.style('left', l.left)
		.style('top', l.top)
		.style('height', l.height)
		.style('width', l.width)
		.style('border-radius', l.radius);

	if(!skipChildren){
		holder.selectAll('.c1').transition(t)
			.style('top', l.c1Top)
			.style('left', l.c1Left)
			.style('font-size', l.c1FontSize);
		holder.selectAll('.c2').transition(t)
			.style('top', l.c2Top)
			.style('left', l.c2Left);

		holder.select('.header').transition(t)
			.style('opacity', l.headerOpacity)
			.style('left', l.headerLeft);

		var totalHeight = 20+(curStyle==='cards' ?
				Math.ceil(data.length/cardsPerRow)*94
				 : 40+data.length*31);

		holder.transition(t)
			.style('height', totalHeight);
	}
}
