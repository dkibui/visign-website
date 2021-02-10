import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as add_location, h as insert_dev, j as append_dev, k as space, l as claim_space, m as attr_dev, n as noop, o as listen_dev, p as create_component, q as query_selector_all, r as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component } from './client.7c756404.js';
import { B as Button } from './Button.d434914b.js';

/* src/components/Faq.svelte generated by Svelte v3.31.2 */

const file = "src/components/Faq.svelte";

// (14:12) {:else}
function create_else_block(ctx) {
	let h5;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			h5 = element("h5");
			t = text("+");
			this.h();
		},
		l: function claim(nodes) {
			h5 = claim_element(nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t = claim_text(h5_nodes, "+");
			h5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "svelte-7rvkai");
			add_location(h5, file, 14, 16, 333);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h5, anchor);
			append_dev(h5, t);

			if (!mounted) {
				dispose = listen_dev(h5, "click", /*toggleOpen*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h5);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(14:12) {:else}",
		ctx
	});

	return block;
}

// (12:12) {#if open}
function create_if_block_1(ctx) {
	let h5;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			h5 = element("h5");
			t = text("-");
			this.h();
		},
		l: function claim(nodes) {
			h5 = claim_element(nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t = claim_text(h5_nodes, "-");
			h5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "svelte-7rvkai");
			add_location(h5, file, 12, 16, 262);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h5, anchor);
			append_dev(h5, t);

			if (!mounted) {
				dispose = listen_dev(h5, "click", /*toggleOpen*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h5);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(12:12) {#if open}",
		ctx
	});

	return block;
}

// (18:8) {#if open}
function create_if_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("We offer the whole spectrun of graphic design services. We\r\n                specialize in brand development. We help you design your logo\r\n                and develop your brand's identity. We then design all your\r\n                marketing material like business cards, fliers, posters and\r\n                everything in between.");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, "We offer the whole spectrun of graphic design services. We\r\n                specialize in brand development. We help you design your logo\r\n                and develop your brand's identity. We then design all your\r\n                marketing material like business cards, fliers, posters and\r\n                everything in between.");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 18, 12, 434);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(18:8) {#if open}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let article;
	let div1;
	let div0;
	let h4;
	let t0;
	let t1;
	let t2;

	function select_block_type(ctx, dirty) {
		if (/*open*/ ctx[0]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*open*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			article = element("article");
			div1 = element("div");
			div0 = element("div");
			h4 = element("h4");
			t0 = text("What other designs do you do?");
			t1 = space();
			if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			div1 = claim_element(article_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h4 = claim_element(div0_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t0 = claim_text(h4_nodes, "What other designs do you do?");
			h4_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h4, "class", "svelte-7rvkai");
			add_location(h4, file, 10, 12, 182);
			attr_dev(div0, "class", "title svelte-7rvkai");
			add_location(div0, file, 9, 8, 149);
			attr_dev(div1, "class", "card svelte-7rvkai");
			add_location(div1, file, 8, 4, 121);
			attr_dev(article, "class", "svelte-7rvkai");
			add_location(article, file, 7, 0, 106);
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, div1);
			append_dev(div1, div0);
			append_dev(div0, h4);
			append_dev(h4, t0);
			append_dev(div0, t1);
			if_block0.m(div0, null);
			append_dev(div1, t2);
			if (if_block1) if_block1.m(div1, null);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div0, null);
				}
			}

			if (/*open*/ ctx[0]) {
				if (if_block1) ; else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(article);
			if_block0.d();
			if (if_block1) if_block1.d();
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
	validate_slots("Faq", slots, []);
	let open = true;

	let toggleOpen = () => {
		$$invalidate(0, open = !open);
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Faq> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ open, toggleOpen });

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("toggleOpen" in $$props) $$invalidate(1, toggleOpen = $$props.toggleOpen);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [open, toggleOpen];
}

