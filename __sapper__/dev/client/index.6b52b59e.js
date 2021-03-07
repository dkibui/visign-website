import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as create_component, p as claim_component, q as mount_component, r as transition_in, u as transition_out, w as destroy_component, x as query_selector_all } from './client.ea1b854f.js';
import { B as Button } from './Button.9efcc251.js';

/* src/components/Services.svelte generated by Svelte v3.31.2 */

const file = "src/components/Services.svelte";

function create_fragment(ctx) {
	let div0;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let span;
	let t4;
	let article;
	let div2;
	let div1;
	let img0;
	let img0_src_value;
	let t5;
	let h30;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let div4;
	let div3;
	let img1;
	let img1_src_value;
	let t10;
	let h31;
	let t11;
	let t12;
	let p2;
	let t13;
	let t14;
	let div6;
	let div5;
	let img2;
	let img2_src_value;
	let t15;
	let h32;
	let t16;
	let t17;
	let p3;
	let t18;

	const block = {
		c: function create() {
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Our services");
			t1 = space();
			p0 = element("p");
			t2 = text("We offer various services to help start-ups and corporates communicate\n        with their customers.");
			t3 = space();
			span = element("span");
			t4 = space();
			article = element("article");
			div2 = element("div");
			div1 = element("div");
			img0 = element("img");
			t5 = space();
			h30 = element("h3");
			t6 = text("Graphic design");
			t7 = space();
			p1 = element("p");
			t8 = text("Skillful design elevates your brand. It helps to tell your brand\n            story in a beautiful and attractive way. Good printing is as\n            important as the design itself it not more.");
			t9 = space();
			div4 = element("div");
			div3 = element("div");
			img1 = element("img");
			t10 = space();
			h31 = element("h3");
			t11 = text("Branding");
			t12 = space();
			p2 = element("p");
			t13 = text("Your customers expect to find you online. You need a website to take\n            your brand online. A good website should have that look and feel\n            that represents your brand.");
			t14 = space();
			div6 = element("div");
			div5 = element("div");
			img2 = element("img");
			t15 = space();
			h32 = element("h3");
			t16 = text("Web design");
			t17 = space();
			p3 = element("p");
			t18 = text("Your customers expect to find you online. You need a website to take\n            your brand online. A good website should have that look and feel\n            that represents your brand.");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Our services");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "We offer various services to help start-ups and corporates communicate\n        with their customers.");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach_dev);
			t4 = claim_space(nodes);
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			div2 = claim_element(article_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img0 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			h30 = claim_element(div2_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t6 = claim_text(h30_nodes, "Graphic design");
			h30_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			p1 = claim_element(div2_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Skillful design elevates your brand. It helps to tell your brand\n            story in a beautiful and attractive way. Good printing is as\n            important as the design itself it not more.");
			p1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t9 = claim_space(article_nodes);
			div4 = claim_element(article_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img1 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			div3_nodes.forEach(detach_dev);
			t10 = claim_space(div4_nodes);
			h31 = claim_element(div4_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t11 = claim_text(h31_nodes, "Branding");
			h31_nodes.forEach(detach_dev);
			t12 = claim_space(div4_nodes);
			p2 = claim_element(div4_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t13 = claim_text(p2_nodes, "Your customers expect to find you online. You need a website to take\n            your brand online. A good website should have that look and feel\n            that represents your brand.");
			p2_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t14 = claim_space(article_nodes);
			div6 = claim_element(article_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			img2 = claim_element(div5_nodes, "IMG", { src: true, alt: true, class: true });
			div5_nodes.forEach(detach_dev);
			t15 = claim_space(div6_nodes);
			h32 = claim_element(div6_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t16 = claim_text(h32_nodes, "Web design");
			h32_nodes.forEach(detach_dev);
			t17 = claim_space(div6_nodes);
			p3 = claim_element(div6_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t18 = claim_text(p3_nodes, "Your customers expect to find you online. You need a website to take\n            your brand online. A good website should have that look and feel\n            that represents your brand.");
			p3_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "text-align svelte-1kx6g0b");
			add_location(h2, file, 1, 4, 24);
			attr_dev(p0, "class", "text-align svelte-1kx6g0b");
			add_location(p0, file, 2, 4, 69);
			attr_dev(div0, "class", "width svelte-1kx6g0b");
			add_location(div0, file, 0, 0, 0);
			attr_dev(span, "class", "svelte-1kx6g0b");
			add_location(span, file, 7, 0, 217);
			if (img0.src !== (img0_src_value = "images/graphic-design-layout.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "web development icon");
			attr_dev(img0, "class", "svelte-1kx6g0b");
			add_location(img0, file, 11, 12, 324);
			attr_dev(div1, "class", "img-div svelte-1kx6g0b");
			add_location(div1, file, 10, 8, 290);
			attr_dev(h30, "class", "svelte-1kx6g0b");
			add_location(h30, file, 16, 8, 465);
			attr_dev(p1, "class", "svelte-1kx6g0b");
			add_location(p1, file, 17, 8, 497);
			attr_dev(div2, "class", "card svelte-1kx6g0b");
			add_location(div2, file, 9, 4, 263);
			if (img1.src !== (img1_src_value = "images/web-design-icon.svg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "web design icon");
			attr_dev(img1, "class", "svelte-1kx6g0b");
			add_location(img1, file, 25, 12, 796);
			attr_dev(div3, "class", "img-div svelte-1kx6g0b");
			add_location(div3, file, 24, 8, 762);
			attr_dev(h31, "class", "svelte-1kx6g0b");
			add_location(h31, file, 27, 8, 882);
			attr_dev(p2, "class", "svelte-1kx6g0b");
			add_location(p2, file, 28, 8, 908);
			attr_dev(div4, "class", "card svelte-1kx6g0b");
			add_location(div4, file, 23, 4, 735);
			if (img2.src !== (img2_src_value = "images/web-design-icon.svg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "web design icon");
			attr_dev(img2, "class", "svelte-1kx6g0b");
			add_location(img2, file, 36, 12, 1199);
			attr_dev(div5, "class", "img-div svelte-1kx6g0b");
			add_location(div5, file, 35, 8, 1165);
			attr_dev(h32, "class", "svelte-1kx6g0b");
			add_location(h32, file, 38, 8, 1285);
			attr_dev(p3, "class", "svelte-1kx6g0b");
			add_location(p3, file, 39, 8, 1313);
			attr_dev(div6, "class", "card svelte-1kx6g0b");
			add_location(div6, file, 34, 4, 1138);
			attr_dev(article, "class", "width services svelte-1kx6g0b");
			add_location(article, file, 8, 0, 226);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(p0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, span, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, article, anchor);
			append_dev(article, div2);
			append_dev(div2, div1);
			append_dev(div1, img0);
			append_dev(div2, t5);
			append_dev(div2, h30);
			append_dev(h30, t6);
			append_dev(div2, t7);
			append_dev(div2, p1);
			append_dev(p1, t8);
			append_dev(article, t9);
			append_dev(article, div4);
			append_dev(div4, div3);
			append_dev(div3, img1);
			append_dev(div4, t10);
			append_dev(div4, h31);
			append_dev(h31, t11);
			append_dev(div4, t12);
			append_dev(div4, p2);
			append_dev(p2, t13);
			append_dev(article, t14);
			append_dev(article, div6);
			append_dev(div6, div5);
			append_dev(div5, img2);
			append_dev(div6, t15);
			append_dev(div6, h32);
			append_dev(h32, t16);
			append_dev(div6, t17);
			append_dev(div6, p3);
			append_dev(p3, t18);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(span);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(article);
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
	validate_slots("Services", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Services> was created with unknown prop '${key}'`);
	});

	return [];
}

class Services extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Services",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/Contacts.svelte generated by Svelte v3.31.2 */
const file$1 = "src/components/Contacts.svelte";

function create_fragment$1(ctx) {
	let main;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let div;
	let a;
	let button;
	let t4;
	let p1;
	let t5;
	let br0;
	let t6;
	let br1;
	let t7;
	let br2;
	let t8;
	let current;

	button = new Button({
			props: { value: "Email Us" },
			$$inline: true
		});

	const block = {
		c: function create() {
			main = element("main");
			h2 = element("h2");
			t0 = text("We're here for you. Email us or make a call.");
			t1 = space();
			p0 = element("p");
			t2 = text("We're excited to work with you. Your brand's journey to the next level\n        begins here.");
			t3 = space();
			div = element("div");
			a = element("a");
			create_component(button.$$.fragment);
			t4 = space();
			p1 = element("p");
			t5 = text("Cell: +254 728 49 4090 ");
			br0 = element("br");
			t6 = text(" Email: dkibui@visign.co.ke");
			br1 = element("br");
			t7 = text("Office:\n        6th Floor, Westend Towers.");
			br2 = element("br");
			t8 = text("Westlands Nairobi.");
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "We're here for you. Email us or make a call.");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(main_nodes);
			p0 = claim_element(main_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "We're excited to work with you. Your brand's journey to the next level\n        begins here.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(main_nodes);
			div = claim_element(main_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			claim_component(button.$$.fragment, a_nodes);
			a_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t4 = claim_space(main_nodes);
			p1 = claim_element(main_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Cell: +254 728 49 4090 ");
			br0 = claim_element(p1_nodes, "BR", {});
			t6 = claim_text(p1_nodes, " Email: dkibui@visign.co.ke");
			br1 = claim_element(p1_nodes, "BR", {});
			t7 = claim_text(p1_nodes, "Office:\n        6th Floor, Westend Towers.");
			br2 = claim_element(p1_nodes, "BR", {});
			t8 = claim_text(p1_nodes, "Westlands Nairobi.");
			p1_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "text-align svelte-y2cxkn");
			add_location(h2, file$1, 5, 4, 73);
			attr_dev(p0, "class", "text-align svelte-y2cxkn");
			add_location(p0, file$1, 6, 4, 150);
			attr_dev(a, "href", "mailto:dkibui@visign.co.ke");
			attr_dev(a, "class", "svelte-y2cxkn");
			add_location(a, file$1, 11, 8, 320);
			attr_dev(div, "class", "btn-div btn svelte-y2cxkn");
			add_location(div, file$1, 10, 4, 286);
			add_location(br0, file$1, 14, 31, 466);
			add_location(br1, file$1, 14, 64, 499);
			add_location(br2, file$1, 15, 34, 547);
			attr_dev(p1, "class", "text-align contact svelte-y2cxkn");
			add_location(p1, file$1, 13, 4, 404);
			attr_dev(main, "class", "svelte-y2cxkn");
			add_location(main, file$1, 4, 0, 62);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, h2);
			append_dev(h2, t0);
			append_dev(main, t1);
			append_dev(main, p0);
			append_dev(p0, t2);
			append_dev(main, t3);
			append_dev(main, div);
			append_dev(div, a);
			mount_component(button, a, null);
			append_dev(main, t4);
			append_dev(main, p1);
			append_dev(p1, t5);
			append_dev(p1, br0);
			append_dev(p1, t6);
			append_dev(p1, br1);
			append_dev(p1, t7);
			append_dev(p1, br2);
			append_dev(p1, t8);
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
			if (detaching) detach_dev(main);
			destroy_component(button);
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
	validate_slots("Contacts", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contacts> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Button });
	return [];
}

class Contacts extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contacts",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.31.2 */
const file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let t0;
	let main;
	let h1;
	let t1;
	let t2;
	let h20;
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
	let h21;
	let t10;
	let t11;
	let p1;
	let t12;
	let t13;
	let span;
	let t14;
	let article1;
	let div2;
	let img2;
	let img2_src_value;
	let t15;
	let div3;
	let img3;
	let img3_src_value;
	let t16;
	let services;
	let t17;
	let contacts;
	let current;

	button = new Button({
			props: { value: "Our Services" },
			$$inline: true
		});

	services = new Services({
			props: { id: "services" },
			$$inline: true
		});

	contacts = new Contacts({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			h1 = element("h1");
			t1 = text("We are the best design studio in Nairobi");
			t2 = space();
			h20 = element("h2");
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
			t8 = text("We offer brand centred graphic design and web development services to SMEs\n      and corporates in Nairobi.");
			t9 = space();
			section1 = element("section");
			article0 = element("article");
			h21 = element("h2");
			t10 = text("Do you want to brand your business?");
			t11 = space();
			p1 = element("p");
			t12 = text("Consistent visual branding is hard. To get your branding right, you will\n      need a branding guide. Let us help you get started with your branding. We\n      make it easier for you to be unique.");
			t13 = space();
			span = element("span");
			t14 = space();
			article1 = element("article");
			div2 = element("div");
			img2 = element("img");
			t15 = space();
			div3 = element("div");
			img3 = element("img");
			t16 = space();
			create_component(services.$$.fragment);
			t17 = space();
			create_component(contacts.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-gexkri\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "We are the best design studio in Nairobi");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(main_nodes);
			h20 = claim_element(main_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t3 = claim_text(h20_nodes, "Our business is to make yours look great");
			h20_nodes.forEach(detach_dev);
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
			t8 = claim_text(p0_nodes, "We offer brand centred graphic design and web development services to SMEs\n      and corporates in Nairobi.");
			p0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			article0 = claim_element(section1_nodes, "ARTICLE", { class: true });
			var article0_nodes = children(article0);
			h21 = claim_element(article0_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t10 = claim_text(h21_nodes, "Do you want to brand your business?");
			h21_nodes.forEach(detach_dev);
			t11 = claim_space(article0_nodes);
			p1 = claim_element(article0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t12 = claim_text(p1_nodes, "Consistent visual branding is hard. To get your branding right, you will\n      need a branding guide. Let us help you get started with your branding. We\n      make it easier for you to be unique.");
			p1_nodes.forEach(detach_dev);
			t13 = claim_space(article0_nodes);
			span = claim_element(article0_nodes, "SPAN", { class: true });
			children(span).forEach(detach_dev);
			article0_nodes.forEach(detach_dev);
			t14 = claim_space(section1_nodes);
			article1 = claim_element(section1_nodes, "ARTICLE", { class: true });
			var article1_nodes = children(article1);
			div2 = claim_element(article1_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img2 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			div2_nodes.forEach(detach_dev);
			t15 = claim_space(article1_nodes);
			div3 = claim_element(article1_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img3 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			div3_nodes.forEach(detach_dev);
			article1_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			claim_component(services.$$.fragment, nodes);
			t17 = claim_space(nodes);
			claim_component(contacts.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Visign Home";
			attr_dev(h1, "class", "text-center svelte-rr5k7n");
			add_location(h1, file$2, 11, 2, 252);
			attr_dev(h20, "class", "hero text-center svelte-rr5k7n");
			add_location(h20, file$2, 12, 2, 324);
			attr_dev(img0, "class", "img-1 svelte-rr5k7n");
			if (img0.src !== (img0_src_value = "images/visign-design-asset1.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "visign design asset 1");
			add_location(img0, file$2, 13, 2, 401);
			attr_dev(div0, "class", "btn svelte-rr5k7n");
			add_location(div0, file$2, 18, 2, 505);
			attr_dev(main, "class", "svelte-rr5k7n");
			add_location(main, file$2, 10, 0, 243);
			attr_dev(img1, "class", "img-2 svelte-rr5k7n");
			if (img1.src !== (img1_src_value = "images/banner-image.png")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "layout design banner");
			add_location(img1, file$2, 25, 4, 653);
			attr_dev(p0, "class", "message text-center svelte-rr5k7n");
			add_location(p0, file$2, 30, 4, 758);
			attr_dev(div1, "class", "section-one-content width svelte-rr5k7n");
			add_location(div1, file$2, 24, 2, 609);
			attr_dev(section0, "class", "section-one svelte-rr5k7n");
			add_location(section0, file$2, 23, 0, 577);
			attr_dev(h21, "class", "svelte-rr5k7n");
			add_location(h21, file$2, 39, 4, 1006);
			attr_dev(p1, "class", "svelte-rr5k7n");
			add_location(p1, file$2, 40, 4, 1055);
			attr_dev(span, "class", "svelte-rr5k7n");
			add_location(span, file$2, 45, 4, 1274);
			attr_dev(article0, "class", "article-one svelte-rr5k7n");
			add_location(article0, file$2, 38, 2, 972);
			if (img2.src !== (img2_src_value = "images/packaging-branding.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "package branding");
			attr_dev(img2, "class", "svelte-rr5k7n");
			add_location(img2, file$2, 49, 6, 1357);
			attr_dev(div2, "class", "card");
			add_location(div2, file$2, 48, 4, 1332);
			if (img3.src !== (img3_src_value = "images/logo-process.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "logo design process");
			attr_dev(img3, "class", "svelte-rr5k7n");
			add_location(img3, file$2, 52, 6, 1464);
			attr_dev(div3, "class", "card");
			add_location(div3, file$2, 51, 4, 1439);
			attr_dev(article1, "class", "article-two svelte-rr5k7n");
			add_location(article1, file$2, 47, 2, 1298);
			attr_dev(section1, "class", "width section-two svelte-rr5k7n");
			add_location(section1, file$2, 37, 0, 934);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, h1);
			append_dev(h1, t1);
			append_dev(main, t2);
			append_dev(main, h20);
			append_dev(h20, t3);
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
			append_dev(article0, h21);
			append_dev(h21, t10);
			append_dev(article0, t11);
			append_dev(article0, p1);
			append_dev(p1, t12);
			append_dev(article0, t13);
			append_dev(article0, span);
			append_dev(section1, t14);
			append_dev(section1, article1);
			append_dev(article1, div2);
			append_dev(div2, img2);
			append_dev(article1, t15);
			append_dev(article1, div3);
			append_dev(div3, img3);
			insert_dev(target, t16, anchor);
			mount_component(services, target, anchor);
			insert_dev(target, t17, anchor);
			mount_component(contacts, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			transition_in(services.$$.fragment, local);
			transition_in(contacts.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			transition_out(services.$$.fragment, local);
			transition_out(contacts.$$.fragment, local);
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
			if (detaching) detach_dev(t16);
			destroy_component(services, detaching);
			if (detaching) detach_dev(t17);
			destroy_component(contacts, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Button, Services, Contacts });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmI1MmI1OWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
