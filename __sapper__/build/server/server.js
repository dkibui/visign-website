'use strict';

var sirv = require('sirv');
var express = require('express');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');
var bodyParser = require('body-parser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
  multipleStatements: true,
});

connect.connect((err) => {
  if (!err) {
    console.log("Connected to mySQL");
  } else {
    console.log("Connection to mySQL Failed");
  }
});

function get(req, res) {
  connect.query("SELECT * FROM blogs ORDER BY created_at DESC", (err, rows, fields) => {
    if (!err) {
      res.end(JSON.stringify(rows));
    } else {
      console.log("Error querying database");
    }
  });
}

function put(req, res) {
  const {
    id
  } = req.body;
  const sql = "DELETE FROM blogs WHERE id =?";
  connect.query(sql, id, (err, results, fields) => {
    if (err)
      return console.error(error.message)
    console.log('Deleted Row(s):', results.affectedRows);
    res.send(JSON.stringify(results.affectedRows));
  });
}

var route_0 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get,
  put: put
});

const mysql$1 = require("mysql");

const connect$1 = mysql$1.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
  multipleStatements: true,
});

connect$1.connect((err) => {
  if (!err) {
    console.log("Connected to mySQL");
  } else {
    console.log("Connection to mySQL Failed");
  }
});

const queryOutput = [];
connect$1.query("SELECT * FROM authors", (err, rows, fields) => {
  if (!err) {
    queryOutput.push(rows);
  } else {
    console.log("Error querying database");
  }
});

connect$1.query("SELECT * FROM categories", (err, rows, fields) => {
  if (!err) {
    queryOutput.push(rows);
  } else {
    console.log("Error querying database");
  }
});

function get$1(req, res) {
  res.end(JSON.stringify(queryOutput));
}
function post(req, res) {
  const {
    author,
    category,
    title,
    summary,
    content
  } = req.body;

  let stmt = `INSERT INTO blogs (author_id, category_id, title, summary, content) VALUES (?,?,?,?,?)`;
  let values = [parseInt(author), parseInt(category), title, summary, content];
  if (author && category && title && summary && content) {
    connect$1.query(stmt, values, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      } else {
        console.log("Blog Id:" + results.insertId);
      }
    });
  }
  console.log(req.body);
}

var route_1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$1,
  post: post
});

const mysql$2 = require("mysql");

const connect$2 = mysql$2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
  multipleStatements: true,
});

connect$2.connect((err) => {
  if (!err) {
    console.log("Connected to mySQL");
  } else {
    console.log("Connection to mySQL Failed");
  }
});

function get$2(req, res) {
  const id = req.params.id;
  // console.log(id);
  connect$2.query(
    "SELECT title,summary,content FROM blogs WHERE id=?", [id],
    (err, rows, fields) => {
      if (!err) {
        res.end(JSON.stringify(rows));
        // console.log(JSON.stringify(rows));
        // console.log('Server received GET/blogs/update/'+id)
      } else {
        console.log("Error querying database");
      }
    }
  );
}
function patch(req, res) {
  const id = req.params.id;
  console.log(id);
  const {
    title,
    summary,
    content
  } = req.body;

  let stmt = `UPDATE blogs SET title = ?, summary = ?, content = ? WHERE id = ?`;

  let values = [title, summary, content, id];
  if (title && summary && content) {
    connect$2.query(stmt, values, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      } else {
        console.log("Blog Id:" + results.insertId);
        // res.redirect('/blogs')
        // res.send('Blog successfully updated')
      }
    });
  }
}

var route_2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$2,
  patch: patch
});

const mysql$3 = require("mysql");

const connect$3 = mysql$3.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
  multipleStatements: true,
});

connect$3.connect((err) => {
  if (!err) {
    console.log("Connected to mySQL");
  } else {
    console.log("Connection to mySQL Failed");
  }
});

function get$3(req, res) {
  connect$3.query("SELECT * FROM blogs ORDER BY created_at DESC", (err, rows, fields) => {
    if (!err) {
      res.end(JSON.stringify(rows));
    } else {
      console.log("Error querying database");
    }
  });
}

function put$1(req, res) {
  const {
    id
  } = req.body;
  const sql = "DELETE FROM blogs WHERE id =?";
  connect$3.query(sql, id, (err, results, fields) => {
    if (err)
      return console.error(error.message)
    console.log('Deleted Row(s):', results.affectedRows);
    res.send(JSON.stringify(results.affectedRows));
  });
}

var route_3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$3,
  put: put$1
});

const mysql$4 = require("mysql");

const connect$4 = mysql$4.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
  multipleStatements: true,
});

connect$4.connect((err) => {
  if (!err) {
    console.log("Connected to mySQL");
  } else {
    console.log("Connection to mySQL Failed");
  }
});

function get$4(req, res) {
  const id = req.params.id;
  // console.log(id);
  connect$4.query(
    `SELECT * 
    FROM blogs 
    WHERE id=?`, [id],
    (err, rows, fields) => {
      if (!err) {
        res.end(JSON.stringify(rows));
        // console.log(JSON.stringify(rows));
        // console.log('Server received GET/blogs/update/'+id)
      } else {
        console.log("Error querying database");
      }
    }
  );
}
function patch$1(req, res) {
  const id = req.params.id;
  //   console.log(id);
  const {
    title,
    summary,
    content
  } = req.body;

  let stmt = `UPDATE blogs SET title = ?, summary = ?, content = ? WHERE id = ?`;

  let values = [title, summary, content, id];
  if (title && summary && content) {
    connect$4.query(stmt, values, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      } else {
        console.log("Blog Id:" + results.insertId);
      }
    });
  }
}

var route_4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$4,
  patch: patch$1
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/components/Button.svelte generated by Svelte v3.31.2 */

const css = {
	code: "button.svelte-12vqe32{display:block;width:auto;font-size:1.5em;font-weight:700;text-align:center;color:white;background-color:#1ae5c1;padding:0.25em 2.5em;border:none;border-radius:50px;outline-style:none;box-shadow:rgba(17, 17, 26, 0.05) 0px 4px 16px,\n\t\t\trgba(17, 17, 26, 0.05) 0px 8;transition:box-shadow 0.125s ease}button.svelte-12vqe32:hover{cursor:pointer;box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px}",
	map: "{\"version\":3,\"file\":\"Button.svelte\",\"sources\":[\"Button.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let value = \\\"Value\\\";\\n</script>\\n\\n<button>{value}</button>\\n\\n<style>\\n\\tbutton {\\n\\t\\tdisplay: block;\\n\\t\\twidth: auto;\\n\\t\\t/* margin: 0 auto; */\\n\\t\\tfont-size: 1.5em;\\n\\t\\tfont-weight: 700;\\n\\t\\ttext-align: center;\\n\\t\\tcolor: white;\\n\\t\\tbackground-color: #1ae5c1;\\n\\t\\tpadding: 0.25em 2.5em;\\n\\t\\tborder: none;\\n\\t\\tborder-radius: 50px;\\n\\t\\toutline-style: none;\\n\\t\\tbox-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,\\n\\t\\t\\trgba(17, 17, 26, 0.05) 0px 8;\\n\\t\\ttransition: box-shadow 0.125s ease;\\n\\t}\\n\\n\\tbutton:hover {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAOC,MAAM,eAAC,CAAC,AACP,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CAEX,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,MAAM,CAAC,KAAK,CACrB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC;GAC/C,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,CAC7B,UAAU,CAAE,UAAU,CAAC,MAAM,CAAC,IAAI,AACnC,CAAC,AAED,qBAAM,MAAM,AAAC,CAAC,AACb,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,AAC5C,CAAC\"}"
};

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { value = "Value" } = $$props;
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	$$result.css.add(css);
	return `<button class="${"svelte-12vqe32"}">${escape(value)}</button>`;
});

/* src/components/Services.svelte generated by Svelte v3.31.2 */

