function byTagName(node, tagName) {
    let result = [];
    tagName = tagName.toUpperCase();

    function search(node) {
        if(node.nodeType === node.ELEMENT_NODE) {
            if (node.nodeName === tagName) {
                result.push(node);
            }
            for (let child of node.children) {
                search(child);
            }
        }
    }
    search(node);
    return result;
}

console.log(byTagName(document.body, "h1").length);
console.log(byTagName(document.body, "span").length);
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);