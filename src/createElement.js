import { vNode } from './vnode';

export const createElement = (type, config, ...children) => {
	let key = null,
		props = {},
		childrenLength = children.length;
	if (config) {
		key = config.key === undefined ? null : String(config.key);
		for( let propName in config ) {
			if (config.hasOwnProperty(propName) && propName !== 'key') {
				props[propName] = config[propName];
			}
		}
	}
	if (childrenLength === 1) {
		props.children = children[0];
	} else if (childrenLength > 1) {
		props.children = children;
	}
	return new vNode(type, props, key);
};