const css$1 = {
	code: "article.svelte-zd8pij.svelte-zd8pij{padding-top:1.2rem;padding-bottom:3rem}.text-align.svelte-zd8pij.svelte-zd8pij{text-align:center}h2.svelte-zd8pij.svelte-zd8pij{line-height:1.5;font-size:2.4em;font-weight:700;color:rgb(156, 156, 156);max-width:530px;margin:auto;margin-top:2em}h3.svelte-zd8pij.svelte-zd8pij{text-transform:capitalize;margin-top:1.1em;margin-bottom:0.125em;line-height:1.5;font-size:1.2em;font-weight:600;color:rgb(87, 87, 87)}p.svelte-zd8pij.svelte-zd8pij{margin-top:1.2rem;font-size:1.2em;line-height:1.5;color:rgb(83, 83, 83)}.card.svelte-zd8pij p.svelte-zd8pij{margin-top:1.2rem;font-size:1em;line-height:1.75;color:rgb(83, 83, 83)}.width.svelte-zd8pij.svelte-zd8pij{width:85%;max-width:1100px;margin:0 auto}.services.svelte-zd8pij.svelte-zd8pij{display:grid;grid-template-columns:1fr;grid-row-gap:3em;margin-top:2em}.card.svelte-zd8pij.svelte-zd8pij{padding:1.2rem;border-radius:12px;box-shadow:0 2.5px 2.2px rgba(0, 0, 0, 0.07),\n            0 10px 5.3px rgba(0, 0, 0, 0.039),\n            0 24.1px 10px rgba(0, 0, 0, 0.035),\n            0 46.9px 17.9px rgba(0, 0, 0, 0.034),\n            0 81.7px 33.4px rgba(0, 0, 0, 0.034),\n            0 118px 80px rgba(0, 0, 0, 0.03)}.img-div.svelte-zd8pij.svelte-zd8pij{padding:0.5rem;background-color:rgba(0, 0, 0, 0.05125);width:auto;border-radius:8px}img.svelte-zd8pij.svelte-zd8pij{width:100%;max-width:50px;display:block}span.svelte-zd8pij.svelte-zd8pij{display:block;margin:auto;margin-top:1.5em;background-color:rgb(156, 156, 156);height:5px;width:136px}@media(min-width: 800px){article.svelte-zd8pij.svelte-zd8pij{padding-top:1.2rem;padding-bottom:6rem}.services.svelte-zd8pij.svelte-zd8pij{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:1em;margin-top:2.5em}}",
	map: "{\"version\":3,\"file\":\"Services.svelte\",\"sources\":[\"Services.svelte\"],\"sourcesContent\":[\"<div class=\\\"width\\\">\\n    <h2 class=\\\"text-align\\\">Our services</h2>\\n    <p class=\\\"text-align\\\">\\n        We offer various services to help start-ups and corporates communicate\\n        with their customers.\\n    </p>\\n</div>\\n<span />\\n<article class=\\\"width services\\\">\\n    <div class=\\\"card\\\">\\n        <div class=\\\"img-div\\\">\\n            <img\\n                src=\\\"images/graphic-design-layout.svg\\\"\\n                alt=\\\"web development icon\\\"\\n            />\\n        </div>\\n        <h3>Graphic design</h3>\\n        <p>\\n            Skillful design elevates your brand. It helps to tell your brand\\n            story in a beautiful and attractive way. Good printing is as\\n            important as the design itself it not more.\\n        </p>\\n    </div>\\n    <div class=\\\"card\\\">\\n        <div class=\\\"img-div\\\">\\n            <img src=\\\"images/web-design-icon.svg\\\" alt=\\\"web design icon\\\" />\\n        </div>\\n        <h3>Branding</h3>\\n        <p>\\n            Your customers expect to find you online. You need a website to take\\n            your brand online. A good website should have that look and feel\\n            that represents your brand.\\n        </p>\\n    </div>\\n    <div class=\\\"card\\\">\\n        <div class=\\\"img-div\\\">\\n            <img src=\\\"images/web-icon.svg\\\" alt=\\\"web design icon\\\" />\\n        </div>\\n        <h3>Web design</h3>\\n        <p>\\n            Your customers expect to find you online. You need a website to take\\n            your brand online. A good website should have that look and feel\\n            that represents your brand.\\n        </p>\\n    </div>\\n</article>\\n\\n<style>\\n    article {\\n        padding-top: 1.2rem;\\n        padding-bottom: 3rem;\\n    }\\n\\n    .text-align {\\n        text-align: center;\\n    }\\n\\n    h2 {\\n        line-height: 1.5;\\n        font-size: 2.4em;\\n        font-weight: 700;\\n        color: rgb(156, 156, 156);\\n        max-width: 530px;\\n        margin: auto;\\n        margin-top: 2em;\\n    }\\n\\n    h3 {\\n        text-transform: capitalize;\\n        margin-top: 1.1em;\\n        margin-bottom: 0.125em;\\n        line-height: 1.5;\\n        font-size: 1.2em;\\n        font-weight: 600;\\n        color: rgb(87, 87, 87);\\n    }\\n\\n    p {\\n        margin-top: 1.2rem;\\n        font-size: 1.2em;\\n        line-height: 1.5;\\n        color: rgb(83, 83, 83);\\n    }\\n\\n    .card p {\\n        margin-top: 1.2rem;\\n        font-size: 1em;\\n        line-height: 1.75;\\n        color: rgb(83, 83, 83);\\n    }\\n\\n    .width {\\n        width: 85%;\\n        max-width: 1100px;\\n        margin: 0 auto;\\n        /* text-align: center; */\\n    }\\n\\n    .services {\\n        display: grid;\\n        grid-template-columns: 1fr;\\n        grid-row-gap: 3em;\\n        margin-top: 2em;\\n    }\\n\\n    .card {\\n        padding: 1.2rem;\\n        border-radius: 12px;\\n        box-shadow: 0 2.5px 2.2px rgba(0, 0, 0, 0.07),\\n            0 10px 5.3px rgba(0, 0, 0, 0.039),\\n            0 24.1px 10px rgba(0, 0, 0, 0.035),\\n            0 46.9px 17.9px rgba(0, 0, 0, 0.034),\\n            0 81.7px 33.4px rgba(0, 0, 0, 0.034),\\n            0 118px 80px rgba(0, 0, 0, 0.03);\\n    }\\n\\n    .img-div {\\n        padding: 0.5rem;\\n        background-color: rgba(0, 0, 0, 0.05125);\\n        width: auto;\\n        border-radius: 8px;\\n    }\\n\\n    img {\\n        width: 100%;\\n        max-width: 50px;\\n        display: block;\\n    }\\n\\n    span {\\n        display: block;\\n        margin: auto;\\n        margin-top: 1.5em;\\n        background-color: rgb(156, 156, 156);\\n        height: 5px;\\n        width: 136px;\\n    }\\n\\n    @media (min-width: 800px) {\\n        article {\\n            padding-top: 1.2rem;\\n            padding-bottom: 6rem;\\n        }\\n\\n        .services {\\n            display: grid;\\n            grid-template-columns: repeat(3, 1fr);\\n            grid-gap: 1em;\\n            margin-top: 2.5em;\\n        }\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgDI,OAAO,4BAAC,CAAC,AACL,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,AACxB,CAAC,AAED,WAAW,4BAAC,CAAC,AACT,UAAU,CAAE,MAAM,AACtB,CAAC,AAED,EAAE,4BAAC,CAAC,AACA,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AACnB,CAAC,AAED,EAAE,4BAAC,CAAC,AACA,cAAc,CAAE,UAAU,CAC1B,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,OAAO,CACtB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,AAC1B,CAAC,AAED,CAAC,4BAAC,CAAC,AACC,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,AAC1B,CAAC,AAED,mBAAK,CAAC,CAAC,cAAC,CAAC,AACL,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,AAC1B,CAAC,AAED,MAAM,4BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,AAElB,CAAC,AAED,SAAS,4BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,YAAY,CAAE,GAAG,CACjB,UAAU,CAAE,GAAG,AACnB,CAAC,AAED,KAAK,4BAAC,CAAC,AACH,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC;YAC1C,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;YAClC,CAAC,CAAC,MAAM,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;YACnC,CAAC,CAAC,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;YACrC,CAAC,CAAC,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;YACrC,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,AACxC,CAAC,AAED,QAAQ,4BAAC,CAAC,AACN,OAAO,CAAE,MAAM,CACf,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CACxC,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,AACtB,CAAC,AAED,GAAG,4BAAC,CAAC,AACD,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,KAAK,AAClB,CAAC,AAED,IAAI,4BAAC,CAAC,AACF,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,KAAK,AAChB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACvB,OAAO,4BAAC,CAAC,AACL,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,AACxB,CAAC,AAED,SAAS,4BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,QAAQ,CAAE,GAAG,CACb,UAAU,CAAE,KAAK,AACrB,CAAC,AACL,CAAC\"}"
};

const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);

	return `<div class="${"width svelte-zd8pij"}"><h2 class="${"text-align svelte-zd8pij"}">Our services</h2>
    <p class="${"text-align svelte-zd8pij"}">We offer various services to help start-ups and corporates communicate
        with their customers.
    </p></div>
<span class="${"svelte-zd8pij"}"></span>
<article class="${"width services svelte-zd8pij"}"><div class="${"card svelte-zd8pij"}"><div class="${"img-div svelte-zd8pij"}"><img src="${"images/graphic-design-layout.svg"}" alt="${"web development icon"}" class="${"svelte-zd8pij"}"></div>
        <h3 class="${"svelte-zd8pij"}">Graphic design</h3>
        <p class="${"svelte-zd8pij"}">Skillful design elevates your brand. It helps to tell your brand
            story in a beautiful and attractive way. Good printing is as
            important as the design itself it not more.
        </p></div>
    <div class="${"card svelte-zd8pij"}"><div class="${"img-div svelte-zd8pij"}"><img src="${"images/web-design-icon.svg"}" alt="${"web design icon"}" class="${"svelte-zd8pij"}"></div>
        <h3 class="${"svelte-zd8pij"}">Branding</h3>
        <p class="${"svelte-zd8pij"}">Your customers expect to find you online. You need a website to take
            your brand online. A good website should have that look and feel
            that represents your brand.
        </p></div>
    <div class="${"card svelte-zd8pij"}"><div class="${"img-div svelte-zd8pij"}"><img src="${"images/web-icon.svg"}" alt="${"web design icon"}" class="${"svelte-zd8pij"}"></div>
        <h3 class="${"svelte-zd8pij"}">Web design</h3>
        <p class="${"svelte-zd8pij"}">Your customers expect to find you online. You need a website to take
            your brand online. A good website should have that look and feel
            that represents your brand.
        </p></div>
</article>`;
});

/* src/components/Contacts.svelte generated by Svelte v3.31.2 */

const css$2 = {
	code: "main.svelte-y2cxkn{width:85%;max-width:800px;margin:auto;margin-top:3em}h2.svelte-y2cxkn{line-height:1.2em;font-size:2.4em;font-weight:700;color:rgb(156, 156, 156);max-width:530px;margin:0 auto;margin-bottom:1.1em}p.svelte-y2cxkn{margin:auto;font-size:1em;line-height:1.75em;color:#626262;margin-bottom:3em}.text-align.svelte-y2cxkn{text-align:center}.btn-div.svelte-y2cxkn{margin-left:0}.btn.svelte-y2cxkn{display:flex;justify-content:center}a.svelte-y2cxkn{text-decoration:none}.contact.svelte-y2cxkn{margin-top:3em}",
	map: "{\"version\":3,\"file\":\"Contacts.svelte\",\"sources\":[\"Contacts.svelte\"],\"sourcesContent\":[\"<script>\\n    import Button from \\\"./Button.svelte\\\";\\n</script>\\n\\n<main>\\n    <h2 class=\\\"text-align\\\">We're here for you. Email us or make a call.</h2>\\n    <p class=\\\"text-align\\\">\\n        We're excited to work with you. Your brand's journey to the next level\\n        begins here.\\n    </p>\\n    <div class=\\\"btn-div btn\\\">\\n        <a href=\\\"mailto:dkibui@visign.co.ke\\\"><Button value=\\\"Email Us\\\" /></a>\\n    </div>\\n    <p class=\\\"text-align contact\\\">\\n        Cell: +254 728 49 4090 <br /> Email: dkibui@visign.co.ke<br />Office:\\n        6th Floor, Westend Towers.<br />Westlands Nairobi.\\n    </p>\\n</main>\\n\\n<style>\\n    main {\\n        width: 85%;\\n        max-width: 800px;\\n        margin: auto;\\n        margin-top: 3em;\\n        /* background-color: rgb(151, 151, 151); */\\n    }\\n\\n    h2 {\\n        line-height: 1.2em;\\n        font-size: 2.4em;\\n        font-weight: 700;\\n        color: rgb(156, 156, 156);\\n        max-width: 530px;\\n        margin: 0 auto;\\n        margin-bottom: 1.1em;\\n    }\\n\\n    p {\\n        margin: auto;\\n        font-size: 1em;\\n        line-height: 1.75em;\\n        color: #626262;\\n        margin-bottom: 3em;\\n    }\\n\\n    .text-align {\\n        text-align: center;\\n    }\\n\\n    .btn-div {\\n        margin-left: 0;\\n    }\\n\\n    .btn {\\n        display: flex;\\n        justify-content: center;\\n    }\\n\\n    a {\\n        text-decoration: none;\\n    }\\n\\n    .contact {\\n        margin-top: 3em;\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAoBI,IAAI,cAAC,CAAC,AACF,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AAEnB,CAAC,AAED,EAAE,cAAC,CAAC,AACA,WAAW,CAAE,KAAK,CAClB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,aAAa,CAAE,KAAK,AACxB,CAAC,AAED,CAAC,cAAC,CAAC,AACC,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,GAAG,AACtB,CAAC,AAED,WAAW,cAAC,CAAC,AACT,UAAU,CAAE,MAAM,AACtB,CAAC,AAED,QAAQ,cAAC,CAAC,AACN,WAAW,CAAE,CAAC,AAClB,CAAC,AAED,IAAI,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,AAC3B,CAAC,AAED,CAAC,cAAC,CAAC,AACC,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,QAAQ,cAAC,CAAC,AACN,UAAU,CAAE,GAAG,AACnB,CAAC\"}"
};

const Contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2);

	return `<main class="${"svelte-y2cxkn"}"><h2 class="${"text-align svelte-y2cxkn"}">We&#39;re here for you. Email us or make a call.</h2>
    <p class="${"text-align svelte-y2cxkn"}">We&#39;re excited to work with you. Your brand&#39;s journey to the next level
        begins here.
    </p>
    <div class="${"btn-div btn svelte-y2cxkn"}"><a href="${"mailto:dkibui@visign.co.ke"}" class="${"svelte-y2cxkn"}">${validate_component(Button, "Button").$$render($$result, { value: "Email Us" }, {}, {})}</a></div>
    <p class="${"text-align contact svelte-y2cxkn"}">Cell: +254 728 49 4090 <br> Email: dkibui@visign.co.ke<br>Office:
        6th Floor, Westend Towers.<br>Westlands Nairobi.
    </p>
</main>`;
});

/* src/routes/index.svelte generated by Svelte v3.31.2 */

