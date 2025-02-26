var template = `
<div>
    <% if(name){ %>
        <span>%= name =%</span>
    <% } %>
    %= age =%
<div>`;
let str = rander(template, { name: '小明', age: 18 });
// 解析完成 str <div> <span>小明</span>18<div>
