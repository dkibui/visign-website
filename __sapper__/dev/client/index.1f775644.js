import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, A as validate_each_argument, v as validate_slots, e as element, t as text, k as space, c as claim_element, a as children, b as claim_text, f as detach_dev, l as claim_space, m as attr_dev, g as add_location, h as insert_dev, j as append_dev, z as set_data_dev, q as query_selector_all, n as noop, B as destroy_each } from './client.e5de46a1.js';

/* src/routes/jobs/index.svelte generated by Svelte v3.31.2 */

const file = "src/routes/jobs/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (16:4) {#each jobs as job}
function create_each_block(ctx) {
	let div1;
	let p0;
	let t0_value = /*job*/ ctx[1].title + "";
	let t0;
	let t1;
	let p1;
	let t2;
	let t3_value = /*job*/ ctx[1].salary + "";
	let t3;
	let t4;
	let div0;
	let p2;
	let t5_value = /*job*/ ctx[1].company + "";
	let t5;
	let t6;
	let p3;
	let t7_value = /*job*/ ctx[1].location + "";
	let t7;
	let t8;
	let p4;
	let t9_value = /*job*/ ctx[1].category + "";
	let t9;
	let t10;

	const block = {
		c: function create() {
			div1 = element("div");
			p0 = element("p");
			t0 = text(t0_value);
			t1 = space();
			p1 = element("p");
			t2 = text("Ksh. ");
			t3 = text(t3_value);
			t4 = space();
			div0 = element("div");
			p2 = element("p");
			t5 = text(t5_value);
			t6 = space();
			p3 = element("p");
			t7 = text(t7_value);
			t8 = space();
			p4 = element("p");
			t9 = text(t9_value);
			t10 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, "Ksh. ");
			t3 = claim_text(p1_nodes, t3_value);
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p2 = claim_element(div0_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t5 = claim_text(p2_nodes, t5_value);
			p2_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t7 = claim_text(p3_nodes, t7_value);
			p3_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p4 = claim_element(div0_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t9 = claim_text(p4_nodes, t9_value);
			p4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t10 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "title svelte-txaqfl");
			add_location(p0, file, 17, 12, 415);
			attr_dev(p1, "class", "svelte-txaqfl");
			add_location(p1, file, 18, 12, 461);
			attr_dev(p2, "class", "svelte-txaqfl");
			add_location(p2, file, 20, 16, 539);
			attr_dev(p3, "class", "svelte-txaqfl");
			add_location(p3, file, 21, 16, 577);
			attr_dev(p4, "class", "svelte-txaqfl");
			add_location(p4, file, 22, 16, 616);
			attr_dev(div0, "class", "div-grid svelte-txaqfl");
			add_location(div0, file, 19, 12, 499);
			attr_dev(div1, "class", "job svelte-txaqfl");
			add_location(div1, file, 16, 8, 384);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, p0);
			append_dev(p0, t0);
			append_dev(div1, t1);
			append_dev(div1, p1);
			append_dev(p1, t2);
			append_dev(p1, t3);
			append_dev(div1, t4);
			append_dev(div1, div0);
			append_dev(div0, p2);
			append_dev(p2, t5);
			append_dev(div0, t6);
			append_dev(div0, p3);
			append_dev(p3, t7);
			append_dev(div0, t8);
			append_dev(div0, p4);
			append_dev(p4, t9);
			append_dev(div1, t10);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*jobs*/ 1 && t0_value !== (t0_value = /*job*/ ctx[1].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*jobs*/ 1 && t3_value !== (t3_value = /*job*/ ctx[1].salary + "")) set_data_dev(t3, t3_value);
			if (dirty & /*jobs*/ 1 && t5_value !== (t5_value = /*job*/ ctx[1].company + "")) set_data_dev(t5, t5_value);
			if (dirty & /*jobs*/ 1 && t7_value !== (t7_value = /*job*/ ctx[1].location + "")) set_data_dev(t7, t7_value);
			if (dirty & /*jobs*/ 1 && t9_value !== (t9_value = /*job*/ ctx[1].category + "")) set_data_dev(t9, t9_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(16:4) {#each jobs as job}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let h1;
	let t0;
	let t1;
	let t2;
	let each_value = /*jobs*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t0 = text("hello jobs");
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "hello jobs");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			const head_nodes = query_selector_all("[data-svelte=\"svelte-kfiydh\"]", document.head);
			head_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-txaqfl");
			add_location(h1, file, 14, 4, 330);
			attr_dev(div, "class", "card-container svelte-txaqfl");
			add_location(div, file, 13, 0, 296);
			document.title = "Jobs";
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert_dev(target, t2, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*jobs*/ 1) {
				each_value = /*jobs*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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
	const result = await this.fetch("/jobs.json");
	const jobs = await result.json();
	return { jobs };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Jobs", slots, []);
	let { jobs } = $$props;
	const writable_props = ["jobs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Jobs> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("jobs" in $$props) $$invalidate(0, jobs = $$props.jobs);
	};

	$$self.$capture_state = () => ({ preload, jobs });

	$$self.$inject_state = $$props => {
		if ("jobs" in $$props) $$invalidate(0, jobs = $$props.jobs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [jobs];
}

class Jobs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { jobs: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Jobs",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*jobs*/ ctx[0] === undefined && !("jobs" in props)) {
			console.warn("<Jobs> was created without expected prop 'jobs'");
		}
	}

	get jobs() {
		throw new Error("<Jobs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set jobs(value) {
		throw new Error("<Jobs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Jobs;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMWY3NzU2NDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvam9icy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mZXRjaChcIi9qb2JzLmpzb25cIik7XHJcbiAgICAgICAgY29uc3Qgam9icyA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgam9icyB9O1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgbGV0IGpvYnM7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhqb2JzKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cclxuICAgIDxoMT5oZWxsbyBqb2JzPC9oMT5cclxuICAgIHsjZWFjaCBqb2JzIGFzIGpvYn1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiam9iXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57am9iLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPHA+S3NoLiB7am9iLnNhbGFyeX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXYtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e2pvYi5jb21wYW55fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPntqb2IubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e2pvYi5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG48L2Rpdj5cclxuXHJcbjxzdmVsdGU6aGVhZD5cclxuICAgIDx0aXRsZT5Kb2JzPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjU1LCAyNTApO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMzFhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5qb2Ige1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMC4xMjUpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMC43NXJlbTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBaUI4QixHQUFHLElBQUMsS0FBSzs7Ozs7d0JBQ2xCLEdBQUcsSUFBQyxNQUFNOzs7Ozt3QkFFWCxHQUFHLElBQUMsT0FBTzs7Ozt3QkFDWCxHQUFHLElBQUMsUUFBUTs7Ozt3QkFDWixHQUFHLElBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBTEYsR0FBRyxJQUFDLEtBQUs7OERBQ2xCLEdBQUcsSUFBQyxNQUFNOzhEQUVYLEdBQUcsSUFBQyxPQUFPOzhEQUNYLEdBQUcsSUFBQyxRQUFROzhEQUNaLEdBQUcsSUFBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBUHJCLEdBQUk7Ozs7Z0NBQVQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQyxHQUFJOzs7OytCQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFkZ0IsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO09BQ2pDLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7T0FDdEMsSUFBSSxTQUFTLE1BQU0sQ0FBQyxJQUFJO1VBQ3JCLElBQUk7Ozs7OztPQUtOLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