const css$3 = {
	code: "main.svelte-rr5k7n.svelte-rr5k7n{width:80%;margin:auto;margin-top:3em}h1.svelte-rr5k7n.svelte-rr5k7n{font-size:1.5rem;text-transform:uppercase;font-weight:300;color:#1ae5c1}h2.svelte-rr5k7n.svelte-rr5k7n{line-height:1.5;font-size:2.4em;font-weight:700;color:rgb(156, 156, 156);max-width:530px;margin:1em auto 0 auto}.hero.svelte-rr5k7n.svelte-rr5k7n{font-size:3em;line-height:1.4}.btn.svelte-rr5k7n.svelte-rr5k7n{display:flex;justify-content:center}p.svelte-rr5k7n.svelte-rr5k7n{font-size:1.2em;line-height:1.5;color:rgb(83, 83, 83)}.article-one.svelte-rr5k7n p.svelte-rr5k7n{margin:auto;margin-top:2rem;width:100%}.article-two.svelte-rr5k7n.svelte-rr5k7n{margin-bottom:2rem}.text-center.svelte-rr5k7n.svelte-rr5k7n{text-align:center}img.svelte-rr5k7n.svelte-rr5k7n{width:100%;display:block}.img-1.svelte-rr5k7n.svelte-rr5k7n{max-width:180px;width:auto;margin:0 auto;margin-bottom:4rem}.message.svelte-rr5k7n.svelte-rr5k7n{font-size:1.3em;color:#ffffff;margin-top:1em;text-align:center}.img-2.svelte-rr5k7n.svelte-rr5k7n{margin:0 auto;max-width:400px}.width.svelte-rr5k7n.svelte-rr5k7n{width:85%;margin:0 auto}.section-one.svelte-rr5k7n.svelte-rr5k7n{background-color:#5d7db8;padding:2.8em 0;margin-top:5rem;margin-bottom:3.5rem}.section-one-content.svelte-rr5k7n.svelte-rr5k7n{display:grid;grid-template-columns:1fr;grid-gap:1em;justify-content:center;align-items:center;padding:2em 0}.width.svelte-rr5k7n.svelte-rr5k7n{width:85%;max-width:800px;margin:0 auto;text-align:center}span.svelte-rr5k7n.svelte-rr5k7n{display:block;margin:auto;margin-top:1.5em;background-color:rgb(156, 156, 156);height:5px;width:136px}.article-two.svelte-rr5k7n.svelte-rr5k7n{display:grid;grid-template-columns:1fr 1fr;grid-gap:1em;margin-top:5.5em}img.svelte-rr5k7n.svelte-rr5k7n{width:100%}@media(min-width: 800px){main.svelte-rr5k7n.svelte-rr5k7n{margin-top:4em}.width.svelte-rr5k7n.svelte-rr5k7n{width:85%;max-width:1100px;margin:0 auto}.section-one.svelte-rr5k7n.svelte-rr5k7n{margin-top:6em;margin-bottom:5em}.article-one.svelte-rr5k7n p.svelte-rr5k7n{width:80%}.article-two.svelte-rr5k7n.svelte-rr5k7n{margin-bottom:3rem}.message.svelte-rr5k7n.svelte-rr5k7n{font-size:1.75em;text-align:center}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n  import Button from \\\"../components/Button.svelte\\\";\\n  import Services from \\\"../components/Services.svelte\\\";\\n  import Contacts from \\\"../components/Contacts.svelte\\\";\\n</script>\\n\\n<svelte:head>\\n  <title>Visign Home</title>\\n</svelte:head>\\n\\n<main>\\n  <h1 class=\\\"text-center\\\">We are the best design studio in Nairobi</h1>\\n  <h2 class=\\\"hero text-center\\\">Our business is to make yours look great</h2>\\n  <img\\n    class=\\\"img-1\\\"\\n    src=\\\"images/visign-design-asset1.svg\\\"\\n    alt=\\\"visign design asset 1\\\"\\n  />\\n  <div class=\\\"btn\\\">\\n    <Button value=\\\"Our Services\\\" />\\n  </div>\\n</main>\\n\\n<section class=\\\"section-one\\\">\\n  <div class=\\\"section-one-content width\\\">\\n    <img\\n      class=\\\"img-2\\\"\\n      src=\\\"images/banner-image.png\\\"\\n      alt=\\\"layout design banner\\\"\\n    />\\n    <p class=\\\"message text-center\\\">\\n      We offer brand centred graphic design and web development services to SMEs\\n      and corporates in Nairobi.\\n    </p>\\n  </div>\\n</section>\\n\\n<section class=\\\"width section-two\\\">\\n  <article class=\\\"article-one\\\">\\n    <h2>Do you want to brand your business?</h2>\\n    <p>\\n      Consistent visual branding is hard. To get your branding right, you will\\n      need a branding guide. Let us help you get started with your branding. We\\n      make it easier for you to be unique.\\n    </p>\\n    <span />\\n  </article>\\n  <article class=\\\"article-two\\\">\\n    <div class=\\\"card\\\">\\n      <img src=\\\"images/packaging-branding.jpg\\\" alt=\\\"package branding\\\" />\\n    </div>\\n    <div class=\\\"card\\\">\\n      <img src=\\\"images/logo-process.jpg\\\" alt=\\\"logo design process\\\" />\\n    </div>\\n  </article>\\n</section>\\n<Services id=\\\"services\\\" />\\n<Contacts />\\n\\n<style>\\n  main {\\n    width: 80%;\\n    margin: auto;\\n    margin-top: 3em;\\n  }\\n\\n  h1 {\\n    font-size: 1.5rem;\\n    text-transform: uppercase;\\n    font-weight: 300;\\n    color: #1ae5c1;\\n  }\\n\\n  h2 {\\n    line-height: 1.5;\\n    font-size: 2.4em;\\n    font-weight: 700;\\n    color: rgb(156, 156, 156);\\n    max-width: 530px;\\n    margin: 1em auto 0 auto;\\n  }\\n\\n  .hero {\\n    font-size: 3em;\\n    line-height: 1.4;\\n  }\\n\\n  .btn {\\n    display: flex;\\n    justify-content: center;\\n  }\\n\\n  p {\\n    font-size: 1.2em;\\n    line-height: 1.5;\\n    color: rgb(83, 83, 83);\\n  }\\n\\n  .article-one p {\\n    margin: auto;\\n    margin-top: 2rem;\\n    width: 100%;\\n  }\\n\\n  .article-two {\\n    margin-bottom: 2rem;\\n  }\\n\\n  .text-center {\\n    text-align: center;\\n  }\\n\\n  img {\\n    width: 100%;\\n    display: block;\\n  }\\n\\n  .img-1 {\\n    max-width: 180px;\\n    width: auto;\\n    margin: 0 auto;\\n    margin-bottom: 4rem;\\n  }\\n\\n  .message {\\n    font-size: 1.3em;\\n    color: #ffffff;\\n    margin-top: 1em;\\n    text-align: center;\\n  }\\n\\n  .img-2 {\\n    margin: 0 auto;\\n    max-width: 400px;\\n  }\\n\\n  .width {\\n    width: 85%;\\n    margin: 0 auto;\\n  }\\n\\n  .section-one {\\n    background-color: #5d7db8;\\n    padding: 2.8em 0;\\n    margin-top: 5rem;\\n    margin-bottom: 3.5rem;\\n  }\\n\\n  .section-one-content {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-gap: 1em;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 2em 0;\\n  }\\n\\n  .width {\\n    width: 85%;\\n    max-width: 800px;\\n    margin: 0 auto;\\n    text-align: center;\\n  }\\n\\n  span {\\n    display: block;\\n    margin: auto;\\n    margin-top: 1.5em;\\n    background-color: rgb(156, 156, 156);\\n    height: 5px;\\n    width: 136px;\\n  }\\n\\n  .article-two {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-gap: 1em;\\n    margin-top: 5.5em;\\n  }\\n\\n  img {\\n    width: 100%;\\n    /* max-width: 400px; */\\n  }\\n\\n  @media (min-width: 800px) {\\n    main {\\n      margin-top: 4em;\\n    }\\n\\n    .width {\\n      width: 85%;\\n      max-width: 1100px;\\n      margin: 0 auto;\\n    }\\n\\n    .section-one {\\n      margin-top: 6em;\\n      margin-bottom: 5em;\\n    }\\n\\n    .article-one p {\\n      width: 80%;\\n    }\\n\\n    .article-two {\\n      margin-bottom: 3rem;\\n    }\\n\\n    .message {\\n      font-size: 1.75em;\\n      text-align: center;\\n    }\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA4DE,IAAI,4BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AACjB,CAAC,AAED,EAAE,4BAAC,CAAC,AACF,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,EAAE,4BAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AACzB,CAAC,AAED,KAAK,4BAAC,CAAC,AACL,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,IAAI,4BAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,AACzB,CAAC,AAED,CAAC,4BAAC,CAAC,AACD,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,AACxB,CAAC,AAED,0BAAY,CAAC,CAAC,cAAC,CAAC,AACd,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,AACb,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,GAAG,4BAAC,CAAC,AACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,AAChB,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,QAAQ,4BAAC,CAAC,AACR,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,KAAK,AAClB,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,CAAC,CAAC,CAChB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,MAAM,AACvB,CAAC,AAED,oBAAoB,4BAAC,CAAC,AACpB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,QAAQ,CAAE,GAAG,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,CAAC,AAChB,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,IAAI,4BAAC,CAAC,AACJ,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,KAAK,AACd,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,QAAQ,CAAE,GAAG,CACb,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,GAAG,4BAAC,CAAC,AACH,KAAK,CAAE,IAAI,AAEb,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,IAAI,4BAAC,CAAC,AACJ,UAAU,CAAE,GAAG,AACjB,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,0BAAY,CAAC,CAAC,cAAC,CAAC,AACd,KAAK,CAAE,GAAG,AACZ,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,QAAQ,4BAAC,CAAC,AACR,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,AACpB,CAAC,AACH,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>Visign Home</title>`, "")}`, "")}

<main class="${"svelte-rr5k7n"}"><h1 class="${"text-center svelte-rr5k7n"}">We are the best design studio in Nairobi</h1>
  <h2 class="${"hero text-center svelte-rr5k7n"}">Our business is to make yours look great</h2>
  <img class="${"img-1 svelte-rr5k7n"}" src="${"images/visign-design-asset1.svg"}" alt="${"visign design asset 1"}">
  <div class="${"btn svelte-rr5k7n"}">${validate_component(Button, "Button").$$render($$result, { value: "Our Services" }, {}, {})}</div></main>

<section class="${"section-one svelte-rr5k7n"}"><div class="${"section-one-content width svelte-rr5k7n"}"><img class="${"img-2 svelte-rr5k7n"}" src="${"images/banner-image.png"}" alt="${"layout design banner"}">
    <p class="${"message text-center svelte-rr5k7n"}">We offer brand centred graphic design and web development services to SMEs
      and corporates in Nairobi.
    </p></div></section>

<section class="${"width section-two svelte-rr5k7n"}"><article class="${"article-one svelte-rr5k7n"}"><h2 class="${"svelte-rr5k7n"}">Do you want to brand your business?</h2>
    <p class="${"svelte-rr5k7n"}">Consistent visual branding is hard. To get your branding right, you will
      need a branding guide. Let us help you get started with your branding. We
      make it easier for you to be unique.
    </p>
    <span class="${"svelte-rr5k7n"}"></span></article>
  <article class="${"article-two svelte-rr5k7n"}"><div class="${"card"}"><img src="${"images/packaging-branding.jpg"}" alt="${"package branding"}" class="${"svelte-rr5k7n"}"></div>
    <div class="${"card"}"><img src="${"images/logo-process.jpg"}" alt="${"logo design process"}" class="${"svelte-rr5k7n"}"></div></article></section>
${validate_component(Services, "Services").$$render($$result, { id: "services" }, {}, {})}
${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})}`;
});

var component_0 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Routes
});

/* src/routes/contact.svelte generated by Svelte v3.31.2 */

const css$4 = {
	code: "main.svelte-bto9id{width:85%;max-width:800px;margin:auto;margin-top:3em}h1.svelte-bto9id{margin-bottom:1.2em;font-size:1.4rem;text-transform:uppercase;font-weight:300;color:#1ae5c1}h2.svelte-bto9id{line-height:1.5;font-size:2.4em;font-weight:700;color:rgb(156, 156, 156);max-width:530px;margin:0 auto;margin-bottom:1.1em}p.svelte-bto9id{margin:auto;font-size:1em;line-height:1.5;color:#626262;margin-bottom:3em}.text-align.svelte-bto9id{text-align:center}.btn-div.svelte-bto9id{margin-left:0}.btn.svelte-bto9id{display:flex;justify-content:center}a.svelte-bto9id{text-decoration:none}.contact.svelte-bto9id{margin-top:3em}",
	map: "{\"version\":3,\"file\":\"contact.svelte\",\"sources\":[\"contact.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import Button from \\\"../components/Button.svelte\\\";\\r\\n</script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>Contact</title>\\r\\n</svelte:head>\\r\\n\\r\\n<main>\\r\\n    <h1 class=\\\"text-align\\\">How can we help you today?</h1>\\r\\n    <h2 class=\\\"text-align\\\">We're here for you. Send us an email or call us.</h2>\\r\\n    <p class=\\\"text-align\\\">\\r\\n        When we started Visign Designs, we set out to provide professional brand\\r\\n        development, professional printing and supply of branded merchandise\\r\\n        services to SMEs at an affordable price. ​\\r\\n    </p>\\r\\n    <div class=\\\"btn-div btn\\\">\\r\\n        <a href=\\\"mailto:dkibui@visign.co.ke\\\"><Button value=\\\"Email Us\\\" /></a>\\r\\n    </div>\\r\\n    <p class=\\\"text-align contact\\\">\\r\\n        Cell: +254 728 49 4090 <br /> Email: dkibui@visign.co.ke<br />Office:\\r\\n        6th Floor, Westend Towers.<br />Westlands Nairobi.\\r\\n    </p>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n    main {\\r\\n        width: 85%;\\r\\n        max-width: 800px;\\r\\n        margin: auto;\\r\\n        margin-top: 3em;\\r\\n        /* background-color: rgb(151, 151, 151); */\\r\\n    }\\r\\n\\r\\n    h1 {\\r\\n        margin-bottom: 1.2em;\\r\\n        font-size: 1.4rem;\\r\\n        text-transform: uppercase;\\r\\n        font-weight: 300;\\r\\n        color: #1ae5c1;\\r\\n    }\\r\\n\\r\\n    h2 {\\r\\n        line-height: 1.5;\\r\\n        font-size: 2.4em;\\r\\n        font-weight: 700;\\r\\n        color: rgb(156, 156, 156);\\r\\n        max-width: 530px;\\r\\n        margin: 0 auto;\\r\\n        margin-bottom: 1.1em;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        margin: auto;\\r\\n        font-size: 1em;\\r\\n        line-height: 1.5;\\r\\n        color: #626262;\\r\\n        margin-bottom: 3em;\\r\\n    }\\r\\n\\r\\n    .text-align {\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    .btn-div {\\r\\n        margin-left: 0;\\r\\n    }\\r\\n\\r\\n    .btn {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    }\\r\\n\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n    }\\r\\n\\r\\n    .contact {\\r\\n        margin-top: 3em;\\r\\n    }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AA0BI,IAAI,cAAC,CAAC,AACF,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AAEnB,CAAC,AAED,EAAE,cAAC,CAAC,AACA,aAAa,CAAE,KAAK,CACpB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,AAClB,CAAC,AAED,EAAE,cAAC,CAAC,AACA,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,aAAa,CAAE,KAAK,AACxB,CAAC,AAED,CAAC,cAAC,CAAC,AACC,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,GAAG,AACtB,CAAC,AAED,WAAW,cAAC,CAAC,AACT,UAAU,CAAE,MAAM,AACtB,CAAC,AAED,QAAQ,cAAC,CAAC,AACN,WAAW,CAAE,CAAC,AAClB,CAAC,AAED,IAAI,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,AAC3B,CAAC,AAED,CAAC,cAAC,CAAC,AACC,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,QAAQ,cAAC,CAAC,AACN,UAAU,CAAE,GAAG,AACnB,CAAC\"}"
};

const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>Contact</title>`, "")}`, "")}

<main class="${"svelte-bto9id"}"><h1 class="${"text-align svelte-bto9id"}">How can we help you today?</h1>
    <h2 class="${"text-align svelte-bto9id"}">We&#39;re here for you. Send us an email or call us.</h2>
    <p class="${"text-align svelte-bto9id"}">When we started Visign Designs, we set out to provide professional brand
        development, professional printing and supply of branded merchandise
        services to SMEs at an affordable price. ​
    </p>
    <div class="${"btn-div btn svelte-bto9id"}"><a href="${"mailto:dkibui@visign.co.ke"}" class="${"svelte-bto9id"}">${validate_component(Button, "Button").$$render($$result, { value: "Email Us" }, {}, {})}</a></div>
    <p class="${"text-align contact svelte-bto9id"}">Cell: +254 728 49 4090 <br> Email: dkibui@visign.co.ke<br>Office:
        6th Floor, Westend Towers.<br>Westlands Nairobi.
    </p>
</main>`;
});

