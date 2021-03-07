import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, z as validate_each_argument, A as validate_each_keys, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as set_data_dev, x as query_selector_all, C as update_keyed_each, n as noop, D as destroy_block } from './client.690a13b2.js';

/* src/routes/blogs/index.svelte generated by Svelte v3.31.2 */

const file = "src/routes/blogs/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (28:4) {#each blogs as blog (blog.id)}
function create_each_block(key_1, ctx) {
	let a;
	let div;
	let p0;
	let t0_value = /*blog*/ ctx[1].title + "";
	let t0;
	let t1;
	let p1;

	let t2_value = new Date(/*blog*/ ctx[1].created_at).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		hour: "2-digit",
		timeZone: "Africa/Nairobi", // 6 hours behind UTC
		
	}) + "";

	let t2;
	let t3;
	let p2;
	let t4_value = /*blog*/ ctx[1].summary + "";
	let t4;
	let t5;
	let a_href_value;

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			a = element("a");
			div = element("div");
			p0 = element("p");
			t0 = text(t0_value);
			t1 = space();
			p1 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p2 = element("p");
			t4 = text(t4_value);
			t5 = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div = claim_element(a_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, t2_value);
			p1_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t4 = claim_text(p2_nodes, t4_value);
			p2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t5 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "title svelte-1ion1hp");
			add_location(p0, file, 30, 10, 719);
			attr_dev(p1, "class", "date svelte-1ion1hp");
			add_location(p1, file, 31, 10, 764);
			attr_dev(p2, "class", "svelte-1ion1hp");
			add_location(p2, file, 40, 10, 1081);
			attr_dev(div, "class", "blog svelte-1ion1hp");
			add_location(div, file, 29, 8, 689);
			attr_dev(a, "href", a_href_value = "/blogs/" + /*blog*/ ctx[1].id);
			attr_dev(a, "class", "svelte-1ion1hp");
			add_location(a, file, 28, 6, 652);
			this.first = a;
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, div);
			append_dev(div, p0);
			append_dev(p0, t0);
			append_dev(div, t1);
			append_dev(div, p1);
			append_dev(p1, t2);
			append_dev(div, t3);
			append_dev(div, p2);
			append_dev(p2, t4);
			append_dev(a, t5);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*blogs*/ 1 && t0_value !== (t0_value = /*blog*/ ctx[1].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*blogs*/ 1 && t2_value !== (t2_value = new Date(/*blog*/ ctx[1].created_at).toLocaleString("en-US", {
				month: "long",
				day: "2-digit",
				year: "numeric",
				hour: "2-digit",
				timeZone: "Africa/Nairobi", // 6 hours behind UTC
				
			}) + "")) set_data_dev(t2, t2_value);

			if (dirty & /*blogs*/ 1 && t4_value !== (t4_value = /*blog*/ ctx[1].summary + "")) set_data_dev(t4, t4_value);

			if (dirty & /*blogs*/ 1 && a_href_value !== (a_href_value = "/blogs/" + /*blog*/ ctx[1].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(28:4) {#each blogs as blog (blog.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main;
	let div;
	let h1;
	let t0;
	let t1;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t2;
	let each_value = /*blogs*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*blog*/ ctx[1].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			main = element("main");
			div = element("div");
			h1 = element("h1");
			t0 = text("Our recent blogs");
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			div = claim_element(main_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Our recent blogs");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1th8gdc\"]", document.head);
			head_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1ion1hp");
			add_location(h1, file, 26, 4, 582);
			attr_dev(div, "class", "card-container width svelte-1ion1hp");
			add_location(div, file, 25, 2, 542);
			add_location(main, file, 24, 0, 532);
			document.title = "Blogs";
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert_dev(target, t2, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*blogs, Date*/ 1) {
				each_value = /*blogs*/ ctx[0];
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	const result = await this.fetch("blogs.json");
	const blogs = await result.json();
	return { blogs };
}

async function handleDelete(e) {
	let id = e.target.id;
	let data = { id };

	await fetch("blogs.json", {
		method: "PUT", // or 'PUT'
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Blogs", slots, []);
	let { blogs } = $$props;
	const writable_props = ["blogs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blogs> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("blogs" in $$props) $$invalidate(0, blogs = $$props.blogs);
	};

	$$self.$capture_state = () => ({ preload, blogs, handleDelete });

	$$self.$inject_state = $$props => {
		if ("blogs" in $$props) $$invalidate(0, blogs = $$props.blogs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [blogs];
}

class Blogs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { blogs: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blogs",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*blogs*/ ctx[0] === undefined && !("blogs" in props)) {
			console.warn("<Blogs> was created without expected prop 'blogs'");
		}
	}

	get blogs() {
		throw new Error("<Blogs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set blogs(value) {
		throw new Error("<Blogs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blogs;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGYwOTBjOWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZ3MvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmV0Y2goXCJibG9ncy5qc29uXCIpO1xyXG4gICAgY29uc3QgYmxvZ3MgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgYmxvZ3MgfTtcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgbGV0IGJsb2dzO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoZSkge1xyXG4gICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICBsZXQgZGF0YSA9IHsgaWQgfTtcclxuICAgIGF3YWl0IGZldGNoKFwiYmxvZ3MuanNvblwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIiwgLy8gb3IgJ1BVVCdcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48bWFpbj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXIgd2lkdGhcIj5cclxuICAgIDxoMT5PdXIgcmVjZW50IGJsb2dzPC9oMT5cclxuICAgIHsjZWFjaCBibG9ncyBhcyBibG9nIChibG9nLmlkKX1cclxuICAgICAgPGEgaHJlZj1cIi9ibG9ncy97YmxvZy5pZH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPntibG9nLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICB7bmV3IERhdGUoYmxvZy5jcmVhdGVkX2F0KS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgICAgICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgICB0aW1lWm9uZTogXCJBZnJpY2EvTmFpcm9iaVwiLCAvLyA2IGhvdXJzIGJlaGluZCBVVENcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD57YmxvZy5zdW1tYXJ5fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hPlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG48L21haW4+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcbiAgPHRpdGxlPkJsb2dzPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxzdHlsZT5cclxuICAud2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzFhOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5ibG9nIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMC4xMjUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC45NXJlbTtcclxuICAgIHBhZGRpbmc6IDEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzRyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTM3NXMgZWFzZTtcclxuICB9XHJcblxyXG4gIC5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGEgLmJsb2c6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDEycHggI2Y1ZjVmNSwgMnB4IDJweCAxMnB4ICNlY2VjZWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQThCNEIsR0FBSSxJQUFDLEtBQUs7Ozs7O29CQUVyQixJQUFJLFVBQUMsR0FBSSxJQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsT0FBTztFQUMvQyxLQUFLLEVBQUUsTUFBTTtFQUNiLEdBQUcsRUFBRSxTQUFTO0VBQ2QsSUFBSSxFQUFFLFNBQVM7RUFDZixJQUFJLEVBQUUsU0FBUztFQUNmLFFBQVEsRUFBRSxnQkFBZ0I7Ozs7Ozs7eUJBRzFCLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQVpILEdBQUksSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFFRixHQUFJLElBQUMsS0FBSzs7MkRBRXJCLElBQUksVUFBQyxHQUFJLElBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxPQUFPO0lBQy9DLEtBQUssRUFBRSxNQUFNO0lBQ2IsR0FBRyxFQUFFLFNBQVM7SUFDZCxJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSxTQUFTO0lBQ2YsUUFBUSxFQUFFLGdCQUFnQjs7OztnRUFHMUIsR0FBSSxJQUFDLE9BQU87O29GQVpILEdBQUksSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFEbkIsR0FBSzs7aUNBQVUsR0FBSSxJQUFDLEVBQUU7OztnQ0FBM0IsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTFCUSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87T0FDbkMsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtPQUN0QyxLQUFLLFNBQVMsTUFBTSxDQUFDLElBQUk7VUFDdEIsS0FBSzs7O2VBT0QsWUFBWSxDQUFDLENBQUM7S0FDdkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUNoQixJQUFJLEtBQUssRUFBRTs7T0FDVCxLQUFLLENBQUMsWUFBWTtFQUN0QixNQUFNLEVBQUUsS0FBSztFQUNiLE9BQU8sSUFDTCxjQUFjLEVBQUUsa0JBQWtCO0VBRXBDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7Ozs7T0FWbEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
