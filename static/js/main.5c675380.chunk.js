(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",stats:"Profile_stats__25zJx",statsItem:"Profile_statsItem__3NWvo",quantity:"Profile_quantity__1zFQ4"}},,function(e,t,a){e.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",statList:"Statistics_statList__3BR2u",item:"Statistics_item__1vE2T",label:"Statistics_label__227YU",percentage:"Statistics_percentage__3inQt"}},function(e,t,a){e.exports={item:"FriendsListItem_item__t8PO5",online:"FriendsListItem_online__z1CfY",offline:"FriendsListItem_offline__1TwVN",avatar:"FriendsListItem_avatar__3L5KR",name:"FriendsListItem_name__2DDfF"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e,t,a){e.exports={listFriends:"FriendsList_listFriends__3Fwpl"}},function(e,t,a){},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),i=a(7),n=a.n(i),r=a(1),l=a.n(r),d=a(0);function o(e){var t=e.name,a=e.stats,s=e.location,c=e.tag,i=e.avatar;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:i,alt:t,className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:t}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",c]}),Object(d.jsx)("p",{className:l.a.location,children:s})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{className:l.a.statsItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:a.followers})]}),Object(d.jsxs)("li",{className:l.a.statsItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:a.views})]}),Object(d.jsxs)("li",{className:l.a.statsItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:a.likes})]})]})]})}var b=a(3),m=a.n(b);function j(e){var t=e.title,a=e.stats;return Object(d.jsxs)("section",{className:m.a.statistics,children:[t&&Object(d.jsx)("h2",{className:m.a.title,children:t}),Object(d.jsx)("ul",{className:m.a.statList,children:a.map((function(e){return Object(d.jsxs)("li",{className:m.a.item,style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16).substr(-6)},children:[Object(d.jsx)("span",{className:m.a.label,children:e.label}),Object(d.jsxs)("span",{className:m.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})}var u=a(4),p=a.n(u),f=function(e){var t=e.isOnline,a=e.avatar,s=e.name;return Object(d.jsxs)("li",{className:p.a.item,children:[Object(d.jsx)("span",{className:t?p.a.online:p.a.offline}),Object(d.jsx)("img",{className:p.a.avatar,src:a,alt:s,width:"48"}),Object(d.jsx)("p",{className:p.a.name,children:s})]})},O=a(8),h=a.n(O);function v(e){var t=e.friends;return Object(d.jsx)("ul",{className:h.a.listFriends,children:t.map((function(e){var t=e.id,a=e.isOnline,s=e.avatar,c=e.name;return Object(d.jsx)(f,{isOnline:a,avatar:s,name:c},t)}))})}var y=a(9),x=a.n(y);function _(e){var t=e.items;return Object(d.jsxs)("table",{className:x.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})}var w=a(5),g=a(10),N=a(11),F=a(12);function L(){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(o,{name:w.name,tag:w.tag,location:w.location,avatar:w.avatar,stats:w.stats}),Object(d.jsx)(j,{title:"Upload stats",stats:g}),Object(d.jsx)(v,{friends:N}),Object(d.jsx)(_,{items:F})]})}n.a.render(Object(d.jsx)(L,{}),document.querySelector("#root")),n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5c675380.chunk.js.map