var component_1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Contact
});

/* src/routes/about.svelte generated by Svelte v3.31.2 */

const css$5 = {
	code: "main.svelte-1wx2bds{width:85%;max-width:800px;margin:auto;margin-top:3em}h1.svelte-1wx2bds{margin:auto;margin-bottom:1.2em;font-size:1.4rem;text-transform:uppercase;font-weight:300;color:#1ae5c1}h2.svelte-1wx2bds{line-height:1.2em;font-size:2.4em;font-weight:700;color:rgb(156, 156, 156);margin:0 auto;margin-bottom:1.1em}p.svelte-1wx2bds{margin:auto;font-size:1em;line-height:1.75em;color:#626262;margin-bottom:1em}.text-align.svelte-1wx2bds{text-align:left}.paragraph-align.svelte-1wx2bds{text-align:left}@media(min-width: 800px){h1.svelte-1wx2bds{max-width:800px}h2.svelte-1wx2bds{max-width:800px}}",
	map: "{\"version\":3,\"file\":\"about.svelte\",\"sources\":[\"about.svelte\"],\"sourcesContent\":[\"<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n\\n<main>\\n\\t<h1 class=\\\"text-align\\\">Get to know visign.</h1>\\n\\t<h2 class=\\\"text-align\\\">We are a graphic and web design company.</h2>\\n\\t<p class=\\\"paragraph-align\\\">\\n\\t\\tWhen we started Visign Designs, we set out to provide professional brand\\n\\t\\tdevelopment, professional printing and supply of branded merchandise\\n\\t\\tservices to SMEs at an affordable price. ​\\n\\t</p>\\n\\t<p class=\\\"paragraph-align\\\">\\n\\t\\tGood creative design and branding helps create trust and confidence in a\\n\\t\\tcompany’s ability to meet the customers expectation. It gives SMEs a\\n\\t\\tfighting chance to compete with the established giants in their\\n\\t\\tindustry. Our process is based on the marketing principle If you’re not\\n\\t\\tdistinct; not unique; you’re a commodity.​\\n\\t</p>\\n\\n\\t<p class=\\\"paragraph-align\\\">\\n\\t\\tSkilful branding elevates and differentiates not just you, but your\\n\\t\\tclients, too. It tells a story; your story, in your own distinctive\\n\\t\\tvoice. We help you to be different and to come alive in your market’s\\n\\t\\timagination.\\n\\t</p>\\n\\t<p class=\\\"paragraph-align\\\">\\n\\t\\tChoose us for world-class designs, identity branding services,\\n\\t\\tinnovative marketing solutions and top quality printing. We help you\\n\\t\\tcreate market awareness that communicates your brand values in an\\n\\t\\tauthentic voice and in a manner that resonates clearly in the mind of\\n\\t\\tyour audience.​\\n\\t</p>\\n</main>\\n\\n<style>\\n\\tmain {\\n\\t\\twidth: 85%;\\n\\t\\tmax-width: 800px;\\n\\t\\tmargin: auto;\\n\\t\\tmargin-top: 3em;\\n\\t}\\n\\n\\th1 {\\n\\t\\tmargin: auto;\\n\\t\\tmargin-bottom: 1.2em;\\n\\t\\tfont-size: 1.4rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 300;\\n\\t\\tcolor: #1ae5c1;\\n\\t}\\n\\n\\th2 {\\n\\t\\tline-height: 1.2em;\\n\\t\\tfont-size: 2.4em;\\n\\t\\tfont-weight: 700;\\n\\t\\tcolor: rgb(156, 156, 156);\\n\\t\\tmargin: 0 auto;\\n\\t\\tmargin-bottom: 1.1em;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: auto;\\n\\t\\tfont-size: 1em;\\n\\t\\tline-height: 1.75em;\\n\\t\\tcolor: #626262;\\n\\t\\tmargin-bottom: 1em;\\n\\t}\\n\\n\\t.text-align {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.paragraph-align {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t@media (min-width: 800px) {\\n\\t\\th1 {\\n\\t\\t\\tmax-width: 800px;\\n\\t\\t}\\n\\n\\t\\th2 {\\n\\t\\t\\tmax-width: 800px;\\n\\t\\t}\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAoCC,IAAI,eAAC,CAAC,AACL,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AAChB,CAAC,AAED,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACpB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,WAAW,CAAE,KAAK,CAClB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,aAAa,CAAE,KAAK,AACrB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,GAAG,AACnB,CAAC,AAED,WAAW,eAAC,CAAC,AACZ,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,gBAAgB,eAAC,CAAC,AACjB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,AACjB,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,AACjB,CAAC,AACF,CAAC\"}"
};

const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$5);

	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}

<main class="${"svelte-1wx2bds"}"><h1 class="${"text-align svelte-1wx2bds"}">Get to know visign.</h1>
	<h2 class="${"text-align svelte-1wx2bds"}">We are a graphic and web design company.</h2>
	<p class="${"paragraph-align svelte-1wx2bds"}">When we started Visign Designs, we set out to provide professional brand
		development, professional printing and supply of branded merchandise
		services to SMEs at an affordable price. ​
	</p>
	<p class="${"paragraph-align svelte-1wx2bds"}">Good creative design and branding helps create trust and confidence in a
		company’s ability to meet the customers expectation. It gives SMEs a
		fighting chance to compete with the established giants in their
		industry. Our process is based on the marketing principle If you’re not
		distinct; not unique; you’re a commodity.​
	</p>

	<p class="${"paragraph-align svelte-1wx2bds"}">Skilful branding elevates and differentiates not just you, but your
		clients, too. It tells a story; your story, in your own distinctive
		voice. We help you to be different and to come alive in your market’s
		imagination.
	</p>
	<p class="${"paragraph-align svelte-1wx2bds"}">Choose us for world-class designs, identity branding services,
		innovative marketing solutions and top quality printing. We help you
		create market awareness that communicates your brand values in an
		authentic voice and in a manner that resonates clearly in the mind of
		your audience.​
	</p>
