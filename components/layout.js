import { BodyComponent } from 'mjml-core';
import { colours } from '@cuckoointernet/yolk';

export default class Layout extends BodyComponent {
  constructor(initialDatas = {}) {
    super(initialDatas);
    this.cssId = Math.floor(Math.random() * 9) + 1;
  }

  static dependencies = {
    'mj-layout': [
      'mj-accordion',
      'mj-button',
      'mj-carousel',
      'mj-divider',
      'mj-html',
      'mj-image',
      'mj-raw',
      'mj-social',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-navbar',
    ],

    'mj-wrapper': ['mj-layout'],
    'mj-body': ['mj-layout'],
  };

  static allowedAttributes = {
    'background-color': 'color',
    color: 'color',
  };

  static defaultAttributes = {
    'background-color': 'white',
    color: 'black',
  };

  headStyle = (breakpoint) => `
		.mj-layout {
			border: 10px solid ${colours.core.yellow} !important;
		}
		@media only screen and (max-width:${breakpoint}) {
			.mj-layout {
				border-color: blue !important;
			}
		}
	`;

  componentHeadStyle = (breakpoint) => `
		@media only screen and (max-width:${breakpoint}) {
			.mj-layout-${this.cssId} {
				width: ${this.cssId * 60}px !important;
			}
		}
	`;

  render() {
    return this.renderMJML(`
			<mj-section css-class="mj-layout mj-layout-${this.cssId}">
				<mj-column background-color=${this.getAttribute('background-color')}>
					${this.renderChildren(this.props.children, {
            rawXML: true,
            renderer: (component) => component.render,
          })}
				</mj-column>
			</mj-section>
		`);
  }
}
