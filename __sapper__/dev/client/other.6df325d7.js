import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, g as detach_dev, h as claim_space, f as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.08f1a7ec.js';

/* src/routes/other.svelte generated by Svelte v3.31.2 */

const file = "src/routes/other.svelte";

function create_fragment(ctx) {
	let article;
	let div1;
	let div0;
	let img0;
	let img0_src_value;
	let t0;
	let h30;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let div3;
	let div2;
	let img1;
	let img1_src_value;
	let t5;
	let h31;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let div5;
	let div4;
	let img2;
	let img2_src_value;
	let t10;
	let h32;
	let t11;
	let t12;
	let p2;
	let t13;

	const block = {
		c: function create() {
			article = element("article");
			div1 = element("div");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			h30 = element("h3");
			t1 = text("Graphic design");
			t2 = space();
			p0 = element("p");
			t3 = text("Skillful design elevates your brand. It helps to tell your brand story in\n      a beautiful and attractive way. Good printing is as important as the\n      design itself it not more.");
			t4 = space();
			div3 = element("div");
			div2 = element("div");
			img1 = element("img");
			t5 = space();
			h31 = element("h3");
			t6 = text("Branding");
			t7 = space();
			p1 = element("p");
			t8 = text("Your customers expect to find you online. You need a website to take your\n      brand online. A good website should have that look and feel that\n      represents your brand.");
			t9 = space();
			div5 = element("div");
			div4 = element("div");
			img2 = element("img");
			t10 = space();
			h32 = element("h3");
			t11 = text("Web design");
			t12 = space();
			p2 = element("p");
			t13 = text("Your customers expect to find you online. You need a website to take your\n      brand online. A good website should have that look and feel that\n      represents your brand.");
			this.h();
		},
		l: function claim(nodes) {
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			div1 = claim_element(article_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			h30 = claim_element(div1_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t1 = claim_text(h30_nodes, "Graphic design");
			h30_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Skillful design elevates your brand. It helps to tell your brand story in\n      a beautiful and attractive way. Good printing is as important as the\n      design itself it not more.");
			p0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(article_nodes);
			div3 = claim_element(article_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img1 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			h31 = claim_element(div3_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t6 = claim_text(h31_nodes, "Branding");
			h31_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			p1 = claim_element(div3_nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Your customers expect to find you online. You need a website to take your\n      brand online. A good website should have that look and feel that\n      represents your brand.");
			p1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t9 = claim_space(article_nodes);
			div5 = claim_element(article_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img2 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
			div4_nodes.forEach(detach_dev);
			t10 = claim_space(div5_nodes);
			h32 = claim_element(div5_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t11 = claim_text(h32_nodes, "Web design");
			h32_nodes.forEach(detach_dev);
			t12 = claim_space(div5_nodes);
			p2 = claim_element(div5_nodes, "P", {});
			var p2_nodes = children(p2);
			t13 = claim_text(p2_nodes, "Your customers expect to find you online. You need a website to take your\n      brand online. A good website should have that look and feel that\n      represents your brand.");
			p2_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = "images/graphic-design-layout.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "web development icon");
			attr_dev(img0, "class", "svelte-86xt72");
			add_location(img0, file, 3, 6, 86);
			attr_dev(div0, "class", "img-div svelte-86xt72");
			add_location(div0, file, 2, 4, 58);
			attr_dev(h30, "class", "svelte-86xt72");
			add_location(h30, file, 5, 4, 175);
			add_location(p0, file, 6, 4, 203);
			attr_dev(div1, "class", "card svelte-86xt72");
			add_location(div1, file, 1, 2, 35);
			if (img1.src !== (img1_src_value = "images/web-design-icon.svg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "web design icon");
			attr_dev(img1, "class", "svelte-86xt72");
			add_location(img1, file, 14, 6, 466);
			attr_dev(div2, "class", "img-div svelte-86xt72");
			add_location(div2, file, 13, 4, 438);
			attr_dev(h31, "class", "svelte-86xt72");
			add_location(h31, file, 16, 4, 544);
			add_location(p1, file, 17, 4, 566);
			attr_dev(div3, "class", "card svelte-86xt72");
			add_location(div3, file, 12, 2, 415);
			if (img2.src !== (img2_src_value = "images/web-design-icon.svg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "web design icon");
			attr_dev(img2, "class", "svelte-86xt72");
			add_location(img2, file, 25, 6, 821);
			attr_dev(div4, "class", "img-div svelte-86xt72");
			add_location(div4, file, 24, 4, 793);
			attr_dev(h32, "class", "svelte-86xt72");
			add_location(h32, file, 27, 4, 899);
			add_location(p2, file, 28, 4, 923);
			attr_dev(div5, "class", "card svelte-86xt72");
			add_location(div5, file, 23, 2, 770);
			attr_dev(article, "class", "width services svelte-86xt72");
			add_location(article, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, div1);
			append_dev(div1, div0);
			append_dev(div0, img0);
			append_dev(div1, t0);
			append_dev(div1, h30);
			append_dev(h30, t1);
			append_dev(div1, t2);
			append_dev(div1, p0);
			append_dev(p0, t3);
			append_dev(article, t4);
			append_dev(article, div3);
			append_dev(div3, div2);
			append_dev(div2, img1);
			append_dev(div3, t5);
			append_dev(div3, h31);
			append_dev(h31, t6);
			append_dev(div3, t7);
			append_dev(div3, p1);
			append_dev(p1, t8);
			append_dev(article, t9);
			append_dev(article, div5);
			append_dev(div5, div4);
			append_dev(div4, img2);
			append_dev(div5, t10);
			append_dev(div5, h32);
			append_dev(h32, t11);
			append_dev(div5, t12);
			append_dev(div5, p2);
			append_dev(p2, t13);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
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
	validate_slots("Other", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Other> was created with unknown prop '${key}'`);
	});

	return [];
}

class Other extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Other",
			options,
			id: create_fragment.name
		});
	}
}

export default Other;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuNmRmMzI1ZDcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