</main>`;
});

var component_2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': About
});

/* src/routes/admin/index.svelte generated by Svelte v3.31.2 */

const css$6 = {
	code: ".width.svelte-3i7vqz{max-width:800px;width:85%;margin:0 auto}.card-container.svelte-3i7vqz{padding:2rem 0;margin-top:3rem}h1.svelte-3i7vqz{margin-top:0;margin-bottom:1rem}p.svelte-3i7vqz{margin:0;font-size:0.95rem;text-transform:capitalize}.title.svelte-3i7vqz{margin:0;padding:0;font-size:1rem;font-weight:600}.blog.svelte-3i7vqz{border:1px solid rgba(51, 51, 51, 0.125);margin-bottom:0.75rem;padding:1.2rem;border-radius:0.34rem}.date.svelte-3i7vqz{font-size:0.75rem;color:rgb(173, 173, 173)}button.svelte-3i7vqz{margin-top:0.75rem;padding:0.25rem 1.2rem;border:none;border-radius:2px;outline:none;color:white}button.svelte-3i7vqz:focus{outline:solid 2px rgba(0, 0, 0, 0.1275)}button.green.svelte-3i7vqz{background-color:rgba(0, 0, 255, 0.7)}button.red.svelte-3i7vqz{background-color:rgba(255, 0, 0, 0.7)}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export async function preload(page, session) {\\r\\n    const result = await this.fetch(\\\"admin.json\\\");\\r\\n    const blogs = await result.json();\\r\\n    return { blogs };\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  export let blogs;\\r\\n\\r\\n  async function handleDelete(e) {\\r\\n    let id = e.target.id;\\r\\n    let data = { id };\\r\\n    await fetch(\\\"admin.json\\\", {\\r\\n      method: \\\"PUT\\\", // or 'PUT'\\r\\n      headers: {\\r\\n        \\\"Content-Type\\\": \\\"application/json\\\",\\r\\n      },\\r\\n      body: JSON.stringify(data),\\r\\n    });\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<main>\\r\\n  <div class=\\\"card-container width\\\">\\r\\n    <h1>Our recent blogs</h1>\\r\\n    {#each blogs as blog (blog.id)}\\r\\n      <div class=\\\"blog\\\">\\r\\n        <p class=\\\"title\\\">{blog.title}</p>\\r\\n        <p class=\\\"date\\\">\\r\\n          {new Date(blog.created_at).toLocaleString(\\\"en-US\\\", {\\r\\n            month: \\\"long\\\",\\r\\n            day: \\\"2-digit\\\",\\r\\n            year: \\\"numeric\\\",\\r\\n            hour: \\\"2-digit\\\",\\r\\n            timeZone: \\\"Africa/Nairobi\\\", // 6 hours behind UTC\\r\\n          })}\\r\\n        </p>\\r\\n        <p>{blog.summary}</p>\\r\\n        <a href=\\\"/admin/update/{blog.id}\\\">\\r\\n          <button class=\\\"green\\\">Edit</button></a\\r\\n        >\\r\\n        <button id={blog.id} on:click={handleDelete} class=\\\"red\\\">Delete</button>\\r\\n      </div>\\r\\n    {/each}\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>Blogs</title>\\r\\n</svelte:head>\\r\\n\\r\\n<style>\\r\\n  .width {\\r\\n    max-width: 800px;\\r\\n    width: 85%;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  .card-container {\\r\\n    padding: 2rem 0;\\r\\n    /* border-bottom: 1px solid #3333331a; */\\r\\n    margin-top: 3rem;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    margin: 0;\\r\\n    font-size: 0.95rem;\\r\\n    text-transform: capitalize;\\r\\n  }\\r\\n\\r\\n  .title {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 600;\\r\\n  }\\r\\n\\r\\n  .blog {\\r\\n    border: 1px solid rgba(51, 51, 51, 0.125);\\r\\n    margin-bottom: 0.75rem;\\r\\n    padding: 1.2rem;\\r\\n    border-radius: 0.34rem;\\r\\n  }\\r\\n\\r\\n  .date {\\r\\n    font-size: 0.75rem;\\r\\n    color: rgb(173, 173, 173);\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    margin-top: 0.75rem;\\r\\n    padding: 0.25rem 1.2rem;\\r\\n    border: none;\\r\\n    border-radius: 2px;\\r\\n    outline: none;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  button:focus {\\r\\n    outline: solid 2px rgba(0, 0, 0, 0.1275);\\r\\n    /* outline-offset: 1px; */\\r\\n  }\\r\\n\\r\\n  button.green {\\r\\n    background-color: rgba(0, 0, 255, 0.7);\\r\\n  }\\r\\n\\r\\n  button.red {\\r\\n    background-color: rgba(255, 0, 0, 0.7);\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAsDE,MAAM,cAAC,CAAC,AACN,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,eAAe,cAAC,CAAC,AACf,OAAO,CAAE,IAAI,CAAC,CAAC,CAEf,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,CAAC,cAAC,CAAC,AACD,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,OAAO,CAClB,cAAc,CAAE,UAAU,AAC5B,CAAC,AAED,MAAM,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,CACzC,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,OAAO,AACxB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AAC3B,CAAC,AAED,MAAM,cAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,AACd,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,AAE1C,CAAC,AAED,MAAM,MAAM,cAAC,CAAC,AACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AACxC,CAAC,AAED,MAAM,IAAI,cAAC,CAAC,AACV,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACxC,CAAC\"}"
};

async function preload(page, session) {
	const result = await this.fetch("admin.json");
	const blogs = await result.json();
	return { blogs };
}

const Admin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { blogs } = $$props;
	if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0) $$bindings.blogs(blogs);
	$$result.css.add(css$6);

	return `<main><div class="${"card-container width svelte-3i7vqz"}"><h1 class="${"svelte-3i7vqz"}">Our recent blogs</h1>
    ${each(blogs, blog => `<div class="${"blog svelte-3i7vqz"}"><p class="${"title svelte-3i7vqz"}">${escape(blog.title)}</p>
        <p class="${"date svelte-3i7vqz"}">${escape(new Date(blog.created_at).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		hour: "2-digit",
		timeZone: "Africa/Nairobi", // 6 hours behind UTC
		
	}))}</p>
        <p class="${"svelte-3i7vqz"}">${escape(blog.summary)}</p>
        <a href="${"/admin/update/" + escape(blog.id)}"><button class="${"green svelte-3i7vqz"}">Edit</button></a>
        <button${add_attribute("id", blog.id, 0)} class="${"red svelte-3i7vqz"}">Delete</button>
      </div>`)}</div></main>

${($$result.head += `${($$result.title = `<title>Blogs</title>`, "")}`, "")}`;
});

var component_3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Admin,
  preload: preload
});

/* src/routes/admin/create/index.svelte generated by Svelte v3.31.2 */

const css$7 = {
	code: "main.svelte-n04aob.svelte-n04aob{width:80%;max-width:1000px;margin:auto;margin-top:3em}.author.svelte-n04aob.svelte-n04aob{margin-bottom:1rem}.author.svelte-n04aob select.svelte-n04aob{display:block;font-size:1.2rem;line-height:1.3;padding:0.75rem 1.4rem 0.75rem 0.8em;width:100%;max-width:220px;box-sizing:border-box;margin:0;border:1px solid #b3b3b380;background-color:white;color:#6d6d6d;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat, repeat;background-position:right 0.7em top 50%, 0 0;background-size:0.65em auto, 100%;fill:#1ae5c1}.input.svelte-n04aob.svelte-n04aob{margin-bottom:1.5rem}input.svelte-n04aob.svelte-n04aob,textarea.svelte-n04aob.svelte-n04aob{padding:0.75rem 1.1rem;font-size:1.2rem;border:1px solid #b3b3b380;outline-style:none;color:#6d6d6d;width:100%}input.svelte-n04aob.svelte-n04aob:focus{background-color:#fff;border:1px solid #fff;outline:6px solid hsla(175, 100%, 75%, 0.25)}textarea.svelte-n04aob.svelte-n04aob:focus{background-color:#fff;border:1px solid #fff;outline:6px solid hsla(175, 100%, 75%, 0.25)}button.svelte-n04aob.svelte-n04aob{padding:0.755rem 1.2rem;font-size:1.2rem;background-color:#1ae5c1;border:none;outline-style:none;color:#ffffff}button.svelte-n04aob.svelte-n04aob:hover{cursor:pointer}h1.svelte-n04aob.svelte-n04aob{margin-top:4em;margin-bottom:1em}h4.svelte-n04aob.svelte-n04aob{margin-bottom:0.75rem;font-size:1.2rem;font-weight:400}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export async function preload(page, session) {\\r\\n    const result = await this.fetch(\\\"admin/create.json\\\");\\r\\n    const returnedObject = await result.json();\\r\\n    return { returnedObject };\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  export let returnedObject;\\r\\n  //////////////////////////////////////////////////////////////\\r\\n  let author;\\r\\n  let category;\\r\\n  let title;\\r\\n  let summary;\\r\\n  let content;\\r\\n  // = \\\"Here comes drama\\\"\\r\\n\\r\\n  function handleSubmit() {\\r\\n    let data = {\\r\\n      author,\\r\\n      category,\\r\\n      title,\\r\\n      summary,\\r\\n      content,\\r\\n    };\\r\\n\\r\\n    fetch(\\\"/admin/create.json\\\", {\\r\\n      method: \\\"POST\\\", // or 'PUT'\\r\\n      headers: {\\r\\n        \\\"Content-Type\\\": \\\"application/json\\\",\\r\\n      },\\r\\n      body: JSON.stringify(data),\\r\\n    });\\r\\n\\r\\n    console.log(data);\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<main>\\r\\n  <div class=\\\"form-div\\\">\\r\\n    <h1>Post a Blog</h1>\\r\\n    <form on:submit|preventDefault={handleSubmit}>\\r\\n      <div class=\\\"author\\\">\\r\\n        <h4>Select author</h4>\\r\\n        <select bind:value={author}>\\r\\n          {#each returnedObject[0] as author, i}\\r\\n            <option value={i + 1}>{author.first_name} {author.last_name}</option\\r\\n            >\\r\\n          {/each}\\r\\n        </select>\\r\\n      </div>\\r\\n      <div class=\\\"author\\\">\\r\\n        <h4>Select category</h4>\\r\\n        <select bind:value={category}>\\r\\n          {#each returnedObject[1] as category, i}\\r\\n            <option value={i + 1}>{category.category}</option>\\r\\n            <p>{i + 1}</p>\\r\\n          {/each}\\r\\n        </select>\\r\\n      </div>\\r\\n      <div class=\\\"input\\\">\\r\\n        <input bind:value={title} type=\\\"text\\\" placeholder=\\\"Enter blog title\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"input\\\">\\r\\n        <input\\r\\n          bind:value={summary}\\r\\n          type=\\\"text\\\"\\r\\n          placeholder=\\\"Enter blog summary\\\"\\r\\n        />\\r\\n      </div>\\r\\n      <div class=\\\"input\\\">\\r\\n        <textarea\\r\\n          bind:value={content}\\r\\n          rows=\\\"10\\\"\\r\\n          placeholder=\\\"Enter blog content\\\"\\r\\n        />\\r\\n      </div>\\r\\n      <button type=\\\"submit\\\"> Submit Form </button>\\r\\n    </form>\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    width: 80%;\\r\\n    max-width: 1000px;\\r\\n    margin: auto;\\r\\n    margin-top: 3em;\\r\\n  }\\r\\n\\r\\n  .author {\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  .author select {\\r\\n    display: block;\\r\\n    font-size: 1.2rem;\\r\\n    line-height: 1.3;\\r\\n    padding: 0.75rem 1.4rem 0.75rem 0.8em;\\r\\n    width: 100%;\\r\\n    max-width: 220px;\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    border: 1px solid #b3b3b380;\\r\\n    background-color: white;\\r\\n    color: #6d6d6d;\\r\\n    /* box-shadow: 0 1px 0 1px rgba(0,0,0,.04); */\\r\\n    -moz-appearance: none;\\r\\n    -webkit-appearance: none;\\r\\n    appearance: none;\\r\\n    background-image: url(\\\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\\\");\\r\\n    /* linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); */\\r\\n    background-repeat: no-repeat, repeat;\\r\\n    background-position: right 0.7em top 50%, 0 0;\\r\\n    background-size: 0.65em auto, 100%;\\r\\n    fill: #1ae5c1;\\r\\n  }\\r\\n\\r\\n  .input {\\r\\n    margin-bottom: 1.5rem;\\r\\n  }\\r\\n\\r\\n  input,\\r\\n  textarea {\\r\\n    padding: 0.75rem 1.1rem;\\r\\n    font-size: 1.2rem;\\r\\n    border: 1px solid #b3b3b380;\\r\\n    outline-style: none;\\r\\n    color: #6d6d6d;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  input:focus {\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n    outline: 6px solid hsla(175, 100%, 75%, 0.25);\\r\\n  }\\r\\n\\r\\n  textarea:focus {\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n    outline: 6px solid hsla(175, 100%, 75%, 0.25);\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    padding: 0.755rem 1.2rem;\\r\\n    font-size: 1.2rem;\\r\\n    background-color: #1ae5c1;\\r\\n    border: none;\\r\\n    /* border-radius: 5px; */\\r\\n    outline-style: none;\\r\\n    color: #ffffff;\\r\\n  }\\r\\n\\r\\n  button:hover {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: 4em;\\r\\n    margin-bottom: 1em;\\r\\n  }\\r\\n\\r\\n  h4 {\\r\\n    margin-bottom: 0.75rem;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 400;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAoFE,IAAI,4BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AACjB,CAAC,AAED,OAAO,4BAAC,CAAC,AACP,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,qBAAO,CAAC,MAAM,cAAC,CAAC,AACd,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,KAAK,CACrC,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,OAAO,CAEd,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,IAAI,6dAA6d,CAAC,CAEpf,iBAAiB,CAAE,SAAS,CAAC,CAAC,MAAM,CACpC,mBAAmB,CAAE,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAC7C,eAAe,CAAE,MAAM,CAAC,IAAI,CAAC,CAAC,IAAI,CAClC,IAAI,CAAE,OAAO,AACf,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,aAAa,CAAE,MAAM,AACvB,CAAC,AAED,iCAAK,CACL,QAAQ,4BAAC,CAAC,AACR,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,IAAI,AACb,CAAC,AAED,iCAAK,MAAM,AAAC,CAAC,AACX,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,AAC/C,CAAC,AAED,oCAAQ,MAAM,AAAC,CAAC,AACd,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,AAC/C,CAAC,AAED,MAAM,4BAAC,CAAC,AACN,OAAO,CAAE,QAAQ,CAAC,MAAM,CACxB,SAAS,CAAE,MAAM,CACjB,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CAEZ,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,kCAAM,MAAM,AAAC,CAAC,AACZ,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,EAAE,4BAAC,CAAC,AACF,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,EAAE,4BAAC,CAAC,AACF,aAAa,CAAE,OAAO,CACtB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,AAClB,CAAC\"}"
};

async function preload$1(page, session) {
	const result = await this.fetch("admin/create.json");
	const returnedObject = await result.json();
	return { returnedObject };
}

const Create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { returnedObject } = $$props;

	//////////////////////////////////////////////////////////////
	let author;

	let category;
	let title;
	let summary;

	if ($$props.returnedObject === void 0 && $$bindings.returnedObject && returnedObject !== void 0) $$bindings.returnedObject(returnedObject);
	$$result.css.add(css$7);

	return `<main class="${"svelte-n04aob"}"><div class="${"form-div"}"><h1 class="${"svelte-n04aob"}">Post a Blog</h1>
    <form><div class="${"author svelte-n04aob"}"><h4 class="${"svelte-n04aob"}">Select author</h4>
        <select class="${"svelte-n04aob"}"${add_attribute("value", author, 1)}>${each(returnedObject[0], (author, i) => `<option${add_attribute("value", i + 1, 0)}>${escape(author.first_name)} ${escape(author.last_name)}</option>`)}</select></div>
      <div class="${"author svelte-n04aob"}"><h4 class="${"svelte-n04aob"}">Select category</h4>
        <select class="${"svelte-n04aob"}"${add_attribute("value", category, 1)}>${each(returnedObject[1], (category, i) => `<option${add_attribute("value", i + 1, 0)}>${escape(category.category)}</option>
            <p>${escape(i + 1)}</p>`)}</select></div>
      <div class="${"input svelte-n04aob"}"><input type="${"text"}" placeholder="${"Enter blog title"}" class="${"svelte-n04aob"}"${add_attribute("value", title, 1)}></div>
      <div class="${"input svelte-n04aob"}"><input type="${"text"}" placeholder="${"Enter blog summary"}" class="${"svelte-n04aob"}"${add_attribute("value", summary, 1)}></div>
      <div class="${"input svelte-n04aob"}"><textarea rows="${"10"}" placeholder="${"Enter blog content"}" class="${"svelte-n04aob"}">${ ""}</textarea></div>
      <button type="${"submit"}" class="${"svelte-n04aob"}">Submit Form </button></form></div>
