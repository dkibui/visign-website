import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, E as globals, z as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, h as claim_space, g as detach_dev, k as add_location, l as insert_dev, m as append_dev, y as set_data_dev, j as attr_dev, F as add_render_callback, G as select_option, H as set_input_value, B as listen_dev, I as prevent_default, n as noop, J as destroy_each, K as run_all, L as select_value } from './client.efc5e60f.js';

/* src/routes/admin/create/index.svelte generated by Svelte v3.31.2 */

const { console: console_1 } = globals;
const file = "src/routes/admin/create/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[13] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[13] = i;
	return child_ctx;
}

// (47:10) {#each returnedObject[0] as author, i}
function create_each_block_1(ctx) {
	let option;
	let t0_value = /*author*/ ctx[4].first_name + "";
	let t0;
	let t1;
	let t2_value = /*author*/ ctx[4].last_name + "";
	let t2;

	const block = {
		c: function create() {
			option = element("option");
			t0 = text(t0_value);
			t1 = space();
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			option = claim_element(nodes, "OPTION", { value: true });
			var option_nodes = children(option);
			t0 = claim_text(option_nodes, t0_value);
			t1 = claim_space(option_nodes);
			t2 = claim_text(option_nodes, t2_value);
			option_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			option.__value = ctx[13] + 1;
			option.value = option.__value;
			add_location(option, file, 47, 12, 1086);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t0);
			append_dev(option, t1);
			append_dev(option, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*returnedObject*/ 1 && t0_value !== (t0_value = /*author*/ ctx[4].first_name + "")) set_data_dev(t0, t0_value);
			if (dirty & /*returnedObject*/ 1 && t2_value !== (t2_value = /*author*/ ctx[4].last_name + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(47:10) {#each returnedObject[0] as author, i}",
		ctx
	});

	return block;
}

// (56:10) {#each returnedObject[1] as category, i}
function create_each_block(ctx) {
	let option;
	let t0_value = /*category*/ ctx[5].category + "";
	let t0;
	let p;
	let t1_value = /*i*/ ctx[13] + 1 + "";
	let t1;

	const block = {
		c: function create() {
			option = element("option");
			t0 = text(t0_value);
			p = element("p");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			option = claim_element(nodes, "OPTION", { value: true });
			var option_nodes = children(option);
			t0 = claim_text(option_nodes, t0_value);
			option_nodes.forEach(detach_dev);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			option.__value = ctx[13] + 1;
			option.value = option.__value;
			add_location(option, file, 56, 12, 1389);
			add_location(p, file, 57, 12, 1453);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t0);
			insert_dev(target, p, anchor);
			append_dev(p, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*returnedObject*/ 1 && t0_value !== (t0_value = /*category*/ ctx[5].category + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(56:10) {#each returnedObject[1] as category, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main;
	let div5;
	let h1;
	let t0;
	let t1;
	let form;
	let div0;
	let h40;
	let t2;
	let t3;
	let select0;
	let t4;
	let div1;
	let h41;
	let t5;
	let t6;
	let select1;
	let t7;
	let div2;
	let input0;
	let t8;
	let div3;
	let input1;
	let t9;
	let div4;
	let textarea;
	let t10;
	let button;
	let t11;
	let mounted;
	let dispose;
	let each_value_1 = /*returnedObject*/ ctx[0][0];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*returnedObject*/ ctx[0][1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			main = element("main");
			div5 = element("div");
			h1 = element("h1");
			t0 = text("Post a Blog");
			t1 = space();
			form = element("form");
			div0 = element("div");
			h40 = element("h4");
			t2 = text("Select author");
			t3 = space();
			select0 = element("select");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t4 = space();
			div1 = element("div");
			h41 = element("h4");
			t5 = text("Select category");
			t6 = space();
			select1 = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t7 = space();
			div2 = element("div");
			input0 = element("input");
			t8 = space();
			div3 = element("div");
			input1 = element("input");
			t9 = space();
			div4 = element("div");
			textarea = element("textarea");
			t10 = space();
			button = element("button");
			t11 = text("Submit Form");
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div5 = claim_element(main_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h1 = claim_element(div5_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Post a Blog");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			form = claim_element(div5_nodes, "FORM", {});
			var form_nodes = children(form);
			div0 = claim_element(form_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h40 = claim_element(div0_nodes, "H4", { class: true });
			var h40_nodes = children(h40);
			t2 = claim_text(h40_nodes, "Select author");
			h40_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			select0 = claim_element(div0_nodes, "SELECT", { class: true });
			var select0_nodes = children(select0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(select0_nodes);
			}

			select0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(form_nodes);
			div1 = claim_element(form_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h41 = claim_element(div1_nodes, "H4", { class: true });
			var h41_nodes = children(h41);
			t5 = claim_text(h41_nodes, "Select category");
			h41_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			select1 = claim_element(div1_nodes, "SELECT", { class: true });
			var select1_nodes = children(select1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(select1_nodes);
			}

			select1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(form_nodes);
			div2 = claim_element(form_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input0 = claim_element(div2_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div2_nodes.forEach(detach_dev);
			t8 = claim_space(form_nodes);
			div3 = claim_element(form_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			input1 = claim_element(div3_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div3_nodes.forEach(detach_dev);
			t9 = claim_space(form_nodes);
			div4 = claim_element(form_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			textarea = claim_element(div4_nodes, "TEXTAREA", {
				rows: true,
				placeholder: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t10 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t11 = claim_text(button_nodes, "Submit Form");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-n04aob");
			add_location(h1, file, 41, 4, 852);
			attr_dev(h40, "class", "svelte-n04aob");
			add_location(h40, file, 44, 8, 962);
			attr_dev(select0, "class", "svelte-n04aob");
			if (/*author*/ ctx[4] === void 0) add_render_callback(() => /*select0_change_handler*/ ctx[7].call(select0));
			add_location(select0, file, 45, 8, 994);
			attr_dev(div0, "class", "author svelte-n04aob");
			add_location(div0, file, 43, 6, 932);
			attr_dev(h41, "class", "svelte-n04aob");
			add_location(h41, file, 53, 8, 1259);
			attr_dev(select1, "class", "svelte-n04aob");
			if (/*category*/ ctx[5] === void 0) add_render_callback(() => /*select1_change_handler*/ ctx[8].call(select1));
			add_location(select1, file, 54, 8, 1293);
			attr_dev(div1, "class", "author svelte-n04aob");
			add_location(div1, file, 52, 6, 1229);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Enter blog title");
			attr_dev(input0, "class", "svelte-n04aob");
			add_location(input0, file, 62, 8, 1556);
			attr_dev(div2, "class", "input svelte-n04aob");
			add_location(div2, file, 61, 6, 1527);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "placeholder", "Enter blog summary");
			attr_dev(input1, "class", "svelte-n04aob");
			add_location(input1, file, 65, 8, 1678);
			attr_dev(div3, "class", "input svelte-n04aob");
			add_location(div3, file, 64, 6, 1649);
			attr_dev(textarea, "rows", "10");
			attr_dev(textarea, "placeholder", "Enter blog content");
			attr_dev(textarea, "class", "svelte-n04aob");
			add_location(textarea, file, 72, 8, 1846);
			attr_dev(div4, "class", "input svelte-n04aob");
			add_location(div4, file, 71, 6, 1817);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "svelte-n04aob");
			add_location(button, file, 78, 6, 1986);
			add_location(form, file, 42, 4, 878);
			attr_dev(div5, "class", "form-div");
			add_location(div5, file, 40, 2, 824);
			attr_dev(main, "class", "svelte-n04aob");
			add_location(main, file, 39, 0, 814);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div5);
			append_dev(div5, h1);
			append_dev(h1, t0);
			append_dev(div5, t1);
			append_dev(div5, form);
			append_dev(form, div0);
			append_dev(div0, h40);
			append_dev(h40, t2);
			append_dev(div0, t3);
			append_dev(div0, select0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(select0, null);
			}

			select_option(select0, /*author*/ ctx[4]);
			append_dev(form, t4);
			append_dev(form, div1);
			append_dev(div1, h41);
			append_dev(h41, t5);
			append_dev(div1, t6);
			append_dev(div1, select1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select1, null);
			}

			select_option(select1, /*category*/ ctx[5]);
			append_dev(form, t7);
			append_dev(form, div2);
			append_dev(div2, input0);
			set_input_value(input0, /*title*/ ctx[1]);
			append_dev(form, t8);
			append_dev(form, div3);
			append_dev(div3, input1);
			set_input_value(input1, /*summary*/ ctx[2]);
			append_dev(form, t9);
			append_dev(form, div4);
			append_dev(div4, textarea);
			set_input_value(textarea, /*content*/ ctx[3]);
			append_dev(form, t10);
			append_dev(form, button);
			append_dev(button, t11);

			if (!mounted) {
				dispose = [
					listen_dev(select0, "change", /*select0_change_handler*/ ctx[7]),
					listen_dev(select1, "change", /*select1_change_handler*/ ctx[8]),
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[9]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[10]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[11]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[6]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*returnedObject*/ 1) {
				each_value_1 = /*returnedObject*/ ctx[0][0];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(select0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*author*/ 16) {
				select_option(select0, /*author*/ ctx[4]);
			}

			if (dirty & /*returnedObject*/ 1) {
				each_value = /*returnedObject*/ ctx[0][1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*category*/ 32) {
				select_option(select1, /*category*/ ctx[5]);
			}

			if (dirty & /*title*/ 2 && input0.value !== /*title*/ ctx[1]) {
				set_input_value(input0, /*title*/ ctx[1]);
			}

			if (dirty & /*summary*/ 4 && input1.value !== /*summary*/ ctx[2]) {
				set_input_value(input1, /*summary*/ ctx[2]);
			}

			if (dirty & /*content*/ 8) {
				set_input_value(textarea, /*content*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
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
	const result = await this.fetch("admin/create.json");
	const returnedObject = await result.json();
	return { returnedObject };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Create", slots, []);
	let { returnedObject } = $$props;

	//////////////////////////////////////////////////////////////
	let author;

	let category;
	let title;
	let summary;
	let content;

	// = "Here comes drama"
	function handleSubmit() {
		let data = {
			author,
			category,
			title,
			summary,
			content
		};

		fetch("/admin/create.json", {
			method: "POST", // or 'PUT'
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		console.log(data);
	}

	const writable_props = ["returnedObject"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Create> was created with unknown prop '${key}'`);
	});

	function select0_change_handler() {
		author = select_value(this);
		$$invalidate(4, author);
	}

	function select1_change_handler() {
		category = select_value(this);
		$$invalidate(5, category);
	}

	function input0_input_handler() {
		title = this.value;
		$$invalidate(1, title);
	}

	function input1_input_handler() {
		summary = this.value;
		$$invalidate(2, summary);
	}

	function textarea_input_handler() {
		content = this.value;
		$$invalidate(3, content);
	}

	$$self.$$set = $$props => {
		if ("returnedObject" in $$props) $$invalidate(0, returnedObject = $$props.returnedObject);
	};

	$$self.$capture_state = () => ({
		preload,
		returnedObject,
		author,
		category,
		title,
		summary,
		content,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ("returnedObject" in $$props) $$invalidate(0, returnedObject = $$props.returnedObject);
		if ("author" in $$props) $$invalidate(4, author = $$props.author);
		if ("category" in $$props) $$invalidate(5, category = $$props.category);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
		if ("summary" in $$props) $$invalidate(2, summary = $$props.summary);
		if ("content" in $$props) $$invalidate(3, content = $$props.content);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		returnedObject,
		title,
		summary,
		content,
		author,
		category,
		handleSubmit,
		select0_change_handler,
		select1_change_handler,
		input0_input_handler,
		input1_input_handler,
		textarea_input_handler
	];
}

class Create extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { returnedObject: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Create",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*returnedObject*/ ctx[0] === undefined && !("returnedObject" in props)) {
			console_1.warn("<Create> was created without expected prop 'returnedObject'");
		}
	}

	get returnedObject() {
		throw new Error("<Create>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set returnedObject(value) {
		throw new Error("<Create>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Create;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2IzZjJmN2YuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWRtaW4vY3JlYXRlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZldGNoKFwiYWRtaW4vY3JlYXRlLmpzb25cIik7XHJcbiAgICBjb25zdCByZXR1cm5lZE9iamVjdCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgICByZXR1cm4geyByZXR1cm5lZE9iamVjdCB9O1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBsZXQgcmV0dXJuZWRPYmplY3Q7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBsZXQgYXV0aG9yO1xyXG4gIGxldCBjYXRlZ29yeTtcclxuICBsZXQgdGl0bGU7XHJcbiAgbGV0IHN1bW1hcnk7XHJcbiAgbGV0IGNvbnRlbnQ7XHJcbiAgLy8gPSBcIkhlcmUgY29tZXMgZHJhbWFcIlxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgYXV0aG9yLFxyXG4gICAgICBjYXRlZ29yeSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHN1bW1hcnksXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiL2FkbWluL2NyZWF0ZS5qc29uXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gb3IgJ1BVVCdcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48bWFpbj5cclxuICA8ZGl2IGNsYXNzPVwiZm9ybS1kaXZcIj5cclxuICAgIDxoMT5Qb3N0IGEgQmxvZzwvaDE+XHJcbiAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cclxuICAgICAgICA8aDQ+U2VsZWN0IGF1dGhvcjwvaDQ+XHJcbiAgICAgICAgPHNlbGVjdCBiaW5kOnZhbHVlPXthdXRob3J9PlxyXG4gICAgICAgICAgeyNlYWNoIHJldHVybmVkT2JqZWN0WzBdIGFzIGF1dGhvciwgaX1cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aSArIDF9PnthdXRob3IuZmlyc3RfbmFtZX0ge2F1dGhvci5sYXN0X25hbWV9PC9vcHRpb25cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgey9lYWNofVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgIDxoND5TZWxlY3QgY2F0ZWdvcnk8L2g0PlxyXG4gICAgICAgIDxzZWxlY3QgYmluZDp2YWx1ZT17Y2F0ZWdvcnl9PlxyXG4gICAgICAgICAgeyNlYWNoIHJldHVybmVkT2JqZWN0WzFdIGFzIGNhdGVnb3J5LCBpfVxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpICsgMX0+e2NhdGVnb3J5LmNhdGVnb3J5fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8cD57aSArIDF9PC9wPlxyXG4gICAgICAgICAgey9lYWNofVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3RpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYmxvZyB0aXRsZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGJpbmQ6dmFsdWU9e3N1bW1hcnl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJsb2cgc3VtbWFyeVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgYmluZDp2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJsb2cgY29udGVudFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBTdWJtaXQgRm9ybSA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC9tYWluPlxyXG5cclxuPHN0eWxlPlxyXG4gIG1haW4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvciBzZWxlY3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNHJlbSAwLjc1cmVtIDAuOGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM4MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM2ZDZkNmQ7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDFweCAwIDFweCByZ2JhKDAsMCwwLC4wNCk7ICovXHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxuICAgIC8qIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsI2U1ZTVlNSAxMDAlKTsgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMC42NWVtIGF1dG8sIDEwMCU7XHJcbiAgICBmaWxsOiAjMWFlNWMxO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzODA7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICM2ZDZkNmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgb3V0bGluZTogNnB4IHNvbGlkIGhzbGEoMTc1LCAxMDAlLCA3NSUsIDAuMjUpO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBvdXRsaW5lOiA2cHggc29saWQgaHNsYSgxNzUsIDEwMCUsIDc1JSwgMC4yNSk7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMC43NTVyZW0gMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFlNWMxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQStDbUMsR0FBTSxJQUFDLFVBQVU7OzsyQkFBRyxHQUFNLElBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUE1QyxHQUFDLE9BQUcsQ0FBQzs7Ozs7Ozs7Ozs7MkVBQUcsR0FBTSxJQUFDLFVBQVU7MkVBQUcsR0FBTSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFTcEMsR0FBUSxJQUFDLFFBQVE7OztzQkFDcEMsR0FBQyxPQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQURNLEdBQUMsT0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7NkVBQUcsR0FBUSxJQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FWbkMsR0FBYyxJQUFDLENBQUM7Ozs7a0NBQXJCLE1BQUk7Ozs7cUNBU0MsR0FBYyxJQUFDLENBQUM7Ozs7Z0NBQXJCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBVlksR0FBTTs7Ozs7OztvQkFTTixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBVFIsR0FBTTs7Ozs7Ozs7Ozs7O3VDQVNOLEdBQVE7Ozs7cUNBUVQsR0FBSzs7Ozt1Q0FJVixHQUFPOzs7O3lDQU9QLEdBQU87Ozs7Ozs7Ozs7OztpRUEvQk8sR0FBWTs7Ozs7Ozs7c0NBSS9CLEdBQWMsSUFBQyxDQUFDOzs7O2lDQUFyQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUFKLE1BQUk7Ozs7c0NBRFksR0FBTTs7OztvQ0FVakIsR0FBYyxJQUFDLENBQUM7Ozs7K0JBQXJCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozt3Q0FEWSxHQUFROzs7eURBUVQsR0FBSztzQ0FBTCxHQUFLOzs7NkRBSVYsR0FBTzt3Q0FBUCxHQUFPOzs7OzBDQU9QLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF4RUwsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO09BQ25DLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQjtPQUM3QyxjQUFjLFNBQVMsTUFBTSxDQUFDLElBQUk7VUFDL0IsY0FBYzs7Ozs7O09BS2QsY0FBYzs7O0tBRXJCLE1BQU07O0tBQ04sUUFBUTtLQUNSLEtBQUs7S0FDTCxPQUFPO0tBQ1AsT0FBTzs7O1VBR0YsWUFBWTtNQUNmLElBQUk7R0FDTixNQUFNO0dBQ04sUUFBUTtHQUNSLEtBQUs7R0FDTCxPQUFPO0dBQ1AsT0FBTzs7O0VBR1QsS0FBSyxDQUFDLG9CQUFvQjtHQUN4QixNQUFNLEVBQUUsTUFBTTtHQUNkLE9BQU8sSUFDTCxjQUFjLEVBQUUsa0JBQWtCO0dBRXBDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7OztFQUczQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7Ozs7Ozs7RUFVUSxNQUFNOzs7OztFQVNOLFFBQVE7Ozs7O0VBUVQsS0FBSzs7Ozs7RUFJVixPQUFPOzs7OztFQU9QLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
