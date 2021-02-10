import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, C as globals, e as element, t as text, k as space, c as claim_element, a as children, b as claim_text, f as detach_dev, l as claim_space, m as attr_dev, g as add_location, h as insert_dev, j as append_dev, D as set_input_value, o as listen_dev, E as prevent_default, n as noop, F as run_all } from './client.7c756404.js';

/* src/routes/jobs/create.svelte generated by Svelte v3.31.2 */

const { console: console_1 } = globals;
const file = "src/routes/jobs/create.svelte";

function create_fragment(ctx) {
	let div6;
	let h1;
	let t0;
	let t1;
	let form;
	let div0;
	let input0;
	let t2;
	let div1;
	let input1;
	let t3;
	let div2;
	let input2;
	let t4;
	let div3;
	let input3;
	let t5;
	let div4;
	let input4;
	let t6;
	let div5;
	let textarea;
	let t7;
	let button;
	let t8;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div6 = element("div");
			h1 = element("h1");
			t0 = text("Create Job Page");
			t1 = space();
			form = element("form");
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			input1 = element("input");
			t3 = space();
			div2 = element("div");
			input2 = element("input");
			t4 = space();
			div3 = element("div");
			input3 = element("input");
			t5 = space();
			div4 = element("div");
			input4 = element("input");
			t6 = space();
			div5 = element("div");
			textarea = element("textarea");
			t7 = space();
			button = element("button");
			t8 = text("Submit Form");
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h1 = claim_element(div6_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Create Job Page");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			form = claim_element(div6_nodes, "FORM", {});
			var form_nodes = children(form);
			div0 = claim_element(form_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div0_nodes.forEach(detach_dev);
			t2 = claim_space(form_nodes);
			div1 = claim_element(form_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div1_nodes.forEach(detach_dev);
			t3 = claim_space(form_nodes);
			div2 = claim_element(form_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input2 = claim_element(div2_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div2_nodes.forEach(detach_dev);
			t4 = claim_space(form_nodes);
			div3 = claim_element(form_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			input3 = claim_element(div3_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div3_nodes.forEach(detach_dev);
			t5 = claim_space(form_nodes);
			div4 = claim_element(form_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			input4 = claim_element(div4_nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			div4_nodes.forEach(detach_dev);
			t6 = claim_space(form_nodes);
			div5 = claim_element(form_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);

			textarea = claim_element(div5_nodes, "TEXTAREA", {
				cols: true,
				rows: true,
				placeholder: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t7 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Submit Form");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1bbxu0t");
			add_location(h1, file, 32, 4, 681);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Enter job title");
			attr_dev(input0, "class", "svelte-1bbxu0t");
			add_location(input0, file, 35, 12, 800);
			attr_dev(div0, "class", "input svelte-1bbxu0t");
			add_location(div0, file, 34, 8, 767);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "placeholder", "Enter job category");
			attr_dev(input1, "class", "svelte-1bbxu0t");
			add_location(input1, file, 42, 12, 993);
			attr_dev(div1, "class", "input svelte-1bbxu0t");
			add_location(div1, file, 41, 8, 960);
			attr_dev(input2, "type", "text");
			attr_dev(input2, "placeholder", "Enter job location");
			attr_dev(input2, "class", "svelte-1bbxu0t");
			add_location(input2, file, 49, 12, 1192);
			attr_dev(div2, "class", "input svelte-1bbxu0t");
			add_location(div2, file, 48, 8, 1159);
			attr_dev(input3, "type", "text");
			attr_dev(input3, "placeholder", "Enter company");
			attr_dev(input3, "class", "svelte-1bbxu0t");
			add_location(input3, file, 56, 12, 1391);
			attr_dev(div3, "class", "input svelte-1bbxu0t");
			add_location(div3, file, 55, 8, 1358);
			attr_dev(input4, "type", "text");
			attr_dev(input4, "placeholder", "Enter salary");
			attr_dev(input4, "class", "svelte-1bbxu0t");
			add_location(input4, file, 63, 12, 1584);
			attr_dev(div4, "class", "input svelte-1bbxu0t");
			add_location(div4, file, 62, 8, 1551);
			attr_dev(textarea, "cols", "30");
			attr_dev(textarea, "rows", "10");
			attr_dev(textarea, "placeholder", "Enter job details");
			attr_dev(textarea, "class", "svelte-1bbxu0t");
			add_location(textarea, file, 66, 12, 1711);
			attr_dev(div5, "class", "input svelte-1bbxu0t");
			add_location(div5, file, 65, 8, 1678);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "svelte-1bbxu0t");
			add_location(button, file, 73, 8, 1903);
			add_location(form, file, 33, 4, 711);
			attr_dev(div6, "class", "form-div svelte-1bbxu0t");
			add_location(div6, file, 31, 0, 653);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, h1);
			append_dev(h1, t0);
			append_dev(div6, t1);
			append_dev(div6, form);
			append_dev(form, div0);
			append_dev(div0, input0);
			set_input_value(input0, /*title*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, div1);
			append_dev(div1, input1);
			set_input_value(input1, /*category*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, div2);
			append_dev(div2, input2);
			set_input_value(input2, /*location*/ ctx[2]);
			append_dev(form, t4);
			append_dev(form, div3);
			append_dev(div3, input3);
			set_input_value(input3, /*company*/ ctx[3]);
			append_dev(form, t5);
			append_dev(form, div4);
			append_dev(div4, input4);
			set_input_value(input4, /*salary*/ ctx[4]);
			append_dev(form, t6);
			append_dev(form, div5);
			append_dev(div5, textarea);
			set_input_value(textarea, /*details*/ ctx[5]);
			append_dev(form, t7);
			append_dev(form, button);
			append_dev(button, t8);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[7]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[8]),
					listen_dev(input2, "input", /*input2_input_handler*/ ctx[9]),
					listen_dev(input3, "input", /*input3_input_handler*/ ctx[10]),
					listen_dev(input4, "input", /*input4_input_handler*/ ctx[11]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[12]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[6]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1 && input0.value !== /*title*/ ctx[0]) {
				set_input_value(input0, /*title*/ ctx[0]);
			}

			if (dirty & /*category*/ 2 && input1.value !== /*category*/ ctx[1]) {
				set_input_value(input1, /*category*/ ctx[1]);
			}

			if (dirty & /*location*/ 4 && input2.value !== /*location*/ ctx[2]) {
				set_input_value(input2, /*location*/ ctx[2]);
			}

			if (dirty & /*company*/ 8 && input3.value !== /*company*/ ctx[3]) {
				set_input_value(input3, /*company*/ ctx[3]);
			}

			if (dirty & /*salary*/ 16 && input4.value !== /*salary*/ ctx[4]) {
				set_input_value(input4, /*salary*/ ctx[4]);
			}

			if (dirty & /*details*/ 32) {
				set_input_value(textarea, /*details*/ ctx[5]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Create", slots, []);
	let title;
	let category;
	let location;
	let company;
	let salary;
	let details;

	function handleSubmit() {
		let data = {
			title,
			category,
			location,
			company,
			salary,
			details
		};

		fetch("/jobs.json", {
			method: "POST", // or 'PUT'
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		console.log(data);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Create> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		title = this.value;
		$$invalidate(0, title);
	}

	function input1_input_handler() {
		category = this.value;
		$$invalidate(1, category);
	}

	function input2_input_handler() {
		location = this.value;
		$$invalidate(2, location);
	}

	function input3_input_handler() {
		company = this.value;
		$$invalidate(3, company);
	}

	function input4_input_handler() {
		salary = this.value;
		$$invalidate(4, salary);
	}

	function textarea_input_handler() {
		details = this.value;
		$$invalidate(5, details);
	}

	$$self.$capture_state = () => ({
		title,
		category,
		location,
		company,
		salary,
		details,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
		if ("location" in $$props) $$invalidate(2, location = $$props.location);
		if ("company" in $$props) $$invalidate(3, company = $$props.company);
		if ("salary" in $$props) $$invalidate(4, salary = $$props.salary);
		if ("details" in $$props) $$invalidate(5, details = $$props.details);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		title,
		category,
		location,
		company,
		salary,
		details,
		handleSubmit,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler,
		input4_input_handler,
		textarea_input_handler
	];
}

class Create extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Create",
			options,
			id: create_fragment.name
		});
	}
}

export default Create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLjA5OWJjNWE3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2pvYnMvY3JlYXRlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gICAgLy8gaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQuc3ZlbHRlXCI7XHJcbiAgICBsZXQgdGl0bGU7XHJcbiAgICBsZXQgY2F0ZWdvcnk7XHJcbiAgICBsZXQgbG9jYXRpb247XHJcbiAgICBsZXQgY29tcGFueTtcclxuICAgIGxldCBzYWxhcnk7XHJcbiAgICBsZXQgZGV0YWlscztcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIGNvbXBhbnksXHJcbiAgICAgICAgICAgIHNhbGFyeSxcclxuICAgICAgICAgICAgZGV0YWlscyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaChcIi9qb2JzLmpzb25cIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJmb3JtLWRpdlwiPlxyXG4gICAgPGgxPkNyZWF0ZSBKb2IgUGFnZTwvaDE+XHJcbiAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGpvYiB0aXRsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGpvYiBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGpvYiBsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17Y29tcGFueX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29tcGFueVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtzYWxhcnl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzYWxhcnlcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e2RldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgam9iIGRldGFpbHNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBTdWJtaXQgRm9ybSA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuZm9ybS1kaXYge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM4MDtcclxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgb3V0bGluZTogNnB4IHNvbGlkIGhzbGEoMTc1LCAxMDAlLCA3NSUsIDAuMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgb3V0bGluZTogNnB4IHNvbGlkIGhzbGEoMTc1LCAxMDAlLCA3NSUsIDAuMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMC43NTVyZW0gMS4ycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWU1YzE7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cclxuICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBb0M0QixHQUFLOzs7O3dDQU9MLEdBQVE7Ozs7d0NBT1IsR0FBUTs7Ozt1Q0FPUixHQUFPOzs7O3NDQU1KLEdBQU07Ozs7eUNBSVQsR0FBTzs7Ozs7Ozs7Ozs7OztpRUFsQ0MsR0FBWTs7Ozs7Ozt5REFHcEIsR0FBSztzQ0FBTCxHQUFLOzs7K0RBT0wsR0FBUTt5Q0FBUixHQUFROzs7K0RBT1IsR0FBUTt5Q0FBUixHQUFROzs7NkRBT1IsR0FBTzt3Q0FBUCxHQUFPOzs7NERBTUosR0FBTTt1Q0FBTixHQUFNOzs7OzBDQUlULEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBakUzQixLQUFLO0tBQ0wsUUFBUTtLQUNSLFFBQVE7S0FDUixPQUFPO0tBQ1AsTUFBTTtLQUNOLE9BQU87O1VBRUYsWUFBWTtNQUNiLElBQUk7R0FDSixLQUFLO0dBQ0wsUUFBUTtHQUNSLFFBQVE7R0FDUixPQUFPO0dBQ1AsTUFBTTtHQUNOLE9BQU87OztFQUdYLEtBQUssQ0FBQyxZQUFZO0dBQ2QsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLElBQ0gsY0FBYyxFQUFFLGtCQUFrQjtHQUV0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7RUFHN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7Ozs7O0VBU0ksS0FBSzs7Ozs7RUFPTCxRQUFROzs7OztFQU9SLFFBQVE7Ozs7O0VBT1IsT0FBTzs7Ozs7RUFNSixNQUFNOzs7OztFQUlULE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