</main>`;
});

var component_4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Create,
  preload: preload$1
});

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/components/Nav.svelte generated by Svelte v3.31.2 */

const css$8 = {
	code: ".svelte-u6yd05.svelte-u6yd05{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\", sans-serif}.menu-bar.svelte-u6yd05.svelte-u6yd05{position:absolute;right:8%;top:1.3em}.menu-bar.svelte-u6yd05.svelte-u6yd05:hover{cursor:pointer;opacity:0.8}.menu-bar.svelte-u6yd05 div.svelte-u6yd05{width:30px;height:2px;background-color:rgb(177, 177, 177);margin-bottom:7px}.menu-bar.svelte-u6yd05 div.svelte-u6yd05:last-child{margin-bottom:0}header.svelte-u6yd05.svelte-u6yd05{border-bottom:1px solid rgba(255, 62, 0, 0.1)}.position.svelte-u6yd05.svelte-u6yd05{position:absolute;top:0;left:0;width:50%;height:100vh;background-color:rgba(242, 242, 242, 0.95);padding-top:3em;padding-left:10%;padding-right:2em;border-right:1px solid rgba(172, 172, 172, 0.25);transform:translateX(-500px);transition:transform 0.35s ease-out}.show.svelte-u6yd05.svelte-u6yd05{transform:translateX(0px)}.nav-links.svelte-u6yd05 p.svelte-u6yd05{padding:0.75em 0;border-bottom:1px solid rgba(172, 172, 172, 0.25)}.nav-links.svelte-u6yd05 p.svelte-u6yd05:last-child{border-bottom:none}nav.svelte-u6yd05.svelte-u6yd05{width:90%;max-width:1680px;margin:0 auto;display:flex;justify-content:space-between;align-items:center}img.svelte-u6yd05.svelte-u6yd05{width:100%;width:125px;display:block}a.svelte-u6yd05.svelte-u6yd05{padding:1em 0.5em;display:block;font-weight:400;color:rgb(85, 85, 85);text-decoration:none}@media(min-width: 800px){.menu-bar.svelte-u6yd05.svelte-u6yd05{display:none}.position.svelte-u6yd05.svelte-u6yd05{position:relative;width:auto;height:auto;background-color:#ffffff;padding-top:0;padding-left:0;border-right:none;transform:translateX(0)}.nav-links.svelte-u6yd05.svelte-u6yd05{display:flex}.nav-links.svelte-u6yd05 p.svelte-u6yd05{padding:0;border-bottom:none}}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n    // export let segment;\\n    let state = false;\\n\\n    let toggleShow = () => {\\n        state = !state;\\n    };\\n\\n    let removeMobileMenu = () => {\\n        if (state) {\\n            state = false;\\n        }\\n        return;\\n    };\\n</script>\\n\\n\\n<header>\\n    <div on:click={toggleShow} class=\\\"menu-bar\\\">\\n        <div />\\n        <div />\\n        <div />\\n    </div>\\n    <nav>\\n        <div>\\n            <a href=\\\".\\\">\\n                <img src=\\\"images/visign-logo.svg\\\" alt=\\\"visign logo\\\" />\\n            </a>\\n        </div>\\n        <div class=\\\"nav-links position\\\" class:show={state}>\\n            <p><a on:click={toggleShow} href=\\\".\\\">Home</a></p>\\n            <p><a on:click={toggleShow} href=\\\"about\\\">About</a></p>\\n            <p>\\n                <a on:click={toggleShow} rel=\\\"prefetch\\\" href=\\\"blogs\\\">Blogs</a>\\n            </p>\\n            <p><a on:click={toggleShow} href=\\\"contact\\\">Contact</a></p>\\n        </div>\\n    </nav>\\n</header>\\n<!-- <svelte:window on:click={removeMobileMenu} /> -->\\n\\n<style>\\n    * {\\n        margin: 0;\\n        padding: 0;\\n        box-sizing: border-box;\\n        font-family: \\\"Poppins\\\", sans-serif;\\n    }\\n\\n    .menu-bar {\\n        position: absolute;\\n        right: 8%;\\n        top: 1.3em;\\n    }\\n\\n    .menu-bar:hover {\\n        cursor: pointer;\\n        opacity: 0.8;\\n    }\\n\\n    .menu-bar div {\\n        width: 30px;\\n        height: 2px;\\n        background-color: rgb(177, 177, 177);\\n        margin-bottom: 7px;\\n    }\\n\\n    .menu-bar div:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    header {\\n        border-bottom: 1px solid rgba(255, 62, 0, 0.1);\\n    }\\n\\n    .position {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        width: 50%;\\n        height: 100vh;\\n        background-color: rgba(242, 242, 242, 0.95);\\n        padding-top: 3em;\\n        padding-left: 10%;\\n        padding-right: 2em;\\n        border-right: 1px solid rgba(172, 172, 172, 0.25);\\n        transform: translateX(-500px);\\n        transition: transform 0.35s ease-out;\\n    }\\n\\n    .show {\\n        transform: translateX(0px);\\n    }\\n\\n    .nav-links p {\\n        padding: 0.75em 0;\\n        border-bottom: 1px solid rgba(172, 172, 172, 0.25);\\n    }\\n\\n    .nav-links p:last-child {\\n        border-bottom: none;\\n    }\\n\\n    nav {\\n        width: 90%;\\n        max-width: 1680px;\\n        margin: 0 auto;\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n    }\\n\\n    img {\\n        width: 100%;\\n        width: 125px;\\n        display: block;\\n    }\\n\\n    a {\\n        padding: 1em 0.5em;\\n        display: block;\\n        font-weight: 400;\\n        color: rgb(85, 85, 85);\\n        text-decoration: none;\\n    }\\n\\n    @media (min-width: 800px) {\\n        .menu-bar {\\n            display: none;\\n        }\\n\\n        .position {\\n            position: relative;\\n            width: auto;\\n            height: auto;\\n            background-color: #ffffff;\\n            padding-top: 0;\\n            padding-left: 0;\\n            border-right: none;\\n            transform: translateX(0);\\n        }\\n\\n        .nav-links {\\n            display: flex;\\n        }\\n\\n        .nav-links p {\\n            padding: 0;\\n            border-bottom: none;\\n        }\\n\\n        /* a:active {\\n            border-bottom: 3px solid #ffad0a;\\n        } */\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA0CI,4BAAE,CAAC,AACC,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,SAAS,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,SAAS,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,EAAE,CACT,GAAG,CAAE,KAAK,AACd,CAAC,AAED,qCAAS,MAAM,AAAC,CAAC,AACb,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,GAAG,AAChB,CAAC,AAED,uBAAS,CAAC,GAAG,cAAC,CAAC,AACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,AACtB,CAAC,AAED,uBAAS,CAAC,iBAAG,WAAW,AAAC,CAAC,AACtB,aAAa,CAAE,CAAC,AACpB,CAAC,AAED,MAAM,4BAAC,CAAC,AACJ,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AAClD,CAAC,AAED,SAAS,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACjD,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,QAAQ,AACxC,CAAC,AAED,KAAK,4BAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,AAC9B,CAAC,AAED,wBAAU,CAAC,CAAC,cAAC,CAAC,AACV,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,AACtD,CAAC,AAED,wBAAU,CAAC,eAAC,WAAW,AAAC,CAAC,AACrB,aAAa,CAAE,IAAI,AACvB,CAAC,AAED,GAAG,4BAAC,CAAC,AACD,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,AACvB,CAAC,AAED,GAAG,4BAAC,CAAC,AACD,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,KAAK,AAClB,CAAC,AAED,CAAC,4BAAC,CAAC,AACC,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACtB,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACvB,SAAS,4BAAC,CAAC,AACP,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,SAAS,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,CAAC,CACd,YAAY,CAAE,CAAC,CACf,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,WAAW,CAAC,CAAC,AAC5B,CAAC,AAED,UAAU,4BAAC,CAAC,AACR,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,wBAAU,CAAC,CAAC,cAAC,CAAC,AACV,OAAO,CAAE,CAAC,CACV,aAAa,CAAE,IAAI,AACvB,CAAC,AAKL,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	$$result.css.add(css$8);

	return `<header class="${"svelte-u6yd05"}"><div class="${"menu-bar svelte-u6yd05"}"><div class="${"svelte-u6yd05"}"></div>
        <div class="${"svelte-u6yd05"}"></div>
        <div class="${"svelte-u6yd05"}"></div></div>
    <nav class="${"svelte-u6yd05"}"><div class="${"svelte-u6yd05"}"><a href="${"."}" class="${"svelte-u6yd05"}"><img src="${"images/visign-logo.svg"}" alt="${"visign logo"}" class="${"svelte-u6yd05"}"></a></div>
        <div class="${["nav-links position svelte-u6yd05",  ""].join(" ").trim()}"><p class="${"svelte-u6yd05"}"><a href="${"."}" class="${"svelte-u6yd05"}">Home</a></p>
            <p class="${"svelte-u6yd05"}"><a href="${"about"}" class="${"svelte-u6yd05"}">About</a></p>
            <p class="${"svelte-u6yd05"}"><a rel="${"prefetch"}" href="${"blogs"}" class="${"svelte-u6yd05"}">Blogs</a></p>
            <p class="${"svelte-u6yd05"}"><a href="${"contact"}" class="${"svelte-u6yd05"}">Contact</a></p></div></nav></header>
