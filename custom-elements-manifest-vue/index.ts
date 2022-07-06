import { Declaration, Package } from "custom-elements-manifest/schema";
import { vaidateOptions } from "./options";
import prettier from "prettier";

const options = vaidateOptions({});

export function transformSchema(schema: Package) {
	const components: string[] = [];

	schema.modules.forEach((module) => {
		module.declarations?.forEach((declaration) => {
			const component = getComponentCodeFromDeclaration(declaration);

			if (component) {
				components.push(component);
			}
		});
	});

	const output = prettier.format(
		`
        /* eslint-disable */
        import { VueConstructor } from "vue";

        declare module "vue" {
            export interface GlobalComponents {
                ${components.join("\n")}
            }
        }
    `,
		{ ...options.prettierConfig, parser: "typescript" }
	);

	//console.log(output);

	return output;
}

function getComponentCodeFromDeclaration(declaration: Declaration) {
	if (!("customElement" in declaration) || !declaration.customElement) {
		return null;
	}

	let componentDeclaration = `
        "${declaration.tagName}": VueConstructor<
            {
				$props: {
    `;

	if (declaration.attributes) {
		declaration.attributes.forEach((attribute) => {
			componentDeclaration = `
                ${componentDeclaration}
                ${attribute.name}: ${attribute.type?.text};
            `;
		});
	}

	componentDeclaration = `${componentDeclaration}
	};
        } & Vue
    >;`;

	return componentDeclaration;
}
