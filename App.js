const h1Tag = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},
[React.createElement('h1',{id:'h1'},'Im h1 tag '),React.createElement('h2',{id:'h1'},'Im h2 tag ')]
))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(h1Tag)