`;
});

/* src/components/Footer.svelte generated by Svelte v3.31.2 */

const css$9 = {
	code: "footer.svelte-nb5xoq{border-top:1px solid rgba(255, 62, 0, 0.1);color:rgb(145, 145, 145);text-align:center;padding:0.75rem}strong.svelte-nb5xoq{color:rgb(145, 145, 145);font-weight:400}",
	map: "{\"version\":3,\"file\":\"Footer.svelte\",\"sources\":[\"Footer.svelte\"],\"sourcesContent\":[\"<footer>\\n    <p class=\\\"footer text-align\\\">\\n      <strong>\\n      &copy Visign {new Date().getUTCFullYear()}<strong />\\n    </p>\\n</footer>\\n\\n<style>\\n  footer {\\n    border-top: 1px solid rgba(255, 62, 0, 0.1);\\n    color: rgb(145, 145, 145);\\n    text-align: center;\\n    padding: 0.75rem;\\n    /* height: 2rem; */\\n  }\\n\\n  strong {\\n    color: rgb(145, 145, 145);\\n    font-weight: 400;\\n  }\\n</style>\\n\\n\"],\"names\":[],\"mappings\":\"AAQE,MAAM,cAAC,CAAC,AACN,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,OAAO,AAElB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,GAAG,AAClB,CAAC\"}"
};

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$9);

	return `<footer class="${"svelte-nb5xoq"}"><p class="${"footer text-align"}"><strong class="${"svelte-nb5xoq"}">© Visign ${escape(new Date().getUTCFullYear())}<strong class="${"svelte-nb5xoq"}"></strong></strong></p>
</footer>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.31.2 */

