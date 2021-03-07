import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, M as goto, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, H as set_input_value, B as listen_dev, n as noop, K as run_all } from './client.c788b648.js';

/* src/routes/admin/update/[id].svelte generated by Svelte v3.31.2 */
const file = "src/routes/admin/update/[id].svelte";

function create_fragment(ctx) {
	let main;
	let div3;
	let h1;
	let t0;
	let t1;
	let h4;
	let t2;
	let t3;
	let form;
	let div0;
	let input0;
	let t4;
	let div1;
	let input1;
	let t5;
	let div2;
	let textarea;
	let t6;
	let button;
	let t7;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			main = element("main");
			div3 = element("div");
			h1 = element("h1");
			t0 = text("Update Blog");
			t1 = space();
			h4 = element("h4");
			t2 = text("Blog author and category will not be updated");
			t3 = space();
			form = element("form");
			div0 = element("div");
			input0 = element("input");
			t4 = space();
			div1 = element("div");
			input1 = element("input");
			t5 = space();
			div2 = element("div");
			textarea = element("textarea");
			t6 = space();
			button = element("button");
			t7 = text("Submit Form");
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div3 = claim_element(main_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Update Blog");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			h4 = claim_element(div3_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t2 = claim_text(h4_nodes, "Blog author and category will not be updated");
			h4_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			form = claim_element(div3_nodes, "FORM", {});
			var form_nodes = children(form);
			div0 = claim_element(form_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div0_nodes.forEach(detach_dev);
			t4 = claim_space(form_nodes);
			div1 = claim_element(form_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div1_nodes.forEach(detach_dev);
			t5 = claim_space(form_nodes);
			div2 = claim_element(form_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			textarea = claim_element(div2_nodes, "TEXTAREA", {
				rows: true,
				placeholder: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t6 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "Submit Form");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1st9hmw");
			add_location(h1, file, 42, 4, 1009);
			attr_dev(h4, "class", "svelte-1st9hmw");
			add_location(h4, file, 43, 4, 1035);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Enter blog title");
			attr_dev(input0, "class", "svelte-1st9hmw");
			add_location(input0, file, 46, 8, 1162);
			attr_dev(div0, "class", "input svelte-1st9hmw");
			add_location(div0, file, 45, 6, 1133);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "placeholder", "Enter blog summary");
			attr_dev(input1, "class", "svelte-1st9hmw");
			add_location(input1, file, 49, 8, 1284);
			attr_dev(div1, "class", "input svelte-1st9hmw");
			add_location(div1, file, 48, 6, 1255);
			attr_dev(textarea, "rows", "10");
			attr_dev(textarea, "placeholder", "Enter blog content");
			attr_dev(textarea, "class", "svelte-1st9hmw");
			add_location(textarea, file, 56, 8, 1452);
			attr_dev(div2, "class", "input svelte-1st9hmw");
			add_location(div2, file, 55, 6, 1423);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "svelte-1st9hmw");
			add_location(button, file, 63, 6, 1626);
			add_location(form, file, 44, 4, 1094);
			attr_dev(div3, "class", "form-div svelte-1st9hmw");
			add_location(div3, file, 41, 2, 981);
			attr_dev(main, "class", "svelte-1st9hmw");
			add_location(main, file, 40, 0, 971);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div3);
			append_dev(div3, h1);
			append_dev(h1, t0);
			append_dev(div3, t1);
			append_dev(div3, h4);
			append_dev(h4, t2);
			append_dev(div3, t3);
			append_dev(div3, form);
			append_dev(form, div0);
			append_dev(div0, input0);
			set_input_value(input0, /*title*/ ctx[0]);
			append_dev(form, t4);
			append_dev(form, div1);
			append_dev(div1, input1);
			set_input_value(input1, /*summary*/ ctx[1]);
			append_dev(form, t5);
			append_dev(form, div2);
			append_dev(div2, textarea);
			set_input_value(textarea, /*content*/ ctx[2]);
			append_dev(form, t6);
			append_dev(form, button);
			append_dev(button, t7);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[6]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[7]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[8]),
					listen_dev(form, "submit", /*handleSubmit*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1 && input0.value !== /*title*/ ctx[0]) {
				set_input_value(input0, /*title*/ ctx[0]);
			}

			if (dirty & /*summary*/ 2 && input1.value !== /*summary*/ ctx[1]) {
				set_input_value(input1, /*summary*/ ctx[1]);
			}

			if (dirty & /*content*/ 4) {
				set_input_value(textarea, /*content*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			mounted = false;
			run_all(dispose);
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
	const result = await this.fetch(`admin/update/${id}.json`);
	const fetchedArray = await result.json();
	const blog = fetchedArray[0];
	return { blog, id };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bidu5D", slots, []);
	let { blog } = $$props;
	let { id } = $$props;

	////////////////////////////////////////////////////////////
	let title = blog.title;

	let summary = blog.summary;
	let content = blog.content;

	function handleSubmit() {
		let data = { title, summary, content };

		//////////////////////////////////////////////////
		fetch(`admin/update/${id}.json`, {
			method: "PATCH", // or 'PUT'
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		goto("/admin");
	}

	const writable_props = ["blog", "id"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		title = this.value;
		$$invalidate(0, title);
	}

	function input1_input_handler() {
		summary = this.value;
		$$invalidate(1, summary);
	}

	function textarea_input_handler() {
		content = this.value;
		$$invalidate(2, content);
	}

	$$self.$$set = $$props => {
		if ("blog" in $$props) $$invalidate(4, blog = $$props.blog);
		if ("id" in $$props) $$invalidate(5, id = $$props.id);
	};

	$$self.$capture_state = () => ({
		preload,
		goto,
		blog,
		id,
		title,
		summary,
		content,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ("blog" in $$props) $$invalidate(4, blog = $$props.blog);
		if ("id" in $$props) $$invalidate(5, id = $$props.id);
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("summary" in $$props) $$invalidate(1, summary = $$props.summary);
		if ("content" in $$props) $$invalidate(2, content = $$props.content);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		title,
		summary,
		content,
		handleSubmit,
		blog,
		id,
		input0_input_handler,
		input1_input_handler,
		textarea_input_handler
	];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { blog: 4, id: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*blog*/ ctx[4] === undefined && !("blog" in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'blog'");
		}

		if (/*id*/ ctx[5] === undefined && !("id" in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'id'");
		}
	}

	get blog() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set blog(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS44YjhiZGU1OS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hZG1pbi91cGRhdGUvW2lkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcGFnZS5wYXJhbXM7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZldGNoKGBhZG1pbi91cGRhdGUvJHtpZH0uanNvbmApO1xyXG4gICAgY29uc3QgZmV0Y2hlZEFycmF5ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgIGNvbnN0IGJsb2cgPSBmZXRjaGVkQXJyYXlbMF07XHJcbiAgICBjb25zdCBleHBvcnRzID0geyBibG9nLCBpZCB9O1xyXG4gICAgcmV0dXJuIHsgYmxvZywgaWQgfTtcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBnb3RvIH0gZnJvbSBcIkBzYXBwZXIvYXBwXCI7XHJcbiAgZXhwb3J0IGxldCBibG9nO1xyXG4gIGV4cG9ydCBsZXQgaWQ7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGxldCB0aXRsZSA9IGJsb2cudGl0bGU7XHJcbiAgbGV0IHN1bW1hcnkgPSBibG9nLnN1bW1hcnk7XHJcbiAgbGV0IGNvbnRlbnQgPSBibG9nLmNvbnRlbnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgc3VtbWFyeSxcclxuICAgICAgY29udGVudCxcclxuICAgIH07XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGZldGNoKGBhZG1pbi91cGRhdGUvJHtpZH0uanNvbmAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsIC8vIG9yICdQVVQnXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICAgIGdvdG8oXCIvYWRtaW5cIik7XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxtYWluPlxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWRpdlwiPlxyXG4gICAgPGgxPlVwZGF0ZSBCbG9nPC9oMT5cclxuICAgIDxoND5CbG9nIGF1dGhvciBhbmQgY2F0ZWdvcnkgd2lsbCBub3QgYmUgdXBkYXRlZDwvaDQ+XHJcbiAgICA8Zm9ybSBvbjpzdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXt0aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGJsb2cgdGl0bGVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBiaW5kOnZhbHVlPXtzdW1tYXJ5fVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBibG9nIHN1bW1hcnlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGJpbmQ6dmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBibG9nIGNvbnRlbnRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIDxhIGhyZWY9XCIvYmxvZ3NcIj4gLS0+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBTdWJtaXQgRm9ybSA8L2J1dHRvbj5cclxuICAgICAgPCEtLSA8L2E+IC0tPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L21haW4+XHJcblxyXG48c3R5bGU+XHJcbiAgbWFpbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZGl2IHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM4MDtcclxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBvdXRsaW5lOiA2cHggc29saWQgaHNsYSgxNzUsIDEwMCUsIDc1JSwgMC4yNSk7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIG91dGxpbmU6IDZweCBzb2xpZCBoc2xhKDE3NSwgMTAwJSwgNzUlLCAwLjI1KTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjc1NXJlbSAxLjJyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWU1YzE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC45NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQThDMkIsR0FBSzs7Ozt1Q0FJVixHQUFPOzs7O3lDQU9QLEdBQU87Ozs7Ozs7Ozs7aURBYlIsR0FBWTs7Ozs7Ozt5REFFTixHQUFLO3NDQUFMLEdBQUs7Ozs2REFJVixHQUFPO3dDQUFQLEdBQU87Ozs7MENBT1AsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF4REwsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO1NBQ2pDLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTTtPQUNwQixNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLEVBQUU7T0FDNUMsWUFBWSxTQUFTLE1BQU0sQ0FBQyxJQUFJO09BQ2hDLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQztVQUVsQixJQUFJLEVBQUUsRUFBRTs7Ozs7O09BTVIsSUFBSTtPQUNKLEVBQUU7OztLQUdULEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7S0FDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0tBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTzs7VUFFakIsWUFBWTtNQUNmLElBQUksS0FDTixLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU87OztFQUlULEtBQUssaUJBQWlCLEVBQUU7R0FDdEIsTUFBTSxFQUFFLE9BQU87R0FDZixPQUFPLElBQ0wsY0FBYyxFQUFFLGtCQUFrQjtHQUVwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7RUFFM0IsSUFBSSxDQUFDLFFBQVE7Ozs7Ozs7Ozs7RUFVVSxLQUFLOzs7OztFQUlWLE9BQU87Ozs7O0VBT1AsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