class Faq extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Faq",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.31.2 */
const file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
	let t0;
	let main;
	let h1;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let img0;
	let img0_src_value;
	let t5;
	let div0;
	let button;
	let t6;
	let section0;
	let div1;
	let img1;
	let img1_src_value;
	let t7;
	let p0;
	let t8;
	let t9;
	let section1;
	let article0;
	let img2;
	let img2_src_value;
	let t10;
	let h30;
	let t11;
	let t12;
	let p1;
	let t13;
	let t14;
	let article1;
	let img3;
	let img3_src_value;
	let t15;
	let h31;
	let t16;
	let t17;
	let p2;
	let t18;
	let t19;
	let faq;
	let current;

	button = new Button({
			props: { value: "Our Work" },
			$$inline: true
		});

	faq = new Faq({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			h1 = element("h1");
			t1 = text("We are the best design studio in Nairobi");
			t2 = space();
			h2 = element("h2");
			t3 = text("Our business is to make yours look great");
			t4 = space();
			img0 = element("img");
			t5 = space();
			div0 = element("div");
			create_component(button.$$.fragment);
			t6 = space();
			section0 = element("section");
			div1 = element("div");
			img1 = element("img");
			t7 = space();
			p0 = element("p");
			t8 = text("We provide brand centred graphic design and web development services\n\t\t\tto SMEs and corporates in Nairobi.");
			t9 = space();
			section1 = element("section");
			article0 = element("article");
			img2 = element("img");
			t10 = space();
			h30 = element("h3");
			t11 = text("Take your business to your customers. Go online in style.");
			t12 = space();
			p1 = element("p");
			t13 = text("Your customers are looking for you online. Let us design a modern\n\t\t\twebsite to represent your brand.");
			t14 = space();
			article1 = element("article");
			img3 = element("img");
			t15 = space();
			h31 = element("h3");
			t16 = text("Make your customers know you. Share your story.");
			t17 = space();
			p2 = element("p");
			t18 = text("Tell us your brand story and we will transform your marketing\n\t\t\tmaterial. It will serve your brand well.");
			t19 = space();
			create_component(faq.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mni2ah\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "We are the best design studio in Nairobi");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(main_nodes);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Our business is to make yours look great");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(main_nodes);
			img0 = claim_element(main_nodes, "IMG", { class: true, src: true, alt: true });
			t5 = claim_space(main_nodes);
			div0 = claim_element(main_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(button.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			section0 = claim_element(nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div1 = claim_element(section0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img1 = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t7 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t8 = claim_text(p0_nodes, "We provide brand centred graphic design and web development services\n\t\t\tto SMEs and corporates in Nairobi.");
			p0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			article0 = claim_element(section1_nodes, "ARTICLE", { class: true });
			var article0_nodes = children(article0);
			img2 = claim_element(article0_nodes, "IMG", { src: true, alt: true, class: true });
			t10 = claim_space(article0_nodes);
			h30 = claim_element(article0_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t11 = claim_text(h30_nodes, "Take your business to your customers. Go online in style.");
			h30_nodes.forEach(detach_dev);
			t12 = claim_space(article0_nodes);
			p1 = claim_element(article0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t13 = claim_text(p1_nodes, "Your customers are looking for you online. Let us design a modern\n\t\t\twebsite to represent your brand.");
			p1_nodes.forEach(detach_dev);
			article0_nodes.forEach(detach_dev);
			t14 = claim_space(section1_nodes);
			article1 = claim_element(section1_nodes, "ARTICLE", { class: true });
			var article1_nodes = children(article1);
			img3 = claim_element(article1_nodes, "IMG", { src: true, alt: true, class: true });
			t15 = claim_space(article1_nodes);
			h31 = claim_element(article1_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t16 = claim_text(h31_nodes, "Make your customers know you. Share your story.");
			h31_nodes.forEach(detach_dev);
			t17 = claim_space(article1_nodes);
			p2 = claim_element(article1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t18 = claim_text(p2_nodes, "Tell us your brand story and we will transform your marketing\n\t\t\tmaterial. It will serve your brand well.");
			p2_nodes.forEach(detach_dev);
			article1_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			claim_component(faq.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Job Ninja";
			attr_dev(h1, "class", "text-center svelte-1mdnct9");
			add_location(h1, file$1, 11, 1, 208);
			attr_dev(h2, "class", "text-center svelte-1mdnct9");
			add_location(h2, file$1, 12, 1, 279);
			attr_dev(img0, "class", "img-1 svelte-1mdnct9");
			if (img0.src !== (img0_src_value = "images/visign-design-asset1.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "visign design asset 1");
			add_location(img0, file$1, 13, 1, 350);
			attr_dev(div0, "class", "btn svelte-1mdnct9");
			add_location(div0, file$1, 18, 1, 446);
			attr_dev(main, "class", "svelte-1mdnct9");
			add_location(main, file$1, 10, 0, 200);
			attr_dev(img1, "class", "img-2 svelte-1mdnct9");
			if (img1.src !== (img1_src_value = "images/banner-image.png")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "layout design banner");
			add_location(img1, file$1, 25, 2, 584);
			attr_dev(p0, "class", "message text-center svelte-1mdnct9");
			add_location(p0, file$1, 30, 2, 676);
			attr_dev(div1, "class", "section-one-content width svelte-1mdnct9");
			add_location(div1, file$1, 24, 1, 542);
			attr_dev(section0, "class", "section-one svelte-1mdnct9");
			add_location(section0, file$1, 23, 0, 511);
			if (img2.src !== (img2_src_value = "images/online.svg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "solid globe icon");
			attr_dev(img2, "class", "svelte-1mdnct9");
			add_location(img2, file$1, 39, 2, 921);
			attr_dev(h30, "class", "svelte-1mdnct9");
			add_location(h30, file$1, 40, 2, 978);
			attr_dev(p1, "class", "svelte-1mdnct9");
			add_location(p1, file$1, 41, 2, 1047);
			attr_dev(article0, "class", "card text-center svelte-1mdnct9");
			add_location(article0, file$1, 38, 1, 884);
			if (img3.src !== (img3_src_value = "images/design.svg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "solid globe icon");
			attr_dev(img3, "class", "svelte-1mdnct9");
			add_location(img3, file$1, 47, 2, 1213);
			attr_dev(h31, "class", "svelte-1mdnct9");
			add_location(h31, file$1, 48, 2, 1270);
			attr_dev(p2, "class", "svelte-1mdnct9");
			add_location(p2, file$1, 49, 2, 1329);
			attr_dev(article1, "class", "card text-center svelte-1mdnct9");
			add_location(article1, file$1, 46, 1, 1176);
			attr_dev(section1, "class", "cards-wrapper width svelte-1mdnct9");
			add_location(section1, file$1, 37, 0, 845);
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
			append_dev(main, img0);
			append_dev(main, t5);
			append_dev(main, div0);
			mount_component(button, div0, null);
			insert_dev(target, t6, anchor);
			insert_dev(target, section0, anchor);
			append_dev(section0, div1);
			append_dev(div1, img1);
			append_dev(div1, t7);
			append_dev(div1, p0);
			append_dev(p0, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, section1, anchor);
			append_dev(section1, article0);
			append_dev(article0, img2);
			append_dev(article0, t10);
			append_dev(article0, h30);
			append_dev(h30, t11);
			append_dev(article0, t12);
			append_dev(article0, p1);
			append_dev(p1, t13);
			append_dev(section1, t14);
			append_dev(section1, article1);
			append_dev(article1, img3);
			append_dev(article1, t15);
			append_dev(article1, h31);
			append_dev(h31, t16);
			append_dev(article1, t17);
			append_dev(article1, p2);
			append_dev(p2, t18);
			insert_dev(target, t19, anchor);
			mount_component(faq, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			transition_in(faq.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			transition_out(faq.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(button);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(section0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(section1);
			if (detaching) detach_dev(t19);
			destroy_component(faq, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Button, Faq });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzIxODA1ZmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZhcS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuICAgIGxldCBvcGVuID0gdHJ1ZTtcclxuICAgIGxldCB0b2dnbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIG9wZW4gPSAhb3BlbjtcclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPGFydGljbGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDQ+V2hhdCBvdGhlciBkZXNpZ25zIGRvIHlvdSBkbz88L2g0PlxyXG4gICAgICAgICAgICB7I2lmIG9wZW59XHJcbiAgICAgICAgICAgICAgICA8aDUgb246Y2xpY2s9e3RvZ2dsZU9wZW59Pi08L2g1PlxyXG4gICAgICAgICAgICB7OmVsc2V9XHJcbiAgICAgICAgICAgICAgICA8aDUgb246Y2xpY2s9e3RvZ2dsZU9wZW59Pis8L2g1PlxyXG4gICAgICAgICAgICB7L2lmfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsjaWYgb3Blbn1cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBXZSBvZmZlciB0aGUgd2hvbGUgc3BlY3RydW4gb2YgZ3JhcGhpYyBkZXNpZ24gc2VydmljZXMuIFdlXHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXplIGluIGJyYW5kIGRldmVsb3BtZW50LiBXZSBoZWxwIHlvdSBkZXNpZ24geW91ciBsb2dvXHJcbiAgICAgICAgICAgICAgICBhbmQgZGV2ZWxvcCB5b3VyIGJyYW5kJ3MgaWRlbnRpdHkuIFdlIHRoZW4gZGVzaWduIGFsbCB5b3VyXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRpbmcgbWF0ZXJpYWwgbGlrZSBidXNpbmVzcyBjYXJkcywgZmxpZXJzLCBwb3N0ZXJzIGFuZFxyXG4gICAgICAgICAgICAgICAgZXZlcnl0aGluZyBpbiBiZXR3ZWVuLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgey9pZn1cclxuICAgIDwvZGl2PlxyXG48L2FydGljbGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAzZW0gMi40ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjA1KSAwcHggNHB4IDE2cHgsXHJcbiAgICAgICAgICAgIHJnYmEoMTcsIDE3LCAyNiwgMC4wNSkgMHB4IDhweCAzMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNzVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE3NXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQWM4QixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUZWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRHZCLEdBQUk7Ozs7OzswQkFNUixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWhCVCxJQUFJLEdBQUcsSUFBSTs7S0FDWCxVQUFVO2tCQUNWLElBQUksSUFBSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
