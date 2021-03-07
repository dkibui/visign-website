import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, b as children, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as set_data_dev, n as noop } from './client.4e0595c8.js';

/* src/components/Button.svelte generated by Svelte v3.31.2 */

const file = "src/components/Button.svelte";

function create_fragment(ctx) {
	let button;
	let t;

	const block = {
		c: function create() {
			button = element("button");
			t = text(/*value*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, /*value*/ ctx[0]);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-12vqe32");
			add_location(button, file, 4, 0, 49);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*value*/ 1) set_data_dev(t, /*value*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
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
	validate_slots("Button", slots, []);
	let { value = "Value" } = $$props;
	const writable_props = ["value"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	$$self.$capture_state = () => ({ value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { value: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment.name
		});
	}

	get value() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Button as B };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmI0MWIyMWY4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgdmFsdWUgPSBcIlZhbHVlXCI7XG48L3NjcmlwdD5cblxuPGJ1dHRvbj57dmFsdWV9PC9idXR0b24+XG5cbjxzdHlsZT5cblx0YnV0dG9uIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogYXV0bztcblx0XHQvKiBtYXJnaW46IDAgYXV0bzsgKi9cblx0XHRmb250LXNpemU6IDEuNWVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWFlNWMxO1xuXHRcdHBhZGRpbmc6IDAuMjVlbSAyLjVlbTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRvdXRsaW5lLXN0eWxlOiBub25lO1xuXHRcdGJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4wNSkgMHB4IDRweCAxNnB4LFxuXHRcdFx0cmdiYSgxNywgMTcsIDI2LCAwLjA1KSAwcHggODtcblx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTI1cyBlYXNlO1xuXHR9XG5cblx0YnV0dG9uOmhvdmVyIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3NCQUlTLEdBQUs7Ozs7OzswQ0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7O3NEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BSEYsS0FBSyxHQUFHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
