(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"to_show1_atlas_1", frames: [[0,0,1561,1562]]},
		{name:"to_show1_atlas_2", frames: [[0,0,1360,1361],[502,1363,289,222],[793,1363,303,208],[0,1363,500,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["to_show1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["to_show1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["to_show1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["to_show1_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["to_show1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitetriangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.3125,0.3125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,487.8,488.1);


(lib.redtriangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ресурс_4second_svg
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.3584,0.3584);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,487.5,487.9);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(20,236,243,0.247)").ss(1,1,1).p("EAlPAAAQAAOkq6KTQq6KTvbAAQvaAAq6qTQq6qTAAukQAAujK6qTQK6qTPaAAQPbAAK6KTQK6KTAAOjg");
	this.shape.setTransform(238.25,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("A6UY3Qq6qTAAukQAAujK6qTQK6qTPaAAQPbAAK6KTQK6KTgBOjQABOkq6KTQq6KTvbAAQvaAAq6qTg");
	this.shape_1.setTransform(238.25,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1,-1,478.5,452), null);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-71.1,-88.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-71.1,-14.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(-124.95,-124.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-124.9,250,250);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(20,236,243,0.247)").ss(1,1,1).p("AAAAPIAAgd");
	this.shape.setTransform(-325,-169.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933CC").s().p("EgyxA8KMAAAhWaIAAgfMAwcghaMA1HAhaMAAABW5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326,-385,651,770);


// stage content:
(lib.toshow1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// circle_with_text
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(319.05,254.6,1,1,0.3069,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360.3069},39).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	// brown_circle
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(313.1,-283.55,1.9209,1.8852,0,0,0,237.7,224.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).wait(1).to({regX:238.2,regY:225,x:314.1,y:-261.9},0).wait(1).to({y:-241.8},0).wait(1).to({y:-221.65},0).wait(1).to({y:-201.55},0).wait(1).to({y:-181.4},0).wait(1).to({y:-161.3},0).wait(1).to({y:-141.2},0).wait(1).to({y:-121.05},0).wait(1).to({y:-100.95},0).wait(1).to({y:-80.8},0).wait(1).to({y:-60.7},0).wait(1).to({y:-40.6},0).wait(1).to({y:-20.45},0).wait(1).to({y:-0.35},0).wait(1).to({y:19.8},0).wait(1).to({y:39.9},0).wait(1).to({y:60.05},0).wait(1).to({y:80.15},0).wait(1).to({y:100.25},0).wait(1).to({y:120.4},0).wait(1).to({y:140.5},0).wait(1).to({y:160.65},0).wait(1).to({y:180.75},0).wait(1).to({y:200.85},0).wait(1).to({y:221},0).wait(1).to({y:241.1},0).wait(1).to({y:261.25},0).wait(1).to({y:281.35},0).wait(1).to({y:301.45},0).wait(1));

	// white_triangle
	this.instance_2 = new lib.whitetriangle("synched",0);
	this.instance_2.setTransform(132.1,5.9,1.6002,1.3359,0,0,0,258.4,248.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(1).to({regX:243.9,regY:244,x:116.55,y:3.2},0).wait(1).to({x:123.6,y:6.65},0).wait(1).to({x:130.1,y:10.05},0).wait(1).to({x:136.1,y:13.5},0).wait(1).to({x:141.6,y:16.95},0).wait(1).to({x:146.7,y:20.35},0).wait(1).to({x:151.35,y:23.8},0).wait(1).to({x:155.7,y:27.2},0).wait(1).to({x:159.65,y:30.65},0).wait(1).to({x:163.3,y:34.1},0).wait(1).to({x:166.7,y:37.5},0).wait(1).to({x:169.85,y:40.95},0).wait(1).to({x:172.75,y:44.4},0).wait(1).to({x:175.45,y:47.8},0).wait(1).to({x:177.95,y:51.25},0).wait(1).to({x:180.3,y:54.65},0).wait(1).to({x:182.5,y:58.1},0).wait(1).to({x:184.6,y:61.55},0).wait(1).to({x:186.55,y:64.95},0).wait(1).to({x:188.4,y:68.4},0).wait(1).to({x:190.15,y:71.8},0).wait(1).to({x:191.8,y:75.25},0).wait(1).to({x:193.45,y:78.7},0).wait(1).to({x:195,y:82.1},0).wait(1).to({x:196.5,y:85.55},0).wait(1).to({x:198,y:89},0).wait(1).to({x:199.4,y:92.4},0).wait(1).to({x:200.85,y:95.85},0).wait(1).to({x:202.2,y:99.25},0).wait(1).to({x:203.6,y:102.7},0).wait(1).to({x:204.95,y:106.15},0).wait(1).to({x:206.3,y:109.55},0).wait(1).to({x:207.65,y:113},0).wait(1).to({x:209,y:116.45},0).wait(1).to({x:210.3,y:119.85},0).wait(1).to({x:211.65,y:123.3},0).wait(1).to({x:212.95,y:126.7},0).wait(1).to({x:214.3,y:130.15},0).wait(1).to({x:215.6,y:133.6},0).wait(1).to({x:216.95,y:137},0).wait(1).to({x:218.25,y:140.45},0).wait(1).to({x:219.6,y:143.85},0).wait(1).to({x:220.9,y:147.3},0).wait(1).to({x:222.25,y:150.75},0).wait(1).to({x:223.55,y:154.15},0).wait(1).to({x:224.9,y:157.6},0).wait(1).to({x:226.2,y:161.05},0).wait(1).to({x:227.55,y:164.45},0).wait(1).to({x:228.9,y:167.9},0).wait(1).to({x:230.2,y:171.3},0).wait(1).to({x:231.55,y:174.75},0).wait(1).to({x:232.9,y:178.2},0).wait(1).to({x:234.25,y:181.6},0).wait(1).to({x:235.65,y:185.05},0).wait(1).to({x:237,y:188.5},0).wait(1).to({x:238.45,y:191.9},0).wait(1).to({x:239.85,y:195.35},0).wait(1).to({x:241.35,y:198.75},0).wait(1).to({x:242.85,y:202.2},0).wait(1).to({x:244.4,y:205.65},0).wait(1).to({x:246.05,y:209.05},0).wait(1).to({x:247.7,y:212.5},0).wait(1).to({x:249.5,y:215.9},0).wait(1).to({x:251.35},0).wait(1).to({x:253.3},0).wait(1).to({x:255.35},0).wait(1).to({x:257.55},0).wait(1).to({x:259.9},0).wait(1).to({x:262.4},0).wait(1).to({x:265.1},0).wait(1).to({x:268},0).wait(1).to({x:271.15},0).wait(1).to({x:274.55},0).wait(1).to({x:275.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// triangle_red
	this.instance_3 = new lib.redtriangle("synched",0);
	this.instance_3.setTransform(504.1,560.05,1.3949,1.1958,0,0,0,244.5,243.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).wait(1).to({regX:243.7,regY:243.9,x:496.55,y:555.75},0).wait(1).to({x:490.65,y:551.2},0).wait(1).to({x:485.2,y:546.65},0).wait(1).to({x:480.15,y:542.15},0).wait(1).to({x:475.5,y:537.6},0).wait(1).to({x:471.25,y:533.05},0).wait(1).to({x:467.3,y:528.55},0).wait(1).to({x:463.7,y:524},0).wait(1).to({x:460.35,y:519.45},0).wait(1).to({x:457.3,y:514.95},0).wait(1).to({x:454.45,y:510.4},0).wait(1).to({x:451.8,y:505.85},0).wait(1).to({x:449.35,y:501.35},0).wait(1).to({x:447.1,y:496.8},0).wait(1).to({x:445,y:492.25},0).wait(1).to({x:443,y:487.75},0).wait(1).to({x:441.15,y:483.2},0).wait(1).to({x:439.4,y:478.65},0).wait(1).to({x:437.8,y:474.15},0).wait(1).to({x:436.25,y:469.6},0).wait(1).to({x:434.75,y:465.05},0).wait(1).to({x:433.35,y:460.55},0).wait(1).to({x:432,y:456},0).wait(1).to({x:430.65,y:451.45},0).wait(1).to({x:429.4,y:446.95},0).wait(1).to({x:428.15,y:442.4},0).wait(1).to({x:426.95,y:437.85},0).wait(1).to({x:425.75,y:433.35},0).wait(1).to({x:424.6,y:428.8},0).wait(1).to({x:423.45,y:424.25},0).wait(1).to({x:422.3,y:419.75},0).wait(1).to({x:421.2,y:415.2},0).wait(1).to({x:420.05,y:410.65},0).wait(1).to({x:418.95,y:406.15},0).wait(1).to({x:417.8,y:401.6},0).wait(1).to({x:416.7,y:397.05},0).wait(1).to({x:415.6,y:392.55},0).wait(1).to({x:414.45,y:388},0).wait(1).to({x:413.35,y:383.45},0).wait(1).to({x:412.25,y:378.95},0).wait(1).to({x:411.15,y:374.4},0).wait(1).to({x:410,y:369.85},0).wait(1).to({x:408.9,y:365.35},0).wait(1).to({x:407.8,y:360.8},0).wait(1).to({x:406.65,y:356.25},0).wait(1).to({x:405.55,y:351.75},0).wait(1).to({x:404.45,y:347.2},0).wait(1).to({x:403.35,y:342.65},0).wait(1).to({x:402.2,y:338.15},0).wait(1).to({x:401.1,y:333.6},0).wait(1).to({x:399.95,y:329.05},0).wait(1).to({x:398.85,y:324.55},0).wait(1).to({x:397.7,y:320},0).wait(1).to({x:396.55,y:315.45},0).wait(1).to({x:395.35,y:310.95},0).wait(1).to({x:394.2,y:306.4},0).wait(1).to({x:393,y:301.85},0).wait(1).to({x:391.75,y:297.35},0).wait(1).to({x:390.45,y:292.8},0).wait(1).to({x:389.15,y:288.3},0).wait(1).to({x:387.8,y:283.8},0).wait(1).to({x:386.4,y:279.25},0).wait(1).to({x:384.9,y:274.7},0).wait(1).to({x:383.35,y:270.2},0).wait(1).to({x:381.7,y:265.65},0).wait(1).to({x:380,y:261.1},0).wait(1).to({x:378.15,y:256.6},0).wait(1).to({x:376.15,y:252.05},0).wait(1).to({x:374.05,y:247.5},0).wait(1).to({x:371.8,y:243},0).wait(1).to({x:369.35,y:238.45},0).wait(1).to({x:366.7,y:233.9},0).wait(1).to({x:363.85,y:229.4},0).wait(1).to({x:360.8,y:224.85},0).wait(1).to({x:357.45,y:220.3},0).wait(1).to({x:353.8,y:221.95},0).wait(1).to({x:349.9,y:223.55},0).wait(1).to({x:345.6,y:225.15},0).wait(1).to({x:341,y:226.75},0).wait(1).to({x:336,y:228.4},0).wait(1).to({x:328.65,y:230},0).wait(1).to({x:320.65,y:231.6},0).wait(1).to({x:312,y:233.2},0).wait(1));

	// violet_arrow
	this.instance_4 = new lib.Анимация3("synched",0);
	this.instance_4.setTransform(325,648.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.2,x:324.8,y:639.3},0).wait(1).to({y:630.5},0).wait(1).to({x:324.85,y:621.75},0).wait(1).to({y:612.95},0).wait(1).to({y:604.2},0).wait(1).to({x:324.9,y:595.4},0).wait(1).to({y:586.6},0).wait(1).to({y:577.85},0).wait(1).to({x:324.95,y:569.05},0).wait(1).to({y:560.3},0).wait(1).to({y:551.5},0).wait(1).to({x:325,y:542.7},0).wait(1).to({y:533.95},0).wait(1).to({y:525.15},0).wait(1).to({y:516.4},0).wait(1).to({x:325.05,y:507.6},0).wait(1).to({y:498.85},0).wait(1).to({y:490.05},0).wait(1).to({y:481.25},0).wait(1).to({x:325.1,y:472.5},0).wait(1).to({y:463.7},0).wait(1).to({y:454.95},0).wait(1).to({y:446.15},0).wait(1).to({x:325.15,y:437.35},0).wait(1).to({y:428.6},0).wait(1).to({y:419.8},0).wait(1).to({y:411.05},0).wait(1).to({y:402.25},0).wait(1).to({x:324.95,y:393.45},0).wait(1).to({x:324.8,y:384.7},0).wait(1).to({y:375.9},0).wait(1).to({y:367.15},0).wait(1).to({y:358.35},0).wait(1).to({y:349.6},0).wait(1).to({y:340.8},0).wait(1).to({y:332},0).wait(1).to({y:323.25},0).wait(1).to({y:314.45},0).wait(1).to({y:305.7},0).wait(1).to({y:296.9},0).wait(1).to({y:288.1},0).wait(1).to({y:279.35},0).wait(1).to({y:270.55},0).wait(1).to({y:261.8},0).wait(1).to({y:253},0).wait(1).to({y:244.2},0).wait(1).to({y:235.45},0).wait(1).to({y:226.65},0).wait(1).to({y:217.9},0).wait(1).to({y:209.1},0).wait(1).to({y:200.35},0).wait(1).to({y:191.55},0).wait(1).to({y:182.75},0).wait(1).to({y:174},0).wait(1).to({y:165.2},0).wait(1).to({y:156.45},0).wait(1).to({y:147.65},0).wait(1).to({y:138.85},0).wait(1).to({y:130.1},0).wait(1).to({y:121.3},0).wait(1).to({y:112.55},0).wait(1).to({y:103.75},0).wait(1).to({y:95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// violet_arrow_static
	this.instance_5 = new lib.Анимация3("synched",0);
	this.instance_5.setTransform(325,175.95);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({y:155.4},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({_off:true},41).wait(22));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(38.6,-467.1,804.4,1500.1999999999998);
// library properties:
lib.properties = {
	id: 'D63D7CEE533FEA4F9BC60FBF8E4A87F8',
	width: 640,
	height: 480,
	fps: 40,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/to_show1_atlas_1.png?1605778260099", id:"to_show1_atlas_1"},
		{src:"images/to_show1_atlas_2.png?1605778260099", id:"to_show1_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D63D7CEE533FEA4F9BC60FBF8E4A87F8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;