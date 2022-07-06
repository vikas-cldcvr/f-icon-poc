import { Package } from "custom-elements-manifest/schema";
import { transformSchema } from "../index";
import customElements1 from "./custom-elements1.json";

describe("custom-elements-manifest-vue", () => {
	it("transforms custom-elemenets-1.json schema", () => {
		expect(transformSchema(customElements1 as Package)).toMatchInlineSnapshot(`
		"/* eslint-disable */
		import { VueConstructor } from \\"vue\\";

		declare module \\"vue\\" {
			export interface GlobalComponents {
				\\"f-icon\\": VueConstructor<
					{
						state: \\"primary\\" | \\"success\\" | \\"warning\\";
					} & Vue
				>;
			}
		}
		"
	`);
	});
});
