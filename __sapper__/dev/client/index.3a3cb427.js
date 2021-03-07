import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, z as validate_each_argument, A as validate_each_keys, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, B as listen_dev, y as set_data_dev, x as query_selector_all, C as update_keyed_each, n as noop, D as destroy_block } from './client.bdeb8906.js';

/* src/routes/admin/index.svelte generated by Svelte v3.31.2 */

const file = "src/routes/admin/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (28:4) {#each blogs as blog (blog.id)}
function create_each_block(key_1, ctx) {
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
	let a;
	let button0;
	let t6;
	let a_href_value;
	let t7;
	let button1;
	let t8;
	let button1_id_value;
	let t9;
	let mounted;
	let dispose;

	const block = {
		key: key_1,
		first: null,
		c: function create() {
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
			a = element("a");
			button0 = element("button");
			t6 = text("Edit");
			t7 = space();
			button1 = element("button");
			t8 = text("Delete");
			t9 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
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
			t5 = claim_space(div_nodes);
			a = claim_element(div_nodes, "A", { href: true });
			var a_nodes = children(a);
			button0 = claim_element(a_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, "Edit");
			button0_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { id: true, class: true });
			var button1_nodes = children(button1);
			t8 = claim_text(button1_nodes, "Delete");
			button1_nodes.forEach(detach_dev);
			t9 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "title svelte-3i7vqz");
			add_location(p0, file, 29, 8, 680);
			attr_dev(p1, "class", "date svelte-3i7vqz");
			add_location(p1, file, 30, 8, 723);
			attr_dev(p2, "class", "svelte-3i7vqz");
			add_location(p2, file, 39, 8, 1022);
			attr_dev(button0, "class", "green svelte-3i7vqz");
			add_location(button0, file, 41, 10, 1099);
			attr_dev(a, "href", a_href_value = "/admin/update/" + /*blog*/ ctx[1].id);
			add_location(a, file, 40, 8, 1053);
			attr_dev(button1, "id", button1_id_value = /*blog*/ ctx[1].id);
			attr_dev(button1, "class", "red svelte-3i7vqz");
			add_location(button1, file, 43, 8, 1158);
			attr_dev(div, "class", "blog svelte-3i7vqz");
			add_location(div, file, 28, 6, 652);
			this.first = div;
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, t0);
			append_dev(div, t1);
			append_dev(div, p1);
			append_dev(p1, t2);
			append_dev(div, t3);
			append_dev(div, p2);
			append_dev(p2, t4);
			append_dev(div, t5);
			append_dev(div, a);
			append_dev(a, button0);
			append_dev(button0, t6);
			append_dev(div, t7);
			append_dev(div, button1);
			append_dev(button1, t8);
			append_dev(div, t9);

			if (!mounted) {
				dispose = listen_dev(button1, "click", handleDelete, false, false, false);
				mounted = true;
			}
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

			if (dirty & /*blogs*/ 1 && a_href_value !== (a_href_value = "/admin/update/" + /*blog*/ ctx[1].id)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*blogs*/ 1 && button1_id_value !== (button1_id_value = /*blog*/ ctx[1].id)) {
				attr_dev(button1, "id", button1_id_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
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
			attr_dev(h1, "class", "svelte-3i7vqz");
			add_location(h1, file, 26, 4, 582);
			attr_dev(div, "class", "card-container width svelte-3i7vqz");
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
			if (dirty & /*blogs, handleDelete, Date*/ 1) {
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
	const result = await this.fetch("admin.json");
	const blogs = await result.json();
	return { blogs };
}

async function handleDelete(e) {
	let id = e.target.id;
	let data = { id };

	await fetch("admin.json", {
		method: "PUT", // or 'PUT'
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Admin", slots, []);
	let { blogs } = $$props;
	const writable_props = ["blogs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Admin> was created with unknown prop '${key}'`);
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

class Admin extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { blogs: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Admin",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*blogs*/ ctx[0] === undefined && !("blogs" in props)) {
			console.warn("<Admin> was created without expected prop 'blogs'");
		}
	}

	get blogs() {
		throw new Error("<Admin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set blogs(value) {
		throw new Error("<Admin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Admin;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2EzY2I0MjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWRtaW4vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmV0Y2goXCJhZG1pbi5qc29uXCIpO1xyXG4gICAgY29uc3QgYmxvZ3MgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgYmxvZ3MgfTtcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgbGV0IGJsb2dzO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoZSkge1xyXG4gICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICBsZXQgZGF0YSA9IHsgaWQgfTtcclxuICAgIGF3YWl0IGZldGNoKFwiYWRtaW4uanNvblwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIiwgLy8gb3IgJ1BVVCdcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48bWFpbj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXIgd2lkdGhcIj5cclxuICAgIDxoMT5PdXIgcmVjZW50IGJsb2dzPC9oMT5cclxuICAgIHsjZWFjaCBibG9ncyBhcyBibG9nIChibG9nLmlkKX1cclxuICAgICAgPGRpdiBjbGFzcz1cImJsb2dcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e2Jsb2cudGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgICAgICAge25ldyBEYXRlKGJsb2cuY3JlYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogXCJBZnJpY2EvTmFpcm9iaVwiLCAvLyA2IGhvdXJzIGJlaGluZCBVVENcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD57YmxvZy5zdW1tYXJ5fTwvcD5cclxuICAgICAgICA8YSBocmVmPVwiL2FkbWluL3VwZGF0ZS97YmxvZy5pZH1cIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJncmVlblwiPkVkaXQ8L2J1dHRvbj48L2FcclxuICAgICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD17YmxvZy5pZH0gb246Y2xpY2s9e2hhbmRsZURlbGV0ZX0gY2xhc3M9XCJyZWRcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB7L2VhY2h9XHJcbiAgPC9kaXY+XHJcbjwvbWFpbj5cclxuXHJcbjxzdmVsdGU6aGVhZD5cclxuICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPHN0eWxlPlxyXG4gIC53aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMWE7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmJsb2cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MSwgNTEsIDUxLCAwLjEyNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNHJlbTtcclxuICB9XHJcblxyXG4gIC5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMS4ycmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBzb2xpZCAycHggcmdiYSgwLCAwLCAwLCAwLjEyNzUpO1xyXG4gICAgLyogb3V0bGluZS1vZmZzZXQ6IDFweDsgKi9cclxuICB9XHJcblxyXG4gIGJ1dHRvbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC43KTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt5QkE2QjBCLEdBQUksSUFBQyxLQUFLOzs7OztvQkFFckIsSUFBSSxVQUFDLEdBQUksSUFBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLE9BQU87RUFDL0MsS0FBSyxFQUFFLE1BQU07RUFDYixHQUFHLEVBQUUsU0FBUztFQUNkLElBQUksRUFBRSxTQUFTO0VBQ2YsSUFBSSxFQUFFLFNBQVM7RUFDZixRQUFRLEVBQUUsZ0JBQWdCOzs7Ozs7O3lCQUcxQixHQUFJLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQUNRLEdBQUksSUFBQyxFQUFFOzt1REFHbkIsR0FBSSxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FBWSxZQUFZOzs7Ozs7Z0VBZHpCLEdBQUksSUFBQyxLQUFLOzsyREFFckIsSUFBSSxVQUFDLEdBQUksSUFBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLE9BQU87SUFDL0MsS0FBSyxFQUFFLE1BQU07SUFDYixHQUFHLEVBQUUsU0FBUztJQUNkLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLFNBQVM7SUFDZixRQUFRLEVBQUUsZ0JBQWdCOzs7O2dFQUcxQixHQUFJLElBQUMsT0FBTzs7MkZBQ1EsR0FBSSxJQUFDLEVBQUU7Ozs7Z0ZBR25CLEdBQUksSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQWhCaEIsR0FBSzs7aUNBQVUsR0FBSSxJQUFDLEVBQUU7OztnQ0FBM0IsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTFCUSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87T0FDbkMsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtPQUN0QyxLQUFLLFNBQVMsTUFBTSxDQUFDLElBQUk7VUFDdEIsS0FBSzs7O2VBT0QsWUFBWSxDQUFDLENBQUM7S0FDdkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUNoQixJQUFJLEtBQUssRUFBRTs7T0FDVCxLQUFLLENBQUMsWUFBWTtFQUN0QixNQUFNLEVBQUUsS0FBSztFQUNiLE9BQU8sSUFDTCxjQUFjLEVBQUUsa0JBQWtCO0VBRXBDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7Ozs7T0FWbEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
