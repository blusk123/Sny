export const renderSnyNode = (vNode, parent) => {
	console.log(vNode);
	const { type, props } = vNode;
	if (!type) return;
	let domNode = document.createElement(type);
	parent.appendChild(domNode);
};