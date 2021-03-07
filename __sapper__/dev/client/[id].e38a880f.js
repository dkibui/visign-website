import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, x as query_selector_all, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as set_data_dev, n as noop } from './client.42e697de.js';

/* src/routes/blogs/[id].svelte generated by Svelte v3.31.2 */

const file = "src/routes/blogs/[id].svelte";

function create_fragment(ctx) {
	let main;
	let h1;
	let t0_value = /*blog*/ ctx[0].title + "";
	let t0;
	let t1;
	let div;
	let p0;
	let t2;
	let p1;

	let t3_value = new Date(/*blog*/ ctx[0].created_at).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
		hour: "2-digit",
		timeZone: "Africa/Nairobi", // 6 hours behind UTC
		
	}) + "";

	let t3;
	let t4;
	let h4;
	let t5_value = /*blog*/ ctx[0].summary + "";
	let t5;
	let t6;
	let p2;
	let t7_value = /*blog*/ ctx[0].content + "";
	let t7;
	let t8;

	const block = {
		c: function create() {
			main = element("main");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			div = element("div");
			p0 = element("p");
			t2 = space();
			p1 = element("p");
			t3 = text(t3_value);
			t4 = space();
			h4 = element("h4");
			t5 = text(t5_value);
			t6 = space();
			p2 = element("p");
			t7 = text(t7_value);
			t8 = space();
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(main_nodes);
			div = claim_element(main_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p0 = claim_element(div_nodes, "P", { class: true });
			children(p0).forEach(detach_dev);
			t2 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, t3_value);
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			h4 = claim_element(div_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t5 = claim_text(h4_nodes, t5_value);
			h4_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, t7_value);
			p2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10h7psl\"]", document.head);
			head_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1arq9tc");
			add_location(h1, file, 16, 2, 407);
			attr_dev(p0, "class", "title");
			add_location(p0, file, 18, 4, 456);
			attr_dev(p1, "class", "date svelte-1arq9tc");
			add_location(p1, file, 19, 4, 481);
			attr_dev(h4, "class", "svelte-1arq9tc");
			add_location(h4, file, 28, 4, 744);
			add_location(p2, file, 29, 4, 773);
			attr_dev(div, "class", "blog");
			add_location(div, file, 17, 2, 432);
			attr_dev(main, "class", "svelte-1arq9tc");
			add_location(main, file, 15, 0, 397);
			document.title = "Blog";
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, h1);
			append_dev(h1, t0);
			append_dev(main, t1);
			append_dev(main, div);
			append_dev(div, p0);
			append_dev(div, t2);
			append_dev(div, p1);
			append_dev(p1, t3);
			append_dev(div, t4);
			append_dev(div, h4);
			append_dev(h4, t5);
			append_dev(div, t6);
			append_dev(div, p2);
			append_dev(p2, t7);
			insert_dev(target, t8, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*blog*/ 1 && t0_value !== (t0_value = /*blog*/ ctx[0].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*blog*/ 1 && t3_value !== (t3_value = new Date(/*blog*/ ctx[0].created_at).toLocaleString("en-US", {
				month: "long",
				day: "2-digit",
				year: "numeric",
				hour: "2-digit",
				timeZone: "Africa/Nairobi", // 6 hours behind UTC
				
			}) + "")) set_data_dev(t3, t3_value);

			if (dirty & /*blog*/ 1 && t5_value !== (t5_value = /*blog*/ ctx[0].summary + "")) set_data_dev(t5, t5_value);
			if (dirty & /*blog*/ 1 && t7_value !== (t7_value = /*blog*/ ctx[0].content + "")) set_data_dev(t7, t7_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			if (detaching) detach_dev(t8);
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
	const { id } = page.params;
	const result = await this.fetch(`blogs/${id}.json`);
	const fetchedArray = await result.json();
	const blog = fetchedArray[0];
	return { blog };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bidu5D", slots, []);
	let { blog } = $$props;
	const writable_props = ["blog"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("blog" in $$props) $$invalidate(0, blog = $$props.blog);
	};

	$$self.$capture_state = () => ({ preload, blog });

	$$self.$inject_state = $$props => {
		if ("blog" in $$props) $$invalidate(0, blog = $$props.blog);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [blog];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { blog: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*blog*/ ctx[0] === undefined && !("blog" in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'blog'");
		}
	}

	get blog() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set blog(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5lMzhhODgwZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9ncy9baWRdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBwYWdlLnBhcmFtcztcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmV0Y2goYGJsb2dzLyR7aWR9Lmpzb25gKTtcclxuICAgIGNvbnN0IGZldGNoZWRBcnJheSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgICBjb25zdCBibG9nID0gZmV0Y2hlZEFycmF5WzBdO1xyXG4gICAgcmV0dXJuIHsgYmxvZyB9O1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBsZXQgYmxvZztcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuPC9zY3JpcHQ+XHJcblxyXG48bWFpbj5cclxuICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiYmxvZ1wiPlxyXG4gICAgPHAgY2xhc3M9XCJ0aXRsZVwiIC8+XHJcbiAgICA8cCBjbGFzcz1cImRhdGVcIj5cclxuICAgICAge25ldyBEYXRlKGJsb2cuY3JlYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgdGltZVpvbmU6IFwiQWZyaWNhL05haXJvYmlcIiwgLy8gNiBob3VycyBiZWhpbmQgVVRDXHJcbiAgICAgIH0pfVxyXG4gICAgPC9wPlxyXG4gICAgPGg0PntibG9nLnN1bW1hcnl9PC9oND5cclxuICAgIDxwPntibG9nLmNvbnRlbnR9PC9wPlxyXG4gIDwvZGl2PlxyXG48L21haW4+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcbiAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPHN0eWxlPlxyXG4gIG1haW4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC45NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIC5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lCQWdCTyxHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7b0JBSU4sSUFBSSxVQUFDLEdBQUksSUFBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLE9BQU87RUFDL0MsS0FBSyxFQUFFLE1BQU07RUFDYixHQUFHLEVBQUUsU0FBUztFQUNkLElBQUksRUFBRSxTQUFTO0VBQ2YsSUFBSSxFQUFFLFNBQVM7RUFDZixRQUFRLEVBQUUsZ0JBQWdCOzs7Ozs7O3lCQUd6QixHQUFJLElBQUMsT0FBTzs7Ozt5QkFDYixHQUFJLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQWJiLEdBQUksSUFBQyxLQUFLOzswREFJTixJQUFJLFVBQUMsR0FBSSxJQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsT0FBTztJQUMvQyxLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxTQUFTO0lBQ2QsSUFBSSxFQUFFLFNBQVM7SUFDZixJQUFJLEVBQUUsU0FBUztJQUNmLFFBQVEsRUFBRSxnQkFBZ0I7Ozs7K0RBR3pCLEdBQUksSUFBQyxPQUFPOytEQUNiLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE1QkksT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO1NBQ2pDLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTTtPQUNwQixNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO09BQ3JDLFlBQVksU0FBUyxNQUFNLENBQUMsSUFBSTtPQUNoQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUM7VUFDbEIsSUFBSTs7Ozs7O09BS0osSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
