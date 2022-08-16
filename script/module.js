const waterfall = document.getElementById('waterfall');
let waterHtml = "";
const waterItem = waterfall.getElementsByClassName('item');
const workModule = document.getElementById('workModule');
const workModuleClose = document.getElementById('workModuleClose');
let workModuleImg = document.getElementById('workModuleImg');
let src = "";
const wordSeemore = document.getElementById('wordSeemore')
const seemoreDiv = document.getElementById('seemoreDiv')
const workContent = document.getElementById('work').getElementsByClassName('content')[0];
let projechOjg = {
  name:[
    '走讀大溪，生活閱美麗海報設計',
    '108年觀音區超級大南瓜競賽活動海報設計',
    '好客上好茶海報設計',
    '當代漆藝交流展海報設計',
    'LINE人生，要已讀，不要癮毒海報設計',
    '牧豆榖工房海報製作(正面)',
    '天羽手作企業社LOGO設計',
    '食食如意商品紙袋封面設計',
    'THE SHIRTS BAR網頁設計',
    '主動式客戶關係管理及業務拓展系統網頁設計',
    '極致健康網頁設計',
    '華麗雅緻入場海報設計'
  ]
}
for(let i=1;i<=12;i++){
  waterHtml += `
   <div class="item">
      <img src="./img/project/${i}.jpg" class="itemImg">
      <p>${projechOjg.name[i-1]}</p>
    </div>
    `;
}
waterfall.innerHTML = waterHtml;


for(let i=0;i<waterItem.length;i++){
  waterItem[i].addEventListener('click',openModule);
}

workModuleClose.addEventListener('click',()=>{
  workModule.style.display = "none";
  workModuleImg.src = "";
})

function openModule(){
  workModule.style.display = "flex";
  
  workModuleImg.src = this.getElementsByClassName('itemImg')[0].src;
  
}

wordSeemore.addEventListener('click',()=>{
  workContent.style.height = "auto";
  seemoreDiv.style.display = "none";
  waterfall.style.mixBlendMode = "normal"
})