const css$a = {
	code: "main.svelte-cvyklp{width:100%;margin:0 auto}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from \\\"../components/Nav.svelte\\\";\\n\\timport Footer from \\\"../components/Footer.svelte\\\";\\n\\n\\texport let segment;\\n</script>\\n\\n<Nav {segment} />\\n\\n<main>\\n\\t<slot />\\n</main>\\n\\n<Footer />\\n\\n<style>\\n\\tmain {\\n\\t\\twidth: 100%;\\n\\t\\t/* max-width: 1000px; */\\n\\t\\tmargin: 0 auto;\\n\\t\\t/* background-color: rgb(116, 116, 116); */\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgBC,IAAI,cAAC,CAAC,AACL,KAAK,CAAE,IAAI,CAEX,MAAM,CAAE,CAAC,CAAC,IAAI,AAEf,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$a);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"svelte-cvyklp"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

var root_comp = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.31.2 */

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1>${escape(status)}</h1>

<p>${escape(error.message)}</p>

${ ``}`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.31.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function page_store(value) {
    const store = writable(value);
    let ready = true;
    function notify() {
        ready = true;
        store.update(val => val);
    }
    function set(new_value) {
        ready = false;
        store.set(new_value);
    }
    function subscribe(run) {
        let old_value;
        return store.subscribe((new_value) => {
            if (old_value === undefined || (ready && new_value !== old_value)) {
                run(old_value = new_value);
            }
        });
    }
    return { notify, set, subscribe };
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
const stores = {
    page: page_store({}),
    preloading: writable(null),
    session: writable(initial_data && initial_data.session)
};
stores.session.subscribe((value) => __awaiter(void 0, void 0, void 0, function* () {
    return;
}));

/* src/routes/admin/update/[id].svelte generated by Svelte v3.31.2 */

const css$b = {
	code: "main.svelte-1st9hmw{width:80%;margin:auto;margin-top:3em}.form-div.svelte-1st9hmw{max-width:1000px;margin:0 auto}.input.svelte-1st9hmw{margin-bottom:1.5rem}input.svelte-1st9hmw,textarea.svelte-1st9hmw{padding:0.75rem 1.1rem;font-size:1.2rem;border:1px solid #b3b3b380;outline-style:none;color:#6d6d6d;width:100%}input.svelte-1st9hmw:focus{background-color:#fff;border:1px solid #fff;outline:6px solid hsla(175, 100%, 75%, 0.25)}textarea.svelte-1st9hmw:focus{background-color:#fff;border:1px solid #fff;outline:6px solid hsla(175, 100%, 75%, 0.25)}button.svelte-1st9hmw{padding:0.755rem 1.2rem;font-size:1.2rem;background-color:#1ae5c1;border:none;outline-style:none;color:#ffffff}button.svelte-1st9hmw:hover{cursor:pointer}h1.svelte-1st9hmw{margin-top:4em;margin-bottom:1em}h4.svelte-1st9hmw{margin-bottom:0.95rem;font-size:1.2rem;font-weight:400}",
	map: "{\"version\":3,\"file\":\"[id].svelte\",\"sources\":[\"[id].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export async function preload(page, session) {\\r\\n    const { id } = page.params;\\r\\n    const result = await this.fetch(`admin/update/${id}.json`);\\r\\n    const fetchedArray = await result.json();\\r\\n    const blog = fetchedArray[0];\\r\\n    const exports = { blog, id };\\r\\n    return { blog, id };\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  import { goto } from \\\"@sapper/app\\\";\\r\\n  export let blog;\\r\\n  export let id;\\r\\n  ////////////////////////////////////////////////////////////\\r\\n\\r\\n  let title = blog.title;\\r\\n  let summary = blog.summary;\\r\\n  let content = blog.content;\\r\\n\\r\\n  function handleSubmit() {\\r\\n    let data = {\\r\\n      title,\\r\\n      summary,\\r\\n      content,\\r\\n    };\\r\\n\\r\\n    //////////////////////////////////////////////////\\r\\n    fetch(`admin/update/${id}.json`, {\\r\\n      method: \\\"PATCH\\\", // or 'PUT'\\r\\n      headers: {\\r\\n        \\\"Content-Type\\\": \\\"application/json\\\",\\r\\n      },\\r\\n      body: JSON.stringify(data),\\r\\n    });\\r\\n    goto(\\\"/admin\\\");\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<main>\\r\\n  <div class=\\\"form-div\\\">\\r\\n    <h1>Update Blog</h1>\\r\\n    <h4>Blog author and category will not be updated</h4>\\r\\n    <form on:submit={handleSubmit}>\\r\\n      <div class=\\\"input\\\">\\r\\n        <input bind:value={title} type=\\\"text\\\" placeholder=\\\"Enter blog title\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"input\\\">\\r\\n        <input\\r\\n          bind:value={summary}\\r\\n          type=\\\"text\\\"\\r\\n          placeholder=\\\"Enter blog summary\\\"\\r\\n        />\\r\\n      </div>\\r\\n      <div class=\\\"input\\\">\\r\\n        <textarea\\r\\n          bind:value={content}\\r\\n          rows=\\\"10\\\"\\r\\n          placeholder=\\\"Enter blog content\\\"\\r\\n        />\\r\\n      </div>\\r\\n      <!-- <a href=\\\"/blogs\\\"> -->\\r\\n      <button type=\\\"submit\\\"> Submit Form </button>\\r\\n      <!-- </a> -->\\r\\n    </form>\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    width: 80%;\\r\\n    margin: auto;\\r\\n    margin-top: 3em;\\r\\n  }\\r\\n\\r\\n  .form-div {\\r\\n    max-width: 1000px;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  .input {\\r\\n    margin-bottom: 1.5rem;\\r\\n  }\\r\\n\\r\\n  input,\\r\\n  textarea {\\r\\n    padding: 0.75rem 1.1rem;\\r\\n    font-size: 1.2rem;\\r\\n    border: 1px solid #b3b3b380;\\r\\n    outline-style: none;\\r\\n    color: #6d6d6d;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  input:focus {\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n    outline: 6px solid hsla(175, 100%, 75%, 0.25);\\r\\n  }\\r\\n\\r\\n  textarea:focus {\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n    outline: 6px solid hsla(175, 100%, 75%, 0.25);\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    padding: 0.755rem 1.2rem;\\r\\n    font-size: 1.2rem;\\r\\n    background-color: #1ae5c1;\\r\\n    border: none;\\r\\n    outline-style: none;\\r\\n    color: #ffffff;\\r\\n  }\\r\\n\\r\\n  button:hover {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: 4em;\\r\\n    margin-bottom: 1em;\\r\\n  }\\r\\n\\r\\n  h4 {\\r\\n    margin-bottom: 0.95rem;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 400;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAsEE,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,AACjB,CAAC,AAED,SAAS,eAAC,CAAC,AACT,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,aAAa,CAAE,MAAM,AACvB,CAAC,AAED,oBAAK,CACL,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,IAAI,AACb,CAAC,AAED,oBAAK,MAAM,AAAC,CAAC,AACX,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,AAC/C,CAAC,AAED,uBAAQ,MAAM,AAAC,CAAC,AACd,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,AAC/C,CAAC,AAED,MAAM,eAAC,CAAC,AACN,OAAO,CAAE,QAAQ,CAAC,MAAM,CACxB,SAAS,CAAE,MAAM,CACjB,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,qBAAM,MAAM,AAAC,CAAC,AACZ,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,aAAa,CAAE,OAAO,CACtB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,AAClB,CAAC\"}"
};

async function preload$2(page, session) {
	const { id } = page.params;
	const result = await this.fetch(`admin/update/${id}.json`);
	const fetchedArray = await result.json();
	const blog = fetchedArray[0];
	return { blog, id };
}

const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { blog } = $$props;
	let { id } = $$props;

	////////////////////////////////////////////////////////////
	let title = blog.title;

	let summary = blog.summary;
	let content = blog.content;

	if ($$props.blog === void 0 && $$bindings.blog && blog !== void 0) $$bindings.blog(blog);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	$$result.css.add(css$b);

	return `<main class="${"svelte-1st9hmw"}"><div class="${"form-div svelte-1st9hmw"}"><h1 class="${"svelte-1st9hmw"}">Update Blog</h1>
    <h4 class="${"svelte-1st9hmw"}">Blog author and category will not be updated</h4>
    <form><div class="${"input svelte-1st9hmw"}"><input type="${"text"}" placeholder="${"Enter blog title"}" class="${"svelte-1st9hmw"}"${add_attribute("value", title, 1)}></div>
      <div class="${"input svelte-1st9hmw"}"><input type="${"text"}" placeholder="${"Enter blog summary"}" class="${"svelte-1st9hmw"}"${add_attribute("value", summary, 1)}></div>
      <div class="${"input svelte-1st9hmw"}"><textarea rows="${"10"}" placeholder="${"Enter blog content"}" class="${"svelte-1st9hmw"}">${content || ""}</textarea></div>
      
      <button type="${"submit"}" class="${"svelte-1st9hmw"}">Submit Form </button>
      </form></div>
</main>`;
});

var component_5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': U5Bidu5D,
  preload: preload$2
});

/* src/routes/blogs/index.svelte generated by Svelte v3.31.2 */

const css$c = {
	code: ".width.svelte-1ion1hp.svelte-1ion1hp{max-width:800px;width:85%;margin:0 auto}.card-container.svelte-1ion1hp.svelte-1ion1hp{padding:2rem 0;margin-top:3rem}h1.svelte-1ion1hp.svelte-1ion1hp{margin-top:0;margin-bottom:1rem}p.svelte-1ion1hp.svelte-1ion1hp{margin:0;font-size:0.95rem;text-transform:capitalize}.title.svelte-1ion1hp.svelte-1ion1hp{margin:0;padding:0;font-size:1rem;font-weight:600}.blog.svelte-1ion1hp.svelte-1ion1hp{border:1px solid rgba(51, 51, 51, 0.125);margin-bottom:0.95rem;padding:1.2rem;border-radius:0.34rem;transition:box-shadow 0.1375s ease}.date.svelte-1ion1hp.svelte-1ion1hp{font-size:0.75rem;color:rgb(173, 173, 173)}a.svelte-1ion1hp.svelte-1ion1hp{text-decoration:none}a.svelte-1ion1hp .blog.svelte-1ion1hp:hover{box-shadow:-2px -2px 12px #f5f5f5, 2px 2px 12px #ececec;background-color:#fffefe}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export async function preload(page, session) {\\r\\n    const result = await this.fetch(\\\"blogs.json\\\");\\r\\n    const blogs = await result.json();\\r\\n    return { blogs };\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  export let blogs;\\r\\n\\r\\n  async function handleDelete(e) {\\r\\n    let id = e.target.id;\\r\\n    let data = { id };\\r\\n    await fetch(\\\"blogs.json\\\", {\\r\\n      method: \\\"PUT\\\", // or 'PUT'\\r\\n      headers: {\\r\\n        \\\"Content-Type\\\": \\\"application/json\\\",\\r\\n      },\\r\\n      body: JSON.stringify(data),\\r\\n    });\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<main>\\r\\n  <div class=\\\"card-container width\\\">\\r\\n    <h1>Our recent blogs</h1>\\r\\n    {#each blogs as blog (blog.id)}\\r\\n      <a href=\\\"/blogs/{blog.id}\\\">\\r\\n        <div class=\\\"blog\\\">\\r\\n          <p class=\\\"title\\\">{blog.title}</p>\\r\\n          <p class=\\\"date\\\">\\r\\n            {new Date(blog.created_at).toLocaleString(\\\"en-US\\\", {\\r\\n              month: \\\"long\\\",\\r\\n              day: \\\"2-digit\\\",\\r\\n              year: \\\"numeric\\\",\\r\\n              hour: \\\"2-digit\\\",\\r\\n              timeZone: \\\"Africa/Nairobi\\\", // 6 hours behind UTC\\r\\n            })}\\r\\n          </p>\\r\\n          <p>{blog.summary}</p>\\r\\n        </div>\\r\\n      </a>\\r\\n    {/each}\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>Blogs</title>\\r\\n</svelte:head>\\r\\n\\r\\n<style>\\r\\n  .width {\\r\\n    max-width: 800px;\\r\\n    width: 85%;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  .card-container {\\r\\n    padding: 2rem 0;\\r\\n    /* border-bottom: 1px solid #3333331a; */\\r\\n    margin-top: 3rem;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    margin: 0;\\r\\n    font-size: 0.95rem;\\r\\n    text-transform: capitalize;\\r\\n  }\\r\\n\\r\\n  .title {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 600;\\r\\n  }\\r\\n\\r\\n  .blog {\\r\\n    border: 1px solid rgba(51, 51, 51, 0.125);\\r\\n    margin-bottom: 0.95rem;\\r\\n    padding: 1.2rem;\\r\\n    border-radius: 0.34rem;\\r\\n    transition: box-shadow 0.1375s ease;\\r\\n  }\\r\\n\\r\\n  .date {\\r\\n    font-size: 0.75rem;\\r\\n    color: rgb(173, 173, 173);\\r\\n  }\\r\\n\\r\\n  a {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n\\r\\n  a .blog:hover {\\r\\n    box-shadow: -2px -2px 12px #f5f5f5, 2px 2px 12px #ececec;\\r\\n    background-color: #fffefe;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAoDE,MAAM,8BAAC,CAAC,AACN,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,eAAe,8BAAC,CAAC,AACf,OAAO,CAAE,IAAI,CAAC,CAAC,CAEf,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,EAAE,8BAAC,CAAC,AACF,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,CAAC,8BAAC,CAAC,AACD,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,OAAO,CAClB,cAAc,CAAE,UAAU,AAC5B,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,KAAK,8BAAC,CAAC,AACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,CACzC,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,OAAO,CACtB,UAAU,CAAE,UAAU,CAAC,OAAO,CAAC,IAAI,AACrC,CAAC,AAED,KAAK,8BAAC,CAAC,AACL,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AAC3B,CAAC,AAED,CAAC,8BAAC,CAAC,AACD,eAAe,CAAE,IAAI,AACvB,CAAC,AAED,gBAAC,CAAC,oBAAK,MAAM,AAAC,CAAC,AACb,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CACxD,gBAAgB,CAAE,OAAO,AAC3B,CAAC\"}"
};

async function preload$3(page, session) {
	const result = await this.fetch("blogs.json");
	const blogs = await result.json();
	return { blogs };
}

const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { blogs } = $$props;
	if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0) $$bindings.blogs(blogs);
	$$result.css.add(css$c);

	return `<main><div class="${"card-container width svelte-1ion1hp"}"><h1 class="${"svelte-1ion1hp"}">Our recent blogs</h1>
    ${each(blogs, blog => `<a href="${"/blogs/" + escape(blog.id)}" class="${"svelte-1ion1hp"}"><div class="${"blog svelte-1ion1hp"}"><p class="${"title svelte-1ion1hp"}">${escape(blog.title)}</p>
          <p class="${"date svelte-1ion1hp"}">${escape(new Date(blog.created_at).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		hour: "2-digit",
		timeZone: "Africa/Nairobi", // 6 hours behind UTC
		
	}))}</p>
          <p class="${"svelte-1ion1hp"}">${escape(blog.summary)}</p></div>
      </a>`)}</div></main>

${($$result.head += `${($$result.title = `<title>Blogs</title>`, "")}`, "")}`;
});

var component_6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Blogs,
  preload: preload$3
});

/* src/routes/blogs/[id].svelte generated by Svelte v3.31.2 */

const css$d = {
	code: "main.svelte-1arq9tc{width:80%;max-width:900px;margin:auto;margin-top:2rem}h1.svelte-1arq9tc{margin-top:4em;margin-bottom:1em}h4.svelte-1arq9tc{margin-bottom:0.95rem;font-size:1.2rem;font-weight:400}.date.svelte-1arq9tc{font-size:0.75rem;color:rgb(173, 173, 173)}",
	map: "{\"version\":3,\"file\":\"[id].svelte\",\"sources\":[\"[id].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export async function preload(page, session) {\\r\\n    const { id } = page.params;\\r\\n    const result = await this.fetch(`blogs/${id}.json`);\\r\\n    const fetchedArray = await result.json();\\r\\n    const blog = fetchedArray[0];\\r\\n    return { blog };\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  export let blog;\\r\\n  ////////////////////////////////////////////////////////////\\r\\n</script>\\r\\n\\r\\n<main>\\r\\n  <h1>{blog.title}</h1>\\r\\n  <div class=\\\"blog\\\">\\r\\n    <p class=\\\"title\\\" />\\r\\n    <p class=\\\"date\\\">\\r\\n      {new Date(blog.created_at).toLocaleString(\\\"en-US\\\", {\\r\\n        month: \\\"long\\\",\\r\\n        day: \\\"2-digit\\\",\\r\\n        year: \\\"numeric\\\",\\r\\n        hour: \\\"2-digit\\\",\\r\\n        timeZone: \\\"Africa/Nairobi\\\", // 6 hours behind UTC\\r\\n      })}\\r\\n    </p>\\r\\n    <h4>{blog.summary}</h4>\\r\\n    <p>{blog.content}</p>\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>Blog</title>\\r\\n</svelte:head>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    width: 80%;\\r\\n    max-width: 900px;\\r\\n    margin: auto;\\r\\n    margin-top: 2rem;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: 4em;\\r\\n    margin-bottom: 1em;\\r\\n  }\\r\\n\\r\\n  h4 {\\r\\n    margin-bottom: 0.95rem;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 400;\\r\\n  }\\r\\n\\r\\n  .date {\\r\\n    font-size: 0.75rem;\\r\\n    color: rgb(173, 173, 173);\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAsCE,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,aAAa,CAAE,OAAO,CACtB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,KAAK,eAAC,CAAC,AACL,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AAC3B,CAAC\"}"
};

async function preload$4(page, session) {
	const { id } = page.params;
	const result = await this.fetch(`blogs/${id}.json`);
	const fetchedArray = await result.json();
	const blog = fetchedArray[0];
	return { blog };
}

const U5Bidu5D$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { blog } = $$props;
	if ($$props.blog === void 0 && $$bindings.blog && blog !== void 0) $$bindings.blog(blog);
	$$result.css.add(css$d);

	return `<main class="${"svelte-1arq9tc"}"><h1 class="${"svelte-1arq9tc"}">${escape(blog.title)}</h1>
  <div class="${"blog"}"><p class="${"title"}"></p>
    <p class="${"date svelte-1arq9tc"}">${escape(new Date(blog.created_at).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		hour: "2-digit",
		timeZone: "Africa/Nairobi", // 6 hours behind UTC
		
	}))}</p>
    <h4 class="${"svelte-1arq9tc"}">${escape(blog.summary)}</h4>
    <p>${escape(blog.content)}</p></div></main>

${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}`;
});

var component_7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': U5Bidu5D$1,
  preload: preload$4
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// admin/index.json.js
			pattern: /^\/admin\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// admin/create/index.json.js
			pattern: /^\/admin\/create\.json$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// admin/update/[id].json.js
			pattern: /^\/admin\/update\/([^/]+?)\.json$/,
			handlers: route_2,
			params: match => ({ id: d(match[1]) })
		},

		{
			// blogs/index.json.js
			pattern: /^\/blogs\.json$/,
			handlers: route_3,
			params: () => ({})
		},

		{
			// blogs/[id].json.js
			pattern: /^\/blogs\/([^/]+?)\.json$/,
			handlers: route_4,
			params: match => ({ id: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// contact.svelte
			pattern: /^\/contact\/?$/,
			parts: [
				{ name: "contact", file: "contact.svelte", component: component_1 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: component_2 }
			]
		},

		{
			// admin/index.svelte
			pattern: /^\/admin\/?$/,
			parts: [
				{ name: "admin", file: "admin/index.svelte", component: component_3 }
			]
		},

		{
			// admin/create/index.svelte
			pattern: /^\/admin\/create\/?$/,
			parts: [
				null,
				{ name: "admin_create", file: "admin/create/index.svelte", component: component_4 }
			]
		},

		{
			// admin/update/[id].svelte
			pattern: /^\/admin\/update\/([^/]+?)\/?$/,
			parts: [
				null,
				null,
				{ name: "admin_update_$id", file: "admin/update/[id].svelte", component: component_5, params: match => ({ id: d(match[1]) }) }
			]
		},

		{
			// blogs/index.svelte
			pattern: /^\/blogs\/?$/,
			parts: [
				{ name: "blogs", file: "blogs/index.svelte", component: component_6 }
			]
		},

		{
			// blogs/[id].svelte
			pattern: /^\/blogs\/([^/]+?)\/?$/,
			parts: [
				null,
				{ name: "blogs_$id", file: "blogs/[id].svelte", component: component_7, params: match => ({ id: d(match[1]) }) }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter$1(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info =  (assets => () => assets)(JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8')));
    const template =  (str => () => str)(read_template(build_dir));
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message =  'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control:  'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop$1)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs__default['default'].readFileSync(path__default['default'].join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop$1() { }

const app = express__default['default']();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app // You can also use Express
	.use(
		bodyParser.json(),
		compression__default['default']({ threshold: 0 }),
		sirv__default['default']('static', { dev }),
		middleware()
	)

	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
