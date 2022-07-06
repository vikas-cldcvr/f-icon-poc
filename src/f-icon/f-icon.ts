import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import eleStyle from "./f-icon.scss";

@customElement("f-icon")
export class FIcon extends LitElement {
  static styles = [unsafeCSS(eleStyle)];

  @property()
  state: "primary" | "success" | "warning" | "danger" = "primary";

  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 12C15.5376 12 18 9.53757 18 6.5C18 3.46243 15.5376 1 12.5 1C9.46243 1 7 3.46243 7 6.5C7 9.53757 9.46243 12 12.5 12Z"
          fill="white"
        ></path>
        <path
          d="M12.5 13.5C9.98126 13.5026 7.56643 14.5044 5.78541 16.2854C4.00439 18.0664 3.00265 20.4813 3 23C3 23.1326 3.05268 23.2598 3.14645 23.3536C3.24021 23.4473 3.36739 23.5 3.5 23.5H21.5C21.6326 23.5 21.7598 23.4473 21.8536 23.3536C21.9473 23.2598 22 23.1326 22 23C21.9974 20.4813 20.9956 18.0664 19.2146 16.2854C17.4336 14.5044 15.0187 13.5026 12.5 13.5Z"
          fill="white"
        ></path>
      </svg>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "f-icon": FIcon;
  }
}
