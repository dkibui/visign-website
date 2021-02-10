import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, k as space, e as element, t as text, p as create_component, q as query_selector_all, f as detach_dev, l as claim_space, c as claim_element, a as children, b as claim_text, r as claim_component, m as attr_dev, g as add_location, h as insert_dev, j as append_dev, u as mount_component, n as noop, w as transition_in, x as transition_out, y as destroy_component } from './client.e5de46a1.js';
import { B as Button } from './Button.b61575cb.js';

/* src/routes/contact.svelte generated by Svelte v3.31.2 */
const file = "src/routes/contact.svelte";

function create_fragment(ctx) {
	let t0;
	let main;
	let h1;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let p0;
	let t5;
	let t6;
	let div;
	let a;
	let button;
	let t7;
	let p1;
	let t8;
	let br0;
	let t9;
	let br1;
	let t10;
	let br2;
	let t11;
	let current;

	button = new Button({
			props: { value: "Email Us" },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			h1 = element("h1");
			t1 = text("How can we help you today?");
			t2 = space();
			h2 = element("h2");
			t3 = text("We're here for you. Send us an email or call us.");
			t4 = space();
			p0 = element("p");
			t5 = text("When we started Visign Designs, we set out to provide professional brand\r\n        development, professional printing and supply of branded merchandise\r\n        services to SMEs at an affordable price. ​");
			t6 = space();
			div = element("div");
			a = element("a");
			create_component(button.$$.fragment);
			t7 = space();
			p1 = element("p");
			t8 = text("Cell: +254 728 49 4090 ");
			br0 = element("br");
			t9 = text(" Email: dkibui@visign.co.ke");
			br1 = element("br");
			t10 = text("Office:\r\n        6th Floor, Westend Towers.");
			br2 = element("br");
			t11 = text("Westlands Nairobi.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1huq8pl\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "How can we help you today?");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(main_nodes);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "We're here for you. Send us an email or call us.");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(main_nodes);
			p0 = claim_element(main_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, "When we started Visign Designs, we set out to provide professional brand\r\n        development, professional printing and supply of branded merchandise\r\n        services to SMEs at an affordable price. ​");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(main_nodes);
			div = claim_element(main_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			claim_component(button.$$.fragment, a_nodes);
			a_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t7 = claim_space(main_nodes);
			p1 = claim_element(main_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Cell: +254 728 49 4090 ");
			br0 = claim_element(p1_nodes, "BR", {});
			t9 = claim_text(p1_nodes, " Email: dkibui@visign.co.ke");
			br1 = claim_element(p1_nodes, "BR", {});
			t10 = claim_text(p1_nodes, "Office:\r\n        6th Floor, Westend Towers.");
			br2 = claim_element(p1_nodes, "BR", {});
			t11 = claim_text(p1_nodes, "Westlands Nairobi.");
			p1_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contact";
			attr_dev(h1, "class", "text-align svelte-ysu9od");
			add_location(h1, file, 9, 4, 151);
			attr_dev(h2, "class", "text-align svelte-ysu9od");
			add_location(h2, file, 10, 4, 211);
			attr_dev(p0, "class", "text-align svelte-ysu9od");
			add_location(p0, file, 11, 4, 293);
			attr_dev(a, "href", "mailto:dkibui@visign.co.ke");
			attr_dev(a, "class", "svelte-ysu9od");
			add_location(a, file, 17, 8, 574);
			attr_dev(div, "class", "btn-div svelte-ysu9od");
			add_location(div, file, 16, 4, 543);
			add_location(br0, file, 20, 31, 723);
			add_location(br1, file, 20, 64, 756);
			add_location(br2, file, 21, 34, 805);
			attr_dev(p1, "class", "text-align contact svelte-ysu9od");
			add_location(p1, file, 19, 4, 660);
			attr_dev(main, "class", "svelte-ysu9od");
			add_location(main, file, 8, 0, 139);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, h1);
			append_dev(h1, t1);
			append_dev(main, t2);
			append_dev(main, h2);
			append_dev(h2, t3);
			append_dev(main, t4);
			append_dev(main, p0);
			append_dev(p0, t5);
			append_dev(main, t6);
			append_dev(main, div);
			append_dev(div, a);
			mount_component(button, a, null);
			append_dev(main, t7);
			append_dev(main, p1);
			append_dev(p1, t8);
			append_dev(p1, br0);
			append_dev(p1, t9);
			append_dev(p1, br1);
			append_dev(p1, t10);
			append_dev(p1, br2);
			append_dev(p1, t11);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(button);
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
	validate_slots("Contact", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Button });
	return [];
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact",
			options,
			id: create_fragment.name
		});
	}
}

export default Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5kNTgwNDZiZi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
