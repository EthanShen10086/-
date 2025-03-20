const data = {
	name: '小明',
	age: 18,
};
const template = `
<div>
    <% if(name) { %>
        <span> %= name =% </span>
    <% } %>
    %= age %=
</div>
`;
let str = ejs.renderFile(template, data);
