import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, x as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, b as children, f as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.05f61a3d.js';

/* src/routes/about.svelte generated by Svelte v3.31.2 */

const file = "src/routes/about.svelte";

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
	let p1;
	let t7;
	let t8;
	let p2;
	let t9;
	let t10;
	let p3;
	let t11;

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			h1 = element("h1");
			t1 = text("Get to know visign.");
			t2 = space();
			h2 = element("h2");
			t3 = text("We are a graphic and web design company.");
			t4 = space();
			p0 = element("p");
			t5 = text("When we started Visign Designs, we set out to provide professional brand\n\t\tdevelopment, professional printing and supply of branded merchandise\n\t\tservices to SMEs at an affordable price. ​");
			t6 = space();
			p1 = element("p");
			t7 = text("Good creative design and branding helps create trust and confidence in a\n\t\tcompany’s ability to meet the customers expectation. It gives SMEs a\n\t\tfighting chance to compete with the established giants in their\n\t\tindustry. Our process is based on the marketing principle If you’re not\n\t\tdistinct; not unique; you’re a commodity.​");
			t8 = space();
			p2 = element("p");
			t9 = text("Skilful branding elevates and differentiates not just you, but your\n\t\tclients, too. It tells a story; your story, in your own distinctive\n\t\tvoice. We help you to be different and to come alive in your market’s\n\t\timagination.");
			t10 = space();
			p3 = element("p");
			t11 = text("Choose us for world-class designs, identity branding services,\n\t\tinnovative marketing solutions and top quality printing. We help you\n\t\tcreate market awareness that communicates your brand values in an\n\t\tauthentic voice and in a manner that resonates clearly in the mind of\n\t\tyour audience.​");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Get to know visign.");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(main_nodes);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "We are a graphic and web design company.");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(main_nodes);
			p0 = claim_element(main_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, "When we started Visign Designs, we set out to provide professional brand\n\t\tdevelopment, professional printing and supply of branded merchandise\n\t\tservices to SMEs at an affordable price. ​");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(main_nodes);
			p1 = claim_element(main_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Good creative design and branding helps create trust and confidence in a\n\t\tcompany’s ability to meet the customers expectation. It gives SMEs a\n\t\tfighting chance to compete with the established giants in their\n\t\tindustry. Our process is based on the marketing principle If you’re not\n\t\tdistinct; not unique; you’re a commodity.​");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(main_nodes);
			p2 = claim_element(main_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Skilful branding elevates and differentiates not just you, but your\n\t\tclients, too. It tells a story; your story, in your own distinctive\n\t\tvoice. We help you to be different and to come alive in your market’s\n\t\timagination.");
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(main_nodes);
			p3 = claim_element(main_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "Choose us for world-class designs, identity branding services,\n\t\tinnovative marketing solutions and top quality printing. We help you\n\t\tcreate market awareness that communicates your brand values in an\n\t\tauthentic voice and in a manner that resonates clearly in the mind of\n\t\tyour audience.​");
			p3_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			attr_dev(h1, "class", "text-align svelte-1wx2bds");
			add_location(h1, file, 5, 1, 60);
			attr_dev(h2, "class", "text-align svelte-1wx2bds");
			add_location(h2, file, 6, 1, 109);
			attr_dev(p0, "class", "paragraph-align svelte-1wx2bds");
			add_location(p0, file, 7, 1, 179);
			attr_dev(p1, "class", "paragraph-align svelte-1wx2bds");
			add_location(p1, file, 12, 1, 405);
			attr_dev(p2, "class", "paragraph-align svelte-1wx2bds");
			add_location(p2, file, 20, 1, 772);
			attr_dev(p3, "class", "paragraph-align svelte-1wx2bds");
			add_location(p3, file, 26, 1, 1034);
			attr_dev(main, "class", "svelte-1wx2bds");
			add_location(main, file, 4, 0, 52);
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
			append_dev(main, p1);
			append_dev(p1, t7);
			append_dev(main, t8);
			append_dev(main, p2);
			append_dev(p2, t9);
			append_dev(main, t10);
			append_dev(main, p3);
			append_dev(p3, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("About", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNTc4M2Y2MDguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
