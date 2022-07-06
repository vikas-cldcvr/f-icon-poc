import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import eleStyle from "./f-complex.scss";

export type FComplexTypeProp = "high" | "low" | "medium";
export type FComplexPriorityProp = "high" | "low" | "medium";
export type FComplexAssignee = {
  firstname?: string;
  lastname?: string;
  username: string;
};

export type FComplexLanguage = "vue" | "angular" | "react";

export type FComplexLanguageProp = FComplexLanguage[];
@customElement("f-complex")
export class FComplex extends LitElement {
  static styles = [unsafeCSS(eleStyle)];

  @property({ reflect: true, type: String })
  type!: FComplexTypeProp;

  @property({ reflect: true, type: String })
  priority?: FComplexPriorityProp = "low";

  @property({ reflect: true, type: Object })
  assignee?: null | FComplexAssignee;

  @property({ reflect: true, type: Array })
  language?: FComplexLanguageProp;

  @property({ reflect: true, type: Boolean })
  active?: boolean = false;

  readonly required = ["type"];

  render() {
    return html`${this.assignee?.username}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "f-complex": FComplex;
  }
}
