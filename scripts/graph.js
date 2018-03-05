
function PrintNode(id,rect)
{
  Node.call(this,id,rect);
  this.glyph = NODE_GLYPHS.render

  this.receive = function(q)
  {
    this.label = q;
  }
}

function graph()
{
  Ø("query").cast({x:2,y:4},QueryNode)
  Ø("print").cast({x:32,y:4},PrintNode)

  Ø("model").mesh({x:6,y:0},[
    Ø("router").cast({x:5,y:2},RouterNode),
    Ø("database").cast({x:5,y:8},DatabaseNode),
    Ø("recipes").cast({x:2,y:14},DictionaryNode),
    Ø("ingredients").cast({x:5,y:14},DictionaryNode),
    Ø("pages").cast({x:8,y:14},DictionaryNode),
  ])

  Ø("view").mesh({x:18,y:0},[
    Ø("dom").cast({x:5,y:2},DomNode),
    Ø("header").cast({x:2,y:8},ElementNode),
    Ø("body").cast({x:5,y:8},ElementNode),
    Ø("footer").cast({x:8,y:8},ElementNode),
  ])

  Ø("router").syphon("database")
  Ø("database").syphon(["recipes","ingredients","pages"])

  Ø("dom").syphon(["header","body","footer"])
  Ø("dom").connect("print")

  Ø("query").connect("router")
  Ø("router").connect("dom")

  Ø("query").bang